import Link from "next/link";

// ─── Page Hero ───────────────────────────────────────────────
interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

export function PageHero({ title, subtitle, eyebrow }: PageHeroProps) {
  return (
    <section className="hero-pattern pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        {eyebrow && (
          <span className="inline-block text-white text-xs font-semibold tracking-widest uppercase mb-4 border border-gray-700 px-3 py-1 rounded-full">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-white text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

// ─── Section Header ───────────────────────────────────────────
interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold tracking-widest uppercase mb-3 block ${
            light ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-2xl sm:text-3xl lg:text-4xl font-bold ${
          light ? "text-gray" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed max-w-2xl ${
            center ? "mx-auto" : ""
          } ${light ? "text-gray-300" : "text-gray-500"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────
interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTABanner({
  title = "Ready to Transform Your Operations?",
  subtitle = "Get in touch with our experts today for a free consultation.",
  primaryLabel = "Get in Touch",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-gray-300 text-base mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="bg-gray-600 hover:bg-gray-500 text-gray-300 font-semibold px-8 py-3 rounded transition-colors border border-gray-500"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="border border-gray-600 text-gray-300 hover:text-gray hover:border-gray-400 font-semibold px-8 py-3 rounded transition-colors"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Stat Card ────────────────────────────────────────────────
interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
        {value}
      </div>
      <div className="text-gray-500 text-sm">{label}</div>
    </div>
  );
}
