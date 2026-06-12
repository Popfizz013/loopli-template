import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroCenteredProps {
  headline: string;
  subheadline: string;
  primaryCta: string;
  primaryCtaHref: string;
  secondaryCta: string;
  secondaryCtaHref: string;
}

export default function HeroCentered({
  headline,
  subheadline,
  primaryCta,
  primaryCtaHref,
  secondaryCta,
  secondaryCtaHref,
}: HeroCenteredProps) {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {headline}
        </h1>
        <p className="max-w-xl text-base text-muted-foreground sm:text-lg md:text-xl">
          {subheadline}
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            nativeButton={false}
            render={<Link href={primaryCtaHref}>{primaryCta}</Link>}
          />
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<Link href={secondaryCtaHref}>{secondaryCta}</Link>}
          />
        </div>
      </div>
    </section>
  );
}
