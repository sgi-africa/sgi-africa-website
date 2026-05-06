"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRightIcon, MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Logo } from "./logo";
import { navLinks } from "./nav-config";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-10"
      >
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  {active ? (
                    <span
                      aria-hidden
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            asChild
            size="lg"
            className="h-10 bg-brand-gradient px-4 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_rgba(0,212,255,0.55)] hover:opacity-95 [a]:hover:bg-transparent"
          >
            <Link href="/contact">
              Contact Us
              <ArrowRightIcon className="ml-1.5 size-4" />
            </Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon-lg"
              className="md:hidden"
              aria-label="Open navigation menu"
            >
              <MenuIcon className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full max-w-sm border-l-border/60 bg-background"
          >
            <SheetHeader className="border-b border-border/60 px-6 py-5">
              <SheetTitle className="text-left text-base font-semibold">
                <Logo size="sm" href={null} />
              </SheetTitle>
            </SheetHeader>

            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <SheetClose asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors",
                          active
                            ? "bg-accent/10 text-accent"
                            : "text-foreground hover:bg-muted"
                        )}
                      >
                        <span>{link.label}</span>
                        <ArrowRightIcon className="size-4 opacity-60" />
                      </Link>
                    </SheetClose>
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto border-t border-border/60 px-6 py-5">
              <SheetClose asChild>
                <Button
                  asChild
                  size="lg"
                  className="h-12 w-full bg-brand-gradient text-base font-semibold text-white [a]:hover:bg-transparent"
                >
                  <Link href="/contact">
                    Contact Us
                    <ArrowRightIcon className="ml-1.5 size-4" />
                  </Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
