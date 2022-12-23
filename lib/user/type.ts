export interface IUser {
  publicId: string;
  name?: string;
  desc?: string;
  createdAt: string;
}

export const userPublicIdCookieName = "weasel_anon_user_public_id";
