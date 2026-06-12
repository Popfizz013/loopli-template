"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";

interface StatsCounterItem {
  value: number;
  label: string;
  suffix?: string;
}

interface StatsCounterProps {
  items: StatsCounterItem[];
}

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest).toLocaleString());
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, { duration: 1.5, ease: "easeOut" });
    return controls.stop;
  }, [inView, motionValue, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function StatsCounter({ items }: StatsCounterProps) {
  return (
    <section className="w-full bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2 text-center">
              <div className="flex items-baseline text-4xl font-bold text-primary sm:text-5xl">
                <Counter value={item.value} />
                {item.suffix && <span>{item.suffix}</span>}
              </div>
              <span className="text-sm text-muted-foreground sm:text-base">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
