import Link from "next/link";
import { CTABanner } from "./UI";

interface SolutionDetailProps {
  icon: string;
  tag: string;
  title: string;
  intro: string;
  products: { category: string; items: string[] }[];
  highlights: { icon: string; title: string; desc: string }[];
}

export default function SolutionDetail({
  icon,
  tag,
  title,
  intro,
  products,
  highlights,
}: SolutionDetailProps) {
  return (
    <>
      {/* Hero */}
      <section className="hero-pattern pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-white text-xs font-semibold tracking-widest uppercase mb-4 border border-gray-700 px-3 py-1 rounded-full">
              {tag}
            </span>
            <div className="text-6xl mb-5">{icon}</div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              {title}
            </h1>
            <p className="text-white text-base sm:text-lg leading-relaxed mb-8">
              {intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gray-600 hover:bg-gray-500 text-white font-semibold px-7 py-3 rounded transition-colors border border-gray-500 text-center"
              >
                Get a Quote
              </Link>
              <Link
                href="/solutions"
                className="border border-gray-600 text-white hover:text-white hover:border-gray-400 font-semibold px-7 py-3 rounded transition-colors text-center"
              >
                ← All Solutions
              </Link>
            </div>
          </div>
          {/* OPEX card */}
          <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-7 backdrop-blur-sm">
            <h3 className="font-display text-lg font-bold text-white mb-3">
              Flexible Financing
            </h3>
            <p className="text-white text-sm leading-relaxed mb-5">
              <strong className="text-bold">
                Deferred Payment Options or OPEX Model
              </strong>{" "}
              for Medium &amp; Large Enterprises. Reduce CapEx. Focus on Growth.
            </p>
            <Link
              href="/contact"
              className="text-white hover:text-white text-sm font-semibold transition-colors"
            >
              Learn More about Financing →
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3 block">
              Products &amp; Services
            </span>
            <h2 className="font-display text-3xl font-bold text-gray-900">
              What We Offer
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.category}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-gray-400 transition-colors"
              >
                <h3 className="font-display font-semibold text-gray-900 text-base mb-4 pb-3 border-b border-gray-200">
                  {p.category}
                </h3>
                <ul className="space-y-2">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-gray-400 mt-0.5 shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-gray-900">
              Key Advantages
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6"
              >
                <span className="text-2xl mb-4 block">{h.icon}</span>
                <h4 className="font-display font-semibold text-gray-900 text-sm mb-2">
                  {h.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Interested in This Solution?"
        subtitle="Our specialists will design the right configuration for your organization."
        primaryLabel="Request a Demo / Quote"
        primaryHref="/contact"
        secondaryLabel="View All Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
