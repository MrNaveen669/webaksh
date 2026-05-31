import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const types = [
  { id: "landing", label: "Landing Page", base: 8000 },
  { id: "website", label: "Business Website", base: 15000 },
  { id: "ecommerce", label: "E-Commerce Store", base: 25000 },
  { id: "webapp", label: "Web Application", base: 40000 },
  { id: "app", label: "Mobile App", base: 35000 },
];

const features = [
  { id: "seo", label: "SEO Setup", cost: 3000 },
  { id: "cms", label: "Admin Panel / CMS", cost: 8000 },
  { id: "payment", label: "Payment Integration", cost: 5000 },
  { id: "auth", label: "User Auth", cost: 4000 },
  { id: "analytics", label: "Analytics Dashboard", cost: 6000 },
  { id: "multilang", label: "Multi-language", cost: 4500 },
];

const pages = [
  { id: "1-3", label: "1–3 pages", mult: 1 },
  { id: "4-7", label: "4–7 pages", mult: 1.3 },
  { id: "8-15", label: "8–15 pages", mult: 1.7 },
  { id: "15+", label: "15+ pages", mult: 2.2 },
];

export default function CostEstimator() {
  const [type, setType] = useState("website");
  const [pg, setPg] = useState("1-3");
  const [feats, setFeats] = useState<string[]>([]);

  const toggle = (id: string) =>
    setFeats((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));

  const base = (types.find((t) => t.id === type)?.base ?? 15000) * (pages.find((p) => p.id === pg)?.mult ?? 1);
  const extra = feats.reduce((a, f) => a + (features.find((x) => x.id === f)?.cost ?? 0), 0);
  const low = Math.round((base + extra) * 0.9 / 1000) * 1000;
  const high = Math.round((base + extra) * 1.3 / 1000) * 1000;
  const fmt = (n: number) => `₹${(n / 1000).toFixed(0)}K`;

  return (
    <section className="section-gap bg-[#0a0a14]">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />
      <div className="container-pad">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="tag mb-4 inline-flex">Budget Tool</span>
            <h2 className="text-display-md text-white">
              Estimate your
              <br />
              project cost.
            </h2>
          </div>
          <p className="text-white/30 text-sm font-inter max-w-xs">
            A rough ballpark — not a contract. For an exact quote, hit the button at the end.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Inputs */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <p className="text-label text-white/30 mb-4">What do you need?</p>
              <div className="flex flex-wrap gap-2">
                {types.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setType(t.id)}
                    className={`px-4 py-2.5 rounded-full text-sm font-space transition-all duration-200 ${
                      type === t.id
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                        : "glass glass-hover text-white/50 hover:text-white border border-white/8"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-label text-white/30 mb-4">How many pages?</p>
              <div className="flex flex-wrap gap-2">
                {pages.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPg(p.id)}
                    className={`px-4 py-2.5 rounded-full text-sm font-space transition-all duration-200 ${
                      pg === p.id
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                        : "glass glass-hover text-white/50 hover:text-white border border-white/8"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-label text-white/30 mb-4">Add-on features?</p>
              <div className="flex flex-wrap gap-2">
                {features.map((f) => {
                  const on = feats.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      onClick={() => toggle(f.id)}
                      className={`px-4 py-2.5 rounded-full text-sm font-space transition-all duration-200 ${
                        on
                          ? "bg-violet-600/20 text-violet-300 border border-violet-500/35"
                          : "glass glass-hover text-white/45 hover:text-white border border-white/8"
                      }`}
                    >
                      {f.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="lg:col-span-1">
            <motion.div
              key={`${type}-${pg}-${feats.join()}`}
              initial={{ opacity: 0.6, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-7 border border-white/7 sticky top-24"
            >
              <p className="text-label text-white/25 mb-2">Estimated Range</p>
              <p className="font-syne font-700 text-4xl text-white tracking-tight mb-1">
                {fmt(low)} – {fmt(high)}
              </p>
              <p className="text-white/28 text-xs font-inter mb-8">Indian Rupees</p>

              <div className="space-y-2 mb-8 text-sm">
                <div className="flex justify-between text-white/40 font-inter">
                  <span>Base</span>
                  <span>{fmt(Math.round(base / 1000) * 1000)}</span>
                </div>
                {feats.length > 0 && (
                  <div className="flex justify-between text-white/40 font-inter">
                    <span>Add-ons</span>
                    <span>+{fmt(extra)}</span>
                  </div>
                )}
                <div className="border-t border-white/6 pt-2 flex justify-between text-white/65 font-space">
                  <span>Midpoint</span>
                  <span>{fmt(Math.round((low + high) / 2000) * 1000)}</span>
                </div>
              </div>

              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary w-full justify-center text-sm py-3"
              >
                Get Exact Quote <ArrowRight size={14} />
              </button>
              <p className="text-white/18 text-xs font-inter text-center mt-3">Free call, no commitment</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
