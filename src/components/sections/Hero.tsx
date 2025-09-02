import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center text-foreground">
      <Image
        src="https://picsum.photos/1920/1080?random=5"
        alt="Students at a hackathon"
        data-ai-hint="students hackathon"
        fill
        className="object-cover -z-10 brightness-75"
        priority
      />
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8 bg-background/80 backdrop-blur-sm p-8 rounded-xl">
          <div className="flex items-center justify-center gap-4 text-primary">
             <Image src="/acm_logo.jpg" alt="ACM NMIT Logo" width={64} height={64} className="h-16 w-auto" />
             <h1 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter">
                Innovate. Collaborate. Lead.
             </h1>
          </div>
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto">
            Join the ACM NMIT Student Chapter and be part of a global community of innovators, coders, and creators.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
              <Link href="#join-now">Join Now 🚀</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
