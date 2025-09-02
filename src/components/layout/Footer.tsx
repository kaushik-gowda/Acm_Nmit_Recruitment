import { TwitterIcon, InstagramIcon, LinkedinIcon, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  { name: "Twitter", icon: TwitterIcon, href: "#" },
  { name: "Instagram", icon: InstagramIcon, href: "#" },
  { name: "LinkedIn", icon: LinkedinIcon, href: "#" },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-muted py-12">
      <div className="container mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 px-4 md:grid-cols-3 md:px-6">
        
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Image src="/acm_logo.jpg" alt="ACM NMIT Logo" width={32} height={32} className="h-8 w-auto" />
            <span className="text-lg font-bold text-primary font-headline">ACM NMIT Onboard</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            The official student chapter of the Association for Computing Machinery at Nitte Meenakshi Institute of Technology.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(social => (
              <Link key={social.name} href={social.href} prefetch={false} aria-label={social.name} className="text-muted-foreground hover:text-primary transition-colors">
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:col-span-2">
            <div className="flex flex-col items-start gap-4">
                <h4 className="font-bold text-foreground font-headline">Contact Coordinators</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">John Doe - Chair</p>
                    <a href="mailto:john.doe@example.com" className="flex items-center gap-2 hover:text-primary"><Mail className="w-4 h-4"/> john.doe@example.com</a>
                    <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary"><Phone className="w-4 h-4"/> +1 234 567 890</a>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">Jane Smith - Vice Chair</p>
                    <a href="mailto:jane.smith@example.com" className="flex items-center gap-2 hover:text-primary"><Mail className="w-4 h-4"/> jane.smith@example.com</a>
                    <a href="tel:+1234567891" className="flex items-center gap-2 hover:text-primary"><Phone className="w-4 h-4"/> +1 234 567 891</a>
                </div>
            </div>

            <div className="flex flex-col items-start gap-4">
                <h4 className="font-bold text-foreground font-headline">Visit Us</h4>
                <div className="text-sm text-muted-foreground space-y-2">
                    <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-1 text-primary shrink-0"/>
                        <span>Nitte Meenakshi Institute of Technology, P.B.No.6429, Yelahanka, Bangalore 560064</span>
                    </div>
                    <div className="aspect-video w-full overflow-hidden rounded-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.646849449335!2d77.58782481529124!3d13.058319690799772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae18b625528d61%3A0x27873236b2f44f!2sNitte%20Meenakshi%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1678886456789!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>

      </div>
      <div className="container mx-auto mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} ACM NMIT Student Chapter. All rights reserved.
      </div>
    </footer>
  );
}
