"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AcmNmitLogo } from "../AcmNmitLogo";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#events", label: "Events" },
    { href: "/#benefits", label: "Benefits" },
    { href: "/#office-bearers", label: "Team" },
    { href: "/#recruitment", label: "Recruitment" },
    { href: "/#contact", label: "Contact" },
];


export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image src="/nmit_acm.jpg" alt="NMIT ACM Logo" width={32} height={32} className="h-8 w-auto" />
          <span className="text-md font-bold text-primary font-headline">NMIT ACM</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 text-sm font-medium md:flex lg:gap-6">
          {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-foreground" prefetch={false}>
                {link.label}
              </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
            <Button asChild size="sm" className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#join-now">Join Now</Link>
            </Button>

            {/* Mobile Navigation */}
            <div className="md:hidden">
                 <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Open Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full max-w-xs bg-background">
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-between p-4 border-b">
                                <AcmNmitLogo />
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <X className="h-6 w-6" />
                                        <span className="sr-only">Close Menu</span>
                                    </Button>
                                </SheetTrigger>
                            </div>
                            <nav className="flex flex-col gap-4 p-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                             <div className="mt-auto p-4">
                                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                                    <Link href="#join-now" onClick={() => setIsOpen(false)}>Join Now</Link>
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
