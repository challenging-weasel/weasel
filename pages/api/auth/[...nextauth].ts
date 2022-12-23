import { SupabaseAdapter } from "@next-auth/supabase-adapter";
import NextAuth from "next-auth";

import { getServerSideSupabaseConfig } from "@/lib/config";
// import GitHubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
// import NaverProvider from "next-auth/providers/naver";

// import { GET_HASURA_USER } from "@/utils/next-auth/gql";

// const getTempEmail = (oauth: string, id: string) => {
//   return `no-email+${oauth}+${id}@codenbutter.com`;
// };

// const githubProviderOption = {
//   clientId: process.env.GITHUB_CLIENT_ID || "",
//   clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   profile: (profile: any) => {
//     return {
//       id: String(profile.id),
//       name: profile.name || profile.login,
//       email:
//         profile.email ||
//         getTempEmail("github", (profile.id || uuidv4()) as string),
//       image: profile.avatar_url,
//       employer: profile.company,
//       website: profile.blog,
//       location: profile.location,
//       github_username: profile.login,
//       twitter_username: profile.twitter_username,
//       bio: profile.bio,
//     };
//   },
// };

// const googleProviderOption = {
//   clientId: process.env.GOOGLE_CLIENT_ID || "",
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   profile: (profile: any) => {
//     return {
//       id: String(profile.sub),
//       name: profile.name,
//       email:
//         profile.email ||
//         getTempEmail("google", (profile.id || uuidv4()) as string),
//       image: profile.picture,
//     };
//   },
// };

// const naverProviderOption = {
//   clientId: process.env.NAVER_CLIENT_ID || "",
//   clientSecret: process.env.NAVER_CLIENT_SECRET || "",
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   profile: (profile: any) => {
//     return {
//       id: String(profile.response.id),
//       name: profile.response.name,
//       email:
//         profile.response.email ||
//         getTempEmail("naver", (profile.response.id || uuidv4()) as string),
//       image: profile.response.profile_image,
//     };
//   },
// };

const supabaseConfig = getServerSideSupabaseConfig();

const handler = NextAuth({
  // pages: {
  //   signIn: "/login",
  //   // verifyRequest: "/login?verify=1",
  //   error: "/login",
  // },
  providers: [
    // CredentialsProvider({
    //   type: "credentials",
    //   name: "anon",
    //   id: "anon",
    //   credentials: {
    //     public_id: {
    //       label: "public_id",
    //       type: "text",
    //     },
    //   },
    //   async authorize(credentials, req) {
    //     if (credentials) {
    //       const userRes = await getServerSideSupabaseClient()
    //         .from("profiles")
    //         .select("*")
    //         .eq("public_id", credentials.public_id)
    //         .single();
    //       if (userRes.data && userRes.data.)
    //       return {
    //         id: credentials.token,
    //       };
    //     }
    //     // no need to check anything here, just create a new CT anonymous session and return the token
    //     const authResult = await createAnonymousSession();
    //     /**
    //      * https://docs.commercetools.com/tutorials/anonymous-session#creating-a-token-with-a-new-anonymous-session
    //      * {
    //          "access_token": "vkFuQ6oTwj8_Ye4eiRSsqMeqLYNeQRJi",
    //          "token_type": "Bearer",
    //          "expires_in": 172800,
    //          "refresh_token": "{projectKey}:OWStLG0eaeVs7Yx3-mHcn8iAZohBohCiJSDdK1UCJ9U",
    //          "scope": "view_products:{projectKey} manage_my_orders:{projectKey} manage_my_profile:{projectKey}"
    //        }
    //      */
    //     return {
    //       id: credentials?.token,
    //     };
    //   },
    // }),
    // GitHubProvider(githubProviderOption),
    // GoogleProvider(googleProviderOption),
    // NaverProvider(naverProviderOption),
  ],
  adapter: SupabaseAdapter({
    url: supabaseConfig.url,
    secret: supabaseConfig.serviceRoleKey,
  }),
  // secret: process.env.NEXT_AUTH_SECRET,
  // session: {
  //   strategy: "jwt",

  //   // Seconds - How long until an idle session expires and is no longer valid.
  //   maxAge: 30 * 24 * 60 * 60, // 30 days

  //   // Seconds - Throttle how frequently to write to database to extend a session.
  //   // Use it to limit write operations. Set to 0 to always update the database.
  //   // Note: This option is ignored if using JSON Web Tokens
  //   updateAge: 24 * 60 * 60, // 24 hours
  // },
  // cookies: {
  //   sessionToken: {
  //     name: "next-auth.session-token",
  //     options: {
  //       httpOnly: true,
  //       sameSite: "lax",
  //       path: "/",
  //       domain: process.env.NEXT_AUTH_COOKIE_DOMAIN || "",
  //       secure: process.env.NODE_ENV === "production",
  //     },
  //   },
  // },
  // jwt: {
  //   secret: process.env.SESSION_JWT_SECRET,
  //   encode: async (params?: JWTEncodeParams) => {
  //     if (!params) {
  //       return "";
  //     }

  //     const { secret, token } = params;
  //     return jwt.sign(token as object, secret, {
  //       algorithm: "HS256",
  //     });
  //   },
  //   decode: async (params?: JWTDecodeParams) => {
  //     if (!params) {
  //       return {};
  //     }

  //     const { secret, token } = params;
  //     const decodedToken = jwt.verify(token as string, secret, {
  //       algorithms: ["HS256"],
  //     });
  //     return decodedToken as JWT;
  //   },
  //   // Set to true to use encryption (default: false)
  //   // encryption: true,
  // },
  // callbacks: {
  //   // async signIn({ user, account, profile, email, credentials }) { return true },
  //   // async redirect({ url, baseUrl }) {
  //   //   console.log(url, baseUrl);
  //   //   return baseUrl;
  //   // },
  //   async session({ session, token }) {
  //     const ret = await getApolloClient().query({
  //       query: GET_HASURA_USER,
  //       variables: {
  //         where: {
  //           _or: [{ id: { _eq: token.id } }, { email: { _eq: token.id } }],
  //         },
  //       },
  //     });

  //     if (ret && ret.data && ret.data.users && ret.data.users.length > 0) {
  //       const user = ret.data.users[0];

  //       // 마케팅 수신여부는 session에 넣지 않음
  //       // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //       const userInfo: any = {
  //         id: user.id,
  //         expires: session.expires,
  //         user: {
  //           agreedPrivacy: user.agreedPrivacy,
  //           agreedTerms: user.agreedTerms,
  //           name: user.name,
  //           email: user.email,
  //           image: user.image,
  //         },
  //       };
  //       return Promise.resolve(userInfo);
  //     }
  //   },
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.id = user.id;
  //     }
  //     return Promise.resolve(token);
  //   },
  // },
  debug: process.env.NODE_ENV !== "production",
});

export const config = {
  api: {
    externalResolver: true,
  },
};

export default handler;
