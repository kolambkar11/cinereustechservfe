import SolutionDetail from "@/app/components/SolutionDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospitality IT Solutions | IP Phones, Smart TVs, Guest WiFi & More",
};

export default function HospitalityPage() {
  return (
    <SolutionDetail
      icon="🏨"
      tag="Hotels & Hospitality Chains"
      title="Hospitality IT Solutions"
      intro="Comprehensive technology solutions designed to enhance guest experience, streamline operations, and future-proof your hospitality business — from IP communication to intelligent video analytics."
      products={[
        {
          category: "Communication",
          items: [
            "IP Phones (SIP/VoIP)",
            "PBX / PABX Systems",
            "In-room Guest Handsets",
          ],
        },
        {
          category: "Guest Entertainment",
          items: [
            "Smart TVs (Hospitality Grade)",
            "IPTV Systems",
            "Streaming & Content Management",
          ],
        },
        {
          category: "Connectivity",
          items: [
            "Guest WiFi Management Software",
            "Access Point Installation",
            "Network Management",
          ],
        },
        {
          category: "Security & Surveillance",
          items: [
            "CCTV Cameras",
            "Video Analytics Licenses",
            "Biometric Door Locks",
            "Access Control",
          ],
        },
        {
          category: "AV Systems",
          items: [
            "Conference Room AV",
            "Digital Signage",
            "Lobby Display Systems",
          ],
        },
      ]}
      highlights={[
        {
          icon: "📞",
          title: "Unified Communication",
          desc: "IP telephony systems that integrate seamlessly with your PMS and front desk operations.",
        },
        {
          icon: "📺",
          title: "Branded Guest Entertainment",
          desc: "Hospitality-grade smart TVs with custom channel lists and in-room controls.",
        },
        {
          icon: "📡",
          title: "High-Speed Guest WiFi",
          desc: "Scalable WiFi management with guest portals, bandwidth control, and analytics.",
        },
        {
          icon: "🎥",
          title: "Intelligent Surveillance",
          desc: "CCTV and AI-powered video analytics for enhanced security and operational insights.",
        },
        {
          icon: "🔑",
          title: "Smart Access Control",
          desc: "Biometric locks and RFID systems for secure, seamless guest access.",
        },
        {
          icon: "💳",
          title: "OPEX Financing",
          desc: "Reduce upfront investment with our flexible deferred payment models.",
        },
      ]}
    />
  );
}
