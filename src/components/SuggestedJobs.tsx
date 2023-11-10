import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

const suggestedJobSearches = [
  "Project manager",
  "Software engineer",
  "Product manager",
  "Data analyst",
  "Data scientist",
  "Graphic designer",
  "Sales manager",
  "QA Engineer",
];

export const SuggestedJobs = () => (
  <div className="mt-16">
    <h2 className="text-center text-muted-foreground">Suggested job searches</h2>
    <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2">
      {suggestedJobSearches.map((search) => (
        <Link href="/jobs" key={search}>
          <Badge
            variant="secondary"
            className="px-3 py-2.5 font-bold text-muted-foreground hover:bg-blue-200 hover:text-blue-600"
          >
            {search}
          </Badge>
        </Link>
      ))}
    </div>
  </div>
);
