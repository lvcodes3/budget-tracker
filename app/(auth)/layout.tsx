import Logo from "@/components/Logo";

const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen relative flex flex-col items-center justify-center">
      <Logo />
      <div className="mt-12">{children}</div>
    </div>
  );
};

export default ClerkLayout;
