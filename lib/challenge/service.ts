import { getServerSideSupabaseClient } from "../supabase/server-side-client";
import { removeNullDeep } from "../util";

import type { ChallengeConfig, IChallenge } from "./type";

export async function getChallengesByManager(
  managerId: number
): Promise<IChallenge[]> {
  const db = getServerSideSupabaseClient();

  const challengeRes = await db
    .from("challenges")
    .select("*")
    .eq("manager_id", managerId);

  if (challengeRes.error) {
    throw new Error(challengeRes.error.message);
  }

  return challengeRes.data
    .map((challenge) => removeNullDeep(challenge))
    .map((challenge) => {
      return {
        config: challenge.config as ChallengeConfig, // TODO: remove as
        createdAt: challenge.created_at,
        id: challenge.id,
        managerId: challenge.manager_id,
        publicId: challenge.public_id,
        updatedAt: challenge.updated_at,
        deletedAt: challenge.deleted_at,
        desc: challenge.desc,
        title: challenge.title,
      };
    });
}

export async function getChallengesByManagerPublicId(
  managerPublicId: string
): Promise<IChallenge[]> {
  const db = getServerSideSupabaseClient();
  const managerRes = await db
    .from("profiles")
    .select("*")
    .eq("public_id", managerPublicId)
    .single();

  if (managerRes.error) {
    throw new Error(managerRes.error.message);
  }

  return getChallengesByManager(managerRes.data.id);
}
