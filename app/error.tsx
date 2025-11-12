"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4 py-16">
      <h1 className="text-4xl sm:text-5xl font-headline font-bold">
        500 - Server Error
      </h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-md mx-auto">
        Whoops! Something went wrong on our end. Please try again in a moment.
      </p>
      <div className="mt-8 flex gap-4">
        <Button onClick={() => reset()} size="lg">
          Try Again
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="/">Go Home</a>
        </Button>
      </div>
    </div>
  );
}
