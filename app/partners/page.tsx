import type { Metadata } from "next";
import { CTABanner, PageHero } from "../components/UI";

export const metadata: Metadata = {
  title: "Our Technology Partners | Trusted Global Brands",
  description:
    "Cinereus Techserv partners with world-leading technology brands including Cisco, Lenovo, HP, Honeywell, Schneider Electric, and more.",
};

const partners = [
  { name: "Opentext", category: "Software & Forensics" },
  { name: "Everest NMS", category: "Network Management" },
  { name: "Hanwha", category: "Surveillance" },
  { name: "Lenovo", category: "Computing" },
  { name: "HP", category: "Computing" },
  { name: "Dell", category: "Computing" },
  { name: "Apple", category: "Computing" },
  { name: "Honeywell", category: "Building Automation" },
  { name: "Schneider Electric", category: "Building Automation" },
  { name: "Cisco", category: "Networking" },
  { name: "Juniper", category: "Networking" },
  { name: "Arista", category: "Networking" },
  { name: "Extreme Networks", category: "Networking" },
  { name: "Netgear", category: "Networking" },
  { name: "Holoware", category: "Computing" },
  { name: "Acer", category: "Computing" },
  { name: "Asus", category: "Computing" },
  { name: "GMD Soft", category: "Software" },
  { name: "Ace Labs Forensics", category: "Forensics" },
];

const categories = [
  "All",
  "Computing",
  "Networking",
  "Building Automation",
  "Software & Forensics",
  "Forensics",
  "Network Management",
  "Software",
  "Surveillance",
];

const uniqueCategories = [
  "All",
  "Networking",
  "Computing",
  "Building Automation",
  "Forensics",
  "Software",
  "Surveillance",
  "Network Management",
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology Partners"
        title="Trusted Partnerships Powering Your Success"
        subtitle="We collaborate with the world's leading technology brands to deliver best-in-class hardware, software, and solutions across every vertical we serve."
      />

      {/* Partners Grid */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
              Our strategic partnerships ensure reliability, performance, and
              seamless integration for your hospitality, education, data center,
              and forensic requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col items-center justify-center text-center gap-2 hover:border-gray-400 hover:shadow-md transition-all group cursor-default"
              >
                {/* Logo placeholder with initials */}
                <div className="w-12 h-12 bg-gray-100 group-hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
                  <span className="font-display font-bold text-gray-600 group-hover:text-gray-900 text-lg transition-colors">
                    {p.name.charAt(0)}
                  </span>
                </div>
                <span className="font-semibold text-gray-700 group-hover:text-gray-900 text-xs leading-snug transition-colors">
                  {p.name}
                </span>
                <span className="text-gray-400 text-[10px] leading-snug">
                  {p.category}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-xs mt-10">
            Proud authorized partners and implementation specialists. Contact us
            for product availability and custom configurations.
          </p>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3 block">
              Partnership Verticals
            </span>
            <h2 className="font-display text-3xl font-bold text-gray-900">
              Solutions Across Every Category
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                cat: "Networking",
                icon: "🌐",
                partners: [
                  "Cisco",
                  "Juniper",
                  "Arista",
                  "Extreme Networks",
                  "Netgear",
                ],
                desc: "Enterprise-grade switches, routers, and SD-WAN solutions.",
              },
              {
                cat: "Computing",
                icon: "💻",
                partners: [
                  "Lenovo",
                  "HP",
                  "Dell",
                  "Apple",
                  "Acer",
                  "Asus",
                  "Holoware",
                ],
                desc: "Laptops, desktops, workstations, and server hardware.",
              },
              {
                cat: "Building Automation",
                icon: "🏢",
                partners: ["Honeywell", "Schneider Electric"],
                desc: "Smart building, HVAC, energy management, and access control.",
              },
              {
                cat: "Forensics & Security",
                icon: "🔬",
                partners: [
                  "Opentext",
                  "Ace Labs Forensics",
                  "Hanwha",
                  "GMD Soft",
                ],
                desc: "Digital forensics software, tools, and video surveillance.",
              },
            ].map((item) => (
              <div key={item.cat} className="bg-gray-900 rounded-xl p-6">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-display font-bold text-white text-base mb-2">
                  {item.cat}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.partners.map((p) => (
                    <span
                      key={p}
                      className="text-gray-300 text-[10px] font-semibold border border-gray-700 px-2 py-0.5 rounded-full"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Become a Technology Partner"
        subtitle="Interested in partnering with Cinereus Techserv? Let's explore how we can collaborate."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
