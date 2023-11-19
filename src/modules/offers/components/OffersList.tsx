import { OfferCard } from "@/modules/offers/components/OfferCard";
import { Pagination } from "@/modules/offers/components/Pagination";

const offers = new Array(10).fill(null);

export const OffersList = () => {
  return (
    <div className="col-span-12 lg:col-span-8">
      <ul className="flex flex-col gap-y-5">
        {offers.map((_, index) => (
          <li key={index}>
            <OfferCard />
          </li>
        ))}
      </ul>
      <Pagination />
    </div>
  );
};
