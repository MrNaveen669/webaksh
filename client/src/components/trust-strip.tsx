import { motion } from "framer-motion";

const industries = [
  { label: "Retail & E-Commerce", icon: "🛍️" },
  { label: "Government & PSU", icon: "🏛️" },
  { label: "Real Estate", icon: "🏢" },
  { label: "Healthcare", icon: "🏥" },
  { label: "Oil & Gas", icon: "⚡" },
  { label: "Logistics", icon: "🚚" },
  { label: "Education", icon: "🎓" },
  { label: "Finance", icon: "💼" },
];

const credibility = [
  { n: "5+", label: "Live projects" },
  { n: "3", label: "Industries served" },
  { n: "95%", label: "On-time delivery" },
  { n: "2", label: "Dedicated founders" },
];

export default function TrustStrip() {
  return (
    <section className="py-14 bg-[#07070f] border-y border-white/5">
      <div className="container-pad">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left — industries */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-label text-white/25 mb-5">Industries we work with</p>
            <div className="flex flex-wrap gap-2">
              {industries.map((ind) => (
                <span key={ind.label} className="flex items-center gap-1.5 tag hover:border-white/16 hover:text-white/62 transition-all cursor-default">
                  <span>{ind.icon}</span>
                  {ind.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — credibility numbers */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="grid grid-cols-2 gap-5"
          >
            {credibility.map(({ n, label }) => (
              <div key={label} className="glass rounded-xl p-4 border border-white/6">
                <span className="font-syne font-700 text-2xl text-white tracking-tight">{n}</span>
                <span className="block text-white/32 text-xs font-inter mt-0.5">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
