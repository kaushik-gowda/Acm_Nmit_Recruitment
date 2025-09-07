import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Calendar, UserPlus } from "lucide-react";

const recruitmentSteps = [
  {
    icon: UserPlus,
    title: "Who Can Join?",
    description: "Passionate students from 1st, 2nd and 3rd year of any branch with a keen interest in computing and technology.",
    details: ["Open to 1st, 2nd & 3rd years."]
  },
  {
    icon: Calendar,
    title: "Dates & Venue",
    description: "",
    details: ["Venue: Room No. 271, D Block", "Deadline: 12th & 13th September 2025"]
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
            <Card key={index} className="flex flex-col text-center items-center hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 p-6 border-primary border-2">
              <CardHeader className="p-0">
                <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{step.title}</CardTitle>
                {step.description && (
                    <CardDescription className="pt-2 text-muted-foreground">
                        {step.description}
                    </CardDescription>
                )}
              </CardHeader>
              {step.details && (
                <CardContent className="mt-auto p-0 pt-4">
                  <div className="space-y-1">
                    {step.details.map((detail, i) => (
                      <p key={i} className="font-semibold text-primary">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
