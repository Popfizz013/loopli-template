interface AboutStatItem {
  value: string;
  label: string;
}

interface AboutStatsProps {
  heading: string;
  items: AboutStatItem[];
}

export default function AboutStats({ heading, items }: AboutStatsProps) {
  return (
    <section className="w-full bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-center text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          {heading}
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2 text-center">
              <span className="text-4xl font-bold text-primary-foreground sm:text-5xl">
                {item.value}
              </span>
              <span className="text-sm text-primary-foreground/80 sm:text-base">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
