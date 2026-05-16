import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Cinereus Techserv Pvt Ltd | IT Hardware & Software Solutions",
    template: "%s | Cinereus Techserv Pvt Ltd",
  },
  description:
    "Leading provider of IP Phones, Smart TVs, Interactive Panels, ERP/LMS for CBSE schools, Data Center, Digital Forensics & Building Automation with flexible OPEX/deferred payment models.",
  keywords: [
    "IT solutions",
    "hospitality technology",
    "smart classroom",
    "data center",
    "digital forensics",
    "building automation",
    "Mumbai",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>

      <body className="font-body antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
