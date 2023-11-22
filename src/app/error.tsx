"use client";

import Image from "next/image";

import { Button } from "@/components/ui/Button";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2.5 text-center">
      <Image src="/hanging-monkey.webp" alt="error occurred" width={120} height={153} />
      <h1 className="text-5xl font-semibold">Oops...</h1>
      <p className="text-lg">Something is wrong, but we&apos;re working on it!</p>
      <Button onClick={() => reset()} className="mt-2.5">
        Try again
      </Button>
    </div>
  );
}
