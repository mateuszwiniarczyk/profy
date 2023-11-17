"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type * as z from "zod";
import { type Skill } from "@prisma/client";
import { useTransition } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { employmentTypes, experienceLevels, jobTypes, skills } from "@/constants/offer";
import { offerSchema } from "@/modules/jobs/lib/validations/offer";
import { createOffer } from "@/modules/jobs/api/actions";
import { catchError } from "@/lib/utils";

type NewOfferFormProps = {
  userId: string | null;
};

export const NewOfferForm = ({ userId }: NewOfferFormProps) => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof offerSchema>>({
    resolver: zodResolver(offerSchema),
    defaultValues: {
      title: "",
      description: "",
      skills: [] as Skill[],
    },
  });

  const onSubmit = async (values: z.infer<typeof offerSchema>) => {
    if (!userId) {
      return;
    }

    startTransition(async () => {
      try {
        await createOffer(values, userId);

        form.reset();
      } catch (error) {
        catchError(error);
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 max-w-3xl space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Senior Data Engineer" {...field} />
              </FormControl>
              <FormDescription>This is your desired job title for public display.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="You will be responsible for..." {...field} />
              </FormControl>
              <FormDescription>
                Provide a description of the job. This may include tasks, essential skills,
                educational background, and experience criteria.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="experienceLevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Experience Level</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger className="w-72">
                    <SelectValue placeholder="Select required experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevels.map((level) => (
                      <SelectItem key={level.value} value={level.value}>
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="employmentType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employment Type</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger className="w-72">
                    <SelectValue placeholder="Select required employment type" />
                  </SelectTrigger>
                  <SelectContent>
                    {employmentTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="jobType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Type</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger className="w-72">
                    <SelectValue placeholder="Select required job type" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="London" {...field} />
              </FormControl>
              <FormDescription>
                Please specify the designated location for this position.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="minSalary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Min Salary</FormLabel>
              <FormControl>
                <div className="flex items-center gap-1">
                  <Input
                    type="number"
                    placeholder="10000"
                    {...field}
                    onChange={(event) => field.onChange(+event.target.value)}
                  />{" "}
                  $
                </div>
              </FormControl>
              <FormDescription>Please specify monthly minimum salary.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="maxSalary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Max Salary</FormLabel>
              <FormControl>
                <div className="flex items-center gap-1">
                  <Input
                    type="number"
                    placeholder="30000"
                    {...field}
                    onChange={(event) => field.onChange(+event.target.value)}
                  />{" "}
                  $
                </div>
              </FormControl>
              <FormDescription>Please specify monthly max salary.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="skills"
          render={() => (
            <FormItem>
              <FormLabel className="text-base">Skills</FormLabel>
              {skills.map((skill) => (
                <FormField
                  key={skill.label}
                  control={form.control}
                  name="skills"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={skill.value}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(skill.value)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, skill.value])
                                : field.onChange(
                                    field.value?.filter((value) => value !== skill.value),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">{skill.label}</FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
          Submit
        </Button>
      </form>
    </Form>
  );
};
