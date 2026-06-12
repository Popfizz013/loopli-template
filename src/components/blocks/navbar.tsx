import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  logo: string;
  links: NavLink[];
  cta: string;
}

export function Navbar({ logo, links, cta }: NavbarProps) {
  return (
    <header className="w-full border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="" width={120} height={36} className="h-9 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button>{cta}</Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="size-5" />
              </Button>
            }
          />
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 px-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base font-medium text-foreground transition-colors hover:text-muted-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Button className="w-full">{cta}</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
