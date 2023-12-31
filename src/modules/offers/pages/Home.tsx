import { Recommended } from "@/modules/offers/components/Recommended";
import { SearchBar } from "@/modules/offers/components/SearchBar";
import { SuggestedJobs } from "@/modules/offers/components/SuggestedJobs";

export const Home = () => (
  <>
    <div className="my-10 flex flex-col items-center gap-2.5 py-5 text-center">
      <h1 className="text-2xl font-bold md:text-4xl">Search for your next job</h1>
      <p className="max-w-md text-sm text-muted-foreground md:text-base">
        When you&apos;re searching for a job, there are a few things you can do to get the most out
        of your search
      </p>
    </div>
    <SearchBar className="mx-auto mt-12 max-w-4xl" />
    <SuggestedJobs />
    <Recommended />
  </>
);
