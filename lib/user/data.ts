import { atomWithCookie } from "../client-util";

import { userPublicIdCookieName } from "./type";

export const userPublicIdAtom = atomWithCookie(userPublicIdCookieName, "");
