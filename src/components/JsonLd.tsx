const siteUrl = "https://skillerchampion.com";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Skiller Champion",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Skiller Champion helps startups launch and scale on Web3. We provide smart contract development, token design, and go-to-market support for the next generation of builders.",
  foundingDate: "2024",
  sameAs: [
    "https://www.linkedin.com/company/skiller-champion",
    "https://twitter.com/skillerchampion",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "business development",
    url: `${siteUrl}/#contact`,
    areaServed: "Worldwide",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Skiller Champion",
  url: siteUrl,
  description:
    "Web3 infrastructure and services for startups. Smart contracts, token design, and go-to-market support.",
  publisher: {
    "@type": "Organization",
    name: "Skiller Champion",
    logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
  },
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
    </>
  );
}
