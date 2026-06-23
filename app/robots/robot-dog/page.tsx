"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, ArrowLeft,
  Cpu, Shield, Zap, Radio, Eye, Navigation,
  Building2, Megaphone, Lock, PartyPopper, Presentation, Star,
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
  { icon: <Navigation size={20} />, title: "Intelligent Navigation", desc: "Navigates complex indoor and outdoor environments autonomously using AI-powered pathfinding and obstacle detection." },
  { icon: <Eye size={20} />, title: "360° Sensing", desc: "Equipped with multi-directional cameras, LiDAR, and ultrasonic sensors for full environmental awareness." },
  { icon: <Cpu size={20} />, title: "Onboard AI", desc: "Advanced onboard computing enables real-time decision-making, behavior adaptation, and interactive responses." },
  { icon: <Radio size={20} />, title: "Remote Control", desc: "Full remote operation via mobile app or tablet, with live video feed and telemetry data streaming." },
  { icon: <Zap size={20} />, title: "Expressive Movement", desc: "Can perform coordinated movements, gestures, and routines for entertainment and demonstrations." },
  { icon: <Shield size={20} />, title: "Safe Operation", desc: "Built-in collision avoidance and safe-stop mechanisms ensure safe operation around people and property." },
];

const useCases = [
  {
    icon: <Building2 size={22} />,
    title: "Corporate Showrooms",
    desc: "Impress clients and visitors with a robot dog roaming your showroom — an instant conversation starter that signals your commitment to innovation.",
    color: "#e8874a",
  },
  {
    icon: <Megaphone size={22} />,
    title: "Brand Activations & Events",
    desc: "Deploy robot dogs at product launches, trade shows, and promotional events to create viral moments and draw massive crowd attention.",
    color: "#f5a262",
  },
  {
    icon: <Lock size={22} />,
    title: "Security Patrols",
    desc: "Program patrol routes for perimeter monitoring in warehouses, parking lots, or large venues with live video streaming to your security team.",
    color: "#e8874a",
  },
  {
    icon: <PartyPopper size={22} />,
    title: "Entertainment & Hospitality",
    desc: "Delight hotel guests, restaurant diners, and event attendees with an interactive robot dog that creates unforgettable, shareable experiences.",
    color: "#f5a262",
  },
  {
    icon: <Presentation size={22} />,
    title: "Tech Demonstrations",
    desc: "Showcase cutting-edge robotics technology in educational settings, tech parks, and innovation centers to inspire and educate audiences.",
    color: "#e8874a",
  },
  {
    icon: <Star size={22} />,
    title: "Retail & Shopping Centers",
    desc: "Drive foot traffic and boost dwell time by deploying robot dogs that greet shoppers, guide navigation, and create photo-worthy moments.",
    color: "#f5a262",
  },
];

const faqs = [
  { q: "How difficult is it to set up and operate?", a: "Merchant Robot handles the full setup, configuration, and staff training. The robot dog is controlled via an intuitive mobile app — no technical expertise required." },
  { q: "Can the robot dog interact with guests?", a: "Yes. It can respond to commands, follow people, perform gestures, and play sounds — making it genuinely interactive for guests and visitors." },
  { q: "What surfaces can it walk on?", a: "The robot dog is designed for most indoor surfaces including tile, carpet, and hardwood, as well as smooth outdoor surfaces. It handles steps and uneven terrain depending on the model." },
  { q: "How long does the battery last?", a: "Battery life is typically 3–4 hours of active operation. A charging dock can be integrated into your environment for convenient top-ups between uses." },
  { q: "Is it safe around children and customers?", a: "Absolutely. Built-in safety systems detect people and obstacles, triggering immediate slow-down or stop. All movements are smooth and non-threatening." },
];

export default function RobotDogPage() {
  return (
    <>
      {/* ── Back nav ── */}
      <div style={{ position: "fixed", top: 88, left: 32, zIndex: 40 }}>
        <Link href="/solutions" style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, color: "rgba(250,250,250,0.5)", textDecoration: "none", fontFamily: "'Inter', sans-serif", transition: "color 0.2s" }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#e8874a"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(250,250,250,0.5)"}>
          <ArrowLeft size={14} /> Back to Solutions
        </Link>
      </div>

      {/* ══ HERO ══ */}
      <section style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 80 }} className="hero-bg r-hero-pad">
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 55% at 35% 50%, rgba(232,135,74,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.035, backgroundImage: "linear-gradient(rgba(232,135,74,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,135,74,0.5) 1px, transparent 1px)", backgroundSize: "56px 56px", pointerEvents: "none" }} />

        <div className="r-inner" style={{ position: "relative" }}>
          <div className="r-robot-hero" style={{ alignItems: "center" }}>
            {/* Left */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 20 }}>
                <Link href="/solutions" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(250,250,250,0.45)", textDecoration: "none", fontFamily: "'Inter', sans-serif", marginBottom: 16, transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#e8874a"}
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
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 600, lineHeight: 1.2, marginBottom: 24 }}>
                <span className="gradient-text">Smart Mobility. Intelligent Engagement.</span>
              </motion.h2>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: "rgba(250,250,250,0.65)", lineHeight: 1.8, maxWidth: 500, marginBottom: 36 }}>
                A four-legged AI-powered robot that navigates freely, interacts naturally, and creates extraordinary experiences for guests, customers, and audiences — unlike anything they've seen before.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                className="r-btn-row" style={{ marginBottom: 40 }}>
                <Link href="/contact#demo" className="btn-primary">Request a Demo</Link>
                <Link href="/contact" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Get a Quote <ArrowRight size={15} />
                </Link>
              </motion.div>

              {/* Quick highlights */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
                {["Autonomous Navigation", "Guest Interactive", "AI-Powered", "Commercial Grade"].map(tag => (
                  <div key={tag} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "rgba(250,250,250,0.55)", fontFamily: "'Inter', sans-serif" }}>
                    <CheckCircle2 size={13} style={{ color: "#e8874a" }} /> {tag}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Visual */}
            <motion.div initial={{ opacity: 0, scale: 0.85, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} className="hero-visual-center">
              <div className="visual-panel" style={{ minHeight: 400, position: "relative" }}>
                {/* Glow orb */}
                <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "rgba(232,135,74,0.08)", filter: "blur(60px)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
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
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,135,74,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(232,135,74,0.12)", border: "1px solid rgba(232,135,74,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: u.color, marginBottom: 20 }}>
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
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,135,74,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 600, color: "#fafafa", marginBottom: 6, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  {r.label} <ArrowRight size={16} style={{ color: "#e8874a" }} />
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(250,250,250,0.55)" }}>{r.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        badge="Ready to Deploy?"
        title="Bring the Robot Dog to"
        highlight="Your Business"
        subtitle="Book a personalized demo and see the robot dog in action at your venue. Our team handles everything from setup to training."
        primaryLabel="Book a Demo"
        secondaryLabel="View All Robots"
        secondaryHref="/solutions"
      />
    </>
  );
}
