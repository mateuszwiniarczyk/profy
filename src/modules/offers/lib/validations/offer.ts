import { EmploymentType, ExperienceLevel, JobType, Skill } from "@prisma/client";
import { z } from "zod";

export const offerSchema = z
  .object({
    title: z
      .string()
      .min(3, {
        message: "Title must be at least 3 characters long",
      })
      .max(50, {
        message: "Position must be less than 50 characters long",
      }),
    description: z
      .string()
      .min(200, {
        message: "Description must be at least 200 characters long",
      })
      .max(2000, {
        message: "Description must be less than 2000 characters long",
      }),
    experienceLevel: z.nativeEnum(ExperienceLevel, {
      invalid_type_error: "Experience level is required",
    }),
    location: z.string().min(3).max(25),
    jobType: z.nativeEnum(JobType, {
      invalid_type_error: "Job type is required",
    }),
    employmentType: z.nativeEnum(EmploymentType, {
      invalid_type_error: "Employment type is required",
    }),
    skills: z.array(
      z.nativeEnum(Skill, {
        invalid_type_error: "Skills are required",
      }),
    ),
    minSalary: z
      .number()
      .min(100, {
        message: "Min salary must be at least 100",
      })
      .max(1000000),
    maxSalary: z
      .number()
      .min(0, {
        message: "Max salary must be at least 0",
      })
      .max(1000000),
  })
  .refine((data) => data.minSalary < data.maxSalary, {
    message: "Min Salary must be less than max salary",
    path: ["maxSalary"],
  });

export const getOffersSchema = z.object({
  limit: z.number().default(10),
  offset: z.number().default(0),
  sort: z.string().optional().nullable(),
  experienceLevels: z.string().optional().nullable(),
  jobTypes: z.string().optional().nullable(),
  employmentTypes: z.string().optional().nullable(),
  page: z.string().optional().nullable(),
  query: z.string().optional().nullable(),
});
