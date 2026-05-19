import { FadeIn, FadeUp, StaggerChild, StaggerParent } from "../animation";
import { CTABanner, PageHero } from "../components/UI";

export const metadata = {
  title: "About Us | Leadership & Vision",
  description:
    "Cinereus Techserv Pvt Ltd is a Mumbai-based technology solutions provider specializing in IT hardware and software for hospitality, education, enterprise, and government sectors.",
};

const values = [
  {
    icon: "💡",
    label: "Innovation",
    desc: "Continuously evolving with emerging technologies.",
  },
  {
    icon: "🏆",
    label: "Reliability",
    desc: "Consistent, dependable service delivery.",
  },
  {
    icon: "👥",
    label: "Customer-Centric",
    desc: "Solutions tailored to your unique needs.",
  },
  {
    icon: "💳",
    label: "Flexibility",
    desc: "OPEX & deferred payment for financial ease.",
  },
  {
    icon: "🔒",
    label: "Compliance & Security",
    desc: "Industry standards met at every layer.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our Story, Leadership & Vision"
        subtitle="Mumbai-based technology solutions provider built for the industries of tomorrow."
      />

      {/* Our Story */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3 block">
              Our Story
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Incorporated in 2025, Built for the Future
            </h2>
            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                Cinereus Techserv Pvt Ltd is a Mumbai-based technology solutions
                provider specializing in IT hardware and software for the
                hospitality industry and smart classroom solutions for CBSE
                schools.
              </p>
              <p>
                Incorporated in 2025, we deliver turnkey solutions across Data
                Centers, Digital Forensics, Building Automation, and Enterprise
                Networking — backed by strategic partnerships with world-leading
                technology brands.
              </p>
              <p>
                Our unique OPEX and deferred payment models make
                enterprise-grade technology accessible to medium and large
                businesses without heavy upfront capital commitment.
              </p>
            </div>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8">
            <StaggerParent className="grid grid-cols-2 gap-5">
              {[
                { v: "2025", l: "Year Founded" },
                { v: "5+", l: "Verticals Served" },
                { v: "20+", l: "Partner Brands" },
                { v: "24×7", l: "Support Coverage" },
              ].map((s) => (
                <StaggerChild
                  key={s.l}
                  className="bg-gray-800 border border-gray-700 rounded-xl p-5 text-center"
                >
                  <div className="font-display text-3xl font-bold text-white mb-1">
                    {s.v}
                  </div>
                  <div className="text-gray-400 text-xs">{s.l}</div>
                </StaggerChild>
              ))}
            </StaggerParent>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeUp delay={0.05}>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3 block">
                Leadership
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900">
                Meet Our Directors
              </h2>
            </div>
          </FadeUp>
          <StaggerParent className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Director 1 */}
            <StaggerChild
              key="abhishek"
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-5">
                <span className="font-display text-white text-2xl font-bold">
                  A
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-1">
                Abhishek Durgaprasad Tambulwadkar
              </h3>
              <p className="text-gray-500 text-sm mb-4 font-medium">Director</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                An entrepreneur and technology consultant with deep expertise in
                Government &amp; GPS projects, Edu-Tech, Health-Tech, and Cyber
                Forensics &amp; Security. Holds an MBA from Symbiosis Institute
                of Telecom Management. Previously Managing Partner at Digint
                Info Solutions and implementation partner at Apollo Micro
                Systems Limited.
              </p>
            </StaggerChild>

            {/* Director 2 */}
            <StaggerChild
              key="vrushanka"
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mb-5">
                <span className="font-display text-white text-2xl font-bold">
                  V
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-1">
                Vrushanka Abhaykumar Nadkerni
              </h3>
              <p className="text-gray-500 text-sm mb-4 font-medium">
                Co-Director
              </p>
              <p className="text-gray-400 text-sm leading-relaxed italic">
                Bio coming soon. Contact us for more information.
              </p>
            </StaggerChild>
          </StaggerParent>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeUp delay={0.05}>
            <div className="text-center mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3 block">
                Our Values
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white">
                What Drives Us
              </h2>
            </div>
          </FadeUp>
          <StaggerParent className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {values.map((v) => (
              <StaggerChild
                key={v.label}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-gray-500 transition-colors"
              >
                <span className="text-3xl mb-3 block">{v.icon}</span>
                <h4 className="font-display font-semibold text-white text-sm mb-2">
                  {v.label}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {v.desc}
                </p>
              </StaggerChild>
            ))}
          </StaggerParent>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <FadeUp delay={0.1}>
            <div className="border-l-4 border-gray-800 pl-7">
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be India's most trusted technology solutions partner —
                delivering innovative, scalable, and reliable IT infrastructure
                tailored to the evolving needs of hospitality, education,
                enterprise, and government sectors.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="border-l-4 border-gray-400 pl-7">
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To empower organizations with future-ready technology through
                end-to-end hardware and software integration, flexible
                commercial models, and 24×7 expert support — enabling our
                clients to focus on growth.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
      <FadeIn>
        <CTABanner
          title="Let's Build Something Great Together"
          subtitle="Connect with our leadership team to discuss how we can support your technology goals."
          primaryLabel="Contact Us"
          primaryHref="/contact"
        />
      </FadeIn>
    </>
  );
}
