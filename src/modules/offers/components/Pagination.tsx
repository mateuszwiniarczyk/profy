"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { useCreateSearchParams } from "@/modules/offers/hooks/useCreateSearchParams";

type PaginationProps = {
  pagesCount?: number;
};

export const Pagination = ({ pagesCount = 10 }: PaginationProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams?.get("page") || "1";
  const { createQueryString } = useCreateSearchParams();

  const handleNextPage = () => {
    const newQueryString = createQueryString({
      page: Number(page) + 1,
    });

    router.push(`?${newQueryString}`);
  };

  const handlePreviousPage = () => {
    const newQueryString = createQueryString({
      page: Number(page) - 1,
    });

    router.push(`?${newQueryString}`);
  };

  return (
    <div className="mt-5 flex items-center gap-2.5">
      <Button variant="outline" onClick={handlePreviousPage} disabled={Number(page) === 1}>
        <ChevronLeftIcon />
      </Button>
      <Button variant="outline">{page}</Button>
      <Button variant="outline" onClick={handleNextPage} disabled={Number(page) === pagesCount}>
        <ChevronRightIcon />
      </Button>
    </div>
  );
};
