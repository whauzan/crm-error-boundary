import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar/Navbar";
import { cn } from "@/lib/utils";
import MobileNav from "@/components/Navbar/MobileNav";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acme Corp",
  description: "Customer Relationship Management App",
  openGraph: {
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
      <Head>
        <title>Acme Corp</title>
        <meta
          name="description"
          content="Customer Relationship Management App"
        />

        {/* Facebook Meta Tags */}
        <meta
          property="og:url"
          content="https://crm-error-boundary.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Acme Corp" />
        <meta
          property="og:description"
          content="Customer Relationship Management App"
        />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/1058831007953981520/1181932987667992616/logo.png?ex=6582dbdf&is=657066df&hm=f6567e537933b9088f09a3b90e44345bed396ab48c60b8de9fc3ca08d0b20785&"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="crm-error-boundary.vercel.app"
        />
        <meta
          property="twitter:url"
          content="https://crm-error-boundary.vercel.app/"
        />
        <meta name="twitter:title" content="Acme Corp" />
        <meta
          name="twitter:description"
          content="Customer Relationship Management App"
        />
        <meta
          name="twitter:image"
          content="https://cdn.discordapp.com/attachments/1058831007953981520/1181932987667992616/logo.png?ex=6582dbdf&is=657066df&hm=f6567e537933b9088f09a3b90e44345bed396ab48c60b8de9fc3ca08d0b20785&"
        />
      </Head>
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
