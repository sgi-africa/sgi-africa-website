import { SITE_URL, siteConfig } from "./nav-config";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Software Group Innovation",
  alternateName: ["SGI", "SGI Africa"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/opengraph-image`,
    width: 1200,
    height: 630,
  },
  description:
    "Software Group Innovation (SGI) is an African technology startup building digital systems that drive financial inclusion, community transformation and digital empowerment — for organisations, businesses and communities across Africa and beyond.",
  foundingLocation: {
    "@type": "Place",
    name: "Dar es Salaam, Tanzania",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.officeAddressLines[0],
    addressLocality: "Dar es Salaam",
    addressCountry: "TZ",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.email,
    contactType: "customer support",
    availableLanguage: "English",
  },
  areaServed: {
    "@type": "Place",
    name: "Africa",
  },
  knowsAbout: [
    "Financial Inclusion",
    "Digital Transformation",
    "Fintech Innovation",
    "Health Innovation",
    "Cybersecurity",
    "Community Development Technology",
    "Software Development",
    "VICOBA Systems",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      name: "SGI VICOBA",
      description:
        "Community savings and lending platform for VICOBA groups and financial institutions.",
      url: "https://sgi-vicoba.com/",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SGI Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Technology Solutions",
        description:
          "Custom software, business automation, and web & mobile platforms.",
      },
      {
        "@type": "Offer",
        name: "Financial Innovation",
        description:
          "VICOBA systems, transparent savings & lending, and fund-disbursement platforms.",
      },
      {
        "@type": "Offer",
        name: "Health Innovation",
        description:
          "AI-powered health tools, digital healthcare access, and community awareness systems.",
      },
      {
        "@type": "Offer",
        name: "Cybersecurity Services",
        description:
          "Network security, penetration testing, cloud security, and data privacy.",
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Software Group Innovation",
  url: SITE_URL,
  description:
    "The official website of Software Group Innovation (SGI Africa) — an African technology startup and innovation ecosystem.",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: "en",
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
