import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Merchant Robot™ | Smart Robotics for Restaurants & Businesses",
  description: "Merchant Robot delivers advanced robot dog, humanoid robot, and cooking robot solutions designed to improve service, efficiency, and customer experience for modern restaurants and businesses.",
  keywords: "restaurant robotics, humanoid robots for restaurants, cooking robots, robot dog for business, business automation robots, smart restaurant automation",
  openGraph: {
    title: "Merchant Robot™ | Smart Robotics Solutions",
    description: "Advanced robot dog, humanoid, and cooking robot solutions for modern restaurants and businesses.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ background: "#0d0d0d", color: "#fafafa", overflowX: "hidden" }}>
        <Navbar />
        <main style={{ minHeight: "100vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
