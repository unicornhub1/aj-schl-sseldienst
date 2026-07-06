import LocationPage from "@/components/LocationPage";
import { locations } from "@/data/locations";

const loc = locations.blankenese;

export const metadata = {
  title: loc.title,
  description: loc.description,
  alternates: { canonical: `https://aj-schluesseldienst.de/hamburg-${loc.slug}` },
  openGraph: {
    title: `${loc.title} | AJ Schlüsseldienst Hamburg`,
    description: loc.description,
    url: `https://aj-schluesseldienst.de/hamburg-${loc.slug}`,
  },
};

export default function Page() {
  return <LocationPage data={loc} />;
}
