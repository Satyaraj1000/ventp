(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_af779f02._.js", {

"[project]/src/data/products.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getProductById": (()=>getProductById),
    "getProductBySlug": (()=>getProductBySlug),
    "products": (()=>products)
});
const products = [
    {
        id: "xylan-ptfe",
        name: "Xylan PTFE Coating",
        slug: "xylan-ptfe-coating",
        category: "Coatings",
        description: "Advanced PTFE coating solution providing excellent non-stick and low friction properties, ideal for industrial applications requiring superior wear resistance and chemical protection. Our Xylan PTFE coating offers unmatched durability and performance in demanding environments.",
        shortDescription: "High-performance PTFE coating for industrial applications",
        images: [
            "/image.jpeg",
            "/image.jpeg",
            "/image.jpeg"
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
            "/image.jpeg",
            "/image.jpeg",
            "/image.jpeg"
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
            "/image.jpeg",
            "/image.jpeg",
            "/image.jpeg"
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
            "/image.jpeg",
            "/image.jpeg",
            "/image.jpeg"
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
            "/image.jpeg",
            "/image.jpeg",
            "/image.jpeg"
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
            "/image.jpeg",
            "/image.jpeg",
            "/image.jpeg"
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
            "/image.jpeg",
            "/image.jpeg",
            "/image.jpeg"
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
            "/image.jpeg",
            "/image.jpeg",
            "/image.jpeg"
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
const getProductBySlug = (slug)=>{
    return products.find((product)=>product.slug === slug);
};
const getProductById = (id)=>{
    return products.find((product)=>product.id === id);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Header() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isProductsOpen, setIsProductsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "bg-white shadow-md w-full z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between h-20 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/logo.png",
                                        alt: "logo",
                                        width: 40,
                                        height: 40
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 20,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#0E9696] ml-3 tracking-tighter",
                                        children: "VAIBHAVI ENTERPRISES"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 21,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex space-x-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex space-x-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "text-lg sm:text-xl md:text-xl text-gray-700 font-medium hover:text-[#0E9696] transition duration-300",
                                            children: "Home"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/about",
                                            className: "text-lg sm:text-xl md:text-xl text-gray-700 font-medium hover:text-[#0E9696] transition duration-300",
                                            children: "About Us"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 39,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "flex items-center text-lg sm:text-xl md:text-xl text-gray-700 font-medium hover:text-[#0E9696] transition duration-300",
                                                onClick: ()=>setIsProductsOpen(!isProductsOpen),
                                                children: [
                                                    "Products & Services",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        size: 20,
                                                        className: "ml-1 font-semibold"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 52,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-full bg-white shadow-md rounded-md w-72 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-10",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/products/${product.slug}`,
                                                        className: "block px-4 py-3 text-gray-700 font-medium hover:bg-gray-100 hover:text-[#0E9696] transition duration-300",
                                                        children: product.name
                                                    }, product.id, false, {
                                                        fileName: "[project]/src/components/Header.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact",
                                            className: "text-lg sm:text-xl md:text-xl text-gray-700 font-medium hover:text-[#0E9696] transition duration-300",
                                            children: "Contact Us"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/enquiry",
                                            className: "text-lg sm:text-xl md:text-xl text-gray-700 font-medium hover:text-[#0E9696] transition duration-300",
                                            children: "Enquiry Form"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(!isOpen),
                                className: "text-gray-700 focus:outline-none",
                                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 28
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 91,
                                    columnNumber: 25
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 28
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 91,
                                    columnNumber: 43
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden bg-white shadow-md py-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "block px-4 py-2 text-lg sm:text-xl text-gray-700 font-medium hover:bg-gray-100 hover:text-[#0E9696] transition duration-300",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/about",
                                className: "block px-4 py-2 text-lg sm:text-xl text-gray-700 font-medium hover:bg-gray-100 hover:text-[#0E9696] transition duration-300",
                                children: "About Us"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsProductsOpen(!isProductsOpen),
                                    className: "w-full text-left px-4 py-2 text-lg sm:text-xl text-gray-700 font-medium hover:text-[#0E9696] transition duration-300 flex items-center justify-between",
                                    children: [
                                        "Products & Services",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            size: 20,
                                            className: `ml-1 transition-transform duration-300 ${isProductsOpen ? "rotate-180" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                isProductsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 py-2",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/products/${product.slug}`,
                                            className: "block px-8 py-2 text-gray-700 font-medium hover:bg-gray-100 hover:text-[#0E9696] transition duration-300",
                                            children: product.name
                                        }, product.id, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 133,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 131,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "block px-4 py-2 text-lg sm:text-xl text-gray-700 font-medium hover:bg-gray-100 hover:text-[#0E9696] transition duration-300",
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 145,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/enquiry",
                                className: "block px-4 py-2 text-lg sm:text-xl text-gray-700 font-medium hover:bg-gray-100 hover:text-[#0E9696] transition duration-300",
                                children: "Enquiry Form"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 153,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(Header, "0CC1Cu+Q/s0ousui339zlloq0ig=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_af779f02._.js.map