import { OffersList } from "@/modules/offers/components/OffersList";
import { OffersFilters } from "@/modules/offers/components/OffersFilters";
import { SearchOffers } from "@/modules/offers/components/SearchOffers";
import { getOffers } from "@/modules/offers/api/actions";
import { getOffersSchema } from "@/modules/offers/lib/validations/offer";

type OffersProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export const Offers = async ({ searchParams }: OffersProps) => {
  const { page, jobTypes, experienceLevels, employmentTypes, sort, query } =
    getOffersSchema.parse(searchParams);

  const pageAsNumber = Number(page);
  const fallbackPage = isNaN(pageAsNumber) || pageAsNumber < 1 ? 1 : pageAsNumber;
  const limit = 10;
  const offset = fallbackPage > 0 ? (fallbackPage - 1) * limit : 0;

  const data = await getOffers({
    offset,
    limit,
    jobTypes,
    experienceLevels,
    employmentTypes,
    sort,
    query,
  });

  return (
    <div>
      <SearchOffers />
      <div className="mt-10 grid grid-cols-12 lg:mt-10 lg:gap-x-10">
        <OffersList offers={data.items} pagesCount={data.pagesCount} />
        <OffersFilters />
      </div>
    </div>
  );
};
