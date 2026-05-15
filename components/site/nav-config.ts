export const SITE_URL = "https://sgi-africa.com";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/#products", label: "Products" },
  { href: "/impact", label: "Impact" },
  { href: "/contact", label: "Contact" },
] as const;

/** Live products in market (external product sites). */
export const sgiProducts = [
  {
    name: "SGI VICOBA",
    tagline: "Community savings & lending, digitised",
    description:
      "Our flagship platform for VICOBA groups and community financial institutions - transparent ledgers, member onboarding, savings and lending workflows, and audit-ready reporting. Built for grassroots financial inclusion.",
    href: "https://sgi-vicoba.com/",
    category: "Financial innovation",
  },
] as const;

export const siteConfig = {
  name: "Software Group Innovation",
  shortName: "SGI",
  tagline: "Technology Solutions for Impact-Driven Organizations",
  description:
    "Software Group Innovation builds digital systems that drive financial inclusion, community transformation and digital empowerment across Africa and beyond.",
  email: "info@sgi-africa.com",
  /** Street + mailing lines (single source of truth for office address). */
  officeAddressLines: [
    "Textile House, Morogoro Road / Indira Gandhi Street",
    "Dar es Salaam, Tanzania",
  ] as const,
  /** Short line for chips, hero bullets, metadata. */
  locationSummary: "Dar es Salaam, Tanzania · Operating globally",
  social: {
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com",
  },
} as const;
