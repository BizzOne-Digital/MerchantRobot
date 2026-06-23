"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Shield, Users, ChefHat, Dog, Bot, ArrowRight, CheckCircle2, Star, Clock, TrendingUp, Cpu } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import { RobotDogVisual, HumanoidVisual, CookingRobotVisual, HeroRobotVisual } from "@/components/RobotVisuals";

const robotCategories = [
  { icon: <Dog size={20} />, title: "Robot Dog", desc: "Smart robotic mobility for engagement, demonstrations, and advanced business applications.", href: "/robots/robot-dog", visual: <RobotDogVisual /> },
  { icon: <Bot size={20} />, title: "Humanoid Robot", desc: "Interactive robots designed to welcome, assist, and engage customers intelligently.", href: "/robots/humanoid", visual: <HumanoidVisual /> },
  { icon: <ChefHat size={20} />, title: "Cooking Robot", desc: "Restaurant automation designed for speed, consistency, and smarter kitchen operations.", href: "/robots/cooking-robot", visual: <CookingRobotVisual /> },
];

const whyChoose = [
  { icon: <Cpu size={18} />, title: "Advanced Robotic Solutions", description: "Cutting-edge AI-powered robots engineered for real-world business environments." },
  { icon: <ChefHat size={18} />, title: "Restaurant Specialists", description: "Deep expertise in automating kitchen, service, and dining operations." },
  { icon: <Users size={18} />, title: "Customer-Focused Automation", description: "Robots that enhance guest experiences and create memorable interactions." },
  { icon: <Shield size={18} />, title: "Professional Consultation", description: "Expert guidance from robot selection through full deployment and support." },
  { icon: <TrendingUp size={18} />, title: "Future-Ready Technology", description: "Solutions that grow with your business and adapt to evolving needs." },
  { icon: <Zap size={18} />, title: "Improved Efficiency", description: "Demonstrably faster operations, reduced costs, and consistent quality." },
];

const restaurantBenefits = [
  "Better operational flow", "Consistent performance", "Improved customer attraction",
  "Smarter kitchen support", "Modern brand image", "Scalable automation",
];

const howItWorks = [
  { step: "01", title: "Consultation", desc: "We understand your business needs, goals, and current operations to find the best fit." },
  { step: "02", title: "Robot Recommendation", desc: "We suggest the right robot — dog, humanoid, or cooking robot — for your use case." },
  { step: "03", title: "Setup & Guidance", desc: "We help you get started with hands-on onboarding and staff training support." },
  { step: "04", title: "Business Automation", desc: "Your business becomes smarter, faster, and more engaging with ongoing optimization." },
];

