import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/Command";

export const SearchBar = () => (
  <Command className="mx-auto mt-12 w-full max-w-4xl rounded-lg drop-shadow">
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
