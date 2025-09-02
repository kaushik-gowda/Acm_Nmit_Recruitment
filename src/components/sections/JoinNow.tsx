import { Button } from "@/components/ui/button";
import Link from "next/link";

export function JoinNow() {
  return (
    <section id="join-now" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Ready to Join?</h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          Become a part of our dynamic community and take the first step towards an exciting journey in computing.
        </p>
        <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
          <Link href="#" prefetch={false}>
            Sign Up for the Recruitment Drive
          </Link>
        </Button>
      </div>
    </section>
  );
}
