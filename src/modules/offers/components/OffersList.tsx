import { OfferCard } from "@/modules/offers/components/OfferCard";

const offers = new Array(10).fill(null);

export const OffersList = () => (
  <ul className="mt-10 grid grid-cols-12 gap-y-5">
    {offers.map((_, index) => (
      <li key={index} className="col-span-12 lg:col-span-8">
        <OfferCard />
      </li>
    ))}
  </ul>
);
