import { motion } from "framer-motion";

const row1 = ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"];
const row2 = ["React Native", "Android SDK", "Tailwind CSS", "AWS", "Docker", "Razorpay", "Figma", "Framer Motion"];

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-2">
      <div
        className={`flex gap-3 ${reverse ? "animate-marquee-slow" : "animate-marquee"}`}
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex-shrink-0 px-4 py-2 glass rounded-full text-white/38 text-xs font-space tracking-wider border border-white/6 hover:border-white/14 hover:text-white/60 transition-all duration-200 cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="py-20 bg-[#07070f] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />

      <div className="container-pad mb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <h2 className="text-display-sm text-white">
            Our stack<span className="gradient-text">.</span>
          </h2>
          <p className="text-white/30 text-sm font-inter max-w-xs">
            Modern, battle-tested tools chosen for each job — not for the sake of it.
          </p>
        </motion.div>
      </div>

      <div className="space-y-3">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
