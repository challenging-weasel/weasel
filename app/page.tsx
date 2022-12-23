import { cookies } from "next/headers";

import { createNewAnonUser, getAnonUser } from "@/lib/user/service";
import { userPublicIdCookieName } from "@/lib/user/type";

import type { IJoke } from "./HomePage";
import HomePage from "./HomePage";

async function getJokes(): Promise<IJoke[]> {
  const res = await fetch("https://official-joke-api.appspot.com/jokes/ten");
  const jokes: IJoke[] = await res.json();
  return jokes;
}

async function getUserAtHome() {
  const userPublicId = cookies().get(userPublicIdCookieName);
  if (!userPublicId) {
    return createNewAnonUser();
  }
  const result = await getAnonUser(userPublicId.value);
  if (!result) {
    return createNewAnonUser();
  }
  return result;
}

export default async function Home() {
  const jokes = await getJokes();
  const user = await getUserAtHome();

  return <HomePage jokes={jokes} user={user} />;
}
