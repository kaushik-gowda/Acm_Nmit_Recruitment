import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Calendar, ClipboardList, UserPlus } from "lucide-react";

const recruitmentSteps = [
  {
    icon: Calendar,
    title: "Application Deadline",
    description: "Submit your application before the final date to be considered for the current recruitment cycle. Don't miss out!",
    details: "Ends: October 31, 2024"
  },
  {
    icon: ClipboardList,
    title: "Requirements",
    description: "We are looking for passionate students from any branch with a keen interest in computing and technology.",
    details: "Open to all years and branches."
  },
  {
    icon: UserPlus,
    title: "Sign-Up Process",
    description: "The process is simple. Fill out the form, tell us about your interests, and you're on your way to becoming a member.",
    details: "Click 'Join Now' to start."
  }
]

export function RecruitmentDetails() {
  return (
    <section id="recruitment" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Recruitment Drive Details</h2>
          <p className="text-muted-foreground mt-4 text-lg">Here's what you need to know to join us.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recruitmentSteps.map((step, index) => (
            <Card key={index} className="flex flex-col text-center items-center hover:shadow-lg transition-shadow duration-300 p-6">
              <CardHeader className="p-0">
                <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{step.title}</CardTitle>
                <CardDescription className="pt-2">{step.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto p-0 pt-4">
                <p className="font-semibold text-primary">{step.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
