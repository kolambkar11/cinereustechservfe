import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Partners", href: "/partners" },
  { label: "Contact Us", href: "/contact" },
];

const solutions = [
  { label: "Hospitality IT", href: "/solutions/hospitality" },
  { label: "Smart Classrooms", href: "/solutions/smart-classrooms" },
  { label: "Data Center", href: "/solutions/data-center" },
  { label: "Digital Forensics", href: "/solutions/digital-forensics" },
  { label: "Building Automation", href: "/solutions/building-automation" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                <span className="text-gray font-display font-bold text-sm">
                  C
                </span>
              </div>
              <div>
                <span className="font-display font-bold text-gray text-base block">
                  Cinereus Techserv
                </span>
                <span className="text-gray-500 text-[10px] tracking-widest uppercase">
                  Pvt Ltd
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Future-ready IT hardware & software solutions for hospitality,
              education, and enterprises.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-gray-700 rounded flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-400 font-semibold text-sm mb-4 tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-gray-400 font-semibold text-sm mb-4 tracking-wide uppercase">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {solutions.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-400 font-semibold text-sm mb-4 tracking-wide uppercase">
              Contact
            </h4>
            <address className="not-italic space-y-3 text-sm text-gray-400">
              <p className="leading-relaxed">
                2nd Floor, Plot No. 264/265, Vaswani Chambers,
                <br />
                Dr. Annie Besant Road, Worli Colony,
                <br />
                Mumbai, Maharashtra 400030, India
              </p>
              <p>
                <a
                  href="mailto:Cinereus2025@outlook.com"
                  className="hover:text-white transition-colors"
                >
                  Cinereus2025@outlook.com
                </a>
              </p>
              <p className="text-gray-500 text-xs">
                Mon–Sat | 9:00 AM – 6:00 PM IST
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © 2026 Cinereus Techserv Pvt Ltd. All Rights Reserved.
          </p>
          <Link
            href="/contact"
            className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
