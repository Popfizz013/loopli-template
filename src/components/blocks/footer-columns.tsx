import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

interface FooterColumnsProps {
  logo: string;
  blurb: string;
  columns: FooterColumn[];
  phone: string;
  email: string;
  copyright: string;
}

export default function FooterColumns({
  logo,
  blurb,
  columns,
  phone,
  email,
  copyright,
}: FooterColumnsProps) {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <div className="relative h-10 w-35">
              <Image src={logo} alt="" fill className="object-contain object-left" />
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">{blurb}</p>
            <div className="flex flex-col gap-2">
              <a href={`tel:${phone}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Phone className="size-4" />
                {phone}
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Mail className="size-4" />
                {email}
              </a>
            </div>
          </div>
          {columns.map((column) => (
            <div key={column.heading} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-foreground">
                {column.heading}
              </h3>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-8" />
        <p className="text-center text-sm text-muted-foreground">{copyright}</p>
      </div>
    </footer>
  );
}
