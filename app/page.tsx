import Link from "next/link";
import type { Metadata } from "next";
import { CTABanner, SectionHeader } from "./components/UI";

export const metadata: Metadata = {
  title:
    "Cinereus Techserv Pvt Ltd | IT Hardware & Software Solutions for Hospitality, Education & Enterprises",
  description:
    "Leading provider of IP Phones, Smart TVs, Interactive Panels, ERP/LMS for CBSE schools, Data Center, Digital Forensics & Building Automation with flexible OPEX/deferred payment models.",
};

const expertise = [
  {
    icon: "🏨",
    title: "Hospitality IT Solutions",
    desc: "IP Phones, Smart TVs, Guest WiFi, AV Systems, IPTV & Biometric solutions for hotel chains.",
    href: "/solutions/hospitality",
  },
  {
    icon: "🎓",
    title: "Smart Classrooms & EdTech",
    desc: "Interactive panels, CBSE-aligned ERP & LMS, laptops and smart classroom hardware.",
    href: "/solutions/smart-classrooms",
  },
  {
    icon: "🖥️",
    title: "Data Center & Enterprise Networking",
    desc: "Servers, storage, firewalls, switches, NOC/SOC, SIEM & SOAR solutions.",
    href: "/solutions/data-center",
  },
  {
    icon: "🔬",
    title: "Digital Forensics & Security",
    desc: "Write blockers, mobile unlocking tools, forensic software & cleanroom labs.",
    href: "/solutions/digital-forensics",
  },
  {
    icon: "🏢",
    title: "Building Automation",
    desc: "Honeywell & Schneider Electric smart building and automation systems.",
    href: "/solutions/building-automation",
  },
];

const benefits = [
  {
    icon: "🔗",
    title: "End-to-End Integration",
    desc: "Seamless hardware + software integration from a single trusted partner.",
  },
  {
    icon: "💳",
    title: "Flexible OPEX & Deferred Payment",
    desc: "Reduce CapEx with our unique deferred payment and OPEX financing models.",
  },
  {
    icon: "📚",
    title: "CBSE-Aligned LMS & ERP",
    desc: "Education platforms built to meet CBSE curriculum and compliance requirements.",
  },
  {
    icon: "🤝",
    title: "Certified Technology Partners",
    desc: "Authorized partners of Cisco, Lenovo, HP, Honeywell, Schneider & more.",
  },
  {
    icon: "🛡️",
    title: "24×7 Support & NOC/SOC",
    desc: "Round-the-clock network and security operations center support.",
  },
  {
    icon: "🚀",
    title: "Future-Ready Infrastructure",
    desc: "Scalable solutions designed to grow with your organization.",
  },
];

const featuredSolutions = [
  {
    title: "Hospitality IT",
    desc: "Transform guest experience with IP phones, smart TVs, and video analytics.",
    href: "/solutions/hospitality",
    tag: "Hotels & Chains",
  },
  {
    title: "Smart Classrooms",
    desc: "Interactive panels and CBSE-ready ERP/LMS for modern education.",
    href: "/solutions/smart-classrooms",
    tag: "Education",
  },
  {
    title: "Data Center",
    desc: "Enterprise-grade servers, networking, and security operations.",
    href: "/solutions/data-center",
    tag: "Enterprise",
  },
  {
    title: "Digital Forensics",
    desc: "Certified forensic tools and cleanroom lab setups for government agencies.",
    href: "/solutions/digital-forensics",
    tag: "Government & Labs",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="hero-pattern min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl">
            <span className="inline-block text-white text-xs font-semibold tracking-widest uppercase mb-6 border border-gray-700 px-3 py-1 rounded-full">
              Mumbai-Based Technology Solutions
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-6">
              Empowering Hospitality, Education &amp; Enterprises with{" "}
              <span className="text-gray-300">Future-Ready Technology</span>
            </h1>
            <p className="text-white text-lg sm:text-xl leading-relaxed mb-4">
              Hardware | Software | Data Centers | Forensics | Building
              Automation
            </p>
            <p className="text-white text-sm mb-10 flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-gray-600" />
              Deferred Payment &amp; OPEX Models for Medium &amp; Large
              Enterprises
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/solutions"
                className="bg-gray-600 hover:bg-gray-500 text-white font-semibold px-8 py-3.5 rounded transition-colors border border-gray-500 text-center"
              >
                Explore Solutions
              </Link>
              <Link
                href="/contact"
                className="border border-gray-600 text-white hover:text-white hover:border-gray-400 font-semibold px-8 py-3.5 rounded transition-colors text-center"
              >
                Request a Demo / Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative floating stats */}
        <div className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col gap-4">
          {[
            { n: "5+", l: "Industry Verticals" },
            { n: "20+", l: "Technology Partners" },
            { n: "24×7", l: "Support & NOC/SOC" },
          ].map((s) => (
            <div
              key={s.l}
              className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl px-6 py-4 text-center"
            >
              <div className="font-display font-bold text-2xl text-white">
                {s.n}
              </div>
              <div className="text-white text-xs mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Expertise ─────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Our Expertise"
            title="Solutions Built for Your Industry"
            subtitle="We deliver tailored technology solutions across hospitality, education, enterprise, and government sectors."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {expertise.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="card-hover group bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-3"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-display font-semibold text-gray-900 text-base leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <span className="text-gray-700 text-xs font-semibold mt-auto group-hover:underline">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────── */}
      <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Why Cinereus Techserv"
            title="The Partner You Can Rely On"
            subtitle="We combine technology depth with flexible commercial models to deliver real business outcomes."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-colors"
              >
                <span className="text-2xl mb-4 block">{b.icon}</span>
                <h3 className="font-display font-semibold text-gray-400 text-base mb-2">
                  {b.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEX Highlight ────────────────────────────────────── */}
      <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-l-4 border-gray-700 rounded-xl px-8 py-7 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-sm">
            <div className="flex-1">
              <h3 className="font-display font-bold text-gray-900 text-xl mb-2">
                Flexible Financing Available
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>Deferred Payment Options or OPEX Model</strong> for
                Medium &amp; Large Enterprises. Reduce CapEx. Focus on Growth.
                Ask us how.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 bg-gray-800 hover:bg-gray-700 text-gray border-2 font-semibold px-6 py-3 rounded transition-colors text-sm whitespace-nowrap"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Solutions ────────────────────────────────── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Featured Solutions"
            title="What We Deliver"
            subtitle="End-to-end technology solutions configured for your specific industry requirements."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSolutions.map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                className="card-hover group relative bg-gray-900 rounded-2xl p-7 overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: `radial-gradient(circle at ${i % 2 === 0 ? "20% 80%" : "80% 20%"}, #9ca3af, transparent 70%)`,
                  }}
                />
                <span className="relative inline-block text-gray-400 text-xs font-semibold tracking-widest uppercase mb-4 border border-gray-700 px-2 py-0.5 rounded-full">
                  {s.tag}
                </span>
                <h3 className="relative font-display font-bold text-white text-lg mb-3">
                  {s.title}
                </h3>
                <p className="relative text-gray-400 text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>
                <span className="relative text-gray-300 text-xs font-semibold  transition-colors">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <CTABanner
        title="Ready to Transform Your Operations?"
        subtitle="Get in Touch Today. Our experts are ready to design the right solution for you."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View All Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
