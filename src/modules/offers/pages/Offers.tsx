import { OffersList } from "@/modules/offers/components/OffersList";
import { OffersFilters } from "@/modules/offers/components/OffersFilters";
import { SearchOffers } from "@/modules/offers/components/SearchOffers";

export const Offers = () => (
  <div>
    <SearchOffers />
    <div className="mt-10 grid grid-cols-12 lg:mt-10 lg:gap-x-10">
      <OffersList />
      <OffersFilters />
    </div>
  </div>
);
