import { DynamicIcon } from "@/lib/dynamic-icon";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface AboutValueItem {
  icon: string;
  title: string;
  description: string;
}

interface AboutValuesProps {
  heading: string;
  subheading: string;
  items: AboutValueItem[];
}

export default function AboutValues({
  heading,
  subheading,
  items,
}: AboutValuesProps) {
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
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <DynamicIcon name={item.icon} className="size-6 text-primary" />
                </div>
                <CardTitle className="mt-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
