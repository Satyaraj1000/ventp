"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import IndustryApplications from '@/components/IndustryApplications';

export default function Home() {
  const router = useRouter();

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

  interface Product {
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

  return (
    <main className="w-full p-2 md:p-4 block">
      {/* Carousel */}
      <Carousel
        plugins={[Autoplay({ delay: 3000 })]}
        className="w-full mx-auto bg-gray-800 p-2 rounded-lg"
      >
        <CarouselContent className="w-full m-2 h-40 sm:h-80 md:h-[300px] lg:h-[400px] xl:h-[500px]">
          {images.map((src, idx) => (
            <CarouselItem key={idx} className="relative w-full h-full">
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                fill
                className="object-cover rounded-md"
                priority={idx === 0}
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold pb-4 md:pb-8 bg-gradient-to-b from-[#0E9696] to-[#043030] bg-clip-text text-transparent">
              Welcome to Protective Coating World
            </h1>
            <p className="text-base md:text-xl text-gray-900 max-w-4xl mx-auto">
              M/s. VAIBHAVI ENTERPRISES is a fast-growing company with a strong
              focus on quality & best customer service.
              <br /><br /> Since 1989, our
              organization has been acknowledged as a leader in development &
              advancement of surface enhancement &apos;Viflon&apos;
              (Fluoropolymer) coating for metal surfaces & other substrates.
              <br /><br />
              We are also a manufacturer of &apos;Vaicon&apos; Porus Plastics 
              filter media especially for pharmaceutical, Chemical & Pneumatics
              companies for their different applications.
            </p>
            <div className="mt-6">
              <button
                onClick={() => router.push("/about")}
                className="px-6 py-2 text-white bg-[#0E9696] hover:bg-[#076969] rounded-full text-base font-semibold md:text-lg transition"
              >
                More About Us
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center md:gap-4 mb-12">
            <span className="h-2 bg-[#0E9696] flex-1"></span>
            <h2 className="text-2xl md:text-6xl font-bold text-black whitespace-nowrap px-4">
              Applications (Industries)
            </h2>
            <span className="h-2 bg-[#0E9696] flex-1"></span>
          </div>

          <IndustryApplications />
          

          {/* Divider */}
          <div className="flex items-center md:gap-4 mb-12">
            <span className="h-2 bg-[#0E9696] flex-1"></span>
            <h2 className="text-2xl md:text-6xl font-bold text-black whitespace-nowrap px-4">
              Our Products
            </h2>
            <span className="h-2 bg-[#0E9696] flex-1"></span>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
