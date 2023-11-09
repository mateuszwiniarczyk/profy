import Link from "next/link";
import { cn } from "@/lib/utils";

import LogoIcon from "~/icons/logo.svg";

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => (
  <Link href="/">
    <LogoIcon className={cn("h-11 w-11 fill-foreground", className)} />
  </Link>
);
