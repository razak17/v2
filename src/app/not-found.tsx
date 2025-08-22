import { Shell } from "@/components//shell";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Shell variant="centered" className="max-w-md font-mono">
      <section className="prose prose-zinc dark:prose-invert flex max-w-2xl flex-col gap-2 text-center">
        <h1 className="font-medium">Page not found</h1>
        <p className="text-muted-foreground text-sm">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button variant="outline" className="mt-4" asChild>
          <a href="/">Go back to home</a>
        </Button>
      </section>
    </Shell>
  );
}
