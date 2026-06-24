"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, ArrowLeft,
  Clock, Zap, BarChart3, Thermometer, Shield, Settings,
  UtensilsCrossed, Building2, ChefHat, Flame, Coffee, Package,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import { CookingRobotVisual } from "@/components/RobotVisuals";

const specs = [
  { label: "Cooking Mode", value: "Stir-Fry / Multi-Function" },
  { label: "Throughput", value: "Up to 120 Dishes/Hour" },
  { label: "Temperature", value: "Up to 300°C Precision" },
  { label: "Recipe Memory", value: "500+ Programmable" },
  { label: "Cleaning", value: "Auto Self-Cleaning Cycle" },
  { label: "Food Safety", value: "ISO / HACCP Compliant" },
  { label: "Installation", value: "Licensed Electrician Assigned" },
  { label: "Financing", value: "Flexible Options Available" },
];

const capabilities = [
  { icon: <Zap size={20} />, title: "Up to 120 Dishes per Hour", desc: "Consistently prepares dishes at high speed — far exceeding manual cooking rates — without any drop in quality during rush periods." },
  { icon: <BarChart3 size={20} />, title: "Precise Portioning Every Time", desc: "Every serving is portioned to your exact specifications — eliminating food waste, controlling costs, and ensuring uniform presentation across all plates." },
  { icon: <Thermometer size={20} />, title: "Precision Temperature Control", desc: "Maintains exact cooking temperatures throughout every recipe stage, guaranteeing consistent flavour, texture, and food safety on every cycle." },
  { icon: <Settings size={20} />, title: "500+ Programmable Recipes", desc: "Your entire menu stored digitally. Each recipe executes identically regardless of which shift is running or how busy the kitchen gets." },
  { icon: <Shield size={20} />, title: "HACCP & Food Safety Compliant", desc: "Smooth easy-clean surfaces, automated cleaning cycles, and full food safety compliance built in — no extra certification paperwork for you." },
  { icon: <Clock size={20} />, title: "Auto Self-Cleaning", desc: "Integrated cleaning cycles run automatically, maintaining hygiene standards without interrupting service flow or adding to staff workload." },
];

const useCases = [
  {
    icon: <UtensilsCrossed size={22} />,
    title: "Full-Service Restaurants",
    desc: "Handle high-volume dinner service with consistent quality. The cooking robot works in tandem with your chefs — handling repetitive prep while they focus on creativity and plating.",
  },
  {
    icon: <Flame size={22} />,
    title: "Fast Casual & QSR",
    desc: "Dramatically increase throughput during peak hours without additional headcount. Every order is produced to spec, every time, with no drop in quality under pressure.",
  },
  {
    icon: <Building2 size={22} />,
    title: "Hotel & Resort Kitchens",
    desc: "Serve large banquets and breakfast buffets efficiently. Consistent quality across 50 or 500 covers — the robot treats every dish the same.",
  },
  {
    icon: <Package size={22} />,
    title: "Cloud Kitchens",
    desc: "Maximize output from limited kitchen space with a robot that operates continuously, enabling you to run multiple virtual restaurant brands from a single kitchen.",
  },
  {
    icon: <Coffee size={22} />,
    title: "Food Courts & Canteens",
    desc: "Serve hundreds of diners efficiently during tight lunch windows. Reduce staff dependency and maintain quality across an entire service period without fatigue.",
  },
  {
    icon: <ChefHat size={22} />,
    title: "Catering & Events",
    desc: "Deliver consistent quality at scale for corporate catering, weddings, and large events — eliminating the stress of maintaining standards across high-volume service.",
  },
];

const kitchenBefore = [
  "Inconsistent dish quality between different staff",
  "High food waste from incorrect portioning",
  "Quality drops during peak rush hours",
  "Over-reliance on specific key kitchen staff",
  "High overtime costs during busy periods",
  "Manual cleaning adds to kitchen labor hours",
];

const kitchenAfter = [
  "Every dish prepared to exact specification, every time",
  "Precise portioning eliminates waste and controls costs",
  "Consistent quality maintained at full capacity under pressure",
  "Kitchen runs independently of staff availability or turnover",
  "Predictable operating costs, no unplanned overtime",
  "Automated cleaning built into the workflow — zero extra labor",
];

