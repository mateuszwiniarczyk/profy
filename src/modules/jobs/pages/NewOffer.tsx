import { NewOfferForm } from "@/modules/jobs/components/NewOfferForm";

export const NewOffer = () => (
  <div>
    <h1 className="text-3xl font-bold leading-relaxed">New Job Offer</h1>
    <p className="text-muted-foreground">Add a new job offer to your company.</p>
    <NewOfferForm />
  </div>
);
