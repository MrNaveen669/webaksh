import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "WebAksh didn't just build us a website — they helped us understand what we actually needed. The result was better than what we'd originally asked for.",
    name: "Rajesh Agrawal",
    title: "Founder, OptiClair.in",
    initials: "RA",
  },
  {
    quote: "What impressed us most was the communication. Every week, an update. Every question, an honest answer. No disappearing acts, no generic excuses.",
    name: "Vijay Bajaj",
    title: "MD, Bajaj Groups",
    initials: "VB",
  },
  {
    quote: "Our app needed to work reliably in low-connectivity areas. They took that constraint seriously from day one, not as an afterthought. That kind of thinking is rare.",
    name: "HPCL Project Lead",
    title: "Senior Manager, HPCL CG Division",
    initials: "HP",
  },
  {
    quote: "The fake-GPS detection actually works. We'd tried two other vendors who said it couldn't be done reliably. WebAksh solved it in six weeks.",
    name: "CREDA Tech Team",
    title: "Technical Head, CREDA",
    initials: "CR",
  },
];

export default function Testimonials() {
  const [cur, setCur] = useState(0);
  const prev = () => setCur((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCur((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-gap bg-[#0a0a14] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />

      <div className="container-pad">
        {/* Label */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <span className="tag mb-4 inline-flex">Client Voices</span>
            <h2 className="text-display-md text-white">
              What clients
              <br />
              <span className="text-white/30">actually say.</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass glass-hover flex items-center justify-center text-white/40 hover:text-white transition-colors border border-white/8"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass glass-hover flex items-center justify-center text-white/40 hover:text-white transition-colors border border-white/8"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Quote display — large editorial */}
        <div className="relative min-h-[180px] mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={cur}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <p className="text-white/75 text-xl md:text-2xl font-syne font-500 leading-[1.4] tracking-tight mb-8">
                "{testimonials[cur].quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-xs font-space font-600">
                  {testimonials[cur].initials}
                </div>
                <div>
                  <span className="text-white/70 text-sm font-space">{testimonials[cur].name}</span>
                  <span className="text-white/28 text-xs font-inter ml-3">{testimonials[cur].title}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress indicators */}
        <div className="flex gap-2 items-center">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCur(i)}
              className={`transition-all duration-300 rounded-full ${
                i === cur ? "w-8 h-1 bg-indigo-400" : "w-1 h-1 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
