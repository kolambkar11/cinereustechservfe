import SolutionDetail from "@/app/components/SolutionDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Forensics Solutions | Forensic Tools, Labs & Software",
};

export default function DigitalForensicsPage() {
  return (
    <SolutionDetail
      icon="🔬"
      tag="Government & Forensic Laboratories"
      title="Digital Forensics Solutions"
      intro="Specialized digital forensics equipment, software, and cleanroom laboratory setups for government agencies, law enforcement, and certified forensic science laboratories."
      products={[
        {
          category: "Hardware Tools",
          items: [
            "Write Blocker Kits",
            "Mobile Unlocking & Extraction Tools",
            "Forensic Workstations",
            "Evidence Storage Solutions",
          ],
        },
        {
          category: "Software",
          items: [
            "Mobile Forensic Software",
            "Disk Forensic Software",
            "Network Forensic Tools",
            "Data Recovery & Analysis",
          ],
        },
        {
          category: "Laboratory Setup",
          items: [
            "Cleanroom Design & Build",
            "Evidence Chain-of-Custody Systems",
            "Lab Furniture & Infrastructure",
            "Environmental Controls",
          ],
        },
        {
          category: "Training & Compliance",
          items: [
            "Forensic Tool Training",
            "SOP Development",
            "Compliance Consulting",
            "Certification Support",
          ],
        },
      ]}
      highlights={[
        {
          icon: "🧪",
          title: "Certified Forensic Tools",
          desc: "Industry-standard forensic hardware and software from certified vendors including Ace Labs Forensics and Opentext.",
        },
        {
          icon: "🏛️",
          title: "Government-Ready",
          desc: "Solutions designed to meet government procurement and compliance standards.",
        },
        {
          icon: "🔏",
          title: "Chain of Custody",
          desc: "Write blockers and evidence management systems to maintain forensic integrity.",
        },
        {
          icon: "🧹",
          title: "Cleanroom Labs",
          desc: "Complete cleanroom design and build for forensic science laboratory requirements.",
        },
        {
          icon: "📱",
          title: "Mobile Forensics",
          desc: "Advanced mobile unlocking and data extraction tools for modern devices.",
        },
        {
          icon: "🎓",
          title: "Training Support",
          desc: "Tool training and SOP development for forensic teams and investigators.",
        },
      ]}
    />
  );
}
