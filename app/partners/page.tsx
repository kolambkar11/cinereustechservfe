import type { Metadata } from "next";
import { FadeIn, FadeUp, StaggerChild, StaggerParent } from "../animation";

import Image from "next/image";
import { CTABanner, PageHero } from "../components/UI";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Technology Partners | Trusted Global Brands",
  description:
    "Cinereus Techserv partners with world-leading technology brands including Cisco, Lenovo, HP, Honeywell, Schneider Electric, and more.",
};

const partners = [
  {
    name: "Opentext",
    category: "Software & Forensics",
    logo: "/partners/opentext.avif",
  },
  {
    name: "Everest NMS",
    category: "Network Management",
    logo: "/partners/everestims.svg",
  },
  { name: "Hanwha", category: "Surveillance", logo: "/partners/Hanwha.ico" },
  { name: "Lenovo", category: "Computing", logo: "/partners/lenovo.jpg" },
  { name: "HP", category: "Computing", logo: "/partners/hp.png" },
  { name: "Dell", category: "Computing", logo: "/partners/Dell_Logo.png" },
  { name: "Apple", category: "Computing", logo: "/partners/apple.svg" },
  {
    name: "Honeywell",
    category: "Building Automation",
    logo: "/partners/honeywell.png",
  },
  {
    name: "Schneider Electric",
    category: "Building Automation",
    logo: "/partners/schneider-electric.svg",
  },
  { name: "Cisco", category: "Networking", logo: "/partners/cisco.png" },
  { name: "Juniper", category: "Networking", logo: "/partners/juiper.ico" },
  { name: "Arista", category: "Networking", logo: "/partners/arista.png" },
  {
    name: "Extreme Networks",
    category: "Networking",
    logo: "/partners/extreme-networks.png",
  },
  { name: "Netgear", category: "Networking", logo: "/partners/netgear.ico" },
  { name: "Holoware", category: "Computing", logo: "/partners/holoware.ico" },
  { name: "Acer", category: "Computing", logo: "/partners/acer.svg" },
  { name: "Asus", category: "Computing", logo: "/partners/asus.png" },
  { name: "GMD Soft", category: "Software", logo: "/partners/gmd-soft-v1.png" },
  { name: "Delta", category: "Software", logo: "/partners/delta.png" },
  {
    name: "Ace Labs Forensics",
    category: "Forensics",
    logo: "/partners/acelab.png",
  },
];

