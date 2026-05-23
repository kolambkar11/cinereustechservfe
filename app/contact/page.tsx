"use client";

import { useState } from "react";
import { FadeIn, FadeUp, StaggerChild, StaggerParent } from "../animation";
import type { Metadata } from "next";
import { contactSchema } from "@/lib/validations/contact";

const industries = [
  "Hospitality",
  "Education",
  "Enterprise",
  "Data Center",
  "Digital Forensics",
  "Building Automation",
  "Other",
];

export default function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    enquiryType: "",
    message: "",
  });

  const enquiryTypes = ["Sales", "Rental", "Implementation"];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    setErrors({});

    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};

      result.error.issues.forEach((err) => {
        const field = err.path[0] as string;

        if (field) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);

        setForm({
          name: "",
          company: "",
          email: "",
          phone: "",
          industry: "",
          enquiryType: "",
          message: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-pattern pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <FadeUp delay={0.05}>
            <span className="inline-block text-gray-400 text-xs font-semibold tracking-widest uppercase mb-4 border border-gray-700 px-3 py-1 rounded-full">
              Contact Us
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Let&apos;s Build Your Technology Future Together
            </h1>
            <p className="text-gray-300 text-base sm:text-lg">
              Reach out for a free consultation, product demo, or to request a
              quote.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Content */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <FadeUp delay={0.1}>
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-7">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <FadeIn>
                    <div className="text-center py-14">
                      <div className="text-5xl mb-5">✅</div>
                      <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">
                        Thank You!
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
                        Your message has been received. Our team will get back
                        to you within 1 business day (Mon–Sat, 9:00 AM – 6:00 PM
                        IST).
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({
                            name: "",
                            company: "",
                            email: "",
                            phone: "",
                            industry: "",
                            enquiryType: "",
                            message: "",
                          });
                        }}
                        className="mt-7 text-gray-600 text-sm font-semibold hover:text-gray-900 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </FadeIn>
                ) : (
                  <StaggerParent className="space-y-5">
                    <StaggerChild>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-gray-700 text-xs font-semibold mb-1.5">
                            Full Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-300 transition-colors"
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-gray-700 text-xs font-semibold mb-1.5">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Your company"
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-300 transition-colors"
                          />
                        </div>
                      </div>
                    </StaggerChild>
                    <StaggerChild>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-gray-700 text-xs font-semibold mb-1.5">
                            Email Address{" "}
                            <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="you@company.com"
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-300 transition-colors"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-gray-700 text-xs font-semibold mb-1.5">
                            Phone Number <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-300 transition-colors"
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>
                    </StaggerChild>
                    <StaggerChild>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Industry */}
                        <div>
                          <label className="block text-gray-700 text-xs font-semibold mb-1.5">
                            Industry
                          </label>

                          <select
                            name="industry"
                            value={form.industry}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-300 transition-colors bg-white"
                          >
                            <option value="">Select your industry</option>

                            {industries.map((i) => (
                              <option key={i} value={i}>
                                {i}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Enquiry Type */}
                        <div>
                          <label className="block text-gray-700 text-xs font-semibold mb-1.5">
                            Enquiry Type
                          </label>

                          <select
                            name="enquiryType"
                            value={form.enquiryType}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-300 transition-colors bg-white"
                          >
                            <option value="">Select enquiry type</option>

                            {enquiryTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </StaggerChild>
                    <StaggerChild>
                      <div>
                        <label className="block text-gray-700 text-xs font-semibold mb-1.5">
                          Message / Requirement{" "}
                          <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Describe your technology requirements or ask us anything..."
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-300 transition-colors resize-none"
                        />
                        {errors.message && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.message}
                          </p>
                        )}
                      </div>
                    </StaggerChild>

                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="w-full bg-gray-800 hover:bg-gray-700 disabled:opacity-50 text-white font-semibold py-3.5 rounded-lg transition-colors text-sm"
                    >
                      {loading ? "Sending..." : "Submit Message"}
                    </button>
                  </StaggerParent>
                )}
              </div>
            </FadeUp>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <FadeUp delay={0.15}>
              <div className="bg-gray-900 rounded-2xl p-7">
                <h3 className="font-display font-bold text-white text-lg mb-5">
                  Registered Office
                </h3>
                <address className="not-italic space-y-4 text-sm text-gray-300 leading-relaxed">
                  <div>
                    <p className="font-semibold text-white mb-1">
                      Cinereus Techserv Pvt Ltd
                    </p>
                    <p>
                      2nd Floor, Plot No. 264/265,
                      <br />
                      Vaswani Chambers,
                      <br />
                      Dr. Annie Besant Road, Worli Colony,
                      <br />
                      Mumbai, Maharashtra 400030, India
                    </p>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                      Email
                    </p>
                    <a
                      href="mailto:Enquiry@cinereus-techserv.com"
                      className="text-gray-300 hover:text-white transition-colors break-all"
                    >
                      Enquiry@cinereus-techserv.com
                    </a>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
                      Business Hours
                    </p>
                    <p>
                      Monday – Saturday
                      <br />
                      9:00 AM – 6:00 PM IST
                    </p>
                  </div>
                </address>
              </div>
            </FadeUp>

            {/* Map placeholder */}
            <FadeUp delay={0.2}>
              <div className="bg-gray-200 rounded-2xl overflow-hidden h-48 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-500 text-sm font-medium">
                    📍 Google Map
                  </p>
                  <p className="text-gray-400 text-xs mt-1">Worli, Mumbai</p>
                  <a
                    href="https://maps.google.com/?q=Vaswani+Chambers+Dr+Annie+Besant+Road+Worli+Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-xs font-semibold hover:text-gray-900 transition-colors mt-2 block"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.25}>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong className="text-gray-900">Prefer a call?</strong>{" "}
                  Schedule a meeting with our experts at a time that works for
                  you.
                </p>
                <a
                  href="#"
                  className="inline-block mt-3 text-gray-700 text-xs font-semibold hover:text-gray-900 transition-colors"
                >
                  Schedule a Meeting →
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
