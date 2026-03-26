import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navsection from "./Navsection";
import Convinience from "../user-management/Convinience";

const FEATURES = [
  {
    id: 1,
    tag: "Patient Records",
    heading: "Unified Patient Records at Your Fingertips",
    body: "Access complete medical histories, lab results, and prescriptions in one simple dashboard — so doctors can focus on healing, not paperwork.",
    accent: "#0EA5E9",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80",
    imageAlt: "Doctor reviewing digital patient records",
    reverse: false,
  },
  {
    id: 2,
    tag: "Appointments",
    heading: "Smart Scheduling with Zero Confusion",
    body: "Book and manage doctor appointments in real time. Automated reminders reduce no-shows and ensure every patient sees the right specialist on time.",
    accent: "#10B981",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=700&q=80",
    imageAlt: "Medical scheduling on tablet",
    reverse: true,
  },
  {
    id: 3,
    tag: "Analytics",
    heading: "Track Everything from One Dashboard",
    body: "Monitor bed occupancy, staff shifts, medicine inventory, and billing — all updated live so management can make better decisions faster.",
    accent: "#8B5CF6",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=700&q=80",
    imageAlt: "Hospital analytics dashboard",
    reverse: false,
  },
  {
    id: 4,
    tag: "Telemedicine",
    heading: "Connect Patients & Doctors Anywhere",
    body: "Video consultations and digital prescriptions bring quality care to patients remotely — linked directly to their medical records.",
    accent: "#F59E0B",
    image: "https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?w=700&q=80",
    imageAlt: "Doctor on video call",
    reverse: true,
  },
];

