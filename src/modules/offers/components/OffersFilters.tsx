"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Checkbox } from "@/components/ui/Checkbox";
import { Label } from "@/components/ui/Label";
import { employmentTypes, experienceLevels, jobTypes } from "@/constants/offer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { useCreateSearchParams } from "@/modules/offers/hooks/useCreateSearchParams";

export const OffersFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { createQueryString } = useCreateSearchParams();
  const experienceLevelsParam = searchParams?.get("experienceLevels");
  const jobTypesParam = searchParams?.get("jobTypes");
  const employmentTypesParam = searchParams?.get("employmentTypes");
  const sortParam = searchParams?.get("sort");

  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState<string[]>(
    experienceLevelsParam ? experienceLevelsParam.split(".").map((level) => level) : [],
  );
  const [selectedEmploymentTypes, setSelectedEmploymentTypes] = useState<string[]>(
    employmentTypesParam ? employmentTypesParam.split(".").map((level) => level) : [],
  );
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>(
    jobTypesParam ? jobTypesParam.split(".").map((level) => level) : [],
  );

  useEffect(() => {
    const newQueryString = createQueryString({
      experienceLevels: selectedExperienceLevels.length ? selectedExperienceLevels.join(".") : null,
    });

    router.push(`${pathname}?${newQueryString}`, {
      scroll: false,
    });
  }, [createQueryString, pathname, router, selectedExperienceLevels]);

  useEffect(() => {
    const newQueryString = createQueryString({
      employmentTypes: selectedEmploymentTypes.length ? selectedEmploymentTypes.join(".") : null,
    });

    router.push(`${pathname}?${newQueryString}`, {
      scroll: false,
    });
  }, [createQueryString, pathname, router, selectedEmploymentTypes]);

  useEffect(() => {
    const newQueryString = createQueryString({
      jobTypes: selectedJobTypes.length ? selectedJobTypes.join(".") : null,
    });

    router.push(`${pathname}?${newQueryString}`, {
      scroll: false,
    });
  }, [createQueryString, pathname, router, selectedJobTypes]);

  const handleSortChange = useCallback(
    (value: string) => {
      const newQueryString = createQueryString({
        sort: value,
      });

      router.push(`${pathname}?${newQueryString}`, {
        scroll: false,
      });
    },
    [createQueryString, pathname, router],
  );

  return (
    <div className="col-span-12 mt-5 flex flex-col gap-y-5 lg:col-span-4 lg:mt-0">
      <h2 className="mb-1 text-xl font-semibold text-foreground">Filters</h2>
      <div>
        <Select onValueChange={handleSortChange} value={sortParam || ""}>
          <SelectTrigger className="w-72">
            <SelectValue placeholder="Sort offers by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="createdAt.desc">Date: Newest to Oldest</SelectItem>
            <SelectItem value="createdAt.asc">Date: Oldest to Newest</SelectItem>
            <SelectItem value="maxSalary.desc">Salary: Highest to Lowest</SelectItem>
            <SelectItem value="maxSalary.asc">Salary: Lowest to Highest</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <h3 className="mb-2 font-medium text-foreground">Experience Level</h3>
        <div className="space-y-3">
          {experienceLevels.map((level) => (
            <div key={level.label} className="flex items-center space-x-2">
              <Checkbox
                id={level.value}
                checked={selectedExperienceLevels.includes(level.value) ?? false}
                onCheckedChange={(value) => {
                  if (value) {
                    setSelectedExperienceLevels([...selectedExperienceLevels, level.value]);
                  } else {
                    setSelectedExperienceLevels(
                      selectedExperienceLevels.filter((v) => v !== level.value),
                    );
                  }
                }}
              />
              <Label htmlFor={level.value}>{level.label}</Label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-2 font-medium text-foreground">Employment Type</h3>
        <div className="space-y-3">
          {employmentTypes.map((type) => (
            <div key={type.label} className="flex items-center space-x-2">
              <Checkbox
                id={type.value}
                checked={selectedEmploymentTypes.includes(type.value) ?? false}
                onCheckedChange={(value) => {
                  if (value) {
                    setSelectedEmploymentTypes([...selectedEmploymentTypes, type.value]);
                  } else {
                    setSelectedEmploymentTypes(
                      selectedEmploymentTypes.filter((v) => v !== type.value),
                    );
                  }
                }}
              />
              <Label htmlFor={type.value}>{type.label}</Label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-2 font-medium text-foreground">Job Type</h3>
        <div className="space-y-3">
          {jobTypes.map((type) => (
            <div key={type.label} className="flex items-center space-x-2">
              <Checkbox
                id={type.value}
                checked={selectedJobTypes.includes(type.value) ?? false}
                onCheckedChange={(value) => {
                  if (value) {
                    setSelectedJobTypes([...selectedJobTypes, type.value]);
                  } else {
                    setSelectedJobTypes(selectedJobTypes.filter((v) => v !== type.value));
                  }
                }}
              />
              <Label htmlFor={type.value}>{type.label}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
