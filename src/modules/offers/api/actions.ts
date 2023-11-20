"use server";

import { type z } from "zod";

import { type ExperienceLevel, type EmploymentType, type JobType } from "@prisma/client";
import { getOffersSchema, offerSchema } from "@/modules/offers/lib/validations/offer";
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

export const getOffers = async (params: z.infer<typeof getOffersSchema>) => {
  const input = getOffersSchema.parse(params);

  const query = input.query || "";
  const limit = input.limit || 10;
  const offset = input.offset || 0;
  const employmentTypes = input.employmentTypes?.split(".") as EmploymentType[];
  const experienceLevels = input.experienceLevels?.split(".") as ExperienceLevel[];
  const jobTypes = input.jobTypes?.split(".") as JobType[];

  const items = await prisma.jobOffer.findMany({
    take: limit,
    skip: offset,

    where: {
      title: {
        contains: query,
      },
      employmentType: {
        in: employmentTypes,
      },
      experienceLevel: {
        in: experienceLevels,
      },
      jobType: {
        in: jobTypes,
      },
    },

    include: {
      company: {
        include: {
          account: true,
        },
      },
    },
  });

  const count = items.length;
  const pagesCount = Math.ceil(count / limit);

  return {
    items,
    count,
    pagesCount,
  };
};
