import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Events() {
  return (
    <section id="events" className="relative py-20 md:py-32 flex items-center justify-center">
      <div
        className="absolute inset-0 -z-10 bg-fixed"
        style={{
          backgroundImage: "url('https://picsum.photos/1920/1080?random=9')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        data-ai-hint="technology event background"
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Past & Upcoming Events</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Engage, learn, and grow with our diverse range of technical and community events.
          </p>
          <Button asChild variant="link" className="text-accent mt-4 text-lg">
            <Link href="/events">
              View All Events <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
