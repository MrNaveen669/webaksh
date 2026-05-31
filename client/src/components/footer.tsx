import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const year = new Date().getFullYear();

  const links = [
    { l: "Services", id: "services" },
    { l: "Work", id: "projects" },
    { l: "About", id: "about" },
    { l: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-[#040409] border-t border-white/5">
      <div className="container-pad py-14">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
          <button
            onClick={() => go("home")}
            className="font-syne font-800 text-2xl text-white tracking-tight text-left"
          >
            Web<span className="text-indigo-400">Aksh</span>
          </button>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map(({ l, id }) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="text-white/35 hover:text-white/75 text-sm font-inter transition-colors"
              >
                {l}
              </button>
            ))}
            <a
              href="https://wa.me/917049586798"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4ade80]/60 hover:text-[#4ade80] text-sm font-inter transition-colors flex items-center gap-1"
            >
              WhatsApp <ArrowUpRight size={12} />
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="line-rule mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/22 text-xs font-inter">
            <span>© {year} WebAksh</span>
            <span>Raipur, Chhattisgarh, India</span>
            <a href="mailto:contact@webaksh.com" className="hover:text-white/50 transition-colors">contact@webaksh.com</a>
          </div>
          <div className="flex gap-4">
            {[
              { l: "Instagram", h: "https://instagram.com" },
              { l: "LinkedIn", h: "https://linkedin.com" },
            ].map(({ l, h }) => (
              <a
                key={l}
                href={h}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/25 hover:text-white/60 text-xs font-inter transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
