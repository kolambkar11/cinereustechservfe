import SolutionDetail from "@/app/components/SolutionDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building Automation Solutions | Honeywell & Schneider Electric",
};

export default function BuildingAutomationPage() {
  return (
    <SolutionDetail
      icon="🏢"
      tag="Enterprises & Real Estate"
      title="Building Automation Solutions"
      intro="Smart building and automation systems powered by Honeywell and Schneider Electric — delivering energy efficiency, occupant comfort, and intelligent facility management."
      products={[
        {
          category: "Honeywell Solutions",
          items: [
            "Building Management Systems (BMS)",
            "HVAC Controls",
            "Fire Safety Systems",
            "Access Control & Security",
          ],
        },
        {
          category: "Schneider Electric",
          items: [
            "EcoStruxure Building Platform",
            "Electrical Distribution",
            "Energy Management Software",
            "UPS & Power Quality",
          ],
        },
        {
          category: "Automation & Control",
          items: [
            "SCADA Systems",
            "PLC & Controller Integration",
            "Lighting Control Systems",
            "Smart Metering",
          ],
        },
        {
          category: "Integration",
          items: [
            "BACnet / Modbus / KNX Protocols",
            "IoT Sensor Integration",
            "Cloud Monitoring Dashboards",
            "Predictive Maintenance Analytics",
          ],
        },
      ]}
      highlights={[
        {
          icon: "⚡",
          title: "Energy Efficiency",
          desc: "Schneider Electric energy management platforms to reduce operational costs and carbon footprint.",
        },
        {
          icon: "🌡️",
          title: "Intelligent HVAC",
          desc: "Honeywell BMS for precise climate control and occupant comfort across large facilities.",
        },
        {
          icon: "🔥",
          title: "Fire & Life Safety",
          desc: "Integrated fire detection and suppression systems that meet safety compliance standards.",
        },
        {
          icon: "📊",
          title: "Real-Time Monitoring",
          desc: "Cloud dashboards for remote monitoring and data-driven facility management decisions.",
        },
        {
          icon: "🔗",
          title: "Open Integration",
          desc: "BACnet, Modbus, and KNX compatible solutions that integrate with existing infrastructure.",
        },
        {
          icon: "🤝",
          title: "Authorized Partner",
          desc: "Certified implementation specialists for Honeywell and Schneider Electric product lines.",
        },
      ]}
    />
  );
}
