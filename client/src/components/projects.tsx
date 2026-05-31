import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, CheckCircle, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  industry: string;
  year: string;
  summary: string;
  image: string;
  url?: string;
  challenge: string;
  solution: string;
  stack: string[];
  outcomes: string[];
  visibleOutcomes: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "opticlair",
    title: "OptiClair.in",
    category: "E-Commerce",
    industry: "Optical / Retail",
    year: "2024",
    summary: "Online eyewear store with smart filters, AR virtual try-on, and Razorpay checkout.",
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749035577/Screenshot_2025-06-04_163744_a0a0yt.png",
    url: "https://opticlair.in",
    challenge: "A physical optical store in Raipur had no online presence and was losing customers to larger chains with better digital accessibility.",
    solution: "Built a full-featured e-commerce platform with smart product filters by frame shape, material, and prescription. Integrated Razorpay for seamless checkout. Added a virtual try-on feature using AR.js so customers can visualize frames before buying.",
    stack: ["React", "Node.js", "MongoDB", "Razorpay", "Tailwind CSS", "AR.js"],
    outcomes: ["Launched first online sales channel", "Mobile-optimized shopping experience", "100% secure payment integration", "SEO-optimized product pages for local search"],
    visibleOutcomes: ["First online sales channel launched", "Mobile-first UX with AR try-on"],
    featured: true,
  },
  {
    id: "bajaj",
    title: "Bajaj Groups",
    category: "Corporate Website",
    industry: "Diversified Enterprise",
    year: "2024",
    summary: "Corporate presence for a multi-sector Raipur conglomerate across 5 business divisions.",
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749035578/Screenshot_2025-06-04_163826_xyvwww.png",
    url: "https://bajajgroups.org.in/",
    challenge: "A diversified group with five divisions had no unified digital presence, making it hard for partners to understand the group's full scope.",
    solution: "Designed a corporate site with a unified visual language presenting all five divisions clearly with motion transitions for a premium feel.",
    stack: ["React", "Framer Motion", "Tailwind CSS", "Node.js"],
    outcomes: ["Unified brand identity across 5 divisions", "Improved corporate credibility online", "Increased partner inquiries within first month"],
    visibleOutcomes: ["5 divisions unified under one identity", "Increased partner inquiry rate"],
  },
  {
    id: "creda",
    title: "CREDA Geo-App",
    category: "Government App",
    industry: "GeoTech / PSU",
    year: "2024",
    summary: "Android app for real-time location verification of government field employees, with GPS spoofing detection.",
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749038009/IMG_20250604_171437_wuyr89.jpg",
    challenge: "Government employees were using fake GPS apps to mark attendance without being present, causing accountability failures.",
    solution: "Built a hardened Android app with multi-layer GPS verification, mock location detection via sensor cross-referencing, and a supervisor dashboard.",
    stack: ["Android SDK", "Java", "Google Maps API", "Firebase", "REST APIs"],
    outcomes: ["Eliminated GPS spoofing at all monitored sites", "Real-time supervisor dashboard", "Government compliance achieved"],
    visibleOutcomes: ["GPS spoofing fully eliminated", "Real-time field tracking dashboard"],
  },
  {
    id: "harbaras",
    title: "Harbaras Verify",
    category: "Security Platform",
    industry: "Product Authentication",
    year: "2023",
    summary: "Anti-counterfeit product verification portal — customers scan a unique code to confirm authenticity.",
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749037161/Screenshot_2025-06-04_170721_esskeb.png",
    url: "https://herbaras.com/?i=1",
    challenge: "Counterfeit products were damaging brand trust. Customers had no way to verify what they were buying.",
    solution: "Built a lightweight verification portal with unique per-product code generation and a clean QR-scan lookup flow, mobile-first.",
    stack: ["React", "Node.js", "MongoDB", "QR Code APIs", "Express"],
    outcomes: ["Customer-facing product verification live", "Counterfeit detection across supply chain", "Brand trust protection implemented"],
    visibleOutcomes: ["Per-product QR verification live", "Supply chain counterfeit protection"],
  },
  {
    id: "hpcl",
    title: "HPCL Feedback App",
    category: "Enterprise App",
    industry: "Oil & Gas / PSU",
    year: "2023",
    summary: "Android feedback app for HPCL petrol pump and LPG outlet customers across Chhattisgarh.",
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749038011/Screenshot_2025-06-04-17-12-34-935-edit_com.example.happyindex_lv1tfr.jpg",
    challenge: "HPCL needed a standardised way to collect customer feedback across hundreds of outlet locations, feeding into a central reporting system.",
    solution: "Built a minimal Android app for service quality ratings with location tagging, offline queue support, and a Firebase-backed regional dashboard.",
    stack: ["Android SDK", "Firebase Firestore", "Java", "Analytics", "REST APIs"],
    outcomes: ["Feedback pipeline across all CG outlets", "Regional manager dashboard live", "Offline-first for rural locations"],
    visibleOutcomes: ["Deployed across 100+ HPCL outlets", "Offline-first for rural connectivity"],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-gap bg-[#0a0a14]">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />
      <div className="container-pad">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
          <div>
            <span className="tag mb-4 inline-flex">Selected Work</span>
            <h2 className="text-display-md text-white">
              Real projects.<br />
              <span className="text-white/32">Measured results.</span>
            </h2>
          </div>
          <p className="text-white/35 text-sm font-inter leading-relaxed max-w-xs">
            Five client projects spanning e-commerce, government, enterprise, and B2C. Click any to read the full case study.
          </p>
        </div>

        {/* Featured project — large, visual-first */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setSelected(featured)}
            className="group cursor-pointer mb-5 glass glass-hover rounded-2xl overflow-hidden border border-white/7"
          >
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Screenshot — 3/5 width */}
              <div className="relative overflow-hidden lg:col-span-3 h-60 lg:h-80">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent lg:to-[#0a0a14]/60 to-transparent" />
              </div>
              {/* Content — 2/5 width */}
              <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <span className="tag">{featured.category}</span>
                    <span className="tag">{featured.year}</span>
                  </div>
                  <h3 className="font-syne font-700 text-white text-2xl lg:text-3xl tracking-tight mb-3">{featured.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed font-inter mb-5">{featured.summary}</p>
                  {/* Visible outcomes */}
                  <ul className="space-y-2 mb-5">
                    {featured.visibleOutcomes.map((o) => (
                      <li key={o} className="flex items-center gap-2.5 text-xs text-white/50 font-inter">
                        <CheckCircle size={11} className="text-green-400 flex-shrink-0" />
                        {o}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {featured.stack.slice(0, 4).map((t) => (
                      <span key={t} className="tag text-[10px]">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-6 text-white/35 group-hover:text-white/70 transition-colors text-sm font-space">
                  <span>Read Case Study</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Secondary grid — shows content without needing a click */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelected(p)}
              className="group cursor-pointer glass glass-hover rounded-2xl overflow-hidden border border-white/7 flex flex-col"
            >
              {/* Screenshot */}
              <div className="relative h-40 overflow-hidden flex-shrink-0">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14]/75 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="tag text-[10px]">{p.category}</span>
                </div>
              </div>
              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-1 mb-2">
                  <h4 className="font-syne font-600 text-white/88 text-sm tracking-tight">{p.title}</h4>
                  <ArrowUpRight size={12} className="text-white/22 group-hover:text-white/55 transition-colors flex-shrink-0 mt-0.5" />
                </div>
                <p className="text-white/35 text-xs font-inter leading-relaxed mb-3 flex-1">{p.summary}</p>
                {/* Visible outcome */}
                <div className="border-t border-white/5 pt-3">
                  {p.visibleOutcomes.slice(0, 1).map((o) => (
                    <div key={o} className="flex items-center gap-1.5 text-[10px] text-green-400/70 font-inter">
                      <CheckCircle size={9} className="flex-shrink-0" />
                      {o}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Case Study Modal ──────────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end md:items-center justify-center p-0 md:p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0d0d1c] border border-white/8 rounded-t-3xl md:rounded-3xl w-full md:max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl"
            >
              {/* Image header */}
              <div className="relative h-48 overflow-hidden rounded-t-3xl md:rounded-t-3xl">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1c] to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white"
                >
                  <X size={14} />
                </button>
                <div className="absolute bottom-3 left-5 flex gap-2">
                  <span className="tag text-[10px]">{selected.category}</span>
                  <span className="tag text-[10px]">{selected.year}</span>
                </div>
              </div>

              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div>
                    <h3 className="font-syne font-700 text-white text-xl tracking-tight">{selected.title}</h3>
                    <p className="text-white/35 text-xs font-inter mt-0.5">{selected.industry}</p>
                  </div>
                  {selected.url && (
                    <a
                      href={selected.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 btn-ghost text-xs py-1.5 px-3 flex-shrink-0"
                    >
                      Live Site <ExternalLink size={11} />
                    </a>
                  )}
                </div>

                <div className="space-y-5 mb-6">
                  <div>
                    <p className="text-label text-white/25 mb-1.5">The Challenge</p>
                    <p className="text-white/52 text-sm leading-relaxed font-inter">{selected.challenge}</p>
                  </div>
                  <div>
                    <p className="text-label text-white/25 mb-1.5">What We Built</p>
                    <p className="text-white/52 text-sm leading-relaxed font-inter">{selected.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mb-6">
                  <div>
                    <p className="text-label text-white/25 mb-2">Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selected.stack.map((t) => (
                        <span key={t} className="tag text-[10px]">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-label text-white/25 mb-2">Outcomes</p>
                    <ul className="space-y-1.5">
                      {selected.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2 text-xs text-white/48 font-inter">
                          <CheckCircle size={10} className="text-green-400 flex-shrink-0 mt-0.5" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => { setSelected(null); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="btn-primary w-full justify-center text-sm py-3"
                >
                  Build Something Like This
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
