import Link from "next/link";
import { Logo } from "@/components/layout/Logo";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu";
import { navLinks } from "@/constants/nav";

export const MainNav = () => (
  <div className="hidden items-center justify-start gap-20 lg:flex">
    <Logo />
    <NavigationMenu>
      <NavigationMenuList>
        {navLinks.map(({ href, label }) => (
          <NavigationMenuItem key={label}>
            <Link href={href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  </div>
);
