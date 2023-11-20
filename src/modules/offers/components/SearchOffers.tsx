"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Command, CommandInput } from "@/components/ui/Command";
import { useDebounce } from "@/hooks/useDebounce";
import { useCreateSearchParams } from "@/modules/offers/hooks/useCreateSearchParams";

export const SearchOffers = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParam = searchParams?.get("query") ?? "";
  const [search, setSearch] = useState(searchParam);
  const debouncedSearch = useDebounce(search, 500);
  const { createQueryString } = useCreateSearchParams();

  useEffect(() => {
    const newQueryString = createQueryString({
      query: debouncedSearch ? debouncedSearch : null,
    });

    router.push(`${pathname}?${newQueryString}`);
  }, [createQueryString, pathname, router, debouncedSearch]);

  return (
    <Command className="mt-10 w-full rounded-lg drop-shadow">
      <CommandInput
        placeholder="Search offers"
        className="h-16 font-semibold text-muted-foreground"
        value={search}
        onValueChange={setSearch}
      />
    </Command>
  );
};
