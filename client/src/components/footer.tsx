import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Zap, ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";

const services = [
  "Website Development",
  "Mobile App Development",
  "E-Commerce Solutions",
  "Digital Marketing & SEO",
  "Social Media Management",
  "Branding & Visual Identity",
  "Business Automation",
  "Server Management",
];

const quickLinks = [
  { label: "Home", href: "home" },
  { label: "Services", href: "services" },
  { label: "Projects", href: "projects" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
];

const social = [
  { icon: Instagram, href: "https://instagram.com/webaksh", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/webaksh", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/webaksh", label: "Twitter" },
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#040409] border-t border-white/5 relative overflow-hidden">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="container-pad py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <button onClick={() => scrollToSection("home")} className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/40 transition-shadow">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-space font-bold gradient-text">WebAksh</span>
            </button>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Premium digital agency helping businesses in Raipur and across India grow online through modern web, mobile, and marketing solutions.
            </p>
            <div className="flex gap-3">
              {social.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:border-indigo-500/30 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-white/40 text-sm hover:text-white/80 transition-colors duration-200 text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollToSection(l.href)}
                    className="text-white/40 text-sm hover:text-white/80 transition-colors duration-200"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <a href="#" className="text-white/40 text-sm hover:text-white/80 transition-colors duration-200">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/40 text-sm hover:text-white/80 transition-colors duration-200">Terms of Service</a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contact@webaksh.com" className="flex items-start gap-3 text-white/40 hover:text-white/70 transition-colors group">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-indigo-400" />
                  <span className="text-sm">contact@webaksh.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+917049586798" className="flex items-start gap-3 text-white/40 hover:text-white/70 transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-400" />
                  <span className="text-sm">+91 70495 86798</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/40">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-purple-400" />
                  <span className="text-sm">Sundar Nagar, Raipur<br />Chhattisgarh — 492001</span>
                </div>
              </li>
            </ul>

            <a
              href="https://wa.me/917049586798?text=Hi%20WebAksh%2C%20I%27d%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366]/10 border border-[#25D366]/25 rounded-xl text-[#25D366] text-sm font-medium hover:bg-[#25D366]/20 transition-all duration-200"
            >
              WhatsApp Us
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">© 2025 WebAksh Digital Agency. All rights reserved.</p>
          <p className="text-white/20 text-sm">Raipur, Chhattisgarh, India</p>
        </div>
      </div>
    </footer>
  );
}
