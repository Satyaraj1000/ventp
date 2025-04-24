"use client";

import { useState } from "react";
import { products } from "@/data/products";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  requirements: string;
}

export default function EnquiryPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    requirements: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Email sent successfully!");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          product: "",
          quantity: "",
          requirements: "",
        });
      } else {
        setMessage("Failed to send email.");
      }
    } catch (error) {
      setMessage("Error sending email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Request Quote
      </h1>
      <p className="text-gray-600 mb-8">
        Please fill out the form below to request a quote for our products.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="relative">
            <Input
              id="name"
              required
              className="peer h-12 pt-6"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <Label
              htmlFor="name"
              className={`absolute left-3 top-3 text-sm text-muted-foreground transition-all duration-200 peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#0E9696] ${
                formData.name ? "top-1 text-xs text-[#0E9696]" : ""
              }`}
            >
              Name *
            </Label>
          </div>

          {/* Company */}
          <div className="relative">
            <Input
              id="company"
              className="peer h-12 pt-6"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
            <Label
              htmlFor="company"
              className={`absolute left-3 top-3 text-sm text-muted-foreground transition-all duration-200 peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#0E9696] ${
                formData.company ? "top-1 text-xs text-[#0E9696]" : ""
              }`}
            >
              Company Name
            </Label>
          </div>

          {/* Email */}
          <div className="relative">
            <Input
              id="email"
              type="email"
              required
              className="peer h-12 pt-6"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <Label
              htmlFor="email"
              className={`absolute left-3 top-3 text-sm text-muted-foreground transition-all duration-200 peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#0E9696] ${
                formData.email ? "top-1 text-xs text-[#0E9696]" : ""
              }`}
            >
              Email *
            </Label>
          </div>

          {/* Phone */}
          <div className="relative">
            <Input
              id="phone"
              type="tel"
              required
              className="peer h-12 pt-6"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <Label
              htmlFor="phone"
              className={`absolute left-3 top-3 text-sm text-muted-foreground transition-all duration-200 peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#0E9696] ${
                formData.phone ? "top-1 text-xs text-[#0E9696]" : ""
              }`}
            >
              Phone *
            </Label>
          </div>

          {/* Product */}
          <div className="relative">
            <Label
              htmlFor="product"
              className="mb-1 block text-sm text-muted-foreground"
            >
              Product *
            </Label>
            <Select
              value={formData.product}
              onValueChange={(value) =>
                setFormData({ ...formData, product: value })
              }
              required
            >
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select a product" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {products.map((product) => (
                  <SelectItem
                    key={product.id}
                    value={product.id}
                    className="bg-white hover:bg-[#0E9696] hover:text-white transition-colors cursor-pointer"
                  >
                    {product.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Quantity */}
          <div className="relative">
            <Input
              id="quantity"
              className="peer h-12 pt-6"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
            />
            <Label
              htmlFor="quantity"
              className={`absolute left-3 top-3 text-sm text-muted-foreground transition-all duration-200 peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#0E9696] ${
                formData.quantity ? "top-1 text-xs text-[#0E9696]" : ""
              }`}
            >
              Quantity
            </Label>
          </div>
        </div>

        {/* Requirements */}
        <div className="relative">
          <Textarea
            id="requirements"
            rows={4}
            className="peer pt-6"
            value={formData.requirements}
            onChange={(e) =>
              setFormData({ ...formData, requirements: e.target.value })
            }
          />
          <Label
            htmlFor="requirements"
            className={`absolute left-3 top-3 text-sm text-muted-foreground transition-all duration-200 peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#0E9696] ${
              formData.requirements ? "top-1 text-xs text-[#0E9696]" : ""
            }`}
          >
            Specific Requirements
          </Label>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-[#0E9696] hover:bg-[#0C7B7B] text-white py-3"
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit Request"}
        </Button>

        {/* Message */}
        {message && (
          <p
            className={`text-center text-sm ${
              message.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
