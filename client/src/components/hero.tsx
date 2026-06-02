import { motion } from "framer-motion";
import { ArrowRight, ArrowDownRight, CheckCircle } from "lucide-react";

const FADE = {
  hidden: { opacity: 0, y: 20 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

const tech = [
  "React",
  "Node.js",
  "MongoDB",
  "React Native",
  "AWS",
  "Firebase",
  "Next.js",
  "PostgreSQL",
];

const highlights = [
  "Mobile-first development",
  "SEO-optimised from day one",
  "Transparent, fixed pricing",
];

export default function Hero() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#07070f] pt-16"
    >
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="orb w-[500px] h-[500px] bg-indigo-700 opacity-[0.08] top-[-60px] left-[-80px]" />
        <div className="orb w-[400px] h-[400px] bg-violet-700 opacity-[0.06] bottom-0 right-0" />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-pad relative z-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── LEFT: Copy + CTAs ────────────────────────────── */}
          <div>
            <motion.div
              variants={FADE}
              initial="hidden"
              animate="show"
              custom={0.05}
              className="mb-5"
            >
              <span className="tag">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Available for New Projects · Raipur, India
              </span>
            </motion.div>

            <motion.h1
              variants={FADE}
              initial="hidden"
              animate="show"
              custom={0.15}
              className="text-display text-white mb-4 font-light"
              style={{ fontWeight: 300 }}
            >
              Websites, Apps &<br />
              Digital Systems
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #818cf8 0%, #a78bfa 45%, #f472b6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Built to Grow.
              </span>
            </motion.h1>

            <motion.p
              variants={FADE}
              initial="hidden"
              animate="show"
              custom={0.28}
              className="text-white/50 text-base leading-relaxed mb-6 font-inter max-w-md"
            >
              We design and develop high-performance digital products that help
              businesses attract customers, improve efficiency, and scale with
              confidence.
            </motion.p>

            {/* Trust bullets */}
            <motion.ul
              variants={FADE}
              initial="hidden"
              animate="show"
              custom={0.36}
              className="space-y-2 mb-8"
            >
              {highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-2.5 text-sm text-white/45 font-inter"
                >
                  <CheckCircle
                    size={13}
                    className="text-indigo-400 flex-shrink-0"
                  />
                  {h}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              variants={FADE}
              initial="hidden"
              animate="show"
              custom={0.46}
              className="flex flex-wrap gap-3"
            >
              <button onClick={() => go("contact")} className="btn-primary">
                Start a Project <ArrowRight size={14} />
              </button>
              <button onClick={() => go("projects")} className="btn-ghost">
                View Case Studies
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={FADE}
              initial="hidden"
              animate="show"
              custom={0.58}
              className="flex flex-wrap gap-x-8 gap-y-4 mt-10 pt-8 border-t border-white/6"
            >
              {[
                { n: "5+", l: "Projects Delivered" },
                { n: "95%", l: "Client Satisfaction" },
                { n: "24h", l: "Support Response" },
              ].map(({ n, l }) => (
                <div key={l}>
                  <span className="font-syne font-700 text-xl text-white tracking-tight">
                    {n}
                  </span>
                  <span className="block text-white/28 text-xs font-inter mt-0.5">
                    {l}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Project preview ───────────────────────── */}
          <motion.div
            variants={FADE}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="relative hidden lg:block"
          >
            {/* Browser chrome frame */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
              {/* Browser bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#111120] border-b border-white/6">
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="flex-1 mx-4 bg-white/5 rounded-md px-3 py-1 text-white/25 text-xs font-inter">
                  opticlair.in
                </div>
              </div>
              {/* Screenshot */}
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dl28vjim6/image/upload/v1749035577/Screenshot_2025-06-04_163744_a0a0yt.png"
                  alt="OptiClair.in — E-Commerce project by WebAksh"
                  className="w-full object-cover object-top"
                  style={{ maxHeight: "340px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070f]/50 to-transparent" />
              </div>
            </div>

            {/* Floating label card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-5 glass rounded-xl px-4 py-3 border border-white/8 shadow-xl"
            >
              <p className="text-white/80 text-xs font-space font-500 mb-0.5">
                OptiClair.in
              </p>
              <p className="text-white/35 text-[10px] font-inter">
                E-Commerce · React · Razorpay
              </p>
            </motion.div>

            {/* Stack badge */}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -top-3 -right-3 glass rounded-xl px-4 py-3 border border-white/8 shadow-xl"
            >
              <p className="text-label text-white/30 mb-1.5">Built with</p>
              <p className="text-white/70 text-xs font-space">
                React · Node.js · MongoDB
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Trusted Tech Strip ───────────────────────────────── */}
        <motion.div
          variants={FADE}
          initial="hidden"
          animate="show"
          custom={0.65}
          className="mt-14 pt-8 border-t border-white/6"
        >
          <p className="text-label text-white/22 mb-5">
            Technologies we work with
          </p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="tag hover:border-white/18 hover:text-white/70 transition-all cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
