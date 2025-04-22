
import { Theme } from "@radix-ui/themes";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    default: "Vaibhavi Enterprises | Industrial Coatings & Filter Solutions",
    template: "%s | Vaibhavi Enterprises",
  },
  description:
    "Since 1989, Vaibhavi Enterprises delivers high-performance PTFE, HALAR, and epoxy coatings, along with advanced porous plastic filter media for pharma, chemical, water treatment, and textile industries.",
  keywords: [
    "PTFE coatings",
    "Xylan coating",
    "HALAR ECTFE",
    "Fusion Bonded Epoxy",
    "porous plastic filters",
    "industrial coating Mumbai",
    "Vaicon filters",
    "water purifier filters",
    "pharma filter solutions",
    "chemical-resistant coatings",
    "coating manufacturers in India",
    "PTFE coating manufacturers in India",
    "HALAR ECTFE coating services in Mumbai",
    "Porous plastic filter cartridge suppliers",
    "Industrial coating for chemical industries",
    "Pharmaceutical-grade filter media",
    "Xylan non-stick coating for metal parts",
    "Anti-corrosive coatings for pipelines",
    "Filter media for water treatment plants",
    "Vaicon porous filter media suppliers",
    "PTFE coating services in Mumbai",
    "Industrial filter media in Maharashtra",
    "HALAR coating company in India",
    "Coating plant in Navi Mumbai",
    "Filter media suppliers near me",
    "Mumbai-based industrial coating experts",
    "Fluoropolymer coatings in India",
    "Local filter manufacturer for pharma",
    "Vaibhavi Enterprises products",
    "Vaibhavi Enterprises coating services",
    "Vaibhavi filter solutions",
    "Vaibhavi PTFE coatings",
    "Vaibhavi porous plastic filters",
    "Vaibhavi Enterprises Mumbai",
    "Contact Vaibhavi Enterprises",
    "Request quote from Vaibhavi Enterprises",
    "Best industrial coating provider",
    "Order filter media for pharma plant",
    "Cost-effective coating services India",
    "Price of porous filter media",
    "Anti-stick industrial coating",
    "Plastic filtration technology",
    "High-temperature resistant coating",
    "Filter discs and elements",
    "Custom industrial coating solutions",
    "Surface treatment for metals abstract",
    "Coating applications in pharma abstract",
    "Thermoplastic coatings abstract",
    "Hydrophobic filtration systems",
    "Filter media porosity types",
  ],
  authors: [
    { name: "Vaibhavi Enterprises", url: "https://www.vaibhavientp.com" },
  ],
  creator: "Vaibhavi Enterprises",
  publisher: "Vaibhavi Enterprises",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Vaibhavi Enterprises | Experts in Coatings & Filters",
    description:
      "Discover premium fluoropolymer coating services and porous plastic filter products for pharmaceutical, chemical, and water treatment industries.",
    url: "https://www.vaibhavientp.com",
    siteName: "Vaibhavi Enterprises",
    images: [
      {
        url: "https://www.vaibhavientp.com/images/og-banner.jpg", // Replace with actual banner image
        width: 1200,
        height: 630,
        alt: "Vaibhavi Enterprises Coating and Filter Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibhavi Enterprises | Experts in Coatings & Filters",
    description:
      "Pioneers in fluoropolymer coating and porous plastic filter solutions since 1989.",
    site: "@vaibhavientp", // Replace with actual Twitter handle
    creator: "@vaibhavientp",
    images: ["https://www.vaibhavientp.com/images/og-banner.jpg"],
  },
  metadataBase: new URL("https://www.vaibhavientp.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Theme>
        <Header />
        <body>{children}</body>
        <Footer />
      </Theme>
    </html>
  );
}
