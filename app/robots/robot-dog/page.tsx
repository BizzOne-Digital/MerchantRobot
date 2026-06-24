"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, ArrowLeft,
  Cpu, Shield, Zap, Radio, Eye, Navigation,
  Building2, Megaphone, Lock, Presentation, Star,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import { RobotDogVisual } from "@/components/RobotVisuals";

const specs = [
  { label: "Locomotion", value: "4-Legged Dynamic Walking" },
  { label: "Navigation", value: "AI-Powered Autonomous" },
  { label: "Speed", value: "Up to 3.5 m/s" },
  { label: "Battery Life", value: "Up to 4 Hours" },
  { label: "Payload", value: "Up to 5 kg" },
  { label: "Sensors", value: "360° LiDAR + Vision" },
  { label: "IP Rating", value: "IP53 Splash Resistant" },
  { label: "Control", value: "Remote + Autonomous" },
];

const capabilities = [
  { icon: <Navigation size={20} />, title: "Autonomous Patrol", desc: "Conducts independent patrol routes in complex environments — indoors, outdoors, and across uneven terrain — with real-time obstacle avoidance and path planning." },
  { icon: <Eye size={20} />, title: "360° Surveillance", desc: "Multi-directional cameras, LiDAR, and thermal sensors provide full situational awareness for RCMP, military, and security operations." },
  { icon: <Cpu size={20} />, title: "Onboard AI Processing", desc: "Advanced edge computing enables real-time threat detection, behavior recognition, and adaptive mission response without cloud dependency." },
  { icon: <Radio size={20} />, title: "Encrypted Remote Control", desc: "Secure encrypted communication for full remote operation via command tablet, with live video feed and telemetry data streaming to ops centers." },
  { icon: <Zap size={20} />, title: "Rugged Field Performance", desc: "Built to operate in demanding field conditions — rain, dust, uneven terrain — with IP53 splash resistance and shock-absorbing leg joints." },
  { icon: <Shield size={20} />, title: "Safe Around Personnel", desc: "Built-in collision avoidance and proximity detection ensure safe co-operation alongside RCMP officers, soldiers, and civilian personnel." },
];

const useCases = [
  {
    icon: <Lock size={22} />,
    title: "RCMP Patrol Operations",
    desc: "Deployed across multiple RCMP branches for perimeter patrol, area surveillance, and public safety operations — reducing officer exposure in high-risk situations.",
    color: "#CC0000",
  },
  {
    icon: <Shield size={22} />,
    title: "Canadian Armed Forces",
    desc: "Supplied in large orders to Canadian Armed Forces for reconnaissance, base perimeter security, training demonstrations, and field intelligence gathering.",
    color: "#FF4444",
  },
  {
    icon: <Building2 size={22} />,
    title: "Government Facility Security",
    desc: "Autonomous patrol of government buildings, federal facilities, and sensitive installations — 24/7 coverage without fatigue or shift gaps.",
    color: "#CC0000",
  },
  {
    icon: <Presentation size={22} />,
    title: "Public Safety Demonstrations",
    desc: "Used in public-facing demonstrations to showcase Canadian technology capabilities, engage communities, and build public trust in law enforcement.",
    color: "#FF4444",
  },
  {
    icon: <Megaphone size={22} />,
    title: "Border & Remote Operations",
    desc: "Deployed at remote border checkpoints and difficult terrain zones where human patrol is costly or hazardous — providing continuous coverage.",
    color: "#CC0000",
  },
  {
    icon: <Star size={22} />,
    title: "Corporate & Institutional",
    desc: "Also available for corporate campuses, large venues, and tech institutions that require advanced security and a powerful brand statement.",
    color: "#FF4444",
  },
];

const faqs = [
  { q: "Who are the primary clients for the Robot Dog?", a: "Our robot dogs are primarily deployed with RCMP branches and the Canadian Armed Forces. We supply large-volume orders to public sector institutions across Canada." },
  { q: "How is the robot dog deployed with RCMP or military clients?", a: "Canadian Robots works directly with procurement teams to configure, deliver, and commission robot dog units. Full training and ongoing technical support are included in all contracts." },
  { q: "Can it operate in outdoor and harsh conditions?", a: "Yes. The robot dog is IP53 splash resistant, handles uneven terrain, gravel, and outdoor surfaces. Models are available with enhanced weatherproofing for field deployment." },
  { q: "What is the order minimum for institutional/public sector clients?", a: "We specialize in large-volume orders. Contact our team to discuss procurement quantities, timelines, and institutional pricing for your agency or department." },
  { q: "Is the communication system secure for sensitive operations?", a: "All communication is encrypted end-to-end. The system can be configured to operate on secure closed networks for sensitive government and military deployments." },
];

