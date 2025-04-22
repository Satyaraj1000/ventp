"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductImage {
  public_id: string;
  url: string;
}

interface Product {
  _id?: string;
  id?: string;
  name: string;
  slug: string;
  shortDescription: string;
  images?: ProductImage[];
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  // Fallback image if none exists
  const imageUrl = product.images?.[0]?.url || "/images.jpeg";

  if (!product) return null; // Prevent rendering if product is undefined

  return (
    <Card
      onClick={() => router.push(`/products/${product.slug}`)}
      className="bg-gray-200 group relative w-full max-w-xs cursor-pointer overflow-hidden rounded-xl transition-shadow duration-300 hover:shadow-md hover:border-[#0E9696] border border-gray-200"
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-sm font-semibold px-3 py-1 rounded-full border border-white bg-white/10 backdrop-blur-sm">
            View Details
          </span>
        </div>
      </div>

      <CardHeader className="px-3">
        <CardTitle className="text-base font-bold text-[#0E9696]">
          {product.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="px-3">
        <p className="text-sm text-gray-700 line-clamp-2">
          {product.shortDescription}
        </p>
      </CardContent>
    </Card>
  );
}
