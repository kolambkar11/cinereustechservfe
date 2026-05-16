import Link from "next/link";
import type { Metadata } from "next";
import { CTABanner, PageHero } from "../components/UI";

export const metadata: Metadata = {
  title:
    "IT Solutions for Hospitality, Smart Classrooms, Data Centers & Forensics",
  description:
    "Tailored technology solutions for hospitality, education, enterprise networking, digital forensics, and building automation.",
};

const solutions = [
  {
    icon: "🏨",
    title: "Hospitality Solutions",
    tag: "Hotels & Chains",
    href: "/solutions/hospitality",
    items: [
      "IP Phones & Smart Televisions",
      "Guest WiFi Management Software",
      "AV Systems & IPTV Cameras",
      "Biometric Locks",
      "CCTV & Video Analytics Licenses",
    ],
  },
  {
    icon: "🎓",
    title: "Smart Classrooms & Education",
    tag: "CBSE Schools & Colleges",
    href: "/solutions/smart-classrooms",
    items: [
      "Interactive Display Panels",
      "Laptops, Desktops & Tablets",
      "CBSE-aligned ERP & LMS",
      "Smart Classroom Hardware & Software",
    ],
  },
  {
    icon: "🖥️",
    title: "Data Center & Enterprise Networking",
    tag: "Enterprises",
    href: "/solutions/data-center",
    items: [
      "Servers, Storage & Networking Switches",
      "Firewalls & Load Balancers",
      "SIEM, SOAR & Threat Intelligence",
      "IT Asset Management",
      "NOC & SOC Devices",
    ],
  },
  {
    icon: "🔬",
    title: "Digital Forensics",
    tag: "Government & Forensic Labs",
    href: "/solutions/digital-forensics",
    items: [
      "Write Blocker Kits",
      "Mobile Unlocking Tools",
      "Mobile & Disk Forensic Software",
      "Cleanroom for Forensic Science Laboratories",
    ],
  },
  {
    icon: "🏢",
    title: "Building Automation",
    tag: "Enterprises & Real Estate",
    href: "/solutions/building-automation",
    items: [
      "Honeywell Smart Building Solutions",
      "Schneider Electric Automation",
      "Energy Management Systems",
      "Access Control & Security",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Tailored Technology Solutions for Your Industry"
        subtitle="From hospitality to forensics — we deliver complete, integrated technology solutions backed by certified global partners."
      />

      {/* OPEX Banner */}
      <section className="bg-gray-800 py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-300 text-center sm:text-left">
            <strong className="text-white">Flexible Financing:</strong> Deferred
            Payment Options or OPEX Model for Medium &amp; Large Enterprises.
            Reduce CapEx. Focus on Growth.
          </p>
          <Link
            href="/contact"
            className="shrink-0 bg-gray-600 hover:bg-gray-500 text-white font-semibold px-5 py-2 rounded transition-colors border border-gray-500 whitespace-nowrap text-xs"
          >
            Ask Us How →
          </Link>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col group hover:border-gray-400 hover:shadow-lg transition-all"
              >
                <span className="text-4xl mb-5 block">{s.icon}</span>
                <span className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-2">
                  {s.tag}
                </span>
                <h2 className="font-display text-xl font-bold text-gray-900 mb-5">
                  {s.title}
                </h2>
                <ul className="space-y-2 mb-7 flex-1">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-gray-400 mt-0.5 shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 text-gray-700 text-sm font-semibold group-hover:text-gray-900 transition-colors"
                >
                  View Details
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            ))}

            {/* CTA card */}
            <div className="bg-gray-900 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  Not Sure Which Solution Fits?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Our experts will assess your requirements and recommend the
                  right technology stack for your organization.
                </p>
              </div>
              <Link
                href="/contact"
                className="bg-gray-600 hover:bg-gray-500 text-white font-semibold px-6 py-3 rounded transition-colors text-center text-sm border border-gray-500"
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Transform Your Operations?"
        subtitle="Contact our team for a tailored solution proposal."
        primaryLabel="Request a Quote"
        primaryHref="/contact"
        secondaryLabel="Meet Our Partners"
        secondaryHref="/partners"
      />
    </>
  );
}
