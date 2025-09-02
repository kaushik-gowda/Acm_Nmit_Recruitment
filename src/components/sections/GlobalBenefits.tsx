import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Briefcase, Users, Link as LinkIcon, MonitorPlay, Podcast, Newspaper, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const learningBenefits = [
  {
    icon: BookOpen,
    title: "ACM Digital Library",
    description: "Access the world's largest collection of computing literature."
  },
  {
    icon: MonitorPlay,
    title: "Training Courses",
    description: "Access to Pluralsight and Skillsoft Percipio platforms for technical courses."
  },
  {
    icon: Newspaper,
    title: "ACM Publications",
    description: "Stay updated with Communications of the ACM and ACM Queue."
  }
];

const communityBenefits = [
    {
        icon: Users,
        title: "ACM TechTalks",
        description: "Attend webinars by leading experts on trending computing topics."
    },
    {
        icon: Newspaper,
        title: "XRDS: Crossroads",
        description: "Read the flagship student magazine for computing students."
    },
    {
        icon: Podcast,
        title: "ACM ByteCast",
        description: "Listen to inspiring stories from computing professionals."
    }
]

const careerBenefits = [
    {
        icon: GraduationCap,
        title: "Certification Prep",
        description: "Prepare for professional certifications with targeted resources."
    },
    {
        icon: Briefcase,
        title: "Coding Labs",
        description: "Practice your skills in hands-on coding labs and sandboxes."
    },
    {
        icon: Users,
        title: "ACM-W",
        description: "Join the community supporting, celebrating, and advocating for women in computing."
    }
]

const allBenefits = [
    {
        value: "learning",
        title: "Learning & Resources",
        benefits: learningBenefits,
    },
    {
        value: "community",
        title: "Events & Community",
        benefits: communityBenefits,
    },
    {
        value: "career",
        title: "Career & Growth",
        benefits: careerBenefits,
    }
];

function BenefitsGrid({ benefits }: { benefits: typeof learningBenefits }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 h-full">
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
    )
}

export function GlobalBenefits() {
  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">ACM Global Membership Benefits</h2>
          <p className="text-muted-foreground mt-4 text-lg">Being part of ACM gives you access to a world of resources.</p>
        </div>

        {/* Accordion for Mobile */}
        <div className="md:hidden max-w-4xl mx-auto">
            <Accordion type="single" collapsible defaultValue="learning" className="w-full">
                {allBenefits.map(({ value, title, benefits }) => (
                    <AccordionItem value={value} key={value}>
                        <AccordionTrigger className="text-lg font-semibold text-primary">{title}</AccordionTrigger>
                        <AccordionContent>
                            <BenefitsGrid benefits={benefits} />
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
        
        {/* Tabs for Desktop */}
        <div className="hidden md:block">
            <Tabs defaultValue="learning" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="learning">Learning & Resources</TabsTrigger>
                <TabsTrigger value="community">Events & Community</TabsTrigger>
                <TabsTrigger value="career">Career & Growth</TabsTrigger>
            </TabsList>
            <TabsContent value="learning">
                <BenefitsGrid benefits={learningBenefits} />
            </TabsContent>
            <TabsContent value="community">
                <BenefitsGrid benefits={communityBenefits} />
            </TabsContent>
            <TabsContent value="career">
                <BenefitsGrid benefits={careerBenefits} />
            </TabsContent>
            </Tabs>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link href="https://www.acm.org/membership/membership-benefits" target="_blank" rel="noopener noreferrer">
              <LinkIcon className="mr-2 h-4 w-4" />
              Explore Full Benefits →
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
