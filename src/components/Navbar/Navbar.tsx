"use client";

import { NavigationLinks } from "@/constant";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import UserNav from "./UserNav";

const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="fixed left-0 top-0 z-10 flex h-[72px] w-full items-center justify-between border-b border-[#EAECF0] bg-white px-28">
      <div className="flex items-center gap-x-4">
        <Image
          src={"/logo.png"}
          alt="Logo"
          width={100}
          height={100}
          className="h-8 w-36"
        />
        <div className="flex gap-x-1">
          {NavigationLinks.map((navigation) => (
            <Link href={navigation.route} key={navigation.route}>
              <span
                className={cn(
                  "rounded-md px-3 py-2 hover:bg-gray-100/70 font-semibold text-base",
                  navigation.route === path && "bg-gray-100/50",
                )}
              >
                {navigation.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-1">
          <Image
            src={"/search.svg"}
            alt="Search Icon"
            width={100}
            height={100}
            className="m-[10px] w-5"
          />
          <Image
            src={"/settings.svg"}
            alt="Setting Icon"
            width={100}
            height={100}
            className="m-[10px] w-5"
          />
          <Image
            src={"/bell.svg"}
            alt="Notification Icon"
            width={100}
            height={100}
            className="m-[10px] w-5"
          />
        </div>
        <UserNav />
      </div>
    </nav>
  );
};

export default Navbar;
