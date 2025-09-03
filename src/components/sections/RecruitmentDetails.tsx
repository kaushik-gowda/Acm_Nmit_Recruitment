import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Calendar, UserPlus, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const recruitmentSteps = [
  {
    icon: UserPlus,
    title: "Who Can Join?",
    description: "Passionate students from 1st and 2nd year of any branch with a keen interest in computing and technology.",
    details: "Open to 1st & 2nd years."
  },
  {
    icon: Calendar,
    title: "Dates & Venue",
    description: "Deadline: October 31, 2024",
    details: ""
  }
];

export function RecruitmentDetails() {
  return (
    <section id="recruitment" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Recruitment Drive Details</h2>
          <p className="text-muted-foreground mt-4 text-lg">Here's what you need to know to join us.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {recruitmentSteps.map((step, index) => (
            <Card key={index} className="flex flex-col text-center items-center hover:shadow-lg transition-shadow duration-300 p-6">
              <CardHeader className="p-0">
                <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{step.title}</CardTitle>
                <CardDescription className={`pt-2 ${index === 0 ? 'text-muted-foreground' : 'text-primary font-semibold'}`}>
                  {step.description}
                </CardDescription>
              </CardHeader>
              {step.details && (
                <CardContent className="mt-auto p-0 pt-4">
                  <p className="font-semibold text-primary">{step.details}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
        <Card className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 p-8 shadow-lg">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold font-headline text-primary mb-2">How to Apply</h3>
            <p className="text-muted-foreground mb-4">
              Click the button to fill out the registration form or scan the QR code with your phone.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="#">Register for Recruitment</Link>
            </Button>
          </div>
          <div className="flex-shrink-0">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image 
                src="https://placehold.co/200x200/png?text=QR+Code" 
                alt="Registration QR Code"
                data-ai-hint="qr code" 
                width={200}
                height={200}
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
