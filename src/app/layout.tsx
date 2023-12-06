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
  openGraph: {
    images: [
      {
        url: "https://cdn.discordapp.com/attachments/1058831007953981520/1181932987667992616/logo.png?ex=6582dbdf&is=657066df&hm=f6567e537933b9088f09a3b90e44345bed396ab48c60b8de9fc3ca08d0b20785&",
      },
    ],
    type: "website",
    title: "Acme Corp",
    description: "Customer Relationship Management App",
    url: "https://crm-error-boundary.vercel.app/",
  },
  metadataBase: new URL("https://crm-error-boundary.vercel.app/"),
  twitter: {
    card: "summary_large_image",
    title: "Acme Corp",
    description: "Customer Relationship Management App",
    images:
      "https://cdn.discordapp.com/attachments/1058831007953981520/1181932987667992616/logo.png?ex=6582dbdf&is=657066df&hm=f6567e537933b9088f09a3b90e44345bed396ab48c60b8de9fc3ca08d0b20785&",
  },
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
