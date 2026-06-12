import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroSplitProps {
  headline: string;
  subheadline: string;
  cta: string;
  image: string;
}

export function HeroSplit({ headline, subheadline, cta, image }: HeroSplitProps) {
  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start gap-6 text-left">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {headline}
          </h1>
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            {subheadline}
          </p>
          <Button size="lg">{cta}</Button>
        </div>
        <div className="relative aspect-square w-full overflow-hidden rounded-xl lg:aspect-[4/3]">
          <Image src={image} alt="" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
