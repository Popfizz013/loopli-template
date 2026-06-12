import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CtaBannerProps {
  heading: string;
  subheading: string;
  cta: string;
  ctaHref: string;
}

export default function CtaBanner({ heading, subheading, cta, ctaHref }: CtaBannerProps) {
  return (
    <section className="w-full bg-primary">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          {heading}
        </h2>
        <p className="max-w-xl text-base text-primary-foreground/90 sm:text-lg">
          {subheading}
        </p>
        <Button
          size="lg"
          variant="secondary"
          nativeButton={false}
          render={<Link href={ctaHref}>{cta}</Link>}
        />
      </div>
    </section>
  );
}