const faqs = [
  { q: "What makes your process different from other suppliers?", a: "We handle everything end-to-end. A licensed electrician is assigned to your installation, we pull all city permits, handle compliance, and offer financing. You sign — we do the rest." },
  { q: "What does the licensed electrician cover?", a: "Our licensed electrician handles all electrical installation, safety inspection, and compliance sign-off for commercial kitchen equipment. The full city permit process is managed by our team — no paperwork for you." },
  { q: "How does financing work?", a: "We offer flexible financing tailored to restaurant budgets. Get your cooking robot deployed now and pay on a schedule that works for your cash flow. Contact us for current plans." },
  { q: "How are recipes programmed?", a: "Our team works with your head chef to digitize your recipes. Recipes can be updated remotely at any time as your menu evolves — no technical expertise required." },
  { q: "How long from signing to fully operational?", a: "Typically 3–7 business days depending on your kitchen layout. Our licensed electrician, install team, and trainer coordinate together to minimize any disruption to your service." },
];

export default function CookingRobotPage() {
  return (
    <>
      {/* ── Back nav ── */}
      <div style={{ position: "fixed", top: 88, left: 32, zIndex: 40 }}>
        <Link href="/solutions" style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, color: "rgba(250,250,250,0.5)", textDecoration: "none", fontFamily: "'Inter', sans-serif", transition: "color 0.2s" }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#CC0000"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(250,250,250,0.5)"}>
          <ArrowLeft size={14} /> Back to Solutions
        </Link>
      </div>

      {/* ══ HERO ══ */}
      <section style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 80 }} className="hero-bg r-hero-pad">
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 55% at 35% 50%, rgba(204,0,0,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.035, backgroundImage: "linear-gradient(rgba(204,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.5) 1px, transparent 1px)", backgroundSize: "56px 56px", pointerEvents: "none" }} />

        <div className="r-inner" style={{ position: "relative" }}>
          <div className="r-robot-hero" style={{ alignItems: "center" }}>
            {/* Left */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 20 }}>
                <Link href="/solutions" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(250,250,250,0.45)", textDecoration: "none", fontFamily: "'Inter', sans-serif", marginBottom: 16 }}>
                  <ArrowLeft size={12} /> Robot Solutions
                </Link>
                <span className="badge" style={{ display: "block", width: "fit-content" }}>Cooking Robot</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(36px, 5vw, 62px)", fontWeight: 800, color: "#fafafa", lineHeight: 1.06, letterSpacing: "-0.03em", marginBottom: 8 }}>
                The Cooking Robot
              </motion.h1>
              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 600, lineHeight: 1.2, marginBottom: 24 }}>
                <span className="gradient-text">Canada's Most Advanced Restaurant Cooking Robot.</span>
              </motion.h2>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: "rgba(250,250,250,0.65)", lineHeight: 1.8, maxWidth: 500, marginBottom: 36 }}>
                We don't just deliver a robot — we assign a licensed electrician, handle all city permits, and offer flexible financing. Your restaurant gets fully operational fast with zero bureaucratic headaches. All you need to do is sign.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                className="r-btn-row" style={{ marginBottom: 40 }}>
                <Link href="/contact#demo" className="btn-primary">Get Started — Just Sign</Link>
                <Link href="/contact" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Request a Quote <ArrowRight size={15} />
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
                {["Licensed Electrician Assigned", "City Permits Handled", "Financing Available", "HACCP Compliant"].map(tag => (
                  <div key={tag} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "rgba(250,250,250,0.55)", fontFamily: "'Inter', sans-serif" }}>
                    <CheckCircle2 size={13} style={{ color: "#CC0000" }} /> {tag}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right */}
            <motion.div initial={{ opacity: 0, scale: 0.85, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }} className="hero-visual-center">
              <div className="visual-panel" style={{ minHeight: 420, position: "relative" }}>
                <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "rgba(204,0,0,0.09)", filter: "blur(60px)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
                <div className="float" style={{ position: "relative", zIndex: 1, transform: "scale(1.6)" }}>
                  <CookingRobotVisual />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ SPECS ══ */}
      <section style={{ background: "#111111", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "48px 0" }}>
        <div className="r-inner">
          <div className="r-specs">
            {specs.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="r-spec-cell" style={{ borderRight: i < 7 ? "1px solid rgba(255,255,255,0.07)" : "none", borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "rgba(250,250,250,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 15, fontWeight: 600, color: "#fafafa" }}>{s.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CAPABILITIES ══ */}
      <section style={{ padding: "96px 0" }}>
        <div className="r-inner">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="badge" style={{ marginBottom: 16 }}>Technical Features</span>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#fafafa", letterSpacing: "-0.025em", marginBottom: 16, marginTop: 12 }}>
              Built for <span className="gradient-text">Commercial Kitchens</span>
            </h2>
          </motion.div>
          <div className="r-grid-3">
            {capabilities.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -5 }} className="feature-card">
                <div className="icon-box">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BEFORE / AFTER ══ */}
      <section style={{ padding: "96px 0", background: "#0a0a0a" }}>
        <div className="r-inner" style={{ maxWidth: 1100 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="badge" style={{ marginBottom: 16 }}>The Transformation</span>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#fafafa", letterSpacing: "-0.025em", marginTop: 12 }}>
              Kitchen <span className="gradient-text">Before & After</span>
            </h2>
          </motion.div>
          <div className="r-before-after">
            {/* Before */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: 36 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,80,80,0.12)", border: "1px solid rgba(255,80,80,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>❌</div>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 20, fontWeight: 700, color: "#fafafa" }}>Without Robot</h3>
              </div>
              {kitchenBefore.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(255,80,80,0.15)", border: "1px solid rgba(255,80,80,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <span style={{ fontSize: 10, color: "#ff5050" }}>✕</span>
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(250,250,250,0.6)", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* After */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              style={{ background: "rgba(204,0,0,0.04)", border: "1px solid rgba(204,0,0,0.2)", borderRadius: 24, padding: 36, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #CC0000, #FF6666)" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(204,0,0,0.15)", border: "1px solid rgba(204,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>✅</div>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 20, fontWeight: 700, color: "#fafafa" }}>With Cooking Robot</h3>
              </div>
              {kitchenAfter.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                  <CheckCircle2 size={18} style={{ color: "#CC0000", flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(250,250,250,0.75)", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ USE CASES ══ */}
      <section style={{ padding: "96px 0" }}>
        <div className="r-inner">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="badge" style={{ marginBottom: 16 }}>Where It Works</span>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#fafafa", letterSpacing: "-0.025em", marginTop: 12 }}>
              Ideal for <span className="gradient-text">These Operations</span>
            </h2>
          </motion.div>
          <div className="r-grid-3">
            {useCases.map((u, i) => (
              <motion.div key={u.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 28, transition: "all 0.3s ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,0,0,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(204,0,0,0.12)", border: "1px solid rgba(204,0,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#CC0000", marginBottom: 20 }}>
                  {u.icon}
                </div>
                <h4 style={{ fontFamily: "'Sora', sans-serif", fontSize: 17, fontWeight: 600, color: "#fafafa", marginBottom: 10 }}>{u.title}</h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(250,250,250,0.6)", lineHeight: 1.7 }}>{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section style={{ padding: "96px 0", background: "#0a0a0a" }}>
        <div className="r-inner" style={{ maxWidth: 800 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="badge" style={{ marginBottom: 16 }}>FAQ</span>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#fafafa", letterSpacing: "-0.025em", marginTop: 12 }}>
              Common <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {faqs.map((f, i) => (
              <motion.div key={f.q} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "24px 28px" }}>
                <h4 style={{ fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 600, color: "#fafafa", marginBottom: 10 }}>{f.q}</h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(250,250,250,0.62)", lineHeight: 1.7 }}>{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RELATED ══ */}
      <section style={{ padding: "64px 0" }}>
        <div className="r-inner">
          <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 20, fontWeight: 700, color: "#fafafa", marginBottom: 28, textAlign: "center" }}>Explore Other Robot Solutions</h3>
          <div className="r-related">
            {[
              { label: "Robot Dog", href: "/robots/robot-dog", desc: "Smart mobility for events, showrooms & brand activation" },
              { label: "Humanoid Robot", href: "/robots/humanoid", desc: "Interactive robots for guest welcome & customer service" },
            ].map(r => (
              <Link key={r.href} href={r.href} style={{ display: "block", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "24px", textDecoration: "none", transition: "all 0.3s ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,0,0,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 600, color: "#fafafa", marginBottom: 6, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  {r.label} <ArrowRight size={16} style={{ color: "#CC0000" }} />
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(250,250,250,0.55)" }}>{r.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        badge="Just Sign & We Handle the Rest"
        title="Get Canada's Most Advanced Cooking Robot in"
        highlight="Your Restaurant"
        subtitle="Licensed electrician assigned. City permits handled. Financing available. We take care of everything — you just need to sign and we get your kitchen running."
        primaryLabel="Get Started — Contact Us Now"
        primaryHref="/contact"
        secondaryLabel="View All Robots"
        secondaryHref="/solutions"
      />
    </>
  );
}

