import { motion } from "framer-motion";

const team = [
  {
    name: "Yogeshwar Verma",
    role: "Full-Stack Engineer",
    focus: "Web architecture, React ecosystems, backend systems.",
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749041838/Screenshot_2025-06-04_182645_yrbvt9.png",
  },
  {
    name: "Naveen Kumar",
    role: "Full-Stack Engineer",
    focus: "Mobile development, cloud infrastructure, Android.",
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749042317/Screenshot_2025-06-04_183356_xtlwqp.png",
  },
];

const values = [
  { n: "01", title: "Craft over speed", body: "We'd rather take an extra day to get something right than ship something mediocre on time. Quality is the metric that matters." },
  { n: "02", title: "Honest communication", body: "No fluff, no account managers. You work directly with us. If something will take two weeks, we say two weeks." },
  { n: "03", title: "Build to last", body: "We write clean, documented code and make architectural decisions that hold up as your product grows. No hacky shortcuts." },
  { n: "04", title: "Results, not deliverables", body: "A website launch isn't the goal — what happens after launch is. We care about whether your business actually grows." },
];

export default function About() {
  return (
    <section id="about" className="section-gap bg-[#07070f]">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />
      <div className="container-pad">

        {/* Opening statement — editorial, pull-quote style */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <span className="tag mb-8 inline-flex">About</span>
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <h2 className="text-display-md text-white leading-[1.05]">
                Two developers.
                <br />
                <span className="text-white/35">Based in Raipur.</span>
                <br />
                Genuinely invested
                <br />
                in your success.
              </h2>
            </div>
            <div className="md:col-span-5 md:pt-6">
              <p className="text-white/45 text-base leading-relaxed font-inter mb-5">
                We started WebAksh because we kept seeing small businesses in Raipur and across Chhattisgarh get sold expensive, half-finished digital work by agencies who didn't really understand their problems.
              </p>
              <p className="text-white/38 text-sm leading-relaxed font-inter">
                We wanted to do it differently — build things that actually work, charge what's fair, and stay involved after launch. Every client gets both of us, not a junior developer and an account manager.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team — minimal, confident */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="glass glass-hover rounded-2xl p-6 flex items-start gap-5 border border-white/6"
            >
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl" />
                <img
                  src={m.image}
                  alt={m.name}
                  className="relative w-16 h-16 rounded-full object-cover border border-white/10"
                />
              </div>
              <div>
                <h3 className="font-syne font-600 text-white text-lg tracking-tight">{m.name}</h3>
                <p className="text-indigo-400/80 text-xs font-space mb-2 uppercase tracking-wider">{m.role}</p>
                <p className="text-white/38 text-sm font-inter leading-relaxed">{m.focus}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values — numbered list, not cards */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <h3 className="text-display-sm text-white">
              How we work<span className="gradient-text">.</span>
            </h3>
            <p className="text-white/30 text-xs font-inter max-w-xs">
              The principles we hold ourselves to on every project.
            </p>
          </div>

          <div className="line-rule" />
          {values.map((v, i) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="py-7 grid md:grid-cols-12 gap-4 md:gap-8 items-start">
                <span className="text-label text-white/18 md:col-span-1">{v.n}</span>
                <h4 className="font-syne font-600 text-white/85 text-xl md:col-span-4 tracking-tight">{v.title}</h4>
                <p className="text-white/40 text-sm font-inter leading-relaxed md:col-span-7">{v.body}</p>
              </div>
              <div className="line-rule" />
            </motion.div>
          ))}
        </div>

        {/* Stats — inline, understated */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-wrap gap-x-14 gap-y-5"
        >
          {[
            { n: "5+", l: "Projects shipped" },
            { n: "3+", l: "Years building" },
            { n: "95%", l: "Client retention" },
            { n: "24h", l: "Support response" },
          ].map(({ n, l }) => (
            <div key={l}>
              <span className="font-syne font-700 text-3xl text-white tracking-tight">{n}</span>
              <span className="block text-white/30 text-xs font-inter mt-0.5">{l}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