const industries = [
  { name: "Fine Dining", icon: "🍽️" },
  { name: "Fast Casual", icon: "🍔" },
  { name: "Hotels & Resorts", icon: "🏨" },
  { name: "Retail & Showrooms", icon: "🛍️" },
  { name: "Events & Exhibitions", icon: "🎪" },
  { name: "Corporate Offices", icon: "🏢" },
  { name: "Shopping Centers", icon: "🏬" },
  { name: "Theme Parks", icon: "🎡" },
];

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", paddingTop: 72 }} className="hero-bg">
        {/* Radial glow */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 65% 45%, rgba(232,135,74,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
        {/* Grid */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(232,135,74,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(232,135,74,0.6) 1px, transparent 1px)", backgroundSize: "64px 64px", pointerEvents: "none" }} />
        {/* Orbs */}
        <div style={{ position: "absolute", top: "15%", right: "8%", width: 400, height: 400, borderRadius: "50%", background: "rgba(232,135,74,0.06)", filter: "blur(100px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "15%", left: "3%", width: 300, height: 300, borderRadius: "50%", background: "rgba(245,197,163,0.04)", filter: "blur(80px)", pointerEvents: "none" }} />

        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "80px 48px", display: "flex", alignItems: "center", gap: 64, flexWrap: "wrap" }}>
          {/* Left: Text */}
          <div style={{ flex: 1, minWidth: 300 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: 24 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 18px", borderRadius: 100, background: "rgba(232,135,74,0.12)", border: "1px solid rgba(232,135,74,0.3)", color: "#e8874a", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#e8874a", display: "inline-block", animation: "pulse 2s infinite" }} />
                Next-Generation Robotics
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 800, color: "#fafafa", lineHeight: 1.06, letterSpacing: "-0.03em", marginBottom: 24 }}
            >
              Smart Robotics for{" "}
              <span className="gradient-text">Modern Restaurants</span>{" "}
              &amp; Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: "rgba(250,250,250,0.65)", lineHeight: 1.75, maxWidth: 520, marginBottom: 36 }}
            >
              Merchant Robot brings advanced robot dog, humanoid, and cooking robot solutions designed to improve service, efficiency, and customer experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 36 }}
            >
              <Link href="/solutions" className="btn-primary">
                Explore Robots
              </Link>
              <Link href="/contact" className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                Book a Consultation <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ display: "flex", flexWrap: "wrap", gap: 24 }}
            >
              {["Professional Setup", "Expert Support", "Proven Results"].map(badge => (
                <div key={badge} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "rgba(250,250,250,0.5)", fontFamily: "'Inter', sans-serif" }}>
                  <CheckCircle2 size={14} style={{ color: "#e8874a", flexShrink: 0 }} />
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Robot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            style={{ flexShrink: 0, width: "min(340px, 45vw)", position: "relative" }}
            className="float"
          >
            <div style={{ position: "absolute", inset: 0, background: "rgba(232,135,74,0.08)", borderRadius: "50%", filter: "blur(60px)", transform: "scale(1.2)" }} />
            <div style={{ position: "relative" }}><HeroRobotVisual /></div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}
        >
          <span style={{ fontSize: 11, color: "rgba(250,250,250,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>Scroll</span>
          <div style={{ width: 1, height: 32, background: "linear-gradient(to bottom, rgba(232,135,74,0.6), transparent)" }} />
        </motion.div>

        <style>{`
          @media (max-width: 900px) {
            .hero-content { flex-direction: column; text-align: center; align-items: center; }
            .hero-visual { width: min(260px, 70vw) !important; }
            .hero-cta { justify-content: center !important; }
            .hero-badges { justify-content: center !important; }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════
          STATS
      ══════════════════════════════════════════ */}
      <StatsSection />

      {/* ══════════════════════════════════════════
          TRUSTED SECTION
      ══════════════════════════════════════════ */}
      <section style={{ padding: "96px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <SectionHeading
            badge="Trusted Robotics"
            title="Robotics Solutions You Can"
            highlight="Rely On"
            subtitle="Merchant Robot delivers tested, reliable robotic systems built for the real demands of restaurants and businesses."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { icon: <Star size={20} />, title: "Premium Quality", description: "Advanced robotic systems engineered for commercial environments and high-demand usage." },
              { icon: <Clock size={20} />, title: "Fast Deployment", description: "Get up and running quickly with streamlined setup, configuration, and guided onboarding." },
              { icon: <Shield size={20} />, title: "Reliable Support", description: "Ongoing technical support and maintenance to keep your robots performing at peak levels." },
            ].map((item, i) => (
              <FeatureCard key={item.title} {...item} delay={i * 0.1} />
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.trusted-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ══════════════════════════════════════════
          ROBOT CATEGORIES
      ══════════════════════════════════════════ */}
      <section style={{ padding: "96px 0", background: "#0a0a0a", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(232,135,74,0.06) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <SectionHeading
            badge="Robot Categories"
            title="Explore Our"
            highlight="Robot Solutions"
            subtitle="Three powerful categories of robots designed to transform how your business operates and engages customers."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {robotCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className="robot-card"
              >
                <div className="visual-area">
                  <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(232,135,74,0.08) 0%, transparent 70%)" }} />
                  <div style={{ position: "relative", zIndex: 1 }}>{cat.visual}</div>
                </div>
                <div className="card-body">
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(232,135,74,0.15)", border: "1px solid rgba(232,135,74,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#e8874a", flexShrink: 0 }}>
                      {cat.icon}
                    </div>
                    <h3>{cat.title}</h3>
                  </div>
                  <p>{cat.desc}</p>
                  <Link href={cat.href} style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#e8874a", fontSize: 14, fontWeight: 600, textDecoration: "none", fontFamily: "'Inter', sans-serif", transition: "gap 0.2s ease" }}>
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.robot-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE
      ══════════════════════════════════════════ */}
      <section style={{ padding: "96px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <SectionHeading
            badge="Why Merchant Robot"
            title="Why Businesses Choose"
            highlight="Merchant Robot"
            subtitle="Advanced robotic technology combined with deep industry knowledge to deliver solutions that genuinely transform operations."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {whyChoose.map((item, i) => (
              <FeatureCard key={item.title} {...item} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          RESTAURANT BENEFITS
      ══════════════════════════════════════════ */}
      <section style={{ padding: "96px 0", background: "#0a0a0a", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "50%", background: "radial-gradient(ellipse at right, rgba(232,135,74,0.05) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            {/* Left */}
            <div>
              <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="badge" style={{ marginBottom: 20 }}>
                Restaurant Automation
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, color: "#fafafa", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 20 }}
              >
                Bring Automation Into{" "}<span className="gradient-text">Your Restaurant</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "rgba(250,250,250,0.62)", lineHeight: 1.75, marginBottom: 28 }}
              >
                Robotics can help restaurants improve service speed, reduce repetitive tasks, support staff, and create a memorable customer experience that sets you apart.
              </motion.p>
              <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 36 }}>
                {restaurantBenefits.map((b, i) => (
                  <motion.li key={b} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.06 }}
                    style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(250,250,250,0.75)", fontFamily: "'Inter', sans-serif" }}>
                    <CheckCircle2 size={15} style={{ color: "#e8874a", flexShrink: 0 }} />
                    {b}
                  </motion.li>
                ))}
              </motion.ul>
              <Link href="/restaurant" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                Explore Restaurant Solutions <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right: visual card */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="visual-panel" style={{ flexDirection: "column", gap: 0 }}>
                <div style={{ position: "relative", zIndex: 1, marginBottom: 16 }}>
                  <CookingRobotVisual />
                </div>
                <div className="mini-stats">
                  {[{ val: "40%", label: "Faster Service" }, { val: "98%", label: "Consistency" }, { val: "60%", label: "Less Repetition" }].map(s => (
                    <div key={s.label} style={{ textAlign: "center" }}>
                      <div className="mini-stat-val">{s.val}</div>
                      <div className="mini-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section style={{ padding: "96px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <SectionHeading badge="The Process" title="How It" highlight="Works" subtitle="A simple, guided process to get the right robot solution working for your business." />
          <div className="hiw-grid">
            <div className="hiw-connector" />
            {howItWorks.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} style={{ textAlign: "center", position: "relative" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(232,135,74,0.12)", border: "2px solid rgba(232,135,74,0.35)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", position: "relative", zIndex: 1, transition: "all 0.3s ease" }}>
                  <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 20, fontWeight: 800, background: "linear-gradient(135deg, #f5c5a3, #e8874a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{step.step}</span>
                </div>
                <h4 style={{ fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 600, color: "#fafafa", marginBottom: 10 }}>{step.title}</h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(250,250,250,0.55)", lineHeight: 1.65 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INDUSTRIES
      ══════════════════════════════════════════ */}
      <section style={{ padding: "96px 0", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
          <SectionHeading badge="Industries We Serve" title="Built for" highlight="Every Business" subtitle="Merchant Robot solutions are deployed across a wide range of industries and business types." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {industries.map((ind, i) => (
              <motion.div key={ind.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} whileHover={{ scale: 1.04, y: -4 }} className="industry-card">
                <div className="icon">{ind.icon}</div>
                <div className="name">{ind.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA
      ══════════════════════════════════════════ */}
      <CTASection
        badge="Start Today"
        title="Ready to Transform Your"
        highlight="Business?"
        subtitle="Discover how robot dogs, humanoid robots, and cooking robots can elevate your restaurant or business. Book a free consultation."
        primaryLabel="Book a Free Demo"
        secondaryLabel="View Robot Solutions"
      />
    </>
  );
}
