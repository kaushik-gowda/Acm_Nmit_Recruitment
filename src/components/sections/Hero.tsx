import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code, Cpu, Dna } from "lucide-react";

function AnimatedShapes() {
    const shapes = [
      { id: 1, component: <Code className="w-full h-full" />, size: 'w-10 h-10 md:w-16 md:h-16', top: '20%', left: '10%', duration: '15s' },
      { id: 2, component: <Cpu className="w-full h-full" />, size: 'w-8 h-8 md:w-12 md:h-12', top: '30%', left: '80%', duration: '12s' },
      { id: 3, component: <Dna className="w-full h-full" />, size: 'w-12 h-12 md:w-20 md:h-20', top: '70%', left: '20%', duration: '18s' },
      { id: 4, shape: 'circle', size: 'w-6 h-6 md:w-8 md:h-8', top: '80%', left: '90%', duration: '10s' },
      { id: 5, shape: 'square', size: 'w-5 h-5 md:w-7 md:h-7', top: '10%', left: '40%', duration: '14s' },
    ];
  
    return (
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        {shapes.map(item => {
          const style = {
            top: item.top,
            left: item.left,
            animation: `float ${item.duration} ease-in-out infinite`,
          };
  
          if (item.component) {
            return (
              <div key={item.id} className={`absolute text-white/30 ${item.size}`} style={style}>
                {item.component}
              </div>
            );
          }
  
          return (
             <div 
              key={item.id}
              className={`absolute bg-white/30 ${item.size} ${item.shape === 'circle' ? 'rounded-full' : 'rounded-md'}`} 
              style={style}
            />
          );
        })}
      </div>
    );
  }

export function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center text-foreground overflow-hidden">
      <Image
        src="https://picsum.photos/1920/1080?random=5"
        alt="Students at a hackathon"
        data-ai-hint="students hackathon"
        fill
        className="object-cover -z-20 brightness-50"
        priority
      />
      <AnimatedShapes />
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 bg-background/80 backdrop-blur-sm p-8 rounded-xl">
          <div className="flex items-center justify-center gap-4 text-primary">
             <Image src="/nmit_acm.jpg" alt="NMIT ACM Logo" width={64} height={64} className="h-16 w-auto" />
             <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter">
                    NMIT ACM Student Chapter
                </h1>
             </div>
          </div>
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto">
            Join the NMIT ACM Student Chapter and be part of a global community of innovators, coders, and creators.
            <br />
            <span className="font-semibold text-foreground">Hosted under the Department of Artificial Intelligence &amp; Data Science, NMIT.</span>
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
