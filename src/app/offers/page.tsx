import { Offers } from "@/modules/offers/pages/Offers";

type OffersPageProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function OffersPage(props: OffersPageProps) {
  return <Offers {...props} />;
}
