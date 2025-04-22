"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";
import TabNavigator from "@/components/TabNavigator";
import { useEffect, useState } from "react";

interface ProductImage {
  public_id: string;
  url: string;
}

interface Product {
  _id?: string;
  id?: string;
  name: string;
  slug: string;
  description: string;
  applications: string[];
  industries: string[];
  images: ProductImage[];
}

export default function ProductDetails() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();

  const [product, setProduct] = useState<Product | null>(null);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data dynamically based on the slug
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const [productRes, allRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/${slug}`),
          fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`),
        ]);

        if (!productRes.ok || !allRes.ok) {
          throw new Error("Failed to fetch product data");
        }

        const productData = await productRes.json();
        const allData = await allRes.json();

        setProduct(productData.product);
        setAllProducts(allData.products);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [slug]);

  if (loading) {
    return <p className="text-center py-10 text-gray-600">Loading product details...</p>;
  }

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
          {allProducts.map((p) => (
            <Tabs.Trigger
              key={p._id}
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
          {product.images?.[0]?.url && (
            <Image
              src={product.images[0].url}
              alt={product.name}
              width={400}
              height={400}
              className="object-cover rounded-lg w-full max-w-md"
            />
          )}
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1).map((img, i) => (
              <Image
                key={i}
                src={img.url}
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
