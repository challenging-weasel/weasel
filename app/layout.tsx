import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div className="flex flex-col items-center min-h-screen p-8 space-y-10">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
