import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/Command";
import { cn } from "@/lib/utils";

type SearchBarProps = {
  className?: string;
};

export const SearchBar = ({ className }: SearchBarProps) => (
  <Command className={cn("w-full rounded-lg drop-shadow", className)}>
    <CommandInput
      placeholder="Job title, keyword or company"
      className="h-16 font-semibold text-muted-foreground"
    />
    <CommandList className="hidden">
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Job title">
        <CommandItem>Software Engineer</CommandItem>
        <CommandItem>Senior Software Engineer</CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Company">
        <CommandItem>Google</CommandItem>
        <CommandItem>Facebook</CommandItem>
        <CommandItem>Microsoft</CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
);
