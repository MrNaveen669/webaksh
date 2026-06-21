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
    "Video Editing"
  ];

  const company = [
    { label: "About", href: "about" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-space font-bold mb-4 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                WebAksh
              </span>
            </motion.h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering small businesses and startups to achieve digital success through innovative design and technology solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgb(99 102 241)" }}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
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
                    whileHover={{ color: "rgb(255 255 255)", x: 4 }}
                    onClick={() => scrollToSection("services")}
                    className="transition-colors duration-300 text-left"
                  >
                    {service}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Company</h4>
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
                    whileHover={{ color: "rgb(255 255 255)", x: 4 }}
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
                <motion.a
                  href="#"
                  whileHover={{ color: "rgb(255 255 255)", x: 4 }}
                  className="transition-colors duration-300"
                >
                  Privacy Policy
                </motion.a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="#"
                  whileHover={{ color: "rgb(255 255 255)", x: 4 }}
                  className="transition-colors duration-300"
                >
                  Terms of Service
                </motion.a>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2025 WebAksh Digital Agency. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
