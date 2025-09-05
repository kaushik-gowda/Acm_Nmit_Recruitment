import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const allEvents = [
  {
    title: "Hacktoberfest '24 Kickstart",
    description: "An introductory workshop on open-source contributions and Git/GitHub, where participants learned the basics of version control and made their first pull requests.",
    imageUrl: "https://picsum.photos/800/500?random=6",
    aiHint: "coding workshop students",
    date: "October 5, 2024",
    category: "Workshop",
  },
  {
    title: "AI & ML Conclave",
    description: "A full-day event with talks from industry experts on the latest trends in AI, covering topics from generative models to ethical considerations.",
    imageUrl: "https://picsum.photos/800/500?random=7",
    aiHint: "tech conference stage",
    date: "November 12, 2024",
    category: "Conference",
  },
  {
    title: "Competitive Coding League",
    description: "A month-long coding competition to challenge your problem-solving skills with a series of algorithmic puzzles and a final showdown.",
    imageUrl: "https://picsum.photos/800/500?random=8",
    aiHint: "people coding competition",
    date: "Starts December 1, 2024",
    category: "Competition",
  },
  {
    title: "Web Dev Bootcamp",
    description: "A week-long intensive bootcamp covering modern web development with React, Next.js, and Tailwind CSS.",
    imageUrl: "https://picsum.photos/800/500?random=10",
    aiHint: "laptop code editor",
    date: "September 20, 2024",
    category: "Bootcamp",
  },
  {
    title: "Capture The Flag (CTF)",
    description: "A cybersecurity competition where teams solve challenges to find hidden flags, testing their skills in cryptography, forensics, and web exploits.",
    imageUrl: "https://picsum.photos/800/500?random=11",
    aiHint: "cybersecurity code",
    date: "August 15, 2024",
    category: "Competition",
  },
  {
    title: "Alumni Connect",
    description: "An evening of networking with NMIT ACM alumni who are now leaders in the tech industry, sharing their career journeys and insights.",
    imageUrl: "https://picsum.photos/800/500?random=12",
    aiHint: "professional networking event",
    date: "July 30, 2024",
    category: "Networking",
  },
];


export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Events</h1>
                <p className="text-muted-foreground mt-4 text-lg">
                    A look back at the workshops, competitions, and talks that define our community.
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allEvents.map((event) => (
                        <Card key={event.title} className="overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                             <Image
                                src={event.imageUrl}
                                alt={event.title}
                                data-ai-hint={event.aiHint}
                                width={800}
                                height={500}
                                className="w-full h-56 object-cover"
                            />
                            <CardContent className="p-6">
                                <div className="flex justify-between items-center mb-3">
                                    <p className="text-sm text-primary font-semibold">{event.date}</p>
                                    <Badge variant="secondary">{event.category}</Badge>
                                </div>
                                <h3 className="text-xl font-bold font-headline text-foreground mb-3">{event.title}</h3>
                                <p className="text-muted-foreground text-sm">{event.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
