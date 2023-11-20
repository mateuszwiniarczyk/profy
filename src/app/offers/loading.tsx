import { Skeleton } from "@/components/ui/Skeleton";

export default function OffersPageLoading() {
  return (
    <div>
      <Skeleton className="mt-10 h-16 w-full" />
      <div className="mt-10 grid grid-cols-12 lg:mt-10 lg:gap-x-10">
        <div className="col-span-12 flex flex-col gap-y-5 lg:col-span-8">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton className="h-32 w-full" key={index} />
          ))}
        </div>
        <div className="col-span-12 mt-5 flex flex-col gap-y-5 lg:col-span-4 lg:mt-0">
          <Skeleton className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}
