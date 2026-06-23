"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Dog, Bot, ChefHat, ArrowRight, CheckCircle2, Zap, Brain, Users, Clock, Settings, Star, Shield } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FeatureCard from "@/components/FeatureCard";
import { RobotDogVisual, HumanoidVisual, CookingRobotVisual } from "@/components/RobotVisuals";

const robots = [
  {
    id: "robot-dog",
    icon: <Dog size={24} />,
    title: "Robot Dog",
    tagline: "Smart Mobility. Intelligent Engagement.",
    description: "Smart, mobile, and highly adaptable robot dogs for business environments, security, demonstrations, guest interaction, and advanced automation experiences. These four-legged robots navigate complex spaces and create unforgettable impressions.",
    features: [
      { icon: <Brain size={15} />, text: "Intelligent movement and terrain navigation" },
      { icon: <Users size={15} />, text: "Interactive guest experience capabilities" },
      { icon: <Star size={15} />, text: "Modern business applications and demonstrations" },
      { icon: <Zap size={15} />, text: "Ideal for events, showrooms, and high-tech environments" },
      { icon: <Settings size={15} />, text: "Impressive customer engagement and brand impact" },
      { icon: <Clock size={15} />, text: "Autonomous operation with advanced sensors" },
    ],
    useCases: ["Corporate Events", "Showrooms", "Brand Activations", "Security Patrols", "Tech Exhibitions", "Entertainment"],
    visual: <RobotDogVisual />,
    detailHref: "/robots/robot-dog",
    reverse: false,
  },
  {
    id: "humanoid",
    icon: <Bot size={24} />,
    title: "Humanoid Robot",
    tagline: "Human-Like Interaction. Futuristic Brand Experience.",
    description: "Humanoid robots designed to interact with people, support customer service, welcome guests, assist staff, and create a futuristic brand experience. With natural voice interaction and lifelike movement, these robots redefine hospitality and service.",
    features: [
      { icon: <Users size={15} />, text: "Guest greeting and welcoming interactions" },
      { icon: <Brain size={15} />, text: "Customer interaction and Q&A support" },
      { icon: <Zap size={15} />, text: "Voice-based assistance and navigation guidance" },
      { icon: <Star size={15} />, text: "Brand engagement and marketing presence" },
      { icon: <Settings size={15} />, text: "Smart business automation support" },
      { icon: <Clock size={15} />, text: "Multi-language communication capabilities" },
    ],
    useCases: ["Hotel Lobbies", "Restaurant Front-of-House", "Retail Stores", "Corporate Reception", "Trade Shows", "Malls"],
    visual: <HumanoidVisual />,
    detailHref: "/robots/humanoid",
    reverse: true,
  },
  {
    id: "cooking",
    icon: <ChefHat size={24} />,
    title: "Cooking Robot",
    tagline: "Precision. Speed. Consistency. Every Time.",
    description: "Advanced cooking robots built to help restaurants improve food preparation speed, consistency, and operational efficiency. From stir-frying to portioning, these robots bring precision engineering into the heart of your kitchen.",
    features: [
      { icon: <Clock size={15} />, text: "Consistent food preparation every single cycle" },
      { icon: <Zap size={15} />, text: "Improved kitchen productivity and throughput" },
      { icon: <Settings size={15} />, text: "Reduced repetitive workload for kitchen staff" },
      { icon: <Star size={15} />, text: "Better service speed during peak hours" },
      { icon: <Brain size={15} />, text: "Ideal for restaurants and commercial kitchens" },
      { icon: <Users size={15} />, text: "Hygienic and standardized cooking processes" },
    ],
    useCases: ["Full-Service Restaurants", "Fast Casual Chains", "Hotel Kitchens", "Food Courts", "Catering", "Cloud Kitchens"],
    visual: <CookingRobotVisual />,
    detailHref: "/robots/cooking-robot",
    reverse: false,
  },
];

const comparisonRows = [
  { label: "Guest Interaction", dog: true, humanoid: true, cooking: false },
  { label: "Kitchen Operations", dog: false, humanoid: false, cooking: true },
  { label: "Brand Presence", dog: true, humanoid: true, cooking: false },
  { label: "Autonomous Navigation", dog: true, humanoid: true, cooking: false },
  { label: "Food Preparation", dog: false, humanoid: false, cooking: true },
  { label: "Customer Service", dog: false, humanoid: true, cooking: false },
];

