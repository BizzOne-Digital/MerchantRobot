"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const solutionLinks = [
  { label: "Robot Dog", href: "/robots/robot-dog" },
  { label: "Humanoid Robot", href: "/robots/humanoid" },
  { label: "Cooking Robot", href: "/robots/cooking-robot" },
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
      {/* CTA strip */}
      <div style={{ background: "linear-gradient(135deg, #130a03, #1a0f05, #130a03)", borderBottom: "1px solid rgba(232,135,74,0.12)" }}>
        <div className="r-footer-strip">
          <div>
            <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, color: "#fafafa", marginBottom: 8 }}>
              Ready to Automate Your Business?
            </h3>
            <p style={{ fontSize: 15, color: "rgba(250,250,250,0.6)", fontFamily: "'Inter', sans-serif" }}>
              Talk to our team and find the right robot solution for your needs.
            </p>
          </div>
          <Link href="/contact" className="btn-primary" style={{ flexShrink: 0 }}>Get Started Today</Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="r-footer-main">
        <div className="r-footer-grid">
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none", marginBottom: 16 }}>
              <img src="/logo.png" alt="Merchant Robot" style={{ height: 44, width: "auto", objectFit: "contain" }} />
            </Link>
            <p style={{ fontSize: 14, color: "rgba(250,250,250,0.55)", lineHeight: 1.7, maxWidth: 300, fontFamily: "'Inter', sans-serif" }}>
              Smart robotics solutions for modern restaurants and businesses. Robot dogs, humanoid robots, and cooking robots.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fafafa", marginBottom: 18 }}>Robot Solutions</h4>
            {solutionLinks.map(l => <a key={l.href} href={l.href} className="footer-link">{l.label}</a>)}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fafafa", marginBottom: 18 }}>Company</h4>
            {companyLinks.map(l => <a key={l.href} href={l.href} className="footer-link">{l.label}</a>)}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fafafa", marginBottom: 18 }}>Contact</h4>
            {[
              { icon: <Mail size={13} />, text: "info@merchantrobot.com" },
              { icon: <Phone size={13} />, text: "+1 (800) 000-0000" },
              { icon: <MapPin size={13} />, text: "Nationwide Coverage" },
            ].map(({ icon, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "rgba(250,250,250,0.55)", fontFamily: "'Inter', sans-serif", marginBottom: 12 }}>
                <span style={{ color: "#e8874a", flexShrink: 0 }}>{icon}</span>{text}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginTop: 48, paddingTop: 24, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <p style={{ fontSize: 12, color: "rgba(250,250,250,0.3)", fontFamily: "'Inter', sans-serif" }}>
            © {new Date().getFullYear()} Merchant Robot™. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: "rgba(250,250,250,0.2)", fontFamily: "'Inter', sans-serif" }}>
            Innovation · Automation · Efficiency · Experience
          </p>
        </div>
      </div>
    </footer>
  );
}
