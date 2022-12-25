import AntdConfigProvider from "./AntdConfigProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="bg-gray-50">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <AntdConfigProvider>
          <div className="flex flex-col items-center">
            {/* <Navbar /> */}
            <main className="max-w-lg min-h-screen bg-white ">{children}</main>
          </div>
        </AntdConfigProvider>
      </body>
    </html>
  );
}
