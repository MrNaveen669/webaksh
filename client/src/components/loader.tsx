import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#060611]"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb w-96 h-96 bg-indigo-600 top-[-100px] left-[-100px] opacity-20" />
        <div className="orb w-[500px] h-[500px] bg-purple-600 bottom-[-100px] right-[-100px] opacity-15" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 text-center">
        {/* Logo icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-indigo-500/40"
        >
          <Zap className="w-10 h-10 text-white" />
        </motion.div>

        {/* Spinning ring */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-indigo-500 border-r-purple-500"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border-2 border-transparent border-t-purple-400 border-l-pink-500"
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl font-space font-bold gradient-text mb-2"
        >
          WebAksh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-white/40 text-sm tracking-widest uppercase"
        >
          Digital Excellence
        </motion.p>
      </div>
    </motion.div>
  );
}