export default function SolutionsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-glow" />
        <div className="r-inner" style={{ position: "relative", maxWidth: 900 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge" style={{ marginBottom: 20 }}>Robot Solutions</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, color: "#fafafa", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20 }}>
            Advanced Robots for{" "}<span className="gradient-text">Every Business Need</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: "rgba(250,250,250,0.6)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
            Explore our three flagship robot categories — each engineered to solve specific business challenges and create extraordinary experiences.
          </motion.p>
        </div>
      </section>

      {/* ── Robot Sections ── */}
      {robots.map((robot, idx) => (
        <section key={robot.id} id={robot.id}
          style={{ padding: "96px 0", background: idx % 2 === 1 ? "#0a0a0a" : "#0d0d0d", position: "relative", overflow: "hidden" }}>
          <div className="r-inner">
            <div className={robot.reverse ? "r-split-rev" : "r-split"} style={{ alignItems: "center" }}>
              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, x: robot.reverse ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ direction: "ltr" }}
              >
                <div className="visual-panel" style={{ minHeight: 340 }}>
                  <div className="float" style={{ position: "relative", zIndex: 1 }}>{robot.visual}</div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: robot.reverse ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                style={{ direction: "ltr" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(232,135,74,0.15)", border: "1px solid rgba(232,135,74,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#e8874a", flexShrink: 0 }}>
                    {robot.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: "#e8874a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 3 }}>Robot Solution</p>
                    <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 28, fontWeight: 700, color: "#fafafa", lineHeight: 1 }}>{robot.title}</h2>
                  </div>
                </div>

                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "rgba(232,135,74,0.8)", fontStyle: "italic", marginBottom: 16 }}>"{robot.tagline}"</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "rgba(250,250,250,0.62)", lineHeight: 1.75, marginBottom: 24 }}>{robot.description}</p>

                <div className="r-grid-2" style={{ marginBottom: 28 }}>
                  {robot.features.map((f) => (
                    <div key={f.text} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 13, color: "rgba(250,250,250,0.72)", fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                      <span style={{ color: "#e8874a", flexShrink: 0, marginTop: 2 }}>{f.icon}</span>
                      {f.text}
                    </div>
                  ))}
                </div>

                {/* Use cases */}
                <div style={{ marginBottom: 32 }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: "rgba(250,250,250,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Ideal For</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {robot.useCases.map(uc => (
                      <span key={uc} style={{ padding: "5px 14px", borderRadius: 100, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 12, color: "rgba(250,250,250,0.65)", fontFamily: "'Inter', sans-serif" }}>{uc}</span>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <Link href="/contact#demo" className="btn-primary">Request a Demo</Link>
                  <Link href={robot.detailHref} className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
                    Full Details <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Comparison Table ── */}
      <section style={{ padding: "96px 0", background: "#0a0a0a" }}>
        <div className="r-inner" style={{ maxWidth: 900 }}>
          <SectionHeading badge="Compare" title="Find the Right" highlight="Robot for You" subtitle="Each robot type excels in different areas. See which best suits your business needs." />
          <div className="r-compare-wrap">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, overflow: "hidden" }}>
              <table className="compare-table" style={{ width: "100%" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    <th style={{ padding: "16px 24px", textAlign: "left", fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: "rgba(250,250,250,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Feature</th>
                    {[{ icon: <Dog size={16} />, label: "Robot Dog" }, { icon: <Bot size={16} />, label: "Humanoid" }, { icon: <ChefHat size={16} />, label: "Cooking" }].map(col => (
                      <th key={col.label} style={{ padding: "16px 24px", textAlign: "center", borderLeft: "1px solid rgba(255,255,255,0.07)" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, color: "#e8874a", fontFamily: "'Sora', sans-serif", fontSize: 14, fontWeight: 600 }}>
                          {col.icon}<span style={{ color: "#fafafa" }}>{col.label}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.label} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent" }}>
                      <td style={{ padding: "14px 24px", fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(250,250,250,0.75)" }}>{row.label}</td>
                      {[row.dog, row.humanoid, row.cooking].map((val, ci) => (
                        <td key={ci} style={{ padding: "14px 24px", textAlign: "center", borderLeft: "1px solid rgba(255,255,255,0.05)" }}>
                          {val ? <CheckCircle2 size={18} style={{ color: "#e8874a", display: "inline-block" }} /> : <span style={{ display: "inline-block", width: 20, height: 1, background: "rgba(255,255,255,0.15)" }} />}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ padding: "96px 0" }}>
        <div className="r-inner">
          <SectionHeading badge="What Sets Us Apart" title="Built for" highlight="Real Results" subtitle="Every Merchant Robot solution is backed by expertise, proven technology, and dedicated support." />
          <div className="r-grid-3">
            {[
              { icon: <Zap size={18} />, title: "Rapid Deployment", description: "Get operational quickly with streamlined setup and professional onboarding assistance." },
              { icon: <Settings size={18} />, title: "Customizable", description: "Robots can be configured and branded to match your business identity and workflow." },
              { icon: <Brain size={18} />, title: "Smart AI Integration", description: "Advanced AI systems enable intelligent responses, learning, and adaptive behavior." },
              { icon: <Shield size={18} />, title: "Reliable & Durable", description: "Built to handle commercial environments with consistent, dependable performance." },
              { icon: <Users size={18} />, title: "Staff Friendly", description: "Designed to work alongside your team — boosting productivity together." },
              { icon: <Star size={18} />, title: "Memorable Experiences", description: "Every interaction leaves customers amazed and reinforces your innovative brand identity." },
            ].map((f, i) => <FeatureCard key={f.title} {...f} delay={i * 0.08} />)}
          </div>
        </div>
      </section>

      <CTASection
        badge="Ready to Explore?"
        title="Find Your Perfect"
        highlight="Robot Match"
        subtitle="Our experts will help you identify the ideal robot solution for your specific business. Book a free consultation today."
        primaryLabel="Book a Free Demo"
        secondaryLabel="Contact Our Team"
        secondaryHref="/contact"
      />
    </>
  );
}
