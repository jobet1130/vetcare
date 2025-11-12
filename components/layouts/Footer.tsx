import Link from "next/link";
import {
  PawPrint,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-6 py-12">
        <div className="flex flex-col gap-4 md:col-span-2">
          <Link
            href="/"
            className="flex items-center gap-2 font-headline font-bold text-xl text-foreground"
          >
            <PawPrint className="h-6 w-6 text-primary" />
            <span>VetCare Connect</span>
          </Link>
          <p className="max-w-md">
            Providing compassionate, professional veterinary care for your
            furry, feathery, and scaly family members.
          </p>
          <div className="flex gap-4 mt-2">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-headline font-bold text-foreground mb-4">
            Contact Us
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>123 Pet Lane, Animal City, 12345</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>(123) 456-7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>contact@vetcareconnect.com</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-headline font-bold text-foreground mb-4">
            Operating Hours
          </h3>
          <ul className="space-y-2">
            <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
            <li>Saturday: 9:00 AM - 3:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>
      <div className="bg-muted/50 py-4">
        <div className="container mx-auto text-center text-sm">
          &copy; {new Date().getFullYear()} VetCare Connect. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}
