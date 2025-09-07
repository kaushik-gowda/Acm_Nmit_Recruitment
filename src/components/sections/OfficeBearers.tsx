import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const officeBearers = [
  {
    name: "Bhanutej Reddy",
    designation: "Chair",
    imageUrl: "",
    aiHint: "person portrait"
  },
  {
    name: "Sameer Gupta",
    designation: "Vice Chair",
    imageUrl: "",
    aiHint: "person portrait"
  },
  {
    name: "Davana Babu",
    designation: "Secretary",
    imageUrl: "",
    aiHint: "person portrait"
  },
  {
    name: "Balvivek Reddy",
    designation: "Treasurer",
    imageUrl: "",
    aiHint: "person portrait"
  },
  {
    name: "Kaushik Gowda",
    designation: "Webmaster",
    imageUrl: "",
    aiHint: "person portrait"
  },
];

export function OfficeBearers() {
  return (
    <section id="office-bearers" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Meet Our Office Bearers</h2>
          <p className="text-muted-foreground mt-4 text-lg">The student leaders driving our chapter forward.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {officeBearers.map((bearer) => (
            <Card key={bearer.name} className="text-center hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
              <CardContent className="p-6 flex flex-col items-center">
                <Avatar className="w-32 h-40 mb-4 border-4 border-primary/10 rounded-[50%/35%]">
                  <AvatarImage src={bearer.imageUrl} alt={bearer.name} data-ai-hint={bearer.aiHint} className="object-cover" />
                  <AvatarFallback>{bearer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold font-headline text-foreground">{bearer.name}</h3>
                <p className="text-primary font-semibold">{bearer.designation}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
