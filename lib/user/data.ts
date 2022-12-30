import { atom } from "jotai";

import { atomWithCookie } from "../client-util";
import { sessionCookieName } from "../const";

import type { IUser } from "./type";

export const userSessionTokenAtom = atomWithCookie(sessionCookieName, "");

export const userAtom = atom<IUser>({
  id: -1,
  publicId: "",
  name: "",
  desc: "",
  createdAt: "",
});
