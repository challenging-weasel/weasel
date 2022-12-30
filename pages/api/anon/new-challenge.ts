// TODO: 현재 쓰이지 않으므로 삭제

import { nanoid } from "nanoid";
import type { NextRequest } from "next/server";

import { createChallengeConfig } from "@/lib/challenge/create";
import type { IChallengeInput } from "@/lib/challenge/type";
import { getServerSideSupabaseClient } from "@/lib/supabase/server-side-client";
import { checkAndGetUserFromCookie } from "@/lib/user/service";
import { getJsonFromBody } from "@/lib/util";

export default async function handler(req: NextRequest) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
    });
  }

  const user = await checkAndGetUserFromCookie(req.cookies);

  const { desc, title, config } = await getJsonFromBody<IChallengeInput>(req);

  if (!title) {
    return new Response(JSON.stringify({ error: "No title" }), {
      status: 400,
    });
  }

  const challengeRes = await getServerSideSupabaseClient()
    .from("challenges")
    .insert({
      manager_id: user.id,
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

  return new Response(
    JSON.stringify({
      challenge: challengeRes.data,
    })
  );
}

export const config = {
  runtime: "edge",
};
