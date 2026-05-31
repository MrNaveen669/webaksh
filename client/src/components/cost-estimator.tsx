import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, CheckCircle } from "lucide-react";

const projectTypes = [
  { id: "landing", label: "Landing Page", base: 8000 },
  { id: "website", label: "Business Website", base: 15000 },
  { id: "ecommerce", label: "E-Commerce Store", base: 25000 },
  { id: "webapp", label: "Web Application", base: 40000 },
  { id: "app", label: "Mobile App", base: 35000 },
];

const features = [
  { id: "seo", label: "SEO Optimization", cost: 3000 },
  { id: "cms", label: "CMS / Admin Panel", cost: 8000 },
  { id: "payment", label: "Payment Gateway", cost: 5000 },
  { id: "auth", label: "User Authentication", cost: 4000 },
  { id: "analytics", label: "Analytics Dashboard", cost: 6000 },
  { id: "chat", label: "Live Chat / Support", cost: 4000 },
];

const pagesOptions = [
  { id: "1-3", label: "1–3 Pages", mult: 1 },
  { id: "4-7", label: "4–7 Pages", mult: 1.3 },
  { id: "8-15", label: "8–15 Pages", mult: 1.7 },
  { id: "15+", label: "15+ Pages", mult: 2.2 },
];

export default function CostEstimator() {
  const [projectType, setProjectType] = useState("website");
  const [pages, setPages] = useState("1-3");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const base = projectTypes.find((p) => p.id === projectType)?.base ?? 15000;
  const pagesMult = pagesOptions.find((p) => p.id === pages)?.mult ?? 1;
  const featCost = selectedFeatures.reduce((acc, fid) => {
    const f = features.find((f) => f.id === fid);
    return acc + (f?.cost ?? 0);
  }, 0);

  const low = Math.round((base * pagesMult + featCost) * 0.9 / 1000) * 1000;
  const high = Math.round((base * pagesMult + featCost) * 1.3 / 1000) * 1000;

  const formatINR = (n: number) => `₹${(n / 1000).toFixed(0)}K`;

  return (
    <section className="section-pad bg-[#060611] relative overflow-hidden">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="container-pad">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-green-300 font-medium mb-6 border border-green-500/20">
            <Calculator className="w-3.5 h-3.5" />
            Budget Planner
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-5">
            Estimate Your{" "}
            <span className="gradient-text">Project Cost</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base md:text-lg">
            Get an instant ballpark estimate. Fill in your requirements and we'll give you a transparent range.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-3xl p-7 md:p-10">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left */}
              <div className="lg:col-span-2 space-y-8">
                {/* Project Type */}
                <div>
                  <h3 className="text-white font-poppins font-semibold mb-4">1. What do you need?</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {projectTypes.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setProjectType(p.id)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-left ${
                          projectType === p.id
                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
                            : "glass text-white/60 hover:text-white hover:bg-white/8"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pages */}
                <div>
                  <h3 className="text-white font-poppins font-semibold mb-4">2. How many pages?</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {pagesOptions.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setPages(p.id)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          pages === p.id
                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                            : "glass text-white/60 hover:text-white hover:bg-white/8"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-white font-poppins font-semibold mb-4">3. Additional features?</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {features.map((f) => {
                      const active = selectedFeatures.includes(f.id);
                      return (
                        <button
                          key={f.id}
                          onClick={() => toggleFeature(f.id)}
                          className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                            active
                              ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40"
                              : "glass text-white/55 hover:text-white hover:bg-white/8"
                          }`}
                        >
                          {active && <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />}
                          <span className="text-left">{f.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right — Estimate */}
              <div className="lg:col-span-1">
                <div className="glass rounded-2xl p-6 sticky top-24 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mx-auto mb-5 shadow-lg">
                    <Calculator className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-white/40 text-sm mb-3">Estimated Range</div>
                  <div className="text-3xl font-poppins font-bold gradient-text mb-1">
                    {formatINR(low)} – {formatINR(high)}
                  </div>
                  <div className="text-white/30 text-xs mb-6">Indian Rupees (INR)</div>

                  <div className="space-y-2 text-left mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/50">Base cost</span>
                      <span className="text-white/70">₹{(base * pagesMult / 1000).toFixed(1)}K</span>
                    </div>
                    {selectedFeatures.length > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-white/50">Add-ons</span>
                        <span className="text-white/70">+₹{(featCost / 1000).toFixed(1)}K</span>
                      </div>
                    )}
                    <div className="border-t border-white/10 pt-2 flex justify-between text-sm font-semibold">
                      <span className="text-white/70">Approx. total</span>
                      <span className="text-white">{formatINR(Math.round((low + high) / 2))}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    Request Exact Quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-white/25 text-xs mt-3">
                    Free consultation, no commitment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
