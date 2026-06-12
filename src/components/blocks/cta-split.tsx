import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CtaSplitProps {
  heading: string;
  subheading: string;
  cta: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

export default function CtaSplit({
  heading,
  subheading,
  cta,
  ctaHref,
  image,
  imageAlt,
}: CtaSplitProps) {
  return (
    <section className="w-full bg-muted">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start gap-6 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {heading}
          </h2>
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            {subheading}
          </p>
          <Button size="lg" nativeButton={false} render={<Link href={ctaHref}>{cta}</Link>} />
        </div>
        <div className="relative aspect-square w-full overflow-hidden rounded-xl lg:aspect-[4/3]">
          <Image src={image} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
