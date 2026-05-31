import { motion } from "framer-motion";
import { Code2, MessageSquare, Smartphone, Search, Shield, HeartHandshake } from "lucide-react";

const team = [
  {
    name: "Yogeshwar Verma",
    role: "Full-Stack Engineer",
    focus: "Web architecture, React ecosystems, backend APIs, performance optimisation.",
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749041838/Screenshot_2025-06-04_182645_yrbvt9.png",
  },
  {
    name: "Naveen Kumar",
    role: "Full-Stack Engineer",
    focus: "Mobile development, Android, cloud infrastructure, DevOps.",
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749042317/Screenshot_2025-06-04_183356_xtlwqp.png",
  },
];

const reasons = [
  { icon: Code2,         title: "Modern Tech Stack",       body: "We use React, Node.js, MongoDB, AWS, and other production-grade tools — not outdated platforms." },
  { icon: MessageSquare, title: "Direct Communication",    body: "No account managers. You work directly with the founders throughout the project." },
  { icon: Smartphone,    title: "Mobile-First",            body: "Every product we build works flawlessly on mobile — it's not an afterthought." },
  { icon: Search,        title: "SEO-Friendly by Default", body: "We build with search visibility in mind from the start, not bolted on at the end." },
  { icon: Shield,        title: "Transparent Process",     body: "Weekly updates, staging previews, fixed pricing. No surprises, ever." },
  { icon: HeartHandshake,"title": "Long-Term Support",     body: "We stay involved after launch. Bug fixes, updates, new features — we're your ongoing partner." },
];

const values = [
  { n: "01", title: "Craft over speed", body: "We'd rather take an extra day to get something right than ship something mediocre on time." },
  { n: "02", title: "Honest communication", body: "No fluff. You work directly with us. If something will take two weeks, we say two weeks." },
  { n: "03", title: "Build to last", body: "We write clean, documented code and make architectural decisions that hold up as your product grows." },
  { n: "04", title: "Results, not deliverables", body: "A website launch isn't the goal — what happens after launch is. We care about whether your business grows." },
];

export default function About() {
  return (
    <section id="about" className="section-gap bg-[#07070f]">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />
      <div className="container-pad">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <span className="tag mb-4 inline-flex">About WebAksh</span>
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <h2 className="text-display-md text-white">
              Two developers.<br />
              One focused team.<br />
              <span className="text-white/30">Based in Raipur.</span>
            </h2>
            <div>
              <p className="text-white/48 text-sm leading-relaxed font-inter mb-4">
                We started WebAksh because small businesses in Raipur kept getting sold expensive, half-finished digital work by agencies that didn't understand their problems.
              </p>
              <p className="text-white/35 text-sm leading-relaxed font-inter">
                We do it differently — build things that actually work, charge what's fair, and stay involved after launch. Every client gets both of us, directly.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team */}
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass glass-hover rounded-2xl p-5 flex items-start gap-4 border border-white/6"
            >
              <img
                src={m.image}
                alt={m.name}
                className="w-14 h-14 rounded-full object-cover border border-white/10 flex-shrink-0"
              />
              <div>
                <h3 className="font-syne font-600 text-white text-base tracking-tight">{m.name}</h3>
                <p className="text-indigo-400/75 text-[10px] font-space uppercase tracking-wider mb-1.5">{m.role}</p>
                <p className="text-white/38 text-xs font-inter leading-relaxed">{m.focus}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose WebAksh */}
        <div className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <h3 className="text-display-sm text-white">Why clients choose us</h3>
            <p className="text-white/28 text-xs font-inter max-w-xs">
              Six things we consistently hear from clients who've worked with other agencies before.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="glass glass-hover rounded-xl p-5 border border-white/6"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-600/15 flex items-center justify-center mb-4">
                    <Icon size={14} className="text-indigo-400" />
                  </div>
                  <h4 className="font-syne font-600 text-white/85 text-sm tracking-tight mb-2">{r.title}</h4>
                  <p className="text-white/38 text-xs font-inter leading-relaxed">{r.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Values — numbered list */}
        <div>
          <h3 className="text-display-sm text-white mb-8">How we work</h3>
          <div className="line-rule" />
          {values.map((v, i) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="py-5 grid grid-cols-12 gap-4 items-start">
                <span className="text-label text-white/18 col-span-1">{v.n}</span>
                <h4 className="font-syne font-600 text-white/80 text-base col-span-4 tracking-tight">{v.title}</h4>
                <p className="text-white/38 text-sm font-inter leading-relaxed col-span-7">{v.body}</p>
              </div>
              <div className="line-rule" />
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-wrap gap-x-12 gap-y-4"
        >
          {[
            { n: "5+", l: "Projects shipped" },
            { n: "3+", l: "Years building" },
            { n: "95%", l: "Client retention" },
            { n: "24h", l: "Support response" },
          ].map(({ n, l }) => (
            <div key={l}>
              <span className="font-syne font-700 text-2xl text-white tracking-tight">{n}</span>
              <span className="block text-white/28 text-xs font-inter mt-0.5">{l}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
