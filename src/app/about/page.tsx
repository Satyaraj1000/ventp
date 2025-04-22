"use client";

import Image from "next/image";
import {
  FaAward,
  FaLightbulb,
  FaTools,
  FaUserTie,
  FaCheckCircle,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-7xl">
      <h1 className="text-4xl font-bold text-center text-[#0E9696] mb-12">
        🚀 About Vaibhavi Enterprises
      </h1>

      {/* Company Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#0E9696] flex items-center gap-2">
            <FaLightbulb className="text-[#0E9696]" /> Our Journey
          </h2>
          <p className="text-gray-700">
            Since <strong>1989</strong>, Vaibhavi Enterprises has pioneered the
            development of high-performance surface coatings and filtration
            technologies. Known for our <strong>Viflon</strong> (fluoropolymer)
            coatings and <strong>Vaicon</strong> porous plastic filters, we
            proudly serve industries like pharmaceuticals, chemicals,
            pneumatics, and more.
          </p>
          <p className="text-gray-700">
            We specialize in anti-stick, corrosion-resistant, and non-wettable
            coatings, delivering durability, chemical resistance, and
            long-lasting performance across multiple sectors.
          </p>
        </div>

        <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md">
          <Image
            src=""
            alt="Vaibhavi Enterprises"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Leadership */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative w-64 h-64 mx-auto rounded-xl overflow-hidden shadow-md">
          <Image
            src="/founder.jpg"
            alt="Founder Hitesh Bhatt"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#0E9696] flex items-center gap-2">
            <FaUserTie className="text-[#0E9696]" /> Our Founder
          </h2>
          <p className="text-gray-700">
            <strong>Mr. Hitesh B. Bhatt</strong>, a visionary leader with over
            25 years of industry experience, laid the foundation of Vaibhavi
            Enterprises. His emphasis on quality, ethics, and customer trust has
            been the bedrock of our success.
          </p>
          <p className="text-gray-700">
            His foresight brought revolutionary products to India like the{" "}
            <em>AquaSafe</em> purifier and Yarn Oiling Device (Apollo Head
            Container), now trusted by top brands like Mafatlal and Birla.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-[#0E9696] flex items-center gap-2">
            <FaCheckCircle className="text-[#0E9696]" /> Our Mission
          </h2>
          <p className="text-gray-700">
            To be India's most trusted provider of surface coatings and
            filtration media by maintaining top-quality standards, adopting
            ethical practices, and offering unmatched customer support.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#0E9696] flex items-center gap-2">
            <FaCheckCircle className="text-[#0E9696]" /> Our Vision
          </h2>
          <p className="text-gray-700">
            To continuously innovate and expand our technological capabilities,
            building lasting relationships with global and domestic clients
            while creating a dynamic, growth-oriented workspace.
          </p>
        </div>
      </div>

      {/* Innovation & Products */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-[#0E9696] flex items-center gap-2 mb-4">
          <FaTools className="text-[#0E9696]" /> Innovation & Products
        </h2>
        <p className="text-gray-700 mb-4">
          At Vaibhavi Enterprises, innovation is the driving force behind our
          product development. We create smart, sustainable, and
          industry-compliant solutions that solve real-world challenges in
          manufacturing, processing, and environmental safety.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>Viflon Coating:</strong> Our proprietary PTFE-based
            fluoropolymer coating offers excellent non-stick properties, low
            friction, and outstanding resistance to chemicals, abrasion, and
            high temperatures. Ideal for automotive, textile, and
            food-processing industries.
          </li>
          <li>
            <strong>Vaicon Porous Filters:</strong> Engineered from sintered
            UHMWPE, these filters ensure consistent filtration and
            breathability. They’re widely used in air and fluid filtration for
            pharmaceutical cleanrooms, chemical handling, and laboratory
            equipment.
          </li>
          <li>
            <strong>AquaSafe Purifiers:</strong> Combining silver ion and UV
            purification technologies, AquaSafe is designed for domestic and
            industrial use, ensuring safe drinking water without electricity or
            chemicals.
          </li>
          <li>
            <strong>Yarn Oiling Device (Apollo Head Container):</strong> A
            precision-engineered system used by top textile manufacturers to
            automate oiling of yarn cones, significantly reducing downtime and
            labor.
          </li>
          <li>
            <strong>Customized Coating Services:</strong> We offer job-coating
            services with various fluoropolymer blends like FEP, PFA, ETFE, and
            Xylan to meet specific technical requirements in tools, fasteners,
            valves, and reactors.
          </li>
          <li>
            <strong>Industrial Component Protection:</strong> Anti-corrosion and
            anti-friction coatings tailored for parts exposed to aggressive
            environments—extending component life and reducing maintenance
            costs.
          </li>
          <li>
            <strong>Import Substitutes:</strong> We design and manufacture
            replacement solutions for imported mechanical components to enhance
            self-reliance and reduce downtime for Indian industries.
          </li>
        </ul>
      </div>

      {/* Quality Commitment */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-[#0E9696] flex items-center gap-2 mb-4">
          <FaAward className="text-[#0E9696]" /> Quality Commitment
        </h2>
        <p className="text-gray-700 mb-4">
          Quality is embedded in our culture. With certified manufacturing,
          experienced engineers, and strict process control, we ensure every
          product exceeds client expectations.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>ISO 9001:2015 certified processes</li>
          <li>
            Whitford Quality Approved Coater for Xylan Coatings (2009-2011)
          </li>
          <li>Registered vendor for ONGC, L&T, Godrej & Boyce</li>
          <li>Dedicated R&D and testing facilities</li>
        </ul>
      </div>
    </div>
  );
}
