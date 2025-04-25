"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { products } from "@/data/products";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isProductsOpenMobile, setIsProductsOpenMobile] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false); // NEW

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
    setIsProductsOpenMobile(false); // optional: collapse nested menu
  };

  return (
    <nav className="bg-white shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={handleCloseSheet}>
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <span className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-[#0E9696] ml-3 tracking-tighter">
              VAIBHAVI ENTERPRISES
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About Us
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="nav-link flex items-center gap-1"
                >
                  Products & Services <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72 bg-white z-50">
                {products.map((product) => (
                  <DropdownMenuItem key={product.id} asChild>
                    <Link
                      href={`/products/${product.slug}`}
                      className="w-full hover:text-white hover:bg-[#0E9696]"
                    >
                      {product.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/contact" className="nav-link">
              Contact Us
            </Link>
            <Link href="/enquiry" className="nav-link">
              Enquiry Form
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white w-[300px] px-4 py-4">
                <div className="flex flex-col space-y-4 mt-6">
                  <Link href="/" className="mobile-link" onClick={handleCloseSheet}>
                    Home
                  </Link>
                  <Link href="/about" className="mobile-link" onClick={handleCloseSheet}>
                    About Us
                  </Link>
                  <button
                    onClick={() => setIsProductsOpenMobile(!isProductsOpenMobile)}
                    className="mobile-link flex items-center justify-between"
                  >
                    Products & Services
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        isProductsOpenMobile ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isProductsOpenMobile && (
                    <div className="ml-3 space-y-1 bg-gray-200 p-2">
                      {products.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.slug}`}
                          className="text-gray-700 text-base hover:text-[#0E9696] block bg-gray-50 p-2"
                          onClick={handleCloseSheet}
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  )}
                  <Link href="/contact" className="mobile-link" onClick={handleCloseSheet}>
                    Contact Us
                  </Link>
                  <Link href="/enquiry" className="mobile-link" onClick={handleCloseSheet}>
                    Enquiry Form
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
