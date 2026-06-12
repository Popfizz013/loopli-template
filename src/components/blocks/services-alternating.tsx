import Image from "next/image";
import { cn } from "@/lib/utils";

interface ServiceAlternatingItem {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface ServicesAlternatingProps {
  heading: string;
  items: ServiceAlternatingItem[];
}

export default function ServicesAlternating({
  heading,
  items,
}: ServicesAlternatingProps) {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {heading}
        </h2>
        <div className="mt-12 flex flex-col gap-16">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <div
                className={cn(
                  "relative aspect-square w-full overflow-hidden rounded-xl lg:aspect-[4/3]",
                  index % 2 === 1 && "lg:order-2"
                )}
              >
                <Image src={item.image} alt={item.imageAlt} fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-4 text-left">
                <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {item.title}
                </h3>
                <p className="text-base text-muted-foreground sm:text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
