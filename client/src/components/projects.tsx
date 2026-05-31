import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Clock, Users, CheckCircle } from "lucide-react";

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
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "opticlair",
    title: "OptiClair.in",
    category: "E-Commerce",
    industry: "Optical / Retail",
    year: "2024",
    summary: "Online eyewear store with virtual try-on, smart filters, and home delivery.",
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749035577/Screenshot_2025-06-04_163744_a0a0yt.png",
    url: "https://opticlair.in",
    challenge: "The client had a physical optical store in Raipur with no online presence. They were losing customers to larger chains with better digital accessibility.",
    solution: "Built a full-featured e-commerce platform with smart product filters by frame shape, material, and prescription. Integrated Razorpay for seamless checkout. Added a virtual try-on feature using AR.js so customers can visualize frames before buying.",
    stack: ["React", "Node.js", "MongoDB", "Razorpay", "Tailwind CSS", "AR.js"],
    outcomes: ["Launched first online sales channel", "Mobile-optimized shopping experience", "100% secure payment integration", "SEO-optimized product pages for local search"],
    featured: true,
  },
  {
    id: "bajaj",
    title: "Bajaj Groups",
    category: "Corporate",
    industry: "Diversified Enterprise",
    year: "2024",
    summary: "Corporate presence for a multi-sector Raipur business group spanning real estate, grain, poultry, and transport.",
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749035578/Screenshot_2025-06-04_163826_xyvwww.png",
    url: "https://bajajgroups.org.in/",
    challenge: "A diversified business group with five distinct divisions had no unified online presence. Each division operated independently, making it hard for partners and investors to understand the full scope of the group.",
    solution: "Designed a corporate site with a unified visual language that presents all five divisions clearly. Used motion transitions to make the experience feel premium, while keeping load times fast.",
    stack: ["React", "Framer Motion", "Tailwind CSS", "Node.js"],
    outcomes: ["Unified brand identity across 5 divisions", "Improved corporate credibility online", "Increased partner inquiries within first month"],
  },
  {
    id: "creda",
    title: "CREDA Geo-App",
    category: "Government App",
    industry: "GeoTech / PSU",
    year: "2024",
    summary: "Android app for real-time location verification of government field employees — detects and blocks GPS spoofing.",
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749038009/IMG_20250604_171437_wuyr89.jpg",
    challenge: "Government employees were using fake GPS apps to mark attendance without being physically present at work sites, causing operational and accountability failures.",
    solution: "Built a hardened Android application with multi-layer GPS verification, mock location detection via sensor cross-referencing, and a central dashboard for supervisors to view real-time attendance.",
    stack: ["Android SDK", "Java", "Google Maps API", "Firebase", "REST APIs"],
    outcomes: ["Eliminated GPS spoofing at all monitored sites", "Real-time supervisor dashboard", "Government compliance achieved", "Automated attendance reporting"],
  },
  {
    id: "harbaras",
    title: "Harbaras Verify",
    category: "Security Platform",
    industry: "Product Authentication",
    year: "2023",
    summary: "Anti-counterfeit verification portal — customers scan a unique code to confirm product authenticity instantly.",
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749037161/Screenshot_2025-06-04_170721_esskeb.png",
    url: "https://herbaras.com/?i=1",
    challenge: "Counterfeit products were damaging the client's brand trust and cutting into legitimate sales. There was no easy way for customers to verify what they were buying.",
    solution: "Built a lightweight, fast verification portal with unique per-product code generation and a clean lookup flow. Mobile-first since most users scan QR codes from their phones.",
    stack: ["React", "Node.js", "MongoDB", "QR Code APIs", "Express"],
    outcomes: ["Customer-facing product verification live", "Counterfeit detection enabled across supply chain", "Brand trust protection implemented"],
  },
  {
    id: "hpcl",
    title: "HPCL Feedback App",
    category: "Enterprise App",
    industry: "Oil & Gas / PSU",
    year: "2023",
    summary: "Android feedback collection app for HPCL petrol pump and LPG outlet customers across Chhattisgarh.",
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749038011/Screenshot_2025-06-04-17-12-34-935-edit_com.example.happyindex_lv1tfr.jpg",
    challenge: "HPCL needed a standardized way to collect structured customer feedback across hundreds of outlet locations, with data flowing into a central reporting system.",
    solution: "Built a minimal, fast Android app for rating and commenting on service quality. Included location tagging, offline queue support, and a Firebase-backed dashboard for regional managers.",
    stack: ["Android SDK", "Firebase Firestore", "Java", "Analytics", "REST APIs"],
    outcomes: ["Structured feedback pipeline across all outlets", "Regional manager dashboard live", "Offline-first support for rural locations", "Service quality insights for management"],
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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="tag mb-4 inline-flex">Selected Work</span>
            <h2 className="text-display-md text-white">
              Real work<span className="gradient-text">.</span>
              <br />Real results.
            </h2>
          </div>
          <p className="text-white/35 text-sm font-inter leading-relaxed max-w-xs">
            Click any project to read the full case study — challenge, process, and outcomes.
          </p>
        </div>

        {/* Featured project */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setSelected(featured)}
            className="group cursor-pointer mb-6"
          >
            <div className="relative rounded-2xl overflow-hidden glass glass-hover border border-white/7">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image — left 60% on desktop */}
                <div className="relative overflow-hidden h-64 md:h-96 md:col-span-1">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a14]/40 md:to-[#0a0a14]/70" />
                </div>
                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="tag">{featured.category}</span>
                      <span className="tag">{featured.year}</span>
                    </div>
                    <h3 className="font-syne font-700 text-3xl md:text-4xl text-white tracking-tight mb-4">
                      {featured.title}
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed font-inter mb-6">
                      {featured.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {featured.stack.slice(0, 4).map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-8 text-white/40 group-hover:text-white/80 transition-colors duration-300 font-space text-sm">
                    <span>Read Case Study</span>
                    <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Secondary grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelected(p)}
              className="group cursor-pointer glass glass-hover rounded-2xl overflow-hidden border border-white/7"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14]/80 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="tag text-[10px]">{p.category}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-syne font-600 text-white/90 text-base tracking-tight">{p.title}</h4>
                  <ArrowUpRight size={14} className="text-white/25 group-hover:text-white/60 transition-colors flex-shrink-0 mt-0.5" />
                </div>
                <p className="text-white/38 text-xs font-inter leading-relaxed line-clamp-2">{p.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-end md:items-center justify-center p-0 md:p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 60, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0d0d1c] border border-white/8 rounded-t-3xl md:rounded-3xl w-full md:max-w-2xl max-h-[92vh] overflow-y-auto shadow-2xl"
            >
              {/* Image header */}
              <div className="relative h-52 overflow-hidden rounded-t-3xl md:rounded-t-3xl">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1c] via-[#0d0d1c]/20 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white transition-colors"
                >
                  <X size={15} />
                </button>
                <div className="absolute bottom-4 left-6 flex gap-2">
                  <span className="tag">{selected.category}</span>
                  <span className="tag">{selected.year}</span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-syne font-700 text-white text-2xl tracking-tight">{selected.title}</h3>
                    <p className="text-white/38 text-sm mt-1">{selected.industry}</p>
                  </div>
                  {selected.url && (
                    <a
                      href={selected.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 btn-ghost text-xs py-2 px-4 flex-shrink-0"
                    >
                      Visit Live <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>

                {/* Challenge / Solution */}
                <div className="space-y-6 mb-8">
                  <div>
                    <p className="text-label text-white/25 mb-2">The Challenge</p>
                    <p className="text-white/55 text-sm leading-relaxed font-inter">{selected.challenge}</p>
                  </div>
                  <div>
                    <p className="text-label text-white/25 mb-2">Our Approach</p>
                    <p className="text-white/55 text-sm leading-relaxed font-inter">{selected.solution}</p>
                  </div>
                </div>

                {/* Stack */}
                <div className="mb-6">
                  <p className="text-label text-white/25 mb-3">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.stack.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div className="mb-8">
                  <p className="text-label text-white/25 mb-3">Outcomes</p>
                  <ul className="space-y-2">
                    {selected.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2.5 text-sm text-white/50 font-inter">
                        <CheckCircle size={13} className="text-green-400 flex-shrink-0 mt-0.5" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => { setSelected(null); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="btn-primary w-full justify-center"
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
