import { DynamicIcon } from "@/lib/dynamic-icon";

interface TrustBadgeItem {
  icon: string;
  label: string;
}

interface TrustBadgesProps {
  items: TrustBadgeItem[];
}

export default function TrustBadges({ items }: TrustBadgesProps) {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <DynamicIcon name={item.icon} className="size-6 text-primary" />
              <span className="text-sm font-medium text-foreground sm:text-base">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
