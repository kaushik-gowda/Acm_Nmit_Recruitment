import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function JoinNow() {
  return (
    <section id="join-now" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Kickstart your journey with NMIT ACM today!</h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          Become a part of our dynamic community and take the first step towards an exciting journey in computing.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-10 py-7 text-lg">
                <Link href="#" prefetch={false}>
                    Sign Up for the Recruitment Drive
                </Link>
            </Button>
            <div className="flex-shrink-0">
                <div className="bg-white p-2 rounded-lg shadow-md">
                <Image 
                    src="https://placehold.co/150x150/png?text=QR+Code" 
                    alt="Registration QR Code"
                    data-ai-hint="qr code" 
                    width={150}
                    height={150}
                />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
