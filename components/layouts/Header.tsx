"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, PawPrint } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useScrollPosition } from "../hooks/use-scroll-position";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/team", label: "Our Team" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const scrollPosition = useScrollPosition();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const headerClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
    scrollPosition > 50
      ? "bg-background/95 border-b border-border/50 shadow-sm backdrop-blur-sm"
      : "bg-transparent border-b border-transparent",
  );

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-headline font-bold text-xl"
        >
          <PawPrint className="h-6 w-6 text-primary" />
          <span>VetCare Connect</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex">
            <Link href="/appointment">Book Appointment</Link>
          </Button>
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 p-4 border-b">
                  <PawPrint className="h-6 w-6 text-primary" />
                  <span className="font-headline font-bold text-xl">
                    VetCare Connect
                  </span>
                </div>
                <nav className="flex flex-col gap-4 p-4 text-lg">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-foreground/80 transition-colors hover:text-primary"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-4 border-t">
                  <Button asChild className="w-full">
                    <Link
                      href="/appointment"
                      onClick={() => setMenuOpen(false)}
                    >
                      Book Appointment
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
