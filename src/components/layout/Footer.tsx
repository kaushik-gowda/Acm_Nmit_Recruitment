import { GraduationCap, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="bg-muted py-12">
      <div className="container mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-primary font-headline">ACM NMIT Onboard</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            The official student chapter of the Association for Computing Machinery at Nitte Meenakshi Institute of Technology.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h4 className="font-bold text-foreground font-headline">Contact Us</h4>
          <a href="mailto:acm.nmit@nmit.ac.in" className="text-muted-foreground hover:text-primary transition-colors">
            acm.nmit@nmit.ac.in
          </a>
          <p className="text-muted-foreground">Nitte Meenakshi Institute of Technology, Bangalore</p>
        </div>
        <div className="flex flex-col items-start gap-2">
           <h4 className="font-bold text-foreground font-headline">Follow Us</h4>
           <div className="flex gap-4">
             <Link href="#" prefetch={false} aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><TwitterIcon className="h-6 w-6" /></Link>
             <Link href="#" prefetch={false} aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors"><InstagramIcon className="h-6 w-6" /></Link>
             <Link href="#" prefetch={false} aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><LinkedinIcon className="h-6 w-6" /></Link>
           </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} ACM NMIT Student Chapter. All rights reserved.
      </div>
    </footer>
  );
}
