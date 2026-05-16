import type { Metadata } from "next";
import SolutionDetail from "@/components/SolutionDetail";

export const metadata: Metadata = {
  title: "Data Center & Enterprise Networking | Servers, Security & NOC/SOC",
};

export default function DataCenterPage() {
  return (
    <SolutionDetail
      icon="🖥️"
      tag="Enterprises & Large Organizations"
      title="Data Center & Enterprise Networking"
      intro="End-to-end data center and enterprise networking solutions — from servers and storage to advanced cybersecurity operations — designed for performance, resilience, and scale."
      products={[
        {
          category: "Infrastructure",
          items: ["Servers (Rack, Tower, Blade)", "Storage Arrays & NAS/SAN", "UPS & Power Management", "Cooling Solutions"],
        },
        {
          category: "Networking",
          items: ["Networking Switches (Cisco, Juniper, Arista)", "Firewalls & UTM Appliances", "Load Balancers", "SD-WAN Solutions"],
        },
        {
          category: "Security Operations",
          items: ["SIEM (Security Information & Event Management)", "SOAR (Security Orchestration)", "UEBA (User & Entity Behavior Analytics)", "Threat Intelligence Platform"],
        },
        {
          category: "Management",
          items: ["IT Asset Management", "Networking Management (NMS)", "Everest NMS", "Patch & Configuration Management"],
        },
        {
          category: "NOC & SOC",
          items: ["NOC Device Setup", "SOC Device Integration", "24×7 Monitoring & Alerting", "Incident Response"],
        },
      ]}
      highlights={[
        { icon: "🔒", title: "Comprehensive Security", desc: "SIEM, SOAR, UEBA and threat intelligence for a 360° security posture." },
        { icon: "📡", title: "Resilient Networking", desc: "Cisco, Juniper, and Arista infrastructure built for zero-downtime operations." },
        { icon: "🛡️", title: "24×7 NOC/SOC", desc: "Round-the-clock network and security operations center support." },
        { icon: "📊", title: "Full Visibility", desc: "Unified IT asset management and NMS for real-time operational insight." },
        { icon: "⚡", title: "High Performance", desc: "Enterprise servers and storage configured for peak throughput and availability." },
        { icon: "🤝", title: "Certified Partners", desc: "Authorized implementation specialists for Cisco, Juniper, Arista, Extreme Networks, and more." },
      ]}
    />
  );
}
