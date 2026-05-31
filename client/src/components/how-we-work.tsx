import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Discovery", body: "We start by listening. A 30–45 minute call to understand your business, your users, and what success looks like. No forms to fill, just a real conversation." },
  { n: "02", title: "Proposal", body: "Within 48 hours, you get a detailed scope, timeline, and fixed price. No hourly billing surprises. We commit to what we say we'll build." },
  { n: "03", title: "Design", body: "We create high-fidelity designs before writing a single line of code. You see exactly what you're getting. Revisions are expected — that's what this phase is for." },
  { n: "04", title: "Build", body: "Weekly updates, staging previews at every milestone. You're never left wondering where the project stands." },
  { n: "05", title: "Launch", body: "Deployment, domain config, SSL, performance checks. We don't hand you a ZIP file — we put it live and make sure it works." },
  { n: "06", title: "Support", body: "After launch, we're still here. Bug fixes, updates, or building the next feature — we stay involved for as long as you need." },
];

export default function HowWeWork() {
  return (
    <section className="section-gap bg-[#07070f]">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />
      <div className="container-pad">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="tag mb-4 inline-flex">Process</span>
            <h2 className="text-display-md text-white">
              How we work<span className="gradient-text">.</span>
            </h2>
          </div>
          <p className="text-white/30 text-sm font-inter max-w-xs">
            Predictable. Transparent. No surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`p-7 border-white/6 ${
                i < 3 ? "border-b" : ""
              } ${
                i % 3 !== 2 ? "md:border-r" : ""
              }`}
            >
              <span className="text-label text-white/18 block mb-5">{s.n}</span>
              <h4 className="font-syne font-600 text-white/85 text-lg tracking-tight mb-3">{s.title}</h4>
              <p className="text-white/38 text-sm font-inter leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
