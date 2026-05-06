import Link from "next/link";
import { ArrowUpRightIcon, MailIcon, MapPinIcon } from "lucide-react";

import { Logo } from "./logo";
import { navLinks, siteConfig, sgiProducts } from "./nav-config";

function LinkedinGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.57h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.41v6.32ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

function XGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

const footerSections = [
  {
    title: "Explore",
    links: navLinks,
  },
  {
    title: "Products",
    links: sgiProducts.map((p) => ({
      href: p.href,
      label: p.name,
    })),
  },
  {
    title: "Services",
    links: [
      { href: "/services#technology", label: "Technology Solutions" },
      { href: "/services#financial", label: "Financial Innovation" },
      { href: "/services#health", label: "Health Innovation" },
      { href: "/services#cybersecurity", label: "Cybersecurity" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border/60 bg-card/40">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-accent/40 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-5">
            <Logo size="md" />
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MailIcon className="size-4 text-accent" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPinIcon className="size-4 text-accent" />
                <span>{siteConfig.location}</span>
              </li>
            </ul>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-border/70 text-muted-foreground transition hover:border-accent/50 hover:text-accent"
              >
                <LinkedinGlyph className="size-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-border/70 text-muted-foreground transition hover:border-accent/50 hover:text-accent"
              >
                <XGlyph className="size-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link) => {
                    const isExternal = link.href.startsWith("http");
                    return (
                      <li key={`${section.title}-${link.href}`}>
                        {isExternal ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                          >
                            {link.label}
                            <ArrowUpRightIcon className="size-3 opacity-70" />
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                Get in touch
              </h3>
              <p className="text-sm text-muted-foreground">
                Ready to build impactful technology together?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-accent transition hover:gap-2.5"
              >
                Start a conversation
                <ArrowUpRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-[11px] uppercase tracking-[0.18em]">
            Innovation · Technology · Opportunity
          </p>
        </div>
      </div>
    </footer>
  );
}
