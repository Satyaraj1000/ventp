"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { getProductBySlug, products } from "../../../data/products";
import TabNavigator from "@/components/TabNavigator";
import * as Tabs from "@radix-ui/react-tabs";

export default function ProductDetails() {
  const params = useParams();
  const router = useRouter();
  const product = getProductBySlug(params.slug as string);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900">Product Not Found</h1>
      </div>
    );
  }

  const infoTabs = [
    {
      label: "Overview",
      content: <p className="text-gray-600">{product.description}</p>,
    },
    {
      label: "Applications",
      content: (
        <ul className="list-disc list-inside space-y-2">
          {product.applications.map((app, i) => (
            <li key={i}>{app}</li>
          ))}
        </ul>
      ),
    },
    {
      label: "Industries",
      content: (
        <ul className="list-disc list-inside space-y-2">
          {product.industries.map((ind, i) => (
            <li key={i}>{ind}</li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Product Switcher */}
      <Tabs.Root
        defaultValue={product.slug}
        value={product.slug}
        onValueChange={(slug) => router.push(`/products/${slug}`)}
      >
        <Tabs.List
          className="w-full bg-gray-100 p-4 mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          aria-label="Product Tabs"
        >
          {products.map((p) => (
            <Tabs.Trigger
              key={p.id}
              value={p.slug}
              className={`px-4 py-2 text-sm text-left rounded-lg transition-colors duration-300 shadow-sm w-full focus:outline-none
              data-[state=active]:bg-[#0E9696] data-[state=active]:text-white
              bg-white hover:bg-[#0E9696] hover:text-white`}
            >
              {p.name}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Images */}
        <div className="space-y-4">
          <Image
            src={`${product.images[0]}.jpg`}
            alt={product.name}
            width={400}
            height={400}
            className="object-cover rounded-lg w-full max-w-md"
          />
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1).map((image, i) => (
              <Image
                key={i}
                src={`${image}.jpg`}
                alt={`${product.name} view ${i + 2}`}
                width={120}
                height={120}
                className="object-cover rounded-lg border-2 border-black"
              />
            ))}
          </div>
        </div>

        {/* Info & Tabs */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>
          <TabNavigator tabs={infoTabs} />
          <button
            onClick={() => router.push("/enquiry")}
            className="mt-8 px-8 py-3 bg-[#0E9696] font-bold text-white rounded-lg hover:bg-primary/90 transition"
          >
            Request Quote
          </button>
        </div>
      </div>
    </div>
  );
}