const verticals = [
  {
    cat: "Networking",
    icon: "🌐",
    partners: ["Cisco", "Juniper", "Arista", "Extreme Networks", "Netgear"],
    desc: "Enterprise-grade switches, routers, and SD-WAN solutions.",
    accent: "from-gray-800 to-gray-900",
  },
  {
    cat: "Computing",
    icon: "💻",
    partners: ["Lenovo", "HP", "Dell", "Apple", "Acer", "Asus", "Holoware"],
    desc: "Laptops, desktops, workstations, and server hardware.",
    accent: "from-gray-700 to-gray-900",
  },
  {
    cat: "Building Automation",
    icon: "🏢",
    partners: ["Honeywell", "Schneider Electric"],
    desc: "Smart building, HVAC, energy management, and access control.",
    accent: "from-gray-800 to-gray-950",
  },
  {
    cat: "Forensics & Security",
    icon: "🔬",
    partners: ["Opentext", "Ace Labs Forensics", "Hanwha", "GMD Soft"],
    desc: "Digital forensics software, tools, and video surveillance.",
    accent: "from-gray-700 to-gray-900",
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology Partners"
        title="Trusted Partnerships Powering Your Success"
        subtitle="We collaborate with the world's leading technology brands to deliver best-in-class hardware, software, and solutions across every vertical we serve."
      />

      {/* ── Stats bar ─────────────────────────────────────────── */}
      <section className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-gray-800">
            {[
              { value: "19+", label: "Global Partners" },
              { value: "5", label: "Industry Verticals" },
              { value: "24×7", label: "Partner Support" },
            ].map((s) => (
              <div key={s.label} className="py-6 text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {s.value}
                </div>
                <div className="text-gray-400 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partner logo wall ─────────────────────────────────── */}
      <section className="bg-gray py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3 block">
                Our Partners
              </span>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
                Certified with the World's Best
              </h2>
              <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
                Authorized implementation specialists ensuring reliability,
                performance, and seamless integration across every solution.
              </p>
            </div>
          </FadeUp>

          <StaggerParent className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {partners.map((p) => (
              <StaggerChild key={p.name}>
                {/* Dark card with logo — grayscale by default, color on hover */}
                <div className="group relative bg-gray-900 border border-gray-800 hover:border-gray-600 rounded-2xl p-5 flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-black/40 hover:-translate-y-0.5 cursor-default overflow-hidden">
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-gray-700/20 to-transparent rounded-2xl" />

                  {/* Logo */}
                  <div className="relative w-16 h-10 flex items-center justify-center">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>

                  {/* Name */}
                  <span className="relative font-semibold text-gray-400 group-hover:text-white text-xs leading-snug transition-colors duration-200">
                    {p.name}
                  </span>

                  {/* Category pill */}
                  <span className="relative text-gray-600 group-hover:text-gray-400 text-[10px] leading-snug transition-colors duration-200 border border-gray-800 group-hover:border-gray-700 px-2 py-0.5 rounded-full">
                    {p.category}
                  </span>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>

          <FadeIn>
            <p className="text-center text-gray-600 text-xs mt-10">
              Proud authorized partners and implementation specialists.{" "}
              <Link
                href="/contact"
                className="text-blue-500 hover:text-blue-700"
              >
                Contact us{" "}
              </Link>
              for product availability and custom configurations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Verticals ─────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3 block">
                Partnership Verticals
              </span>
              <h2 className="font-display text-3xl font-bold text-gray-900">
                Solutions Across Every Category
              </h2>
            </div>
          </FadeUp>

          <StaggerParent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {verticals.map((item) => (
              <StaggerChild key={item.cat}>
                <div
                  className={`relative bg-linear-to-br ${item.accent} rounded-2xl p-6 overflow-hidden h-full flex flex-col`}
                >
                  {/* Background texture dot */}
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/5 -translate-y-8 translate-x-8" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-white/5 translate-y-6 -translate-x-6" />

                  <span className="text-3xl mb-4 block relative">
                    {item.icon}
                  </span>
                  <h3 className="font-display font-bold text-white text-base mb-2 relative">
                    {item.cat}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4 relative flex-1">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 relative">
                    {item.partners.map((p) => (
                      <span
                        key={p}
                        className="text-gray-300 text-[10px] font-semibold bg-white/10 border border-white/10 px-2 py-0.5 rounded-full"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* ── Why partner with us ───────────────────────────────── */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
                Why Our Partner Ecosystem Matters
              </h2>
            </div>
          </FadeUp>
          <StaggerParent className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🏆",
                title: "Certified & Authorized",
                desc: "We are authorized resellers and implementation specialists — not just distributors. You get genuine products with full warranty.",
              },
              {
                icon: "🔗",
                title: "Single Point of Contact",
                desc: "Multi-vendor environments managed through one trusted partner, reducing vendor sprawl and simplifying procurement.",
              },
              {
                icon: "🛡️",
                title: "Vetted for Quality",
                desc: "Every partner brand is selected for reliability, long-term support, and alignment with enterprise-grade requirements.",
              },
            ].map((item) => (
              <StaggerChild key={item.title}>
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7 h-full hover:border-gray-400 hover:shadow-md transition-all">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="font-display font-semibold text-gray-900 text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      <FadeIn>
        <CTABanner
          title="Become a Technology Partner"
          subtitle="Interested in partnering with Cinereus Techserv? Let's explore how we can collaborate."
          primaryLabel="Contact Us"
          primaryHref="/contact"
        />
      </FadeIn>
    </>
  );
}
