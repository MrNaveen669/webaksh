import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const links = [
    { l: "Services", id: "services" },
    { l: "Work", id: "projects" },
    { l: "About", id: "about" },
    { l: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#07070f]/90 backdrop-blur-xl border-b border-white/5" : ""
      }`}
    >
      <div className="container-pad">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <button
            onClick={() => go("home")}
            className="font-syne font-800 text-lg text-white tracking-tight hover:opacity-70 transition-opacity"
          >
            Web<span className="text-indigo-400">Aksh</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ l, id }) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="text-sm text-white/45 hover:text-white/90 transition-colors duration-200 font-inter tracking-tight"
              >
                {l}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => go("contact")}
              className="btn-primary text-sm py-2.5 px-5"
            >
              Start a Project
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white/60 hover:text-white p-1 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[#07070f]/98 backdrop-blur-xl border-b border-white/5"
          >
            <div className="container-pad py-6 flex flex-col gap-4">
              {links.map(({ l, id }, i) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => go(id)}
                  className="text-left text-white/60 hover:text-white text-base py-1 transition-colors font-inter"
                >
                  {l}
                </motion.button>
              ))}
              <button
                onClick={() => go("contact")}
                className="btn-primary mt-2 w-full justify-center"
              >
                Start a Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
