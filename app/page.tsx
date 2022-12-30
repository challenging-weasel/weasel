import mdi from "@iconify/json/json/mdi.json";
import { cookies } from "next/headers";
import { Suspense } from "react";

import { getChallengesByManager } from "@/lib/challenge/service";
import type { IChallenge } from "@/lib/challenge/type";
import { getUserOrCreateNewUser } from "@/lib/user/service";
import type { IUser } from "@/lib/user/type";

import HomePage from "./HomePage";
import ServerTest from "./ServerTest";

async function fetchData(): Promise<{
  user: IUser;
  managingChallenges: IChallenge[];
}> {
  const { user } = await getUserOrCreateNewUser(cookies());
  const managingChallenges = await getChallengesByManager(user.id);

  return {
    managingChallenges,
    user,
  };
}

async function page() {
  const { managingChallenges, user } = await fetchData();
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <ServerTest />
      </Suspense>

      <span className="text-4xl">
        <svg
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: mdi.icons["access-point"].body }}
          viewBox={`0 0 ${mdi.width} ${mdi.height}`}
          // width="1em"
          height="1em"
          className="inline-flex"
        />
      </span>

      <HomePage
        user={user}
        managingChallenges={managingChallenges}
        participations={[]}
      />
    </>
  );
}

export default page;
