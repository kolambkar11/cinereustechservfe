"use client";

import { useState } from "react";
import Link from "next/link";

const products = [
  // Hardware
  {
    id: 1,
    name: "IP Phones",
    category: "Hardware",
    industry: "Hospitality",
    desc: "SIP/VoIP phones for hotel and enterprise communication.",
    icon: "📞",
  },
  {
    id: 2,
    name: "Smart TVs (Hospitality Grade)",
    category: "Hardware",
    industry: "Hospitality",
    desc: "Hospitality-certified smart TVs with IPTV support.",
    icon: "📺",
  },
  {
    id: 3,
    name: "Interactive Display Panels",
    category: "Hardware",
    industry: "Education",
    desc: "4K touch panels for smart classroom engagement.",
    icon: "🖥️",
  },
  {
    id: 4,
    name: "Laptops & Desktops",
    category: "Hardware",
    industry: "Education",
    desc: "Lenovo, HP, Acer, Asus devices for classroom and enterprise.",
    icon: "💻",
  },
  {
    id: 5,
    name: "Servers",
    category: "Hardware",
    industry: "Enterprise",
    desc: "Rack, tower, and blade servers from leading OEMs.",
    icon: "🗄️",
  },
  {
    id: 6,
    name: "Network Switches",
    category: "Hardware",
    industry: "Enterprise",
    desc: "Cisco, Juniper, Arista, Extreme Networks managed switches.",
    icon: "🌐",
  },
  {
    id: 7,
    name: "Firewalls & UTM",
    category: "Hardware",
    industry: "Enterprise",
    desc: "Next-gen firewalls for perimeter security.",
    icon: "🛡️",
  },
  {
    id: 8,
    name: "Write Blocker Kits",
    category: "Hardware",
    industry: "Forensics",
    desc: "Forensic-grade write blockers for evidence integrity.",
    icon: "🔒",
  },
  {
    id: 9,
    name: "CCTV Cameras",
    category: "Hardware",
    industry: "Hospitality",
    desc: "Hanwha and IP surveillance cameras for hotels.",
    icon: "🎥",
  },
  {
    id: 10,
    name: "Biometric Locks",
    category: "Hardware",
    industry: "Hospitality",
    desc: "Smart RFID and biometric door locking systems.",
    icon: "🗝️",
  },
  {
    id: 11,
    name: "Storage Arrays",
    category: "Hardware",
    industry: "Enterprise",
    desc: "NAS/SAN storage solutions for data centers.",
    icon: "💾",
  },
  {
    id: 12,
    name: "Tablets",
    category: "Hardware",
    industry: "Education",
    desc: "iPads and Android tablets for modern classrooms.",
    icon: "📱",
  },
  // Software
  {
    id: 13,
    name: "Guest WiFi Management",
    category: "Software",
    industry: "Hospitality",
    desc: "Guest portal, bandwidth control and analytics platform.",
    icon: "📡",
  },
  {
    id: 14,
    name: "CBSE-aligned LMS",
    category: "Software",
    industry: "Education",
    desc: "Learning management system aligned to CBSE curriculum.",
    icon: "📚",
  },
  {
    id: 15,
    name: "School ERP",
    category: "Software",
    industry: "Education",
    desc: "Integrated ERP for school admin, finance, and HR.",
    icon: "🏫",
  },
  {
    id: 16,
    name: "SIEM Platform",
    category: "Software",
    industry: "Enterprise",
    desc: "Security information and event management solution.",
    icon: "🔍",
  },
  {
    id: 17,
    name: "Mobile Forensic Software",
    category: "Software",
    industry: "Forensics",
    desc: "Mobile data extraction and analysis software.",
    icon: "🔬",
  },
  {
    id: 18,
    name: "Disk Forensic Software",
    category: "Software",
    industry: "Forensics",
    desc: "Disk imaging, hashing, and forensic analysis tools.",
    icon: "🧪",
  },
  {
    id: 19,
    name: "NMS (Network Mgmt)",
    category: "Software",
    industry: "Enterprise",
    desc: "Everest NMS for full network visibility and control.",
    icon: "📊",
  },
  {
    id: 20,
    name: "Threat Intelligence",
    category: "Software",
    industry: "Enterprise",
    desc: "Real-time threat feeds and intelligence platform.",
    icon: "⚠️",
  },
];

const categories = ["All", "Hardware", "Software"];
const industries = [
  "All",
  "Hospitality",
  "Education",
  "Enterprise",
  "Forensics",
];

export default function ProductsPage() {
  const [cat, setCat] = useState("All");
  const [ind, setInd] = useState("All");

  const filtered = products.filter(
    (p) =>
      (cat === "All" || p.category === cat) &&
      (ind === "All" || p.industry === ind),
  );

  return (
    <>
      {/* Hero */}
      <section className="hero-pattern pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-gray-400 text-xs font-semibold tracking-widest uppercase mb-4 border border-gray-700 px-3 py-1 rounded-full">
            Products
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Hardware &amp; Software Products
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            IP Phones, Interactive Panels, Servers, Forensic Tools, ERP/LMS and
            more — sourced from certified global partners.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 py-5 px-4 sm:px-6 lg:px-8 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center">
          <div className="flex gap-2 flex-wrap">
            <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider self-center mr-1">
              Type:
            </span>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  cat === c
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap">
            <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider self-center mr-1">
              Industry:
            </span>
            {industries.map((i) => (
              <button
                key={i}
                onClick={() => setInd(i)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  ind === i
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {i}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-500 text-sm mb-8">
            Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col group hover:border-gray-400 hover:shadow-md transition-all card-hover"
              >
                <span className="text-3xl mb-4 block">{p.icon}</span>
                <div className="flex gap-2 mb-3">
                  <span className="text-gray-500 text-[10px] font-semibold tracking-widest uppercase border border-gray-200 px-2 py-0.5 rounded-full">
                    {p.category}
                  </span>
                  <span className="text-gray-500 text-[10px] font-semibold tracking-widest uppercase border border-gray-200 px-2 py-0.5 rounded-full">
                    {p.industry}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-gray-900 text-base mb-2">
                  {p.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                  {p.desc}
                </p>
                <Link
                  href="/contact"
                  className="text-gray-700 text-xs font-semibold group-hover:text-gray-900 transition-colors"
                >
                  Request Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Don&apos;t See What You&apos;re Looking For?
          </h2>
          <p className="text-gray-300 text-base mb-8">
            We have access to a wide range of products through our partner
            network. Contact us with your specific requirements.
          </p>
          <Link
            href="/contact"
            className="bg-gray-600 hover:bg-gray-500 text-white font-semibold px-8 py-3 rounded transition-colors border border-gray-500"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
