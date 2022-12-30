"use client";

import { useAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { useEffect } from "react";

import { userAtom, userSessionTokenAtom } from "@/lib/user/data";
import type { IUser } from "@/lib/user/type";

export default function UseUserState({
  userFromServer,
  sessionTokenFromServer,
}: {
  userFromServer: IUser;
  sessionTokenFromServer: string;
}) {
  useHydrateAtoms([[userAtom, userFromServer] as const]);
  const [sessionToken, setSessionToken] = useAtom(userSessionTokenAtom);

  useEffect(() => {
    if (sessionToken !== sessionTokenFromServer) {
      setSessionToken(sessionTokenFromServer);
    }
  }, [sessionToken, sessionTokenFromServer, setSessionToken]);

  return null;
}
