import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import GoogleIcon from "~/icons/google.svg";

export const OfferCard = () => (
  <Link href="/offers/1">
    <Card className="transition-colors hover:bg-muted">
      <CardContent className="flex flex-col items-start gap-y-2 px-6 py-5 lg:flex-row lg:gap-x-4">
        <GoogleIcon className="h-12 w-12 flex-none" />
        <div className="flex flex-col gap-y-1 text-sm text-muted-foreground">
          <div className="flex items-center justify-between text-base">
            <h5 className="font-bold leading-tight text-foreground">Virtual Scheduler</h5>
            <span className="hidden lg:block lg:text-foreground">40 000$ - 100 000$</span>
          </div>
          <div className="flex gap-x-2.5">
            <span>New York</span>
            <span>Google</span>
          </div>
          <p>
            Lines for Life also offers a great benefits package valued at over $9,500 that includes
            full coverage for employee health, dental, vision, short
          </p>
        </div>
      </CardContent>
    </Card>
  </Link>
);