export default function RobotDogPage() {
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
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 55% at 35% 50%, rgba(204,0,0,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.035, backgroundImage: "linear-gradient(rgba(204,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.5) 1px, transparent 1px)", backgroundSize: "56px 56px", pointerEvents: "none" }} />

        <div className="r-inner" style={{ position: "relative" }}>
          <div className="r-robot-hero" style={{ alignItems: "center" }}>
            {/* Left */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 20 }}>
                <Link href="/solutions" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(250,250,250,0.45)", textDecoration: "none", fontFamily: "'Inter', sans-serif", marginBottom: 16, transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#CC0000"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(250,250,250,0.45)"}>
                  <ArrowLeft size={12} /> Robot Solutions
                </Link>
                <span className="badge" style={{ display: "block", width: "fit-content" }}>Robot Dog</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(36px, 5vw, 62px)", fontWeight: 800, color: "#fafafa", lineHeight: 1.06, letterSpacing: "-0.03em", marginBottom: 8 }}>
                The Robot Dog
              </motion.h1>
              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 600, lineHeight: 1.2, marginBottom: 24 }}>
                <span className="gradient-text">Trusted by RCMP & Canadian Armed Forces.</span>
              </motion.h2>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: "rgba(250,250,250,0.65)", lineHeight: 1.8, maxWidth: 500, marginBottom: 28 }}>
                Professional high quality robot dog tailor-made for the Public Sector. Deployed with RCMP branches and Canadian Armed Forces — built to the most demanding Canadian government standards, with AI-powered navigation, autonomous patrol, and encrypted field communications.
              </motion.p>

              {/* Pricing */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}
                style={{ display: "inline-flex", alignItems: "center", gap: 16, padding: "16px 24px", borderRadius: 16, background: "rgba(204,0,0,0.10)", border: "1px solid rgba(204,0,0,0.3)", marginBottom: 28 }}>
                <span style={{ fontSize: 28, fontFamily: "'Sora', sans-serif", fontWeight: 800, color: "#CC0000" }}>$100,000 CAD</span>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(250,250,250,0.5)", fontFamily: "'Inter', sans-serif", textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>Per Unit</div>
                  <div style={{ fontSize: 13, color: "rgba(250,250,250,0.75)", fontFamily: "'Inter', sans-serif" }}>Professional High Quality — Public Sector Grade</div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                className="r-btn-row" style={{ marginBottom: 40 }}>
                <Link href="/contact#demo" className="btn-primary">Request a Quote</Link>
                <Link href="/contact" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Procurement Inquiry <ArrowRight size={15} />
                </Link>
              </motion.div>

              {/* Quick highlights */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
                {["RCMP Deployed", "Armed Forces Supply", "Large-Volume Orders", "Field Grade"].map(tag => (
                  <div key={tag} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "rgba(250,250,250,0.55)", fontFamily: "'Inter', sans-serif" }}>
                    <CheckCircle2 size={13} style={{ color: "#CC0000" }} /> {tag}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Visual */}
            <motion.div initial={{ opacity: 0, scale: 0.85, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} className="hero-visual-center">
              <div className="visual-panel" style={{ minHeight: 400, position: "relative" }}>
                {/* Glow orb */}
                <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "rgba(204,0,0,0.08)", filter: "blur(60px)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
                <div className="float" style={{ position: "relative", zIndex: 1, transform: "scale(1.6)" }}>
                  <RobotDogVisual />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ SPECS STRIP ══ */}
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
            <span className="badge" style={{ marginBottom: 16 }}>What It Can Do</span>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#fafafa", letterSpacing: "-0.025em", marginBottom: 16, marginTop: 12 }}>
              Core <span className="gradient-text">Capabilities</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: "rgba(250,250,250,0.6)", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
              Engineered with advanced robotics and AI to perform in real-world commercial environments.
            </p>
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

      {/* ══ USE CASES ══ */}
      <section style={{ padding: "96px 0", background: "#0a0a0a" }}>
        <div className="r-inner">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="badge" style={{ marginBottom: 16 }}>Industries & Use Cases</span>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#fafafa", letterSpacing: "-0.025em", marginBottom: 16, marginTop: 12 }}>
              Where the Robot Dog <span className="gradient-text">Excels</span>
            </h2>
          </motion.div>
          <div className="r-grid-3">
            {useCases.map((u, i) => (
              <motion.div key={u.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 28, transition: "all 0.3s ease", cursor: "default" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,0,0,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(204,0,0,0.12)", border: "1px solid rgba(204,0,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: u.color, marginBottom: 20 }}>
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
      <section style={{ padding: "96px 0" }}>
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
      <section style={{ padding: "64px 0", background: "#0a0a0a" }}>
        <div className="r-inner">
          <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 20, fontWeight: 700, color: "#fafafa", marginBottom: 28, textAlign: "center" }}>Explore Other Robot Solutions</h3>
          <div className="r-related">
            {[
              { label: "Humanoid Robot", href: "/robots/humanoid", desc: "Interactive robots for guest welcome & customer service" },
              { label: "Cooking Robot", href: "/robots/cooking-robot", desc: "Kitchen automation for restaurants & commercial kitchens" },
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
        badge="Public Sector Procurement"
        title="Supply Robot Dogs to Your"
        highlight="Agency or Department"
        subtitle="Canadian Robots works directly with RCMP branches, Canadian Armed Forces, and government institutions for large-volume procurement. Contact us to discuss quantities, configurations, and deployment timelines."
        primaryLabel="Start Procurement Inquiry"
        primaryHref="/contact"
        secondaryLabel="View All Robots"
        secondaryHref="/solutions"
      />
    </>
  );
}

