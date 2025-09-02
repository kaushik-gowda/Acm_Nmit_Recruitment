import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Briefcase, Users, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const globalBenefits = [
  {
    icon: BookOpen,
    title: "ACM Digital Library",
    description: "Get access to the world's largest collection of computing literature, including journals, conference proceedings, and books."
  },
  {
    icon: Briefcase,
    title: "Career Resources",
    description: "Utilize the ACM Career & Job Center, career-related webinars, and resources to advance your professional journey."
  },
  {
    icon: Users,
    title: "Global Community",
    description: "Network with a global community of over 100,000 students and professionals in the computing field."
  }
];

export function GlobalBenefits() {
  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">ACM Global Membership Benefits</h2>
          <p className="text-muted-foreground mt-4 text-lg">Being part of ACM gives you access to a world of resources.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {globalBenefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="items-center p-6">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{benefit.title}</CardTitle>
                <CardDescription className="pt-2">{benefit.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link href="https://www.acm.org/membership/benefits" target="_blank" rel="noopener noreferrer">
              <LinkIcon className="mr-2 h-4 w-4" />
              Learn More on ACM.org
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
