// TODO: 현재 쓰이지 않으므로 삭제

import { nanoid } from "nanoid";
import type { NextRequest } from "next/server";
import type { PartialDeep } from "type-fest";

import { createChallengeConfig } from "@/lib/challenge/create";
import type { ChallengeConfig } from "@/lib/challenge/type";
import { getServerSideSupabaseClient } from "@/lib/supabase/server-side-client";
import { userPublicIdCookieName } from "@/lib/user/type";
import { getJsonFromBody } from "@/lib/util";

export interface IChallengeInput {
  title?: string;
  desc?: string;
  config?: PartialDeep<ChallengeConfig>;
}

export default async function handler(req: NextRequest) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
    });
  }

  const cookie = req.cookies.get(userPublicIdCookieName);
  if (!cookie) {
    return new Response(
      JSON.stringify({ error: `No ${userPublicIdCookieName} cookie` }),
      {
        status: 400,
      }
    );
  }

  const { desc, title, config } = await getJsonFromBody<IChallengeInput>(req);

  if (!title) {
    return new Response(JSON.stringify({ error: "No title" }), {
      status: 400,
    });
  }

  const db = getServerSideSupabaseClient();

  const profileRes = await db
    .from("profiles")
    .select("id")
    .eq("public_id", cookie.value)
    .single();

  if (!profileRes.data?.id) {
    return new Response(
      JSON.stringify({ error: `No profile for public id ${cookie.value}` }),
      {
        status: 400,
      }
    );
  }

  const challengeRes = await getServerSideSupabaseClient()
    .from("challenges")
    .insert({
      manager_id: profileRes.data.id,
      public_id: nanoid(),
      title,
      desc,
      config: createChallengeConfig(config),
    })
    .select("*")
    .single();

  if (!challengeRes) {
    return new Response(
      JSON.stringify({ error: "Failed to create challenge" }),
      {
        status: 500,
      }
    );
  }

  return {
    challenge: challengeRes.data,
  };
}

export const config = {
  runtime: "edge",
};
