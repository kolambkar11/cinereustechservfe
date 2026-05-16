import type { Metadata } from "next";
import SolutionDetail from "@/components/SolutionDetail";

export const metadata: Metadata = {
  title: "Smart Classrooms & Education Technology | CBSE ERP & LMS",
};

export default function SmartClassroomsPage() {
  return (
    <SolutionDetail
      icon="🎓"
      tag="CBSE Schools & Colleges"
      title="Smart Classrooms & Education Technology"
      intro="Transform learning environments with interactive technology, CBSE-aligned digital platforms, and robust hardware solutions — empowering students and educators across India."
      products={[
        {
          category: "Interactive Hardware",
          items: ["Interactive Display Panels", "Smart Boards", "Document Cameras", "Response Systems"],
        },
        {
          category: "Computing Devices",
          items: ["Laptops & Desktops", "Tablets & iPads", "Chromebooks", "Student Lab Setups"],
        },
        {
          category: "ERP & LMS",
          items: ["CBSE-aligned ERP System", "Learning Management System (LMS)", "Student Information System", "Fee & Finance Module"],
        },
        {
          category: "Connectivity",
          items: ["Campus WiFi Networks", "Network Infrastructure", "Server Room Setup"],
        },
        {
          category: "Software",
          items: ["Digital Content Libraries", "Attendance & HR Management", "Parent Communication Portal"],
        },
      ]}
      highlights={[
        { icon: "📊", title: "CBSE-Aligned Curriculum", desc: "ERP and LMS platforms built to comply with CBSE standards and reporting requirements." },
        { icon: "🖥️", title: "Interactive Learning", desc: "Touch-enabled display panels that make lessons engaging and collaborative." },
        { icon: "📱", title: "Device-Ready", desc: "Laptops, tablets, and desktops configured for modern digital classrooms." },
        { icon: "🔗", title: "Integrated Platform", desc: "Seamless integration between hardware and software for streamlined school management." },
        { icon: "👨‍👩‍👧", title: "Parent Engagement", desc: "Digital portals for real-time academic tracking and parent communication." },
        { icon: "💳", title: "Flexible Financing", desc: "OPEX models that make technology accessible without heavy CapEx investment." },
      ]}
    />
  );
}
