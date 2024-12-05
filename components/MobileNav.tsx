"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <>
      <section className="w-full max-w-[264px] sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Image src="/icons/hamburger.svg" width={36} height={36} />
          </SheetTrigger>
          <SheetContent side={"left"} className="border-none bg-gray-700">
            <Link href={"/"} className="flex items-center gap-1">
              <Image
                src={"/icons/logo.svg"}
                width={32}
                height={32}
                alt="MeetUp Logo"
                className="max-sm:size-10 "
              />
              <p className="text-[26px] font-extrabold text-white">MeetUp</p>
            </Link>
            <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
              <SheetClose asChild>
                <section className="flex h-full flex-col gap-6 pt-16 text-white">
                  {sidebarLinks.map((link) => {
                    const isActive = pathname === link.route;

                    return (
                      <SheetClose asChild key={link.route}>
                        <Link
                          href={link.route}
                          key={link.label}
                          className={cn(
                            "flex gap-4 items-center p-4 rounded-lg justify-start max-w-60",
                            { "bg-blue-500": isActive }
                          )}
                        >
                          {/* Always render an <Image>, no conditional logic for hydration */}
                          <Image
                            src={link.imgURL}
                            alt={link.label}
                            width={24}
                            height={24}
                          />
                          <p className="font-semibold">{link.label}</p>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </section>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </section>
    </>
  );
};

export default MobileNav;
