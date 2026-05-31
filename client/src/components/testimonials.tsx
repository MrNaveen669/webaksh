import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Agrawal",
    company: "OptiClair",
    role: "Founder & CEO",
    review: "WebAksh transformed our optical store into a thriving online business. The website they built is beautiful, fast, and our online sales have increased significantly. The team was professional, responsive, and delivered exactly what we envisioned.",
    rating: 5,
    gradient: "from-blue-500 to-indigo-600",
    initials: "RA",
  },
  {
    name: "Vijay Bajaj",
    company: "Bajaj Groups",
    role: "Managing Director",
    review: "Our corporate website needed to reflect the scale and professionalism of our group. WebAksh delivered a world-class website that we're proud to share with clients. The attention to detail and quality of work is exceptional.",
    rating: 5,
    gradient: "from-green-500 to-emerald-600",
    initials: "VB",
  },
  {
    name: "Sanjay Tiwari",
    company: "Harbaras",
    role: "Product Manager",
    review: "The anti-counterfeit verification system WebAksh built has been a game changer for our business. It's fast, reliable, and our customers love being able to verify product authenticity instantly. Highly recommend their technical expertise.",
    rating: 5,
    gradient: "from-purple-500 to-violet-600",
    initials: "ST",
  },
  {
    name: "Priya Mehta",
    company: "Local Restaurant",
    role: "Owner",
    review: "As a small business owner, I was worried about affordability and quality. WebAksh exceeded all expectations — affordable pricing, premium quality, and they genuinely cared about helping my restaurant get more customers online.",
    rating: 5,
    gradient: "from-pink-500 to-rose-600",
    initials: "PM",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-pad bg-[#080814] relative overflow-hidden">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb w-96 h-96 bg-indigo-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5" />
      </div>

      <div className="container-pad">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-yellow-300 font-medium mb-6 border border-yellow-500/20">
            <Star className="w-3.5 h-3.5 fill-yellow-400" />
            Client Stories
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-5">
            What Our Clients{" "}
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base md:text-lg">
            Don't take our word for it — hear from the businesses we've helped grow.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="glass-strong rounded-3xl p-8 md:p-10"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonials[current].gradient} flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg`}>
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <div className="text-white font-poppins font-semibold text-lg">{testimonials[current].name}</div>
                    <div className="text-white/50 text-sm">{testimonials[current].role} — {testimonials[current].company}</div>
                    <div className="flex gap-1 mt-2">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-indigo-500/30 ml-auto flex-shrink-0 mt-1" />
                </div>
                <p className="text-white/65 text-base md:text-lg leading-relaxed italic">
                  "{testimonials[current].review}"
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-indigo-500" : "w-1.5 bg-white/20 hover:bg-white/40"}`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-11 h-11 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg hover:opacity-90 transition-opacity"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Mini cards row */}
          <div className="grid grid-cols-4 gap-3 mt-8">
            {testimonials.map((t, i) => (
              <motion.button
                key={t.name}
                whileHover={{ y: -2 }}
                onClick={() => setCurrent(i)}
                className={`glass-card rounded-xl p-3 text-center transition-all duration-200 ${i === current ? "border-indigo-500/40 bg-white/7" : ""}`}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-xs font-bold mx-auto mb-2`}>
                  {t.initials}
                </div>
                <div className="text-white/60 text-xs truncate">{t.name.split(" ")[0]}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
