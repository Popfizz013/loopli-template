import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ImageTextSplitProps {
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  cta?: string;
  ctaHref?: string;
}

export default function ImageTextSplit({
  heading,
  body,
  image,
  imageAlt,
  imagePosition,
  cta,
  ctaHref,
}: ImageTextSplitProps) {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div
          className={cn(
            "relative aspect-square w-full overflow-hidden rounded-xl lg:aspect-[4/3]",
            imagePosition === "right" && "lg:order-2"
          )}
        >
          <Image src={image} alt={imageAlt} fill className="object-cover" />
        </div>
        <div className="flex flex-col items-start gap-6 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {heading}
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">{body}</p>
          {cta && ctaHref && (
            <Button size="lg" nativeButton={false} render={<Link href={ctaHref}>{cta}</Link>} />
          )}
        </div>
      </div>
    </section>
  );
}
