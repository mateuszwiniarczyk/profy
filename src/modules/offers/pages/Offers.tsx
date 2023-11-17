import { SearchBar } from "@/modules/offers/components/SearchBar";
import { OffersList } from "@/modules/offers/components/OffersList";

export const Offers = () => (
  <div>
    <SearchBar className="mt-10" />
    <OffersList />
  </div>
);
