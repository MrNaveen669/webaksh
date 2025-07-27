import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    "Website Development",
    "Mobile Apps Development",
    "Digital Marketing",
    "Server Management",
    "Social Media",
    "Data Recovery",
    "Video Editing",
  ];

  const company = [
    { label: "About", href: "about" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" },
  ];

  const socialLinks = [
    {
      icon: Twitter,
      href: "https://twitter.com/webaksh",
      label: "Twitter",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/webaksh",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/webaksh",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <nav aria-label="Footer Navigation" className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold mb-4 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                WebAksh
              </span>
            </motion.h2>

            <p className="text-gray-400 mb-4 max-w-md">
              WebAksh empowers startups & small businesses through innovative digital services:
              websites, mobile apps, SEO, and marketing.
            </p>

            {/* ✅ Company Address */}
            <address className="not-italic text-sm text-gray-400 mb-6 leading-relaxed">
              <strong>Address:</strong><br />
              Sudar Nagar, Near Raipura Chowk,<br />
              Raipur, Chhattisgarh – 492001, India
            </address>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-colors duration-300"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    whileHover={{ color: "#ffffff", x: 4 }}
                    onClick={() => scrollToSection("services")}
                    className="transition-colors duration-300 text-left"
                  >
                    {service}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-gray-400">
              {company.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    whileHover={{ color: "#ffffff", x: 4 }}
                    onClick={() => scrollToSection(item.href)}
                    className="transition-colors duration-300 text-left"
                  >
                    {item.label}
                  </motion.button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <a href="/privacy-policy" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <a href="/terms-of-service" className="hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </nav>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} WebAksh Digital Agency. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
