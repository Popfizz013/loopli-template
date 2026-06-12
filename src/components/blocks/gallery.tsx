import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryProps {
  heading: string;
  subheading: string;
  images: GalleryImage[];
}

export default function Gallery({ heading, subheading, images }: GalleryProps) {
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
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <figure key={image.src} className="flex flex-col gap-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
              </div>
              {image.caption && (
                <figcaption className="text-sm text-muted-foreground">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
