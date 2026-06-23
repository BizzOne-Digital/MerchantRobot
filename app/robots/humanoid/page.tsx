"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, ArrowLeft,
  MessageSquare, Globe, Mic, Users, Brain, Zap,
  Hotel, UtensilsCrossed, ShoppingBag, Building2, Presentation, Heart,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import { HumanoidVisual } from "@/components/RobotVisuals";

const specs = [
  { label: "Height", value: "~1.4 – 1.6 m" },
  { label: "Interaction", value: "Voice + Touch Screen" },
  { label: "Languages", value: "Multi-Language Support" },
  { label: "Mobility", value: "Wheeled / Bipedal" },
  { label: "Face Recognition", value: "Optional Module" },
  { label: "Display", value: "HD Facial Screen" },
  { label: "Battery Life", value: "8–10 Hours" },
  { label: "Connectivity", value: "Wi-Fi + 4G" },
];

const capabilities = [
  { icon: <MessageSquare size={20} />, title: "Natural Conversation", desc: "Engages guests in natural two-way conversations, answers questions, provides information, and responds to requests with warmth and personality." },
  { icon: <Globe size={20} />, title: "Multi-Language Support", desc: "Communicates in multiple languages, ensuring every guest — regardless of origin — receives a warm and helpful welcome." },
  { icon: <Mic size={20} />, title: "Voice Recognition", desc: "Advanced speech recognition understands accents, background noise, and natural phrasing for seamless, frustration-free interactions." },
  { icon: <Users size={20} />, title: "Guest Guidance", desc: "Directs guests to tables, rooms, amenities, or services. Can display maps, menus, and information on its integrated screen." },
  { icon: <Brain size={20} />, title: "Smart Learning", desc: "Learns from interactions over time, improving response accuracy and personalizing its approach to your specific business environment." },
  { icon: <Zap size={20} />, title: "Expressive Personality", desc: "Animated facial expressions, body gestures, and tone variations make interactions feel genuine, engaging, and memorable." },
];

const useCases = [
  {
    icon: <Hotel size={22} />,
    title: "Hotel Lobbies",
    desc: "Welcome arriving guests, handle check-in queries, provide local recommendations, and guide visitors to their rooms — all with a futuristic, brand-aligned personality.",
  },
  {
    icon: <UtensilsCrossed size={22} />,
    title: "Restaurant Front-of-House",
    desc: "Greet diners as they arrive, manage waitlist inquiries, share menu highlights, and create an unforgettable first impression that extends through the entire meal.",
  },
  {
    icon: <ShoppingBag size={22} />,
    title: "Retail & Shopping",
    desc: "Guide customers to products, answer stock questions, process simple requests, and deliver a premium in-store experience that drives loyalty and repeat visits.",
  },
  {
    icon: <Building2 size={22} />,
    title: "Corporate Receptions",
    desc: "Greet visitors, register arrivals, notify staff, provide visitor badges, and manage the reception experience with consistent professional courtesy.",
  },
  {
    icon: <Presentation size={22} />,
    title: "Exhibitions & Trade Shows",
    desc: "Represent your brand on the show floor with an interactive humanoid that explains products, collects leads, and leaves a lasting impression on every visitor.",
  },
  {
    icon: <Heart size={22} />,
    title: "Healthcare & Clinics",
    desc: "Assist patients with check-in, direct them to the right departments, answer general queries, and provide a calm and reassuring presence in waiting areas.",
  },
];

const experienceFlow = [
  { step: "01", title: "Guest Arrives", desc: "The humanoid robot detects approaching guests and initiates a warm, personalized greeting." },
  { step: "02", title: "Interaction Begins", desc: "Voice recognition activates — the guest speaks naturally and the robot responds intelligently." },
  { step: "03", title: "Assistance Delivered", desc: "Directions, information, menu details, or answers provided via voice and screen display." },
  { step: "04", title: "Memorable Impression", desc: "Guest leaves with a unique, futuristic experience that reinforces your brand's innovative identity." },
];

const faqs = [
  { q: "Does it actually understand what guests say?", a: "Yes. Advanced NLP (Natural Language Processing) enables it to understand natural speech, including different accents and informal phrasing, and respond appropriately." },
  { q: "Can it be customized with our brand?", a: "Absolutely. The robot's name, voice, personality, language style, and on-screen content can all be configured to match your brand identity and tone." },
  { q: "What happens if it doesn't understand a question?", a: "It gracefully redirects to a fallback response and, if needed, can notify a human staff member to assist — ensuring no guest is ever left without help." },
  { q: "How does it handle multiple guests at once?", a: "The robot prioritizes the nearest engaged guest but can queue interactions and manage brief conversations with multiple people in sequence." },
  { q: "Is it difficult to maintain?", a: "Minimal maintenance is required. Merchant Robot provides remote monitoring, software updates, and on-site support as part of the service package." },
];

