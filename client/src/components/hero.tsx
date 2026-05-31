import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight } from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#07070f]">
      {/* Subtle ambient orbs */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="orb w-[600px] h-[600px] bg-indigo-700 opacity-[0.08] top-[-80px] left-[-120px]" />
        <div className="orb w-[500px] h-[500px] bg-violet-700 opacity-[0.07] bottom-[5%] right-[-80px]" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 container-pad pt-28 pb-16">
        {/* Eyebrow */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="mb-10"
        >
          <span className="tag">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            Raipur, Chhattisgarh — Available for Projects
          </span>
        </motion.div>

        {/* Display headline — editorial, confident */}
        <div className="max-w-5xl mb-10">
          <motion.h1
            variants={FADE_UP}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="text-display text-white"
          >
            We build digital
          </motion.h1>
          <motion.h1
            variants={FADE_UP}
            initial="hidden"
            animate="show"
            custom={0.32}
            className="text-display"
            style={{
              background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 40%, #e879f9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            things that work.
          </motion.h1>
        </div>

        {/* Sub-row */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <motion.p
            variants={FADE_UP}
            initial="hidden"
            animate="show"
            custom={0.44}
            className="text-white/42 text-base md:text-lg leading-relaxed max-w-sm font-inter"
          >
            Websites, mobile apps, and growth systems for small businesses that mean business. Based in Raipur — working globally.
          </motion.p>

          <motion.div
            variants={FADE_UP}
            initial="hidden"
            animate="show"
            custom={0.56}
            className="flex items-center gap-4 flex-shrink-0"
          >
            <button onClick={() => go("contact")} className="btn-primary">
              Start a Project
              <ArrowDownRight size={15} />
            </button>
            <button onClick={() => go("projects")} className="btn-ghost">
              See Our Work
            </button>
          </motion.div>
        </div>

        {/* Stats row — inline, minimal */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          custom={0.68}
          className="mt-20 pt-8 border-t border-white/6 flex flex-wrap gap-x-12 gap-y-4"
        >
          {[
            { n: "5+", l: "Projects Delivered" },
            { n: "95%", l: "Client Satisfaction" },
            { n: "2", l: "Focused Founders" },
            { n: "24h", l: "Response Time" },
          ].map(({ n, l }) => (
            <div key={l} className="flex items-baseline gap-2">
              <span className="font-syne font-700 text-2xl text-white tracking-tight">{n}</span>
              <span className="text-white/30 text-xs font-inter tracking-wide">{l}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ scaleY: [0, 1, 0], y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}
