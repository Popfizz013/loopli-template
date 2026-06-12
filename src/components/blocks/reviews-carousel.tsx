import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ReviewItem {
  name: string;
  rating: number;
  text: string;
  date: string;
}

interface ReviewsCarouselProps {
  heading: string;
  items: ReviewItem[];
}

export default function ReviewsCarousel({ heading, items }: ReviewsCarouselProps) {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {heading}
        </h2>
        <div className="mt-12 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {items.map((item) => (
            <Card
              key={`${item.name}-${item.date}`}
              className="w-[85%] shrink-0 snap-start sm:w-[45%] lg:w-[30%]"
            >
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
                <p className="text-base text-foreground">{item.text}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">
                    {item.name}
                  </span>
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
