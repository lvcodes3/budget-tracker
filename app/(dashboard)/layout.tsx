import Navbar from "@/components/Navbar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen relative flex flex-col">
      <Navbar />
      <div className="w-full">{children}</div>
    </div>
  );
};
