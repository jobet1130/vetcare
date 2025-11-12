import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { Toaster } from "@/components/ui/sonner";
import { ScrollToTop } from "@/components/layouts/ScrollToTop";

export const metadata: Metadata = {
  title: "VetCare Connect - Compassionate Veterinary Care",
  description:
    "Professional veterinary care for your furry family. We offer check-ups, surgery, grooming, vaccinations, and more.",
  openGraph: {
    title: "VetCare Connect - Compassionate Veterinary Care",
    description: "Professional veterinary care for your furry family",
    url: "https://vetcareconnect.com",
    siteName: "VetCare Connect",
    images: [
      {
        url: "https://picsum.photos/seed/og-image/1200/630", // Replace with a branded OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VetCare Connect - Compassionate Veterinary Care",
    description: "Professional veterinary care for your furry family.",
    images: ["https://picsum.photos/seed/og-image/1200/630"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Header />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
