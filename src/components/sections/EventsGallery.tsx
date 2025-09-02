"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Loader2, Wand2 } from "lucide-react";
import { generateEventCaption, type GenerateEventCaptionOutput } from "@/ai/flows/generate-event-captions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const events = [
  {
    image: "https://picsum.photos/600/400?random=1",
    aiHint: "hackathon coding",
    description: "Our annual flagship event, Hack-N-Roll 2023, saw over 200 participants building innovative projects in 24 hours."
  },
  {
    image: "https://picsum.photos/600/400?random=2",
    aiHint: "workshop tech",
    description: "An interactive workshop on 'Getting Started with Docker and Kubernetes' led by an industry expert from Google."
  },
  {
    image: "https://picsum.photos/600/400?random=3",
    aiHint: "speaker conference",
    description: "A guest lecture on the 'Future of Artificial Intelligence' by Dr. Anitha Selvan, a renowned AI researcher."
  },
  {
    image: "https://picsum.photos/600/400?random=4",
    aiHint: "students collaboration",
    description: "Our members collaborating on an open-source project during our weekly 'Code & Coffee' sessions."
  }
];

// A placeholder 1x1 transparent pixel in Base64
const placeholderDataUri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export function EventsGallery() {
  const [captions, setCaptions] = useState<{ [key: number]: string }>({});
  const [loading, setLoading] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateCaption = async (index: number, description: string) => {
    setLoading(index);
    setError(null);
    try {
      const res: GenerateEventCaptionOutput = await generateEventCaption({
        photoDataUri: placeholderDataUri, // Using placeholder as we can't convert remote URLs to data URIs easily
        description: description,
      });
      setCaptions(prev => ({ ...prev, [index]: res.caption }));
    } catch (err) {
      setError("Failed to generate caption. Please try again.");
      console.error(err);
    } finally {
      setLoading(null);
    }
  };

  return (
    <section id="events" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Events & Highlights</h2>
          <p className="text-muted-foreground mt-4 text-lg">A glimpse into our past activities and achievements.</p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-8 max-w-4xl mx-auto">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Carousel className="w-full max-w-5xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {events.map((event, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="flex flex-col md:flex-row items-stretch justify-center p-0">
                      <div className="w-full md:w-1/2 relative">
                         <Image
                            src={event.image}
                            alt={event.description}
                            data-ai-hint={event.aiHint}
                            width={600}
                            height={400}
                            className="rounded-l-lg object-cover w-full h-full aspect-video md:aspect-auto"
                         />
                      </div>
                      <div className="w-full md:w-1/2 space-y-4 p-6 flex flex-col justify-center">
                        <p className="font-semibold text-foreground">{event.description}</p>
                        
                        <Button
                          onClick={() => handleGenerateCaption(index, event.description)}
                          disabled={loading === index}
                          size="sm"
                          className="bg-accent hover:bg-accent/90 w-full sm:w-auto"
                        >
                          {loading === index ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                          Generate a Catchy Caption
                        </Button>

                        {captions[index] && (
                          <div className="mt-4 p-3 border rounded-lg bg-muted/50 text-sm italic">
                            "{captions[index]}"
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex left-[-2.5rem]" />
          <CarouselNext className="hidden sm:flex right-[-2.5rem]" />
        </Carousel>
      </div>
    </section>
  );
}
