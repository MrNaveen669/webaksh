import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, X, Tag, Clock, Users, CheckCircle, Layers } from "lucide-react";

interface Project {
  title: string;
  category: string;
  industry: string;
  summary: string;
  description: string;
  image: string;
  gradient: string;
  url?: string;
  duration: string;
  team: string;
  challenge: string;
  solution: string;
  techs: string[];
  features: string[];
  results: string[];
}

const projects: Project[] = [
  {
    title: "OptiClair.in",
    category: "E-Commerce",
    industry: "Optical / Retail",
    summary: "Modern eyewear e-commerce with virtual try-on",
    description: "Opticlair.in offers stylish eyeglasses, sunglasses, and contact lenses with virtual try-on, smart filters, and home delivery — making modern, affordable eyewear accessible online.",
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749035577/Screenshot_2025-06-04_163744_a0a0yt.png",
    gradient: "from-blue-500 to-indigo-600",
    url: "https://opticlair.in",
    duration: "6 weeks",
    team: "2 developers",
    challenge: "The client needed a modern online store for optical products that could showcase hundreds of frames with filtering and a seamless checkout experience.",
    solution: "We built a full-featured e-commerce platform with smart product filters, a responsive catalog, and integrated payment gateway — optimized for conversions.",
    techs: ["React", "Node.js", "MongoDB", "Razorpay", "Tailwind CSS"],
    features: ["Product catalog with filters", "Virtual try-on feature", "Cart & checkout", "Order tracking", "Admin dashboard"],
    results: ["Online sales channel launched", "Mobile-optimized shopping", "Secure payment integration", "SEO-ready product pages"],
  },
  {
    title: "Bajaj Groups",
    category: "Portfolio",
    industry: "Diversified Enterprise",
    summary: "Corporate website for a multi-sector business group",
    description: "Bajaj Group is a diversified enterprise excelling in Real Estate, Grain Industries, Poultry Farms, Distilleries, and Transport Services.",
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749035578/Screenshot_2025-06-04_163826_xyvwww.png",
    gradient: "from-green-500 to-emerald-600",
    url: "https://bajajgroups.org.in/",
    duration: "4 weeks",
    team: "2 developers",
    challenge: "Presenting a multi-sector business professionally online with a unified brand identity across all divisions.",
    solution: "Built a sleek corporate website with dedicated sections for each business vertical, clear navigation, and strong calls-to-action for business inquiries.",
    techs: ["React", "Tailwind CSS", "Node.js", "Framer Motion"],
    features: ["Multi-division showcase", "Professional animations", "Mobile-responsive", "Contact & inquiry forms", "SEO optimized"],
    results: ["Strong online corporate presence", "Clear brand positioning", "Improved lead generation", "Mobile traffic optimized"],
  },
  {
    title: "CREDA App",
    category: "Mobile App",
    industry: "Government / GeoTech",
    summary: "Geo-attendance app preventing fake location check-ins",
    description: "A government geo-special app that monitors device location to ensure on-site presence during working hours, detecting and flagging any location spoofing attempts.",
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749038009/IMG_20250604_171437_wuyr89.jpg",
    gradient: "from-orange-500 to-amber-600",
    url: "",
    duration: "8 weeks",
    team: "2 developers",
    challenge: "Government employees were using fake GPS apps to mark attendance without being physically present, causing operational inefficiencies.",
    solution: "Developed a robust Android application with advanced GPS verification, mock location detection, and real-time attendance reporting for supervisors.",
    techs: ["Android SDK", "Java", "GPS APIs", "Firebase", "REST APIs"],
    features: ["Real-time GPS tracking", "Mock location detection", "Attendance reports", "Admin dashboard", "Push notifications"],
    results: ["Eliminated fake attendance", "Real-time location verification", "Government compliance", "Automated reporting"],
  },
  {
    title: "Harbaras.com",
    category: "Security",
    industry: "Product Authentication",
    summary: "Anti-counterfeit product verification platform",
    description: "A product verification website that allows users to check authenticity by entering a unique code — preventing counterfeit goods and ensuring customers receive genuine products.",
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749037161/Screenshot_2025-06-04_170721_esskeb.png",
    gradient: "from-purple-500 to-violet-600",
    url: "https://herbaras.com/?i=1",
    duration: "3 weeks",
    team: "2 developers",
    challenge: "A product manufacturer needed a way for customers to verify product authenticity to combat counterfeiting in the market.",
    solution: "Built a fast, secure verification portal with unique code generation and lookup system, mobile-optimized for quick scans and checks.",
    techs: ["React", "Node.js", "MongoDB", "QR Code APIs", "Express"],
    features: ["Unique code verification", "Anti-counterfeit system", "Mobile-first design", "Bulk code generation", "Analytics dashboard"],
    results: ["Counterfeit detection enabled", "Customer trust improved", "Instant verification", "Brand protection achieved"],
  },
  {
    title: "HPCL Feedback App",
    category: "Mobile App",
    industry: "Oil & Gas / PSU",
    summary: "Customer feedback collection app for HPCL outlets",
    description: "The HPCL Feedback Form app collects customer feedback across petrol pumps and LPG outlets, helping HPCL improve service quality and satisfaction.",
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749038011/Screenshot_2025-06-04-17-12-34-935-edit_com.example.happyindex_lv1tfr.jpg",
    gradient: "from-emerald-500 to-teal-600",
    url: "",
    duration: "5 weeks",
    team: "2 developers",
    challenge: "HPCL needed a standardized way to collect and analyze customer feedback across hundreds of outlet locations efficiently.",
    solution: "Developed a streamlined Android app for capturing structured feedback with ratings, location data, and service type — feeding into a central dashboard.",
    techs: ["Android SDK", "Firebase", "Java", "REST APIs", "Analytics"],
    features: ["Multi-category feedback", "Location tagging", "Star ratings", "Offline support", "Central dashboard"],
    results: ["Structured feedback pipeline", "Service quality insights", "Multi-location data", "Improved customer satisfaction"],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  const scrollToContact = () => {
    setSelected(null);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects" className="section-pad bg-[#080814] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="container-pad">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-indigo-300 font-medium mb-6 border border-indigo-500/20">
            <Layers className="w-3.5 h-3.5" />
            Our Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-5">
            Projects That{" "}
            <span className="gradient-text">Made an Impact</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg">
            Real solutions for real businesses. Click any project to see the full case study.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => setSelected(project)}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1.5 glass text-white/90 text-xs font-medium rounded-full border border-white/15">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold flex items-center gap-2">
                    View Case Study <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-white font-poppins font-semibold text-lg">{project.title}</h3>
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                      className="text-white/30 hover:text-white transition-colors flex-shrink-0 mt-0.5">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-indigo-400 text-xs mb-3">{project.industry}</p>
                <p className="text-white/50 text-sm leading-relaxed">{project.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105"
          >
            Start Your Project
          </button>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0d0d20] border border-white/10 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="relative">
                <img src={selected.image} alt={selected.title} className="w-full h-52 object-cover rounded-t-3xl" />
                <div className={`absolute inset-0 bg-gradient-to-t ${selected.gradient} opacity-30 rounded-t-3xl`} />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-black/40 backdrop-blur-sm text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-5">
                  <span className="px-3 py-1.5 glass text-white/90 text-xs font-medium rounded-full border border-white/20">
                    {selected.category}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white font-poppins font-bold text-2xl">{selected.title}</h3>
                    <p className="text-white/45 text-sm">{selected.industry}</p>
                  </div>
                  {selected.url && (
                    <a href={selected.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 glass rounded-full text-indigo-400 text-sm hover:text-indigo-300 transition-colors border border-indigo-500/20">
                      Visit Live <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="glass rounded-xl p-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-400" />
                    <div>
                      <div className="text-white/40 text-xs">Duration</div>
                      <div className="text-white text-sm font-medium">{selected.duration}</div>
                    </div>
                  </div>
                  <div className="glass rounded-xl p-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-400" />
                    <div>
                      <div className="text-white/40 text-xs">Team</div>
                      <div className="text-white text-sm font-medium">{selected.team}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-5 mb-6">
                  <div>
                    <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">The Challenge</h4>
                    <p className="text-white/55 text-sm leading-relaxed">{selected.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-2">Our Solution</h4>
                    <p className="text-white/55 text-sm leading-relaxed">{selected.solution}</p>
                  </div>
                </div>

                <div className="mb-5">
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.techs.map((t) => (
                      <span key={t} className="px-3 py-1.5 glass rounded-full text-white/65 text-xs border border-white/10">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-7">
                  <div>
                    <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Key Features</h4>
                    <ul className="space-y-1.5">
                      {selected.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-white/55 text-sm">
                          <Tag className="w-3 h-3 text-indigo-400 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Results</h4>
                    <ul className="space-y-1.5">
                      {selected.results.map((r) => (
                        <li key={r} className="flex items-center gap-2 text-white/55 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={scrollToContact}
                  className={`w-full py-4 bg-gradient-to-r ${selected.gradient} text-white font-semibold rounded-2xl shadow-lg hover:opacity-90 transition-opacity`}
                >
                  Need a Similar Solution? Let's Talk
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
