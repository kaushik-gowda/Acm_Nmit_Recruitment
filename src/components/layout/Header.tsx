import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold text-primary font-headline">ACM NMIT Onboard</span>
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-medium md:flex lg:gap-6">
          <Link href="#about" className="text-muted-foreground transition-colors hover:text-foreground" prefetch={false}>
            About
          </Link>
          <Link href="#benefits" className="text-muted-foreground transition-colors hover:text-foreground" prefetch={false}>
            Benefits
          </Link>
          <Link href="#events" className="text-muted-foreground transition-colors hover:text-foreground" prefetch={false}>
            Events
          </Link>
          <Link href="#contact" className="text-muted-foreground transition-colors hover:text-foreground" prefetch={false}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#join-now">Join Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
