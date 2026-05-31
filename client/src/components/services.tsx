import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code, Smartphone, TrendingUp, Palette, MessageSquare,
  Server, Video, HardDrive, X, CheckCircle, ArrowRight,
  Globe, Shield, Zap, BarChart3
} from "lucide-react";

interface Service {
  icon: any;
  title: string;
  short: string;
  description: string;
  gradient: string;
  benefits: string[];
  process: string[];
  techs: string[];
}

const services: Service[] = [
  {
    icon: Code,
    title: "Website Development",
    short: "Custom, high-performance websites",
    description: "We craft pixel-perfect, blazing-fast websites tailored to your brand. From landing pages to complex web apps, every site we build is SEO-optimized, mobile-first, and conversion-focused.",
    gradient: "from-blue-500 to-indigo-600",
    benefits: ["Mobile-first responsive design", "SEO optimized from day one", "Lightning fast performance", "Conversion optimized UI"],
    process: ["Discovery & Planning", "UI/UX Design", "Development", "Testing & Launch"],
    techs: ["React", "Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    short: "Native Android & cross-platform apps",
    description: "From idea to App Store, we build powerful mobile applications that users love. Clean UX, smooth performance, and scalable architecture.",
    gradient: "from-green-500 to-emerald-600",
    benefits: ["Cross-platform development", "Offline-first architecture", "Push notifications", "Analytics integration"],
    process: ["Requirements Analysis", "Wireframing", "Development", "Store Deployment"],
    techs: ["React Native", "Expo", "Firebase", "Android SDK"],
  },
  {
    icon: MessageSquare,
    title: "Social Media Management",
    short: "Grow your brand online",
    description: "Strategic social media management to build your online community, increase brand awareness, and drive engagement across platforms.",
    gradient: "from-pink-500 to-rose-600",
    benefits: ["Content strategy & creation", "Community management", "Analytics & reporting", "Ad campaign management"],
    process: ["Brand Audit", "Strategy Planning", "Content Creation", "Growth Monitoring"],
    techs: ["Meta Ads", "Instagram", "LinkedIn", "Canva Pro"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & SEO",
    short: "Get found. Get leads. Grow.",
    description: "Data-driven digital marketing including SEO, Google Ads, and analytics to put your business in front of the right audience at the right time.",
    gradient: "from-purple-500 to-violet-600",
    benefits: ["Local SEO for Raipur/CG", "Google Ads management", "Content marketing", "Performance tracking"],
    process: ["Audit & Research", "Keyword Strategy", "On/Off-page SEO", "Monthly Reporting"],
    techs: ["Google Analytics", "Search Console", "SEMrush", "Google Ads"],
  },
  {
    icon: Palette,
    title: "Branding & Visual Identity",
    short: "Stand out with premium branding",
    description: "Complete brand identity solutions including logo design, brand guidelines, and visual identity systems that make your business instantly recognizable and memorable.",
    gradient: "from-orange-500 to-amber-600",
    benefits: ["Logo & identity design", "Brand guidelines", "Business collateral", "Social media kits"],
    process: ["Brand Discovery", "Concept Design", "Refinement", "Final Delivery"],
    techs: ["Adobe Illustrator", "Figma", "Photoshop", "Brand Strategy"],
  },
  {
    icon: Globe,
    title: "E-Commerce Solutions",
    short: "Sell more, work less",
    description: "Full-featured online stores with payment gateways, inventory management, and marketing tools built to scale your business 24/7.",
    gradient: "from-cyan-500 to-sky-600",
    benefits: ["Payment gateway integration", "Inventory management", "Order tracking", "Mobile optimized checkout"],
    process: ["Store Planning", "Design & Build", "Payment Setup", "Launch & Scale"],
    techs: ["Shopify", "WooCommerce", "Razorpay", "Stripe"],
  },
  {
    icon: Server,
    title: "Server Management",
    short: "Reliable, secure infrastructure",
    description: "Cloud server setup, configuration, and monitoring to ensure high performance, uptime, and security for your web applications.",
    gradient: "from-teal-500 to-emerald-600",
    benefits: ["99.9% uptime guarantee", "Security hardening", "Automated backups", "24/7 monitoring"],
    process: ["Audit", "Setup & Config", "Security", "Monitoring"],
    techs: ["AWS", "Linux", "Nginx", "Docker"],
  },
  {
    icon: BarChart3,
    title: "Business Automation",
    short: "Automate. Streamline. Scale.",
    description: "Custom automation workflows, CRM integrations, and business tools that save time, reduce errors, and help your team focus on what matters.",
    gradient: "from-red-500 to-rose-600",
    benefits: ["Workflow automation", "CRM integration", "Custom dashboards", "API integrations"],
    process: ["Process Mapping", "Tool Selection", "Build & Test", "Training"],
    techs: ["Zapier", "n8n", "REST APIs", "Webhooks"],
  },
];

export default function Services() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section id="services" className="section-pad bg-[#060611] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="container-pad">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-purple-300 font-medium mb-6 border border-purple-500/20">
            <Zap className="w-3.5 h-3.5" />
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-5">
            Services That Drive{" "}
            <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg">
            From strategy to execution — comprehensive digital solutions built for businesses that want to grow.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setSelected(service)}
                className="glass-card rounded-2xl p-6 cursor-pointer group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-poppins font-semibold text-lg mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed mb-5">{service.short}</p>
                <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium group-hover:gap-3 transition-all duration-200">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0d0d20] border border-white/10 rounded-3xl p-7 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selected.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <selected.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-poppins font-bold text-2xl">{selected.title}</h3>
                    <p className="text-white/50 text-sm">{selected.short}</p>
                  </div>
                </div>
                <button onClick={() => setSelected(null)} className="p-2 rounded-xl glass text-white/60 hover:text-white transition-colors flex-shrink-0">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-white/65 leading-relaxed mb-8">{selected.description}</p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Key Benefits</h4>
                  <ul className="space-y-2">
                    {selected.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-white/60 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Our Process</h4>
                  <ul className="space-y-2">
                    {selected.process.map((p, i) => (
                      <li key={p} className="flex items-center gap-3 text-white/60 text-sm">
                        <span className={`w-5 h-5 rounded-full bg-gradient-to-br ${selected.gradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                          {i + 1}
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.techs.map((t) => (
                    <span key={t} className="px-3 py-1.5 glass rounded-full text-white/70 text-xs font-medium border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => { setSelected(null); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className={`w-full py-4 bg-gradient-to-r ${selected.gradient} text-white font-semibold rounded-2xl shadow-lg hover:opacity-90 transition-opacity`}
              >
                Get a Free Consultation
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
