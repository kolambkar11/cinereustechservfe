import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – Page Not Found",
  description: "The page you are looking for does not exist.",
};

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Partners", href: "/partners" },
  { label: "Contact Us", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="hero-pattern min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center">
        {/* 404 number */}
        <div className="relative inline-block mb-6">
          <span className="font-display text-[8rem] sm:text-[10rem] font-bold leading-none text-gray-800 select-none">
            404
          </span>
          <span className="absolute inset-0 font-display text-[8rem] sm:text-[10rem] font-bold leading-none text-gray-600/20 blur-sm select-none">
            404
          </span>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-12 bg-gray-700" />
          <span className="text-gray-500 text-xs font-semibold tracking-widest uppercase">
            Page Not Found
          </span>
          <span className="h-px w-12 bg-gray-700" />
        </div>

        <h1 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
          Looks like you've ventured off the map
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to the right place.
        </p>

        {/* Primary actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="bg-gray-600 hover:bg-gray-500 text-white font-semibold px-8 py-3 rounded transition-colors border border-gray-500 text-sm"
          >
            ← Back to Home
          </Link>
          <Link
            href="/contact"
            className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 font-semibold px-8 py-3 rounded transition-colors text-sm"
          >
            Contact Support
          </Link>
        </div>

        {/* Quick links */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-5">
            Or explore these pages
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
