import { ThemeToggle } from "@/components/layout/ThemeToggle";

export const Footer = () => (
  <footer className="w-full border-t bg-background">
    <div className="container py-6">
      <div className="flex items-center justify-between">
        <span className="text-sm leading-loose text-muted-foreground">
          Copyright &#169; 2023 Profy
        </span>
        <ThemeToggle />
      </div>
    </div>
  </footer>
);
