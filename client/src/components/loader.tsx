import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#07070f]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb w-80 h-80 bg-indigo-700 opacity-15 top-0 left-0" />
        <div className="orb w-96 h-96 bg-violet-700 opacity-10 bottom-0 right-0" />
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-syne font-800 text-5xl text-white tracking-tight mb-3">
            Web<span className="text-indigo-400">Aksh</span>
          </h1>
          <p className="text-white/25 text-xs font-space tracking-[0.3em] uppercase">
            Digital Agency · Raipur
          </p>
        </motion.div>

        {/* Progress line */}
        <div className="mt-10 w-32 mx-auto h-px bg-white/8 rounded overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 origin-left"
          />
        </div>
      </div>
    </motion.div>
  );
}
