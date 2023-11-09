"use client";

import { MainNav } from "@/components/layout/MainNav";
import { MobileNav } from "@/components/layout/MobileNav";

export const Header = () => (
  <header className="sticky top-0 z-40 w-full border-b bg-background">
    <div className="container flex h-20 py-4">
      <MainNav />
      <MobileNav />
    </div>
  </header>
);
