import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  gradient: string;
  bgGradient: string;
  delay: number;
  url?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "OptiClair.in",
      category: "E-commerce",
      description:
        "Opticlair.in offers stylish eyeglasses, sunglasses, and contact lenses with virtual try-on, smart filters, and home delivery—making modern, affordable eyewear accessible for all ages online with ease.",
      image:
        "https://res.cloudinary.com/dl28vjim6/image/upload/v1749035577/Screenshot_2025-06-04_163744_a0a0yt.png",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50/50 to-indigo-50/50",
      delay: 0.1,
      url: "https://opticlair.in",
    },
    {
      title: "BAJAJGROUPS",
      category: "Portfolio",
      description:
        "Bajaj Group.org.in is a diversified enterprise excelling in Real Estate, Grain Industries, Poultry Farms, Distilleries, and Transport Services, delivering quality and innovation across sectors.",
      image:
        "https://res.cloudinary.com/dl28vjim6/image/upload/v1749035578/Screenshot_2025-06-04_163826_xyvwww.png",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50/50 to-emerald-50/50",
      delay: 0.2,
      url: "https://bajajgroups.org.in/",
    },
    {
      title: "CREDA",
      category: "Mobile Application",
      description:
        "CREDA is a government geo-special app that monitors device location to ensure on-site presence during working hours. If a user tries to fake or misplace working time, the app detects and flags the activity automatically.",
      image:
        "https://res.cloudinary.com/dl28vjim6/image/upload/v1749038009/IMG_20250604_171437_wuyr89.jpg",
      gradient: "from-orange-500 to-amber-600",
      bgGradient: "from-orange-50/50 to-amber-50/50",
      delay: 0.3,
      url: "",
    },
    {
      title: "Harbaras.com",
      category: "Security & Verification",
      description:
        "Harbaras.com is a product verification website that allows users to check the authenticity of products by entering a unique code. It helps prevent counterfeit goods and ensures customers receive genuine, trusted products.",
      image:
        "https://res.cloudinary.com/dl28vjim6/image/upload/v1749037161/Screenshot_2025-06-04_170721_esskeb.png",
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50/50 to-violet-50/50",
      delay: 0.4,
      url: "https://herbaras.com/?i=1",
    },
    {
      title: "HPCL",
      category: "Mobile Application",
      description:
        "The HPCL Feedback Form is a simple and secure tool for customers to share their experiences with HPCL services. It collects details like customer name, contact info, location, service type (e.g., petrol pump, LPG), feedback ratings, and comments—helping HPCL improve service quality and customer satisfaction.",
      image:
        "https://res.cloudinary.com/dl28vjim6/image/upload/v1749038011/Screenshot_2025-06-04-17-12-34-935-edit_com.example.happyindex_lv1tfr.jpg",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50/50 to-teal-50/50",
      delay: 0.5,
      url: "",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover some of our recent work and the transformative impact we've
            made for our clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: project.delay,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                scale: 1.03,
                transition: { duration: 0.4 },
              }}
              className="group relative"
            >
              {/* Background Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
              />

              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100/50">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />

                  {/* Overlay + Category */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: project.delay + 0.2 }}
                    viewport={{ once: true }}
                    className="absolute top-4 left-4"
                  >
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium shadow-lg">
                      {project.category}
                    </span>
                  </motion.div>

                  {/* Visit Button Overlay */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center group-hover:opacity-100 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto"
                  >
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl shadow-lg backdrop-blur-sm border border-white/20 flex items-center space-x-2"
                      >
                        <span>Visit Project</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl shadow-lg backdrop-blur-sm border border-white/20 flex items-center space-x-2"
                      >
                        <span>View Project</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.button>
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Visit CTA */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center"
                  >
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-transparent bg-gradient-to-r ${project.gradient} bg-clip-text font-semibold flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300`}
                      >
                        <span>Visit</span>
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      </a>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-indigo-700 hover:to-purple-700 transform transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
