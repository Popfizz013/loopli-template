import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialItem {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

interface TestimonialsProps {
  heading: string;
  items: TestimonialItem[];
}

export default function Testimonials({ heading, items }: TestimonialsProps) {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {heading}
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.author}>
              <CardContent className="flex flex-col gap-4">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={cn(
                        "size-4",
                        index < item.rating
                          ? "fill-accent text-accent"
                          : "fill-muted text-muted"
                      )}
                    />
                  ))}
                </div>
                <p className="text-base text-foreground">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">
                    {item.author}
                  </span>
                  <span className="text-sm text-muted-foreground">{item.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
