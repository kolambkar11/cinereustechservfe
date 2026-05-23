"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Partners", href: "/partners" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu opens
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const navText = scrolled
    ? "text-gray-700 hover:text-black"
    : "text-white hover:text-gray-200";

  const activeNav = scrolled ? "text-black" : "text-white";

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div whileHover={{ y: -1 }}>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center">
                <img
                  src={
                    scrolled
                      ? "/cinereus-logo-dark.png"
                      : "/cinereus-logo-light.png"
                  }
                  alt="Cinereus Techserv"
                  className="h-16 w-auto object-contain transition-all duration-300"
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  pathname === link.href ? activeNav : navText
                }`}
              >
                {link.label}

                {pathname === link.href && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className={`absolute left-0 -bottom-1 h-0.5 w-full ${
                      scrolled ? "bg-black" : "bg-white"
                    }`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={`px-5 py-2.5 rounded text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-gray-900 text-white hover:bg-black"
                  : "bg-white text-gray-900 hover:bg-gray-200"
              }`}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              scrolled ? "text-black" : "text-white"
            }`}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2.25" : ""
                }`}
              />

              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2.25" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="bg-white border-t border-gray-200 px-5 py-5 shadow-lg">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`py-3 text-sm font-medium border-b border-gray-100 ${
                      pathname === link.href ? "text-black" : "text-gray-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-5 block text-center bg-gray-900 hover:bg-black text-white text-sm font-semibold px-5 py-3 rounded"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