export default function HumanoidPage() {
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
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 55% at 65% 50%, rgba(232,135,74,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.035, backgroundImage: "linear-gradient(rgba(232,135,74,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,135,74,0.5) 1px, transparent 1px)", backgroundSize: "56px 56px", pointerEvents: "none" }} />

        <div className="r-inner" style={{ position: "relative" }}>
          <div className="r-robot-hero" style={{ alignItems: "center" }}>
            {/* Right visual — shown first on desktop via order */}
            <motion.div initial={{ opacity: 0, scale: 0.85, x: -40 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}
              style={{ order: 2 }} className="hero-visual-center">
              <div className="visual-panel" style={{ minHeight: 440, position: "relative" }}>
                <div style={{ position: "absolute", width: 320, height: 320, borderRadius: "50%", background: "rgba(232,135,74,0.08)", filter: "blur(70px)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
                <div className="float" style={{ position: "relative", zIndex: 1, transform: "scale(1.5)" }}>
                  <HumanoidVisual />
                </div>
              </div>
            </motion.div>

            {/* Left content */}
            <div style={{ order: 1 }}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 20 }}>
                <Link href="/solutions" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(250,250,250,0.45)", textDecoration: "none", fontFamily: "'Inter', sans-serif", marginBottom: 16, transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#e8874a"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(250,250,250,0.45)"}>
                  <ArrowLeft size={12} /> Robot Solutions
                </Link>
                <span className="badge" style={{ display: "block", width: "fit-content" }}>Humanoid Robot</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(36px, 5vw, 62px)", fontWeight: 800, color: "#fafafa", lineHeight: 1.06, letterSpacing: "-0.03em", marginBottom: 8 }}>
                The Humanoid Robot
              </motion.h1>
              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 600, lineHeight: 1.2, marginBottom: 24 }}>
                <span className="gradient-text">Human-Like Interaction. Futuristic Brand Experience.</span>
              </motion.h2>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, color: "rgba(250,250,250,0.65)", lineHeight: 1.8, maxWidth: 500, marginBottom: 36 }}>
                A lifelike AI-powered robot that welcomes guests, answers questions, provides directions, and creates a genuinely futuristic experience that your customers will remember — and share.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                className="r-btn-row" style={{ marginBottom: 40 }}>
                <Link href="/contact#demo" className="btn-primary">Request a Demo</Link>
                <Link href="/contact" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Get a Quote <ArrowRight size={15} />
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
                {["Natural Voice AI", "Multi-Language", "Brand Customizable", "24/7 Available"].map(tag => (
                  <div key={tag} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "rgba(250,250,250,0.55)", fontFamily: "'Inter', sans-serif" }}>
                    <CheckCircle2 size={13} style={{ color: "#e8874a" }} /> {tag}
                  </div>
                ))}
              </motion.div>
            </div>
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
            <span className="badge" style={{ marginBottom: 16 }}>Capabilities</span>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#fafafa", letterSpacing: "-0.025em", marginBottom: 16, marginTop: 12 }}>
              What the Humanoid Robot <span className="gradient-text">Can Do</span>
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

      {/* ══ EXPERIENCE FLOW ══ */}
      <section style={{ padding: "96px 0", background: "#0a0a0a" }}>
        <div className="r-inner" style={{ maxWidth: 1000 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="badge" style={{ marginBottom: 16 }}>Guest Journey</span>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#fafafa", letterSpacing: "-0.025em", marginTop: 12 }}>
              The Guest <span className="gradient-text">Experience Flow</span>
            </h2>
          </motion.div>
          <div className="r-flow" style={{ position: "relative" }}>
            <div className="r-flow-connector" />
            {experienceFlow.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ textAlign: "center", position: "relative" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(232,135,74,0.12)", border: "2px solid rgba(232,135,74,0.35)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", position: "relative", zIndex: 1 }}>
                  <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 20, fontWeight: 800, background: "linear-gradient(135deg, #f5c5a3, #e8874a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{step.step}</span>
                </div>
                <h4 style={{ fontFamily: "'Sora', sans-serif", fontSize: 15, fontWeight: 600, color: "#fafafa", marginBottom: 10 }}>{step.title}</h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(250,250,250,0.55)", lineHeight: 1.65 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ USE CASES ══ */}
      <section style={{ padding: "96px 0" }}>
        <div className="r-inner">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="badge" style={{ marginBottom: 16 }}>Use Cases</span>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#fafafa", letterSpacing: "-0.025em", marginTop: 12 }}>
              Perfect For <span className="gradient-text">These Environments</span>
            </h2>
          </motion.div>
          <div className="r-grid-3">
            {useCases.map((u, i) => (
              <motion.div key={u.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: 28, transition: "all 0.3s ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,135,74,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(232,135,74,0.12)", border: "1px solid rgba(232,135,74,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#e8874a", marginBottom: 20 }}>
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
        title="Bring the Humanoid Robot to"
        highlight="Your Business"
        subtitle="Book a personalized demo and see how the humanoid robot transforms your guest experience. Full setup and training included."
        primaryLabel="Book a Demo"
        secondaryLabel="View All Robots"
        secondaryHref="/solutions"
      />
    </>
  );
}
