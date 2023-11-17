"use server";

import { type z } from "zod";

import { offerSchema } from "@/modules/offers/lib/validations/offer";
import { prisma } from "@/lib/db";

export const createOffer = async (offer: z.infer<typeof offerSchema>, userId: string) => {
  const input = offerSchema.parse(offer);

  const user = await prisma.account.findUnique({
    where: {
      clerkId: userId,
    },
    include: {
      company: true,
    },
  });

  if (!user?.company?.id) {
    throw new Error("User does not have a company");
  }

  await prisma.jobOffer.create({
    data: {
      ...input,
      companyId: user?.company?.id,
    },
  });
};
