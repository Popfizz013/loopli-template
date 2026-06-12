import Image from "next/image";

interface AboutStat {
  value: string;
  label: string;
}

interface AboutSplitProps {
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
  stats?: AboutStat[];
}

export default function AboutSplit({
  heading,
  body,
  image,
  imageAlt,
  stats,
}: AboutSplitProps) {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl lg:aspect-[4/3]">
          <Image src={image} alt={imageAlt} fill className="object-cover" />
        </div>
        <div className="flex flex-col items-start gap-6 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {heading}
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">{body}</p>
          {stats && stats.length > 0 && (
            <div className="mt-2 grid w-full grid-cols-2 gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-3xl font-bold text-primary sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
