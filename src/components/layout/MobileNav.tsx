import { useState } from "react";
import { ViewVerticalIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import { Logo } from "@/components/layout/Logo";
import { navLinks } from "@/constants/nav";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <ViewVerticalIcon className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 pr-0">
        <div className="px-7">
          <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <Logo className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </div>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col gap-y-5 pl-1 pr-7">
            {navLinks.map(({ href, label }) => (
              <MobileLink key={label} href={href} setIsOpen={setIsOpen}>
                {label}
              </MobileLink>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

type MobileLinkProps = {
  href: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

const MobileLink = ({ children, href, setIsOpen }: MobileLinkProps) => (
  <Link href={href} className="text-sm capitalize text-foreground" onClick={() => setIsOpen(false)}>
    {children}
  </Link>
);
