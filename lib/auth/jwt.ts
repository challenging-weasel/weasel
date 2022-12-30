import { jwtVerify, SignJWT } from "jose";

import { getSessionSecret } from "../config";
import type { IUser } from "../user/type";
import { removeNullDeep } from "../util";

export type JWTPayload = {
  profilePublicId: string;
  userId?: string;
  name?: string;
  desc?: string;
};

export async function sign(
  payload: JWTPayload,
  secret: string
): Promise<string> {
  const iat = Math.floor(Date.now() / 1000);
  // const exp = iat + 60 * 60; // one hour

  return (
    new SignJWT({ ...payload })
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      // .setExpirationTime(exp)
      .setIssuedAt(iat)
      .setNotBefore(iat)
      .sign(new TextEncoder().encode(secret))
  );
}

export async function verify(
  token: string,
  secret: string
): Promise<JWTPayload> {
  const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));

  // run some checks on the returned payload, perhaps you expect some specific values
  // if its all good, return it, or perhaps just return a boolean
  return payload as JWTPayload;
}

export function hasPublicIdRule() {
  return (payload: JWTPayload) => Boolean(payload.profilePublicId);
}

export async function getSessionToken(user: IUser) {
  return sign(
    removeNullDeep({
      profilePublicId: user.publicId,
      desc: user.desc,
      name: user.name,
      // TODO: add user id (next_auth)
    }),
    getSessionSecret()
  );
}
