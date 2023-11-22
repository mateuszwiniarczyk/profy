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
        <div className="flex gap-2">
          <Link
            href="/offers/new"
            className={buttonVariants({
              variant: "outline",
            })}
          >
            Post offer
          </Link>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  background: "transparent",
                },
              },
            }}
          />
        </div>
      </SignedIn>
      <SignedOut>
        <div className="flex gap-2">
          <Link
            href="/sign-up"
            className={buttonVariants({
              variant: "outline",
            })}
          >
            Sign Up
          </Link>
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        </div>
      </SignedOut>
    </div>
  </header>
);
