"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products"; // Static data

export default function Home() {
  const product = products;
  const images = [
    "/images/poster1.png",
    "/images/poster2.png",
    "/images/poster3.png",
    "/images/poster4.png",
    "/images/poster5.png",
    "/images/poster6.png",
    "/images/poster7.png",
    "/images/poster8.png",
  ];

  return (
    <main className="w-full p-5 md:p-10 block">
      {/* Carousel */}
      {/* Carousel */}
      <Carousel
        plugins={[Autoplay({ delay: 3000 })]}
        className="w-full mx-auto bg-gray-800 p-2 rounded-lg"
      >
        <CarouselContent className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] xl:h-[600px]">
          {images.map((src, idx) => (
            <CarouselItem key={idx} className="relative w-full h-full">
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-cover rounded-md"
                priority={idx === 0} // Optional: prioritize first image
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Content Section */}
      <section className="w-full px-4 md:px-6 lg:px-8 py-5 md:py-10">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold pb-4 md:pb-8 bg-gradient-to-b from-[#0E9696] to-[#043030] bg-clip-text text-transparent">
              Welcome to Protective Coating World
            </h1>
            <p className="text-base md:text-xl text-gray-900 max-w-4xl mx-auto">
              M/s. VAIBHAVI ENTERPRISES is a fast-growing company with a strong
              focus on quality & best customer service. Since 1989, our
              organization has been acknowledged as a leader in development &
              advancement of surface enhancement 'Viflon' (Fluoropolymer)
              coating for metal surfaces & other substrates. We are also a
              manufacturer of 'Vaicon' Porus Plastics filter media especially
              for pharmaceutical, Chemical & Pneumatics companies for their
              different applications.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center md:gap-4 mb-12">
            <span className="h-2 bg-[#0E9696] flex-1"></span>
            <h2 className="text-2xl md:text-4xl font-bold text-black whitespace-nowrap px-4">
              Our Products
            </h2>
            <span className="h-2 bg-[#0E9696] flex-1"></span>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {product.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
