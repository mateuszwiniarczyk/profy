"use client";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { MainNav } from "@/components/layout/MainNav";
import { MobileNav } from "@/components/layout/MobileNav";
import { buttonVariants } from "@/components/ui/Button";

export const Header = () => (
  <header className="sticky top-0 z-40 w-full border-b bg-background">
    <div className="container flex h-20 items-center justify-between py-4">
      <MainNav />
      <MobileNav />
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <Link
          href="/sign-in"
          className={buttonVariants({
            size: "sm",
          })}
        >
          Sign In
        </Link>
      </SignedOut>
    </div>
  </header>
);
