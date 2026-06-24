import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Canadian Robots™ | AI Makes Canada Stronger | Robot Dogs & Cooking Robots",
  description: "Canadian Robots™ — 100% Canadian owned robotics company. Supplying robot dogs and humanoids to RCMP and Canadian Armed Forces. Canada's most advanced cooking robot for restaurants. AI Makes Canada Stronger.",
  keywords: "Canadian robots, robot dog Canada, RCMP robots, Canadian Armed Forces robots, cooking robot Canada, restaurant robotics Canada",
  openGraph: {
    title: "Canadian Robots™ | AI Makes Canada Stronger",
    description: "100% Canadian owned. Robot dogs for RCMP & Armed Forces. Advanced cooking robots for restaurants. AI Makes Canada Stronger. 🍁",
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