const STATS = [
  { value: "98%", label: "Patient Satisfaction" },
  { value: "40k+", label: "Patients Managed" },
  { value: "500+", label: "Doctors Onboarded" },
  { value: "24/7", label: "System Uptime" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Introduction() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#1B211A", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');
        .hero-bg { background: linear-gradient(135deg, #0C4A6E 0%, #075985 45%, #0284C7 100%); }
        .grid-bg {
          background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 36px 36px;
        }
        .img-frame { border-radius: 18px; overflow: hidden; box-shadow: 0 20px 50px -10px rgba(0,0,0,0.2); }
        .stat-card {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 14px;
          padding: 14px 10px;
          text-align: center;
        }
      `}</style>

      {/* AUTH BUTTONS — fixed top-right */}
      {/* <div className="fixed top-5 right-6 z-50 flex gap-3">
        <motion.Link
          
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          whileHover={{ y: -2 }}
          className="bg-white text-sky-700 border border-sky-200 font-semibold text-sm px-5 py-2.5 rounded-xl shadow-md"
        >
          Login
        </motion.Link>
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          whileHover={{ y: -2 }}
          className="text-white font-semibold text-sm px-5 py-2.5 rounded-xl"
          style={{
            background: "linear-gradient(90deg,#0284C7,#0EA5E9)",
            boxShadow: "0 4px 16px rgba(14,165,233,0.45)",
          }}
        >
          Sign Up
        </motion.a>
      </div> */}

      <Navsection/>



      {/* ── HERO ── */}
      <section className="hero-bg grid-bg min-h-screen flex items-center relative overflow-hidden">
        {/* Soft blobs */}
        <div className="absolute top-16 right-16 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "rgba(56,189,248,0.15)", filter: "blur(64px)" }} />
        <div className="absolute bottom-16 left-8 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "rgba(37,99,235,0.15)", filter: "blur(64px)" }} />

        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center w-full">

          {/* Text block */}
          <motion.div
            className="text-white"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-sky-300 text-xs font-semibold px-4 py-2 rounded-full mb-8"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
              Hospital Management System
            </motion.div>

            <motion.h1
              variants={fadeUp}
              style={{ fontFamily: "'DM Serif Display', serif", lineHeight: 1.1 }}
              className="text-5xl md:text-6xl mb-5 text-white"
            >
              Smarter Care,<br />
              <span style={{ color: "#7DD3FC", fontStyle: "italic" }}>Better Hospitals</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-blue-100 text-lg leading-relaxed mb-10 max-w-md">
              MediCore HMS brings patients, doctors, and administration together in one unified platform — making hospital operations simple, efficient, and error-free.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-14">
              <Link
               to="/convinience"
                className="text-white font-semibold px-8 py-3.5 rounded-xl text-base"
                style={{
                  background: "linear-gradient(90deg,#0284C7,#0EA5E9)",
                  boxShadow: "0 4px 18px rgba(14,165,233,0.45)",
                }}
              >
                Get Started →
              </Link>
              <Link
                to="/convinience"
                className="text-white font-semibold px-8 py-3.5 rounded-xl text-base"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                Learn More
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="stat-card">
                  <div style={{ fontFamily: "'DM Serif Display', serif", color: "#7DD3FC", fontSize: "1.5rem", marginBottom: 4 }}>
                    {s.value}
                  </div>
                  <div className="text-blue-200 text-xs">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero image with float */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="img-frame w-full"
              style={{ height: 420 }}
            >
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=80"
                alt="Modern hospital"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full">
            <path d="M0 30 C360 60 1080 0 1440 30 L1440 60 L0 60 Z" fill="#F0F4F8" />
          </svg>
        </div>
      </section>

      {/* ── SECTION INTRO ── */}
      <motion.section
        className="py-16 px-6 max-w-3xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
      >
        <p className="text-sky-600 text-xs font-semibold uppercase tracking-widest mb-4">What We Offer</p>
        <h2
          style={{ fontFamily: "'DM Serif Display', serif", lineHeight: 1.2 }}
          className="text-4xl md:text-5xl text-white mb-5"
        >
          Everything your hospital needs,{" "}
          <span style={{ color: "#0284C7", fontStyle: "italic" }}>in one place</span>
        </h2>
        <p className="text-slate-500 text-base leading-relaxed">
          From a small clinic to a large hospital, MediCore adapts to your needs and helps your team deliver great care without the chaos.
        </p>
      </motion.section>

      {/* ── ZIGZAG FEATURES ── */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          {FEATURES.map((f) => (
            <div
              key={f.id}
              className={`flex flex-col ${f.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 lg:gap-16`}
            >
              {/* Image */}
              <motion.div
                className="w-full md:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={f.reverse ? fadeRight : fadeLeft}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="img-frame w-full"
                  style={{ height: 320 }}
                >
                  <img src={f.image} alt={f.imageAlt} className="w-full h-full object-cover" />
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                className="w-full md:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={f.reverse ? fadeLeft : fadeRight}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: f.accent }}
                >
                  {f.tag}
                </p>
                <h3
                  style={{ fontFamily: "'DM Serif Display', serif", lineHeight: 1.2 }}
                  className="text-3xl md:text-4xl text-white mb-4"
                >
                  {f.heading}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed mb-6">{f.body}</p>
               <motion.div
               
                whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}>
                 <Link
                 to="/convinience" 
                  className="inline-flex items-center gap-1 font-semibold text-sm"
                  style={{ color: f.accent }}
                >
                  Learn More →
                </Link>
               </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <motion.section
        className="py-16 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
      >
        <div
          className="max-w-4xl mx-auto hero-bg grid-bg rounded-3xl p-12 text-center text-white"
          style={{ boxShadow: "0 20px 60px rgba(2,132,199,0.3)" }}
        >
          <h2
            style={{ fontFamily: "'DM Serif Display', serif" }}
            className="text-4xl md:text-5xl mb-4 leading-tight"
          >
            Ready to get started?
          </h2>
          <p className="text-blue-100 text-base mb-8 max-w-md mx-auto">
            Sign up today and see how MediCore HMS can simplify your hospital's day-to-day operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
            to="/signup"
              className="text-white font-semibold px-8 py-3.5 rounded-xl"
              style={{
                background: "linear-gradient(90deg,#0284C7,#0EA5E9)",
                boxShadow: "0 4px 18px rgba(14,165,233,0.45)",
              }}
            >
              Sign Up Free →
            </Link>
            <Link
             to="/login"
              className="text-white font-semibold px-8 py-3.5 rounded-xl"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              Login
            </Link>
          </div>
        </div>
      </motion.section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6 text-center">
        <p className="text-sm">© 2026 MediCore Hospital Management System</p>
      </footer>
    </div>
  );
}