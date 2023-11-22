import Link from "next/link";
import { type Account, type Company, type JobOffer } from "@prisma/client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";

type OfferCardProps = {
  offer: JobOffer & {
    company:
      | (Company & {
          account: Account;
        })
      | null;
  };
};

export const OfferCard = ({
  offer: { id, title, location, description, minSalary, maxSalary, company },
}: OfferCardProps) => (
  <Link href={`/offers/${id}`}>
    <Card className="transition-colors hover:bg-muted">
      <CardContent className="flex flex-col items-start gap-y-2 px-6 py-5 lg:flex-row lg:gap-x-4">
        {company ? (
          <Image
            src={company.account.avatar}
            alt={company.name}
            width={48}
            height={48}
            className="flex-none rounded-full"
          />
        ) : null}

        <div className="flex w-full flex-col gap-y-1 text-sm text-muted-foreground">
          <div className="flex items-center justify-between text-base">
            <h5 className="font-bold leading-tight text-foreground">{title}</h5>
            <span className="hidden lg:block lg:text-foreground">
              {minSalary}$ - {maxSalary}$
            </span>
          </div>
          <div className="flex gap-x-2.5">
            <span>{location}</span>
            {company ? <span>{company.name}</span> : null}
          </div>
          <p className="line-clamp-2">{description}</p>
        </div>
      </CardContent>
    </Card>
  </Link>
);
