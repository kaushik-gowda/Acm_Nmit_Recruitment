"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Wand2 } from "lucide-react";
import { generateLocalBenefits, type GenerateLocalBenefitsOutput } from "@/ai/flows/generate-local-benefits";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

const predefinedBenefits = [
  { title: "Exclusive Workshops", description: "Hands-on sessions on emerging technologies." },
  { title: "Networking Events", description: "Connect with peers, seniors, and industry experts." },
  { title: "Hackathons & Contests", description: "Showcase your skills and win exciting prizes." },
  { title: "Mentorship Programs", description: "Get guidance from experienced mentors." },
];

export function LocalBenefits() {
  const [inquiry, setInquiry] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerateLocalBenefitsOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inquiry) {
      setError("Please enter your inquiry.");
      return;
    }
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await generateLocalBenefits({ inquiry });
      setResult(res);
    } catch (err) {
      setError("Failed to generate benefits. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="local-benefits" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Why Join ACM NMIT?</h2>
          <p className="text-muted-foreground mt-4 text-lg">Discover the exclusive benefits our local chapter offers.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {predefinedBenefits.map((benefit, index) => (
             <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline text-xl">
              <Wand2 className="text-accent" />
              Get a Personalized Benefit Summary
            </CardTitle>
            <CardDescription>
              Tell us what you're looking for (e.g., "I'm interested in web development and open source"), and our AI will tailor the benefits for you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Textarea
                placeholder="Type your interests here..."
                value={inquiry}
                onChange={(e) => setInquiry(e.target.value)}
                rows={3}
              />
              <Button type="submit" disabled={loading} className="w-full sm:w-auto bg-accent hover:bg-accent/90">
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Generate My Benefits
              </Button>
            </form>

            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {result && (
              <div className="mt-6 p-4 border rounded-lg bg-background">
                <h3 className="font-bold mb-2 font-headline text-primary">Tailored For You:</h3>
                <p className="text-muted-foreground whitespace-pre-wrap">{result.localBenefits}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
