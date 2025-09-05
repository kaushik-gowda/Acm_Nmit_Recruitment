"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Trophy, Users, Lightbulb, Briefcase } from "lucide-react";

const predefinedBenefits = [
  { icon: Code, title: "Hands-on Coding Sessions", description: "Sharpen your skills with practical workshops." },
  { icon: Trophy, title: "Hackathons & Contests", description: "Compete and build innovative projects." },
  { icon: Users, title: "Guest Lectures & Tech Talks", description: "Learn from industry and academic experts." },
  { icon: Briefcase, title: "Networking Opportunities", description: "Connect with seniors, alumni, and professionals." },
  { icon: Lightbulb, title: "Leadership & Projects", description: "Lead initiatives and gain real-world experience." },
];

export function LocalBenefits() {
  return (
    <section id="local-benefits" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Why Join NMIT ACM?</h2>
          <p className="text-muted-foreground mt-4 text-lg">Discover the exclusive benefits our local chapter offers.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {predefinedBenefits.map((benefit, index) => (
             <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
              <CardHeader className="items-center p-6">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-lg">{benefit.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
