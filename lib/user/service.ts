import LRUCache from "lru-cache";
import { nanoid } from "nanoid";
import type { cookies as nextCookies } from "next/headers";

import type { JWTPayload } from "../auth/jwt";
import { getSessionToken, verify } from "../auth/jwt";
import { getSessionSecret } from "../config";
import { sessionCookieName } from "../const";
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
    id: newUserRes.data.id,
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
    id: userRes.data.id,
    createdAt: userRes.data.created_at,
    publicId: userRes.data.public_id,
    desc: userRes.data.desc,
    name: userRes.data.name,
  });
}

const userPayloadCache = new LRUCache<string, JWTPayload>({ max: 500 });

export async function checkAndGetUserFromCookie(
  cookies: ReturnType<typeof nextCookies>,
  rule?: (payload: JWTPayload) => boolean
): Promise<IUser> {
  const token = cookies.get(sessionCookieName);
  if (!token) {
    throw new Error("No token found");
  }

  let payload = userPayloadCache.get(token.value);
  if (!payload) {
    payload = await verify(token.value, getSessionSecret());
    userPayloadCache.set(token.value, payload);
  }

  const db = getServerSideSupabaseClient();

  const userRes = await db
    .from("profiles")
    .select("*")
    .eq("public_id", payload.profilePublicId)
    .single();
  if (userRes.error) {
    throw new Error(`no user ${payload.profilePublicId} found`);
  }

  if (rule && !rule(payload)) {
    throw new Error("Not authorized");
  }

  return removeNullDeep({
    id: userRes.data.id,
    createdAt: userRes.data.created_at,
    desc: userRes.data.desc,
    publicId: userRes.data.public_id,
    name: userRes.data.name,
  });
}

export async function getUserOrCreateNewUser(
  cookies: ReturnType<typeof nextCookies>
): Promise<{
  user: IUser;
  sessionToken: string;
}> {
  try {
    const user = await checkAndGetUserFromCookie(cookies);
    return {
      user,
      sessionToken: await getSessionToken(user),
    };
  } catch (e) {
    const newUser = await createNewAnonUser();
    return {
      user: newUser,
      sessionToken: await getSessionToken(newUser),
    };
  }
}
