"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Robot Solutions", href: "/solutions" },
  { label: "Restaurant Automation", href: "/restaurant" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={scrolled ? "nav-scrolled" : ""}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          transition: "all 0.4s ease",
        }}
      >
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 72,
          }}>
            {/* Logo */}
            <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <img
                src="/logo.png"
                alt="Merchant Robot"
                style={{ height: 44, width: "auto", objectFit: "contain" }}
              />
            </Link>

            {/* Desktop Nav Links */}
            <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden-mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    position: "relative",
                    padding: "8px 16px",
                    fontSize: 14,
                    fontWeight: 500,
                    textDecoration: "none",
                    color: pathname === link.href ? "#e8874a" : "rgba(250,250,250,0.8)",
                    transition: "color 0.2s ease",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={e => { if (pathname !== link.href) (e.currentTarget as HTMLElement).style.color = "#fafafa"; }}
                  onMouseLeave={e => { if (pathname !== link.href) (e.currentTarget as HTMLElement).style.color = "rgba(250,250,250,0.8)"; }}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span style={{
                      position: "absolute",
                      bottom: 0,
                      left: 16, right: 16,
                      height: 2,
                      background: "linear-gradient(90deg, #e8874a, #f5c5a3)",
                      borderRadius: 2,
                    }} />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }} className="hidden-mobile">
              <Link href="/contact" className="btn-primary" style={{ padding: "10px 24px", fontSize: 14 }}>
                Book a Demo
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                display: "none",
                padding: 8,
                background: "none",
                border: "none",
                color: "rgba(250,250,250,0.8)",
                cursor: "pointer",
              }}
              className="show-mobile"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .hidden-mobile { display: none !important; }
            .show-mobile { display: flex !important; }
          }
        `}</style>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, zIndex: 99 }}
          >
            {/* Backdrop */}
            <div
              onClick={() => setMobileOpen(false)}
              style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              style={{
                position: "absolute",
                top: 0, right: 0, bottom: 0,
                width: 300,
                background: "#141414",
                borderLeft: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                flexDirection: "column",
                paddingTop: 88,
                paddingBottom: 32,
                paddingLeft: 24,
                paddingRight: 24,
              }}
            >
              <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: 24, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      style={{
                        display: "block",
                        padding: "13px 16px",
                        borderRadius: 14,
                        fontSize: 15,
                        fontWeight: 500,
                        fontFamily: "'Inter', sans-serif",
                        textDecoration: "none",
                        background: pathname === link.href ? "rgba(232,135,74,0.12)" : "transparent",
                        color: pathname === link.href ? "#e8874a" : "rgba(250,250,250,0.8)",
                        border: pathname === link.href ? "1px solid rgba(232,135,74,0.2)" : "1px solid transparent",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <Link href="/contact" className="btn-primary" style={{ textAlign: "center" }}>
                Book a Demo
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
