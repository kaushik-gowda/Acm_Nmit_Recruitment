import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const events = [
  {
    title: "Hacktoberfest '24 Kickstart",
    description: "An introductory workshop on open-source contributions and Git/GitHub.",
    imageUrl: "https://picsum.photos/600/400?random=6",
    aiHint: "coding workshop",
    date: "October 5, 2024",
  },
  {
    title: "AI & ML Conclave",
    description: "A full-day event with talks from industry experts on the latest trends in AI.",
    imageUrl: "https://picsum.photos/600/400?random=7",
    aiHint: "tech conference",
    date: "November 12, 2024",
  },
  {
    title: "Competitive Coding League",
    description: "A month-long coding competition to challenge your problem-solving skills.",
    imageUrl: "https://picsum.photos/600/400?random=8",
    aiHint: "people coding",
    date: "Starts December 1, 2024",
  },
];

export function Events() {
  return (
    <section id="events" className="relative py-20 md:py-32">
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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Past & Upcoming Events</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Engage, learn, and grow with our diverse range of technical and community events.
          </p>
          <Button asChild variant="link" className="text-accent mt-2">
            <Link href="/events">
              View All Events <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.title} className="bg-card/80 backdrop-blur-md overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
              <Image
                src={event.imageUrl}
                alt={event.title}
                data-ai-hint={event.aiHint}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{event.date}</p>
                <h3 className="text-xl font-bold font-headline text-foreground mb-3">{event.title}</h3>
                <p className="text-muted-foreground text-sm">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
