import { nanoid } from "nanoid";
import type { NextRequest } from "next/server";

import { getServerSideSupabaseClient } from "@/lib/supabase/server-side-client";

export default async function handler(req: NextRequest) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
    });
  }

  const userRes = await getServerSideSupabaseClient()
    .from("profiles")
    .insert({
      public_id: nanoid(),
    })
    .select("*")
    .single();

  if (userRes.error) {
    return new Response(JSON.stringify({ error: userRes.error.message }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ publicId: userRes.data.public_id }), {
    status: 200,
  });
}

export const config = {
  runtime: "edge",
};
