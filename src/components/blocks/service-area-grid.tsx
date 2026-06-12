import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface ServiceArea {
  name: string;
  href: string;
}

interface ServiceAreaGridProps {
  heading: string;
  subheading: string;
  areas: ServiceArea[];
}

export default function ServiceAreaGrid({
  heading,
  subheading,
  areas,
}: ServiceAreaGridProps) {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {subheading}
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <Link key={area.name} href={area.href}>
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {area.name}
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
