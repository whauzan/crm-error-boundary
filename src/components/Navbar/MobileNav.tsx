import { Bell, Menu, Settings } from "lucide-react";
import Image from "next/image";
import React from "react";
import UserNav from "./UserNav";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/Sheet";
import { NavigationLinks } from "@/constant";
import Link from "next/link";
import { Input } from "../ui/Input";

const MobileNav = () => {
  return (
    <nav className="fixed left-0 top-0 z-10 flex h-[72px] w-full items-center justify-between border-b border-[#EAECF0] bg-white px-8 md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Menu />
        </SheetTrigger>
        <SheetContent side={"left"} className="text-[#344054]">
          <SheetHeader className="mb-3 -translate-x-1">
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                alt="Logo"
                width={100}
                height={100}
                className="h-8 w-36"
              />
            </Link>
          </SheetHeader>
          /Users/whauzan/Downloads/logo-small.ico
          <Input
            placeholder="Search"
            className="mb-2 h-11 w-full rounded-lg md:w-[150px] lg:w-[250px]"
          />
          <div className="flex flex-col">
            {NavigationLinks.map((navigation) => (
              <Link
                href={navigation.route}
                key={navigation.route}
                className="flex items-center"
              >
                {navigation.icon}
                <span className="rounded-md px-3 py-2 text-base font-semibold hover:bg-gray-100/70">
                  {navigation.label}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-2 h-px bg-[#EAECF0]" />
          <div className="mt-2">
            <div className="flex items-center">
              <Settings />
              <span className="rounded-md px-3 py-2 text-base font-semibold hover:bg-gray-100/70">
                Settings
              </span>
            </div>
            <div className="flex items-center">
              <Bell />
              <span className="rounded-md px-3 py-2 text-base font-semibold hover:bg-gray-100/70">
                Notification
              </span>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt="Logo"
          width={100}
          height={100}
          className="h-8 w-36"
        />
      </Link>
      <UserNav />
    </nav>
  );
};

export default MobileNav;
