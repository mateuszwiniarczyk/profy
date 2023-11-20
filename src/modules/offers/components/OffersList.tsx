import { type JobOffer } from "@prisma/client";
import { OfferCard } from "@/modules/offers/components/OfferCard";
import { Pagination } from "@/modules/offers/components/Pagination";

type OffersListProps = {
  offers: JobOffer[];
  pagesCount: number;
};

export const OffersList = ({ offers, pagesCount }: OffersListProps) => (
  <div className="col-span-12 lg:col-span-8">
    {offers.length > 0 ? (
      <>
        <ul className="flex flex-col gap-y-5">
          {offers.map((offer) => (
            <li key={offer.id}>
              <OfferCard />
            </li>
          ))}
        </ul>
        <Pagination pagesCount={pagesCount} />
      </>
    ) : (
      <div className="flex flex-col items-center justify-center text-foreground">
        <p className="text-2xl font-bold">No offers found</p>
        <p className="text-lg">Try to change your search parameters</p>
      </div>
    )}
  </div>
);
