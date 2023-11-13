import { Separator } from "@/components/ui/Separator";

import GoogleIcon from "~/icons/google.svg";

const recommendedForYou: {
  id: number;
  name: string;
  company: string;
  location: string;
  hourlyRate: string;
}[] = [
  {
    id: 1,
    name: "Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    hourlyRate: "$100",
  },
  {
    id: 2,
    name: "Product Manager",
    company: "Facebook",
    location: "Menlo Park, CA",
    hourlyRate: "$90",
  },
  {
    id: 3,
    name: "Virtual Scheduler",
    company: "Carenet Health",
    location: "Remote",
    hourlyRate: "$80",
  },
];

export const Recommended = () => (
  <div className="my-16">
    <h2 className="text-center text-muted-foreground">Recommended for you</h2>
    <div className="mx-auto mt-8 flex max-w-md flex-col justify-center">
      {recommendedForYou.map(({ company, hourlyRate, location, name, id }, index) => (
        <div key={id}>
          <div className="flex w-full gap-x-5">
            <GoogleIcon className="h-11 w-11" />
            <div className="flex flex-col justify-center gap-2.5">
              <h3 className="text-sm font-bold leading-none">{name}</h3>
              <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                <span>{location}</span>
                <span>{company}</span>
              </div>
            </div>
            <span className="ml-auto text-sm">{hourlyRate} hourly</span>
          </div>
          {index === recommendedForYou.length - 1 ? null : <Separator className="my-5" />}
        </div>
      ))}
    </div>
  </div>
);
