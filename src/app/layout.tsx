import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar/Navbar";
import { cn } from "@/lib/utils";
import MobileNav from "@/components/Navbar/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acme Corp",
  description: "Customer Relationship Management App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "relative")}>
        <Providers>
          <Navbar />
          <MobileNav />
          <div className="mt-[72px]">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
