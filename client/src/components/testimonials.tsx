import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "WebAksh didn't just build us a website — they helped us understand what we actually needed. The result was better than what we'd originally asked for.",
    name: "Rajesh Agrawal",
    title: "Founder, OptiClair.in",
    industry: "Optical / Retail",
    initials: "RA",
    result: "E-Commerce store launched in 6 weeks",
  },
  {
    quote: "What impressed us most was the communication. Weekly updates every time, honest answers to every question. No disappearing acts, no generic excuses.",
    name: "Vijay Bajaj",
    title: "MD, Bajaj Groups",
    industry: "Diversified Enterprise",
    initials: "VB",
    result: "Corporate site unifying 5 business divisions",
  },
  {
    quote: "Our app needed to work reliably in low-connectivity areas. They took that constraint seriously from day one, not as an afterthought. That kind of thinking is rare.",
    name: "HPCL Project Lead",
    title: "Senior Manager, HPCL CG Division",
    industry: "Oil & Gas / PSU",
    initials: "HP",
    result: "Android app deployed across 100+ outlets",
  },
  {
    quote: "The fake-GPS detection actually works. We'd tried two other vendors who said it couldn't be done reliably. WebAksh solved it in six weeks.",
    name: "CREDA Tech Team",
    title: "Technical Head, CREDA",
    industry: "Government / GeoTech",
    initials: "CR",
    result: "GPS spoofing eliminated across all sites",
  },
];

export default function Testimonials() {
  const [cur, setCur] = useState(0);

  return (
    <section className="section-gap bg-[#0a0a14] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />
      <div className="container-pad">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <span className="tag mb-4 inline-flex">Client Feedback</span>
            <h2 className="text-display-md text-white">
              What clients say<span className="gradient-text">.</span>
            </h2>
          </div>
          {/* Navigation */}
          <div className="flex gap-2.5">
            <button
              onClick={() => setCur((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="w-9 h-9 rounded-full glass glass-hover flex items-center justify-center text-white/40 hover:text-white border border-white/8 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              onClick={() => setCur((c) => (c + 1) % testimonials.length)}
              className="w-9 h-9 rounded-full glass glass-hover flex items-center justify-center text-white/40 hover:text-white border border-white/8 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>

        {/* Two-column: large quote + sidebar metadata */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Quote — 2/3 */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={cur}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <blockquote className="text-white/75 text-lg md:text-xl font-syne font-500 leading-[1.5] tracking-tight mb-7">
                  "{testimonials[cur].quote}"
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xs font-space font-600 flex-shrink-0">
                    {testimonials[cur].initials}
                  </div>
                  <div>
                    <p className="text-white/70 text-sm font-space">{testimonials[cur].name}</p>
                    <p className="text-white/30 text-xs font-inter">{testimonials[cur].title}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sidebar: all testimonials as list — 1/3 */}
          <div className="hidden lg:block space-y-2">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setCur(i)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                  i === cur
                    ? "glass border-white/14 bg-white/6"
                    : "border-transparent hover:border-white/6 hover:bg-white/2"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500/60 to-violet-600/60 flex items-center justify-center text-white text-[9px] font-space font-600 flex-shrink-0">
                    {t.initials}
                  </div>
                  <p className={`text-xs font-space transition-colors ${i === cur ? "text-white/80" : "text-white/40"}`}>{t.name}</p>
                </div>
                <p className={`text-[10px] font-inter leading-relaxed transition-colors ${i === cur ? "text-white/50" : "text-white/25"}`}>
                  {t.result}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Progress dots — mobile */}
        <div className="flex gap-2 mt-8 lg:hidden">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCur(i)}
              className={`transition-all duration-300 rounded-full ${i === cur ? "w-7 h-1 bg-indigo-400" : "w-1 h-1 bg-white/20"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
