import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/place-holder-images";

export default function NotFound() {
  const notFoundImage = PlaceHolderImages.find(
    (img) => img.id === "not-found-pet",
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4 py-16">
      {notFoundImage && (
        <Image
          src={notFoundImage.imageUrl}
          alt={notFoundImage.description}
          width={250}
          height={250}
          className="rounded-full mb-8"
          data-ai-hint={notFoundImage.imageHint}
        />
      )}
      <h1 className="text-4xl sm:text-5xl font-headline font-bold mt-8">
        404 - Page Not Found
      </h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-md mx-auto">
        Oops! It seems we've lost the scent. The page you're looking for might
        have been moved or doesn't exist.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
