// Reusable LocalBusiness (Locksmith) JSON-LD with areaServed for location/service pages.
// NAP verified from the live site's structured data (05.06.2026) — see config/nap.json.
// Keep these constants in sync with the homepage Locksmith schema in app/page.tsx.

interface LocalBusinessSchemaProps {
  /** Served area, e.g. "Hamburg-Winterhude". Used as areaServed.name. */
  area: string;
  /** Absolute canonical URL of the page embedding this schema. */
  url: string;
  /** Optional short description override. */
  description?: string;
}

export default function LocalBusinessSchema({ area, url, description }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    name: "AJ Schlüsseldienst Hamburg",
    image: "https://aj-schluesseldienst.de/images/ajplus800.jpg",
    telephone: "+494018204419",
    email: "info@aj-schluesseldienst.de",
    url,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Winterhuder Weg 59",
      postalCode: "22085",
      addressLocality: "Hamburg",
      addressRegion: "HH",
      addressCountry: "DE",
    },
    geo: { "@type": "GeoCoordinates", latitude: 53.5511, longitude: 9.9937 },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "1108",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: { "@type": "City", name: area },
    description:
      description ??
      `Schlüsseldienst in ${area} – 24/7 Schlüsselnotdienst, Türöffnung in 20-30 Minuten vor Ort. Faire Festpreise, über 19 Jahre Erfahrung.`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
