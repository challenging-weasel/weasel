import { cookies } from "next/headers";

import UseUserState from "@/components/CookieSetter";
import { getUserOrCreateNewUser } from "@/lib/user/service";

import AntdConfigProvider from "./AntdConfigProvider";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { sessionToken, user } = await getUserOrCreateNewUser(cookies());

  return (
    <html lang="ko" className="bg-gray-50">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <AntdConfigProvider>
          <UseUserState
            sessionTokenFromServer={sessionToken}
            userFromServer={user}
          />
          <div className="flex flex-col items-center">
            {/* <Navbar /> */}
            <main className="max-w-lg min-h-screen bg-white ">{children}</main>
          </div>
        </AntdConfigProvider>
      </body>
    </html>
  );
}
