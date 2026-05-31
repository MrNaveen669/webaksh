import { motion } from "framer-motion";
import { MessageSquare, FileText, Layers, Code2, CheckSquare, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    body: "30–45 minutes to understand your business, users, and definition of success. No forms — a real conversation.",
    duration: "Day 1",
  },
  {
    n: "02",
    icon: FileText,
    title: "Proposal & Scope",
    body: "Within 48 hours: a detailed scope document, fixed timeline, and fixed price. No hourly billing surprises.",
    duration: "Day 2–3",
  },
  {
    n: "03",
    icon: Layers,
    title: "Design First",
    body: "High-fidelity designs before writing any code. You see exactly what you're getting and can request revisions.",
    duration: "Week 1–2",
  },
  {
    n: "04",
    icon: Code2,
    title: "Development",
    body: "Weekly updates with staging previews at every milestone. You're never left wondering where the project stands.",
    duration: "Week 2–6",
  },
  {
    n: "05",
    icon: CheckSquare,
    title: "Testing & QA",
    body: "Thorough testing on real devices — mobile, desktop, slow connections. We ship only when we're confident it works.",
    duration: "Week 6–7",
  },
  {
    n: "06",
    icon: Rocket,
    title: "Launch",
    body: "Domain configuration, SSL, performance audit, and deployment. We put it live and verify everything works.",
    duration: "Week 7–8",
  },
  {
    n: "07",
    icon: LifeBuoy,
    title: "Ongoing Support",
    body: "After launch, we're still your team. Bug fixes, updates, new features — on-call and invested in your product's growth.",
    duration: "Ongoing",
  },
];

export default function HowWeWork() {
  return (
    <section className="section-gap bg-[#07070f]">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />
      <div className="container-pad">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
          <div>
            <span className="tag mb-4 inline-flex">Process</span>
            <h2 className="text-display-md text-white">
              How a project<br />
              <span className="text-white/32">actually runs.</span>
            </h2>
          </div>
          <p className="text-white/30 text-sm font-inter max-w-xs leading-relaxed">
            Predictable process, clear communication, no surprises. From first call to post-launch support.
          </p>
        </div>

        {/* Process grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`glass glass-hover rounded-xl p-5 border border-white/6 ${i === steps.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600/15 flex items-center justify-center">
                    <Icon size={14} className="text-indigo-400" />
                  </div>
                  <span className="text-label text-white/18">{s.duration}</span>
                </div>
                <p className="text-label text-white/22 mb-1">{s.n}</p>
                <h4 className="font-syne font-600 text-white/85 text-sm tracking-tight mb-2">{s.title}</h4>
                <p className="text-white/35 text-xs font-inter leading-relaxed">{s.body}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom strip — timeline visual */}
        <div className="mt-8 flex items-center gap-0 overflow-hidden">
          {steps.map((s, i) => (
            <div key={s.n} className="flex items-center flex-1 min-w-0">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-indigo-500/60" />
              </div>
              {i < steps.length - 1 && <div className="flex-1 h-px bg-white/5 min-w-0" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
