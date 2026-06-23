import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Merchant Robot™ | Smart Robotics for Restaurants & Businesses",
  description:
    "Merchant Robot delivers advanced robot dog, humanoid robot, and cooking robot solutions designed to improve service, efficiency, and customer experience for modern restaurants and businesses.",
  keywords:
    "restaurant robotics, humanoid robots for restaurants, cooking robots, robot dog for business, business automation robots, smart restaurant automation, future of restaurant technology",
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

        {/* ── Global responsive overrides ── */}
        <style>{`
          /* Hero */
          @media (max-width: 900px) {
            .hero-inner {
              flex-direction: column !important;
              text-align: center !important;
              align-items: center !important;
              padding: 48px 24px !important;
            }
            .hero-inner > div:last-child {
              width: min(260px, 75vw) !important;
            }
            .hero-inner .btn-row { justify-content: center !important; }
            .hero-inner .badge-row { justify-content: center !important; }
          }

          /* Page hero */
          .page-hero { padding: 120px 0 64px !important; }
          @media (max-width: 768px) {
            .page-hero { padding: 100px 0 48px !important; }
            .page-hero h1 { font-size: clamp(26px, 8vw, 40px) !important; }
          }

          /* About page hero split */
          @media (max-width: 1024px) {
            .about-hero-grid { grid-template-columns: 1fr !important; }
            .about-hero-grid > div:last-child { display: none !important; }
          }

          /* Section grids responsive */
          @media (max-width: 1024px) {
            .grid-3-col { grid-template-columns: repeat(2, 1fr) !important; }
            .grid-4-col { grid-template-columns: repeat(2, 1fr) !important; }
            .split-2-col { grid-template-columns: 1fr !important; gap: 48px !important; }
            .robot-3-col { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 640px) {
            .grid-3-col { grid-template-columns: 1fr !important; }
            .grid-2-col { grid-template-columns: 1fr !important; }
            .grid-4-col { grid-template-columns: repeat(2, 1fr) !important; }
            .stats-row { grid-template-columns: repeat(2, 1fr) !important; }
          }

          /* Section padding responsive */
          @media (max-width: 768px) {
            section { padding-top: 64px !important; padding-bottom: 64px !important; }
            .section-inner { padding: 0 20px !important; }
            h2 { font-size: clamp(24px, 7vw, 36px) !important; }
            h1 { font-size: clamp(28px, 8vw, 44px) !important; }
          }

          /* Footer responsive */
          @media (max-width: 1024px) {
            .footer-main-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 640px) {
            .footer-main-grid { grid-template-columns: 1fr !important; }
            .footer-pre-cta { flex-direction: column !important; text-align: center !important; align-items: center !important; padding: 40px 20px !important; }
          }

          /* Robot section split */
          @media (max-width: 1024px) {
            .robot-split { grid-template-columns: 1fr !important; direction: ltr !important; gap: 40px !important; }
            .robot-split > * { direction: ltr !important; }
          }

          /* Contact page grid */
          @media (max-width: 1024px) {
            .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }

          /* Form grid */
          @media (max-width: 640px) {
            .form-row { grid-template-columns: 1fr !important; }
          }

          /* How it works */
          @media (max-width: 1024px) {
            .hiw-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 640px) {
            .hiw-grid { grid-template-columns: 1fr !important; }
          }

          /* Industries */
          @media (max-width: 640px) {
            .industry-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }

          /* CTA buttons responsive */
          @media (max-width: 480px) {
            .cta-btns { flex-direction: column !important; align-items: stretch !important; }
            .btn-primary, .btn-outline { width: 100% !important; justify-content: center !important; }
          }

          /* Comparison table */
          @media (max-width: 640px) {
            .compare-table th:not(:first-child):not(:nth-child(2)),
            .compare-table td:not(:first-child):not(:nth-child(2)) { display: none; }
          }

          /* Stat section grid */
          @media (max-width: 640px) {
            .stats-inner { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </body>
    </html>
  );
}
