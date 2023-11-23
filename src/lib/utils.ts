import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
import { toast } from "sonner";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function catchError(err: unknown) {
  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message;
    });
    return toast.error(errors.join("\n"));
  } else if (err instanceof Error) {
    return toast.error(err.message);
  } else {
    return toast.error("Something went wrong, please try again later.");
  }
}

export const formatMoney = (amount: number) => {
  if (typeof amount !== "number") {
    throw new Error(`Amount must be a number, got ${typeof amount}`);
  }

  return new Intl.NumberFormat("pl-PL", {
    style: "decimal",
    currency: "USD",
  }).format(amount);
};
