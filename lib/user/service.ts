import { nanoid } from "nanoid";

import { getServerSideSupabaseClient } from "../supabase/server-side-client";
import { removeNullDeep } from "../util";

import type { IUser } from "./type";

export async function createNewAnonUser(): Promise<IUser> {
  const db = getServerSideSupabaseClient();
  const newUserRes = await db
    .from("profiles")
    .insert({
      public_id: nanoid(),
    })
    .select("*")
    .single();

  if (newUserRes.error) {
    throw new Error(newUserRes.error.message);
  }

  return removeNullDeep({
    createdAt: newUserRes.data.created_at,
    publicId: newUserRes.data.public_id,
    desc: newUserRes.data.desc,
    name: newUserRes.data.name,
  });
}

export async function getAnonUser(publicId: string): Promise<IUser | null> {
  const db = getServerSideSupabaseClient();
  const userRes = await db
    .from("profiles")
    .select("*")
    .eq("public_id", publicId)
    .single();

  if (!userRes.data) {
    return null;
  }

  return removeNullDeep({
    createdAt: userRes.data.created_at,
    publicId: userRes.data.public_id,
    desc: userRes.data.desc,
    name: userRes.data.name,
  });
}
