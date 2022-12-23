"use client";

import { atom, useAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { useEffect } from "react";

import { userPublicIdAtom } from "@/lib/user/data";
import type { IUser } from "@/lib/user/type";

export interface IJoke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

const userAtom = atom<IUser>({
  publicId: "",
  name: "string",
  desc: "string",
  createdAt: "string",
});

export default function HomePage({
  jokes,
  user: userFromServer,
}: {
  jokes: IJoke[];
  user: IUser;
}) {
  useHydrateAtoms([[userAtom, userFromServer] as const]);
  const [userPublicId, setUserPublicId] = useAtom(userPublicIdAtom);
  const [user] = useAtom(userAtom);

  useEffect(() => {
    if (userPublicId !== user.publicId) {
      setUserPublicId(user.publicId);
    }
  }, [setUserPublicId, user.publicId, userPublicId]);

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold">Jokes: ${JSON.stringify(user)}</h1>

      <ul>
        {jokes.map((joke) => (
          <li className="mt-5 ml-5" key={joke.id}>
            <span className="text-xl">{joke.setup}</span>
            <br />
            {joke.punchline}
          </li>
        ))}
      </ul>
    </div>
  );
}
