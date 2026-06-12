"use client";

import dynamic from "next/dynamic";

const ReactCompareSlider = dynamic(
  () => import("react-compare-slider").then((mod) => mod.ReactCompareSlider),
  { ssr: false }
);
const ReactCompareSliderImage = dynamic(
  () => import("react-compare-slider").then((mod) => mod.ReactCompareSliderImage),
  { ssr: false }
);

interface BeforeAfterPair {
  before: string;
  after: string;
  label: string;
}

interface GalleryBeforeAfterProps {
  heading: string;
  subheading: string;
  pairs: BeforeAfterPair[];
}

export default function GalleryBeforeAfter({
  heading,
  subheading,
  pairs,
}: GalleryBeforeAfterProps) {
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
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {pairs.map((pair) => (
            <div key={pair.label} className="flex flex-col gap-3">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={pair.before} alt={`${pair.label} before`} />}
                  itemTwo={<ReactCompareSliderImage src={pair.after} alt={`${pair.label} after`} />}
                />
              </div>
              <span className="text-center text-sm font-medium text-foreground">
                {pair.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
