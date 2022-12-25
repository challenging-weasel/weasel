import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <main className="max-w-lg min-h-screen bg-white ">{children}</main>
    </div>
  );
}
