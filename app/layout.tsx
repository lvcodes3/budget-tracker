import "./globals.css";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Budget Tracker",
  description: "Created with Next.js 14",
};

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { ClerkProvider } from "@clerk/nextjs";

import RootProviders from "@/components/providers/RootProviders";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
        <body className={inter.className}>
          <RootProviders>{children}</RootProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
