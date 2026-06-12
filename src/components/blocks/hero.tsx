import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroProps {
  headline: string;
  subheadline: string;
  cta: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
}

export default function Hero({
  headline,
  subheadline,
  cta,
  ctaHref,
  image,
  imageAlt,
}: HeroProps) {
  return (
    <section className="relative isolate flex min-h-[80vh] w-full items-center justify-center overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="absolute inset-0 -z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-foreground/50" />
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-background sm:text-5xl md:text-6xl">
          {headline}
        </h1>
        <p className="max-w-xl text-base text-background/90 sm:text-lg md:text-xl">
          {subheadline}
        </p>
        <Button
          size="lg"
          className="mt-2"
          nativeButton={false}
          render={<Link href={ctaHref}>{cta}</Link>}
        />
      </div>
    </section>
  );
}
