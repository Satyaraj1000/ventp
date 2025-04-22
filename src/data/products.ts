export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  shortDescription: string;
  images: string[];
  features: string[];
  applications: string[];
  industries: string[];
}

export const products: Product[] = [
  {
    id: "xylan-ptfe",
    name: "Xylan PTFE Coating",
    slug: "xylan-ptfe-coating",
    category: "Coatings",
    description: "Advanced PTFE coating solution providing excellent non-stick and low friction properties, ideal for industrial applications requiring superior wear resistance and chemical protection. Our Xylan PTFE coating offers unmatched durability and performance in demanding environments.",
    shortDescription: "High-performance PTFE coating for industrial applications",
    images: [
      "/assets/xylan-ptfe-coating-1",
      "/assets/xylan-ptfe-coating-2",
      "/assets/xylan-ptfe-coating-3"
    ],
    features: [
      "Superior non-stick properties",
      "Excellent wear resistance",
      "Chemical resistance",
      "Temperature resistance up to 260°C",
      "Low friction coefficient",
      "FDA compliant formulations available",
      "Excellent release properties",
      "Superior corrosion protection"
    ],
    applications: [
      "Industrial machinery components",
      "Automotive parts and assemblies",
      "Chemical processing equipment",
      "Food processing equipment",
      "Molds and dies",
      "Valves and pumps",
      "Fasteners and hardware"
    ],
    industries: [
      "Automotive Industry",
      "Chemical Industry",
      "Food Processing",
      "Manufacturing",
      "Oil and Gas",
      "Pharmaceutical"
    ]
  },
  {
    id: "halar-ectfe",
    name: "HALAR (ECTFE) Coating",
    slug: "halar-ectfe-coating",
    category: "Coatings",
    description: "Premium ECTFE fluoropolymer coating offering exceptional chemical resistance and durability, perfect for harsh environment applications requiring superior protection. Halar coating provides outstanding barrier properties and long-term performance.",
    shortDescription: "High-performance fluoropolymer coating for extreme conditions",
    images: [
      "/assets/halar-coating-1",
      "/assets/halar-coating-2",
      "/assets/halar-coating-3"
    ],
    features: [
      "Exceptional chemical resistance",
      "Superior durability",
      "UV resistance",
      "Wide temperature range (-76°F to 340°F)",
      "Excellent adhesion",
      "High purity",
      "Excellent permeation resistance",
      "Outstanding surface properties"
    ],
    applications: [
      "Chemical storage tanks",
      "Industrial equipment",
      "Offshore structures",
      "Laboratory equipment",
      "Semiconductor processing",
      "Pharmaceutical equipment",
      "Clean room components"
    ],
    industries: [
      "Chemical Processing",
      "Semiconductor",
      "Pharmaceutical",
      "Laboratory Equipment",
      "Offshore Industry",
      "Clean Room Technology"
    ]
  },
  {
    id: "fluoropolymer",
    name: "Fluoropolymer and Other Coating",
    slug: "fluoropolymer-coating",
    category: "Coatings",
    description: "Advanced fluoropolymer coating system designed for maximum protection and longevity in demanding industrial environments. Our comprehensive range includes various fluoropolymer formulations tailored to specific application requirements.",
    shortDescription: "Advanced protective coating for industrial use",
    images: [
      "/assets/fluoropolymer-coating-1",
      "/assets/fluoropolymer-coating-2",
      "/assets/fluoropolymer-coating-3"
    ],
    features: [
      "High chemical resistance",
      "Excellent thermal stability",
      "Superior wear protection",
      "Anti-corrosion properties",
      "FDA compliant options",
      "Custom formulations available",
      "Multiple color options",
      "Excellent release properties"
    ],
    applications: [
      "Industrial equipment",
      "Chemical processing vessels",
      "Food processing equipment",
      "Pharmaceutical equipment",
      "Heat exchangers",
      "Mixing tanks",
      "Process equipment"
    ],
    industries: [
      "Chemical Industry",
      "Food Processing",
      "Pharmaceutical",
      "Manufacturing",
      "Power Generation",
      "Water Treatment"
    ]
  },
  {
    id: "fusion-bonded-epoxy",
    name: "Fusion Bonded Epoxy Coating",
    slug: "fusion-bonded-epoxy-coating",
    category: "Coatings",
    description: "High-performance fusion bonded epoxy coating providing exceptional corrosion protection and chemical resistance for metal substrates. Ideal for pipelines, rebar, and industrial applications requiring superior protection.",
    shortDescription: "Superior corrosion protection coating",
    images: [
      "/assets/fusion-bonded-epoxy-coating-1",
      "/assets/fusion-bonded-epoxy-coating-2",
      "/assets/fusion-bonded-epoxy-coating-3"
    ],
    features: [
      "Excellent corrosion resistance",
      "Superior adhesion",
      "Impact resistance",
      "Chemical resistance",
      "Temperature resistance",
      "Single layer protection",
      "Fast curing",
      "Environmentally friendly"
    ],
    applications: [
      "Pipeline coating",
      "Rebar coating",
      "Valve coating",
      "Tank lining",
      "Marine applications",
      "Underground storage",
      "Structural steel"
    ],
    industries: [
      "Oil and Gas",
      "Construction",
      "Marine",
      "Water Treatment",
      "Mining",
      "Infrastructure"
    ]
  },
  {
    id: "porous-plastic-filter",
    name: "Porous Plastic Filter Sheets",
    slug: "porous-plastic-filter-sheets",
    category: "Filters",
    description: "High-quality porous plastic filter sheets designed for optimal filtration efficiency and durability. Our filter sheets offer consistent performance and reliability in various industrial applications.",
    shortDescription: "Advanced filtration solutions for industry",
    images: [
      "/assets/porous-plastic-filter-sheets-1",
      "/assets/porous-plastic-filter-sheets-2",
      "/assets/porous-plastic-filter-sheets-3"
    ],
    features: [
      "High filtration efficiency",
      "Chemical compatibility",
      "Temperature resistant",
      "Customizable pore sizes",
      "Long service life",
      "Uniform pore distribution",
      "Low pressure drop",
      "Easy to clean"
    ],
    applications: [
      "Water filtration",
      "Air filtration",
      "Chemical processing",
      "Gas filtration",
      "Liquid filtration",
      "Venting applications",
      "Process filtration"
    ],
    industries: [
      "Pharmaceutical",
      "Chemical",
      "Water Treatment",
      "Food and Beverage",
      "Electronics",
      "Medical"
    ]
  },
  {
    id: "porous-plastic-products",
    name: "Porous Plastic Products",
    slug: "porous-plastic-products",
    category: "Filters",
    description: "Innovative porous plastic products engineered for specific filtration and separation needs. Our products combine advanced materials with precise manufacturing to deliver optimal performance.",
    shortDescription: "Specialized porous plastic solutions",
    images: [
      "/assets/porous-plastic-product-1",
      "/assets/porous-plastic-product-2",
      "/assets/porous-plastic-product-3"
    ],
    features: [
      "Custom shapes and sizes",
      "Multiple material options",
      "Controlled porosity",
      "High strength",
      "Chemical resistance",
      "Thermal stability",
      "Consistent performance",
      "Design flexibility"
    ],
    applications: [
      "Fluid handling",
      "Gas diffusion",
      "Separation processes",
      "Venting applications",
      "Flow control",
      "Filtration systems",
      "Material distribution"
    ],
    industries: [
      "Medical Devices",
      "Automotive",
      "Electronics",
      "Industrial Processing",
      "Laboratory Equipment",
      "Consumer Products"
    ]
  },
  {
    id: "medical-grade",
    name: "Medical Grade Coating",
    slug: "medical-grade-coating",
    category: "Coatings",
    description: "Specialized medical-grade coatings designed for healthcare and medical device applications. Our coatings meet strict regulatory requirements while providing excellent performance and biocompatibility.",
    shortDescription: "Biocompatible coatings for medical applications",
    images: [
      "/assets/medical-grade-coatings-1",
      "/assets/medical-grade-coatings-2",
      "/assets/medical-grade-coatings-3"
    ],
    features: [
      "Biocompatible",
      "Sterilization resistant",
      "Chemical resistant",
      "Low friction",
      "FDA compliant",
      "ISO 10993 tested",
      "Wear resistant",
      "Clean room compatible"
    ],
    applications: [
      "Medical devices",
      "Surgical instruments",
      "Laboratory equipment",
      "Diagnostic equipment",
      "Pharmaceutical processing",
      "Healthcare facilities",
      "Medical implants"
    ],
    industries: [
      "Medical Devices",
      "Healthcare",
      "Pharmaceutical",
      "Biotechnology",
      "Laboratory Equipment",
      "Research Facilities"
    ]
  },
  {
    id: "food-grade",
    name: "Food Grade Coating",
    slug: "food-grade-coating",
    category: "Coatings",
    description: "FDA-compliant food grade coatings specifically formulated for food processing and handling equipment. Our coatings ensure safe food contact while providing excellent release properties and durability.",
    shortDescription: "Safe and durable coatings for food industry",
    images: [
      "/assets/food-grade-coatings-1",
      "/assets/food-grade-coatings-2",
      "/assets/food-grade-coatings-3"
    ],
    features: [
      "FDA compliant",
      "Non-stick properties",
      "Wear resistant",
      "Easy to clean",
      "Chemical resistant",
      "Temperature stable",
      "Color coded options",
      "HACCP compatible"
    ],
    applications: [
      "Food processing equipment",
      "Beverage processing",
      "Bakery equipment",
      "Mixing vessels",
      "Conveyor systems",
      "Storage containers",
      "Preparation surfaces"
    ],
    industries: [
      "Food Processing",
      "Beverage Industry",
      "Bakery",
      "Dairy",
      "Meat Processing",
      "Commercial Kitchens"
    ]
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};