"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const solutionLinks = [
  { label: "Robot Dog", href: "/solutions#robot-dog" },
  { label: "Humanoid Robot", href: "/solutions#humanoid" },
  { label: "Cooking Robot", href: "/solutions#cooking" },
  { label: "Restaurant Automation", href: "/restaurant" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Book a Demo", href: "/contact#demo" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.07)" }}>

      {/* ─── Pre-footer CTA strip ─── */}
      <div style={{ background: "linear-gradient(135deg, #130a03, #1a0f05, #130a03)", borderBottom: "1px solid rgba(232,135,74,0.12)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 48px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
          <div>
            <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, color: "#fafafa", marginBottom: 8 }}>
              Ready to Automate Your Business?
            </h3>
            <p style={{ fontSize: 15, color: "rgba(250,250,250,0.6)", fontFamily: "'Inter', sans-serif" }}>
              Talk to our team and find the right robot solution for your needs.
            </p>
          </div>
          <Link href="/contact" className="btn-primary">
            Get Started Today
          </Link>
        </div>
      </div>

      {/* ─── Main footer ─── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 48px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>

          {/* Brand column */}
          <div>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none", marginBottom: 20 }}>
              <img
                src="/logo.png"
                alt="Merchant Robot"
                style={{ height: 48, width: "auto", objectFit: "contain" }}
              />
            </Link>
            <p style={{ fontSize: 14, color: "rgba(250,250,250,0.55)", lineHeight: 1.7, maxWidth: 300, fontFamily: "'Inter', sans-serif" }}>
              Smart robotics solutions for modern restaurants and businesses. Robot dogs, humanoid robots, and cooking robots.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fafafa", marginBottom: 20 }}>
              Robot Solutions
            </h4>
            {solutionLinks.map(link => (
              <a key={link.href} href={link.href} className="footer-link">{link.label}</a>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fafafa", marginBottom: 20 }}>
              Company
            </h4>
            {companyLinks.map(link => (
              <a key={link.href} href={link.href} className="footer-link">{link.label}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fafafa", marginBottom: 20 }}>
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: <Mail size={13} />, text: "info@merchantrobot.com" },
                { icon: <Phone size={13} />, text: "+1 (800) 000-0000" },
                { icon: <MapPin size={13} />, text: "Nationwide Coverage" },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "rgba(250,250,250,0.55)", fontFamily: "'Inter', sans-serif" }}>
                  <span style={{ color: "#e8874a", flexShrink: 0 }}>{icon}</span>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: 56, paddingTop: 28, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <p style={{ fontSize: 12, color: "rgba(250,250,250,0.3)", fontFamily: "'Inter', sans-serif" }}>
            © {new Date().getFullYear()} Merchant Robot™. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: "rgba(250,250,250,0.2)", fontFamily: "'Inter', sans-serif" }}>
            Innovation · Automation · Efficiency · Experience
          </p>
        </div>
      </div>

      {/* Responsive footer grid */}
      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-pre { flex-direction: column; text-align: center; align-items: center; }
        }
      `}</style>
    </footer>
  );
}
