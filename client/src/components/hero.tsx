import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import { useState, useEffect } from "react";

const words = ["Websites", "Mobile Apps", "Digital Growth", "Brands", "Solutions"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      return () => clearTimeout(t);
    } else if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    } else if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      return () => clearTimeout(t);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
  }, [displayed, deleting, wordIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: "5+", label: "Projects Delivered" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "15+", label: "Technologies" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#060611]">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="orb w-[500px] h-[500px] bg-indigo-600 top-[-100px] left-[-100px] opacity-20"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="orb w-[600px] h-[600px] bg-purple-600 top-[20%] right-[-150px] opacity-15"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="orb w-[400px] h-[400px] bg-pink-600 bottom-[-50px] left-[30%] opacity-10"
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 container-pad pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-indigo-300 font-medium mb-8 border border-indigo-500/20"
            >
              <Star className="w-3.5 h-3.5 fill-indigo-400 text-indigo-400" />
              Premium Digital Agency — Raipur, India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold leading-[1.1] mb-6"
            >
              <span className="text-white">We Build</span>
              <br />
              <span className="gradient-text animate-gradient">
                {displayed}
                <span className="animate-blink text-indigo-400">|</span>
              </span>
              <br />
              <span className="text-white">That Convert</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base md:text-lg text-white/55 mb-10 max-w-lg leading-relaxed"
            >
              Your vision deserves more than code — it deserves a digital legacy.
              WebAksh helps small businesses in Raipur and beyond grow online with
              modern, high-performing digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="group flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("projects")}
                className="flex items-center justify-center gap-2 px-7 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <Play className="w-4 h-4 fill-white" />
                View Our Work
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="text-2xl sm:text-3xl font-poppins font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-white/45 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="glass-strong rounded-3xl p-1 shadow-2xl shadow-indigo-500/10">
                <img
                  src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Premium digital agency workspace"
                  className="rounded-2xl w-full object-cover h-[420px]"
                />
              </div>

              {/* Floating card 1 */}
              <motion.div
                animate={{ y: [-8, 0, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 glass-strong rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">Project Delivered</div>
                    <div className="text-white/50 text-xs">OptiClair.in — E-commerce</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card 2 */}
              <motion.div
                animate={{ y: [8, 0, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <Star className="w-4 h-4 text-white fill-white" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">Client Rating</div>
                    <div className="flex gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs"
      >
        <span>Scroll down</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
