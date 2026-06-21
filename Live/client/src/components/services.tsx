import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  TrendingUp,
  Palette,
  MessageSquare,
  Server,
  Video,
  HardDrive
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom, responsive websites built with modern technologies to showcase your brand and convert visitors into customers.",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50/50 to-indigo-50/50",
      hoverGradient: "from-blue-600 to-indigo-700",
      iconColor: "text-blue-600",
      delay: 0.1
    },
    {
      icon: Smartphone,
      title: "Mobile App Development", 
      description: "Native Android applications that provide seamless user experiences and help you reach customers on mobile devices.",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50/50 to-emerald-50/50",
      hoverGradient: "from-green-600 to-emerald-700",
      iconColor: "text-green-600",
      delay: 0.2
    },
    {
      icon: MessageSquare,
      title: "Social Media Management",
      description: "Strategic social media management to build your online community and engage with your audience across all platforms.",
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50/50 to-rose-50/50", 
      hoverGradient: "from-pink-600 to-rose-700",
      iconColor: "text-pink-600",
      delay: 0.3
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing (SEO, SEM)",
      description: "Comprehensive digital marketing strategies including SEO, SEM, content marketing, and analytics to grow your online presence.",
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50/50 to-violet-50/50",
      hoverGradient: "from-purple-600 to-violet-700", 
      iconColor: "text-purple-600",
      delay: 0.4
    },
    {
      icon: Palette,
      title: "Branding & Visual Identity",
      description: "Complete brand identity solutions including logo design, brand guidelines, and visual identity to make your business memorable.",
      gradient: "from-orange-500 to-amber-600",
      bgGradient: "from-orange-50/50 to-amber-50/50",
      hoverGradient: "from-orange-600 to-amber-700",
      iconColor: "text-orange-600", 
      delay: 0.5
    },
    {
      icon: Server,
      title: "Server Management",
      description: "Reliable server setup, configuration, monitoring, and maintenance to ensure high performance and security for your web applications.",
      gradient: "from-cyan-500 to-sky-600",
      bgGradient: "from-cyan-50/50 to-sky-50/50",
      hoverGradient: "from-cyan-600 to-sky-700",
      iconColor: "text-cyan-600", 
      delay: 0.6
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "High-quality video editing services including cutting, transitions, motion graphics, and effects tailored for content creators and businesses.",
      gradient: "from-red-500 to-rose-600",
      bgGradient: "from-red-50/50 to-rose-50/50",
      hoverGradient: "from-red-600 to-rose-700",
      iconColor: "text-red-600",
      delay: 0.7
    },
    {
      icon: HardDrive,
      title: "Data Recovery",
      description: "Expert data recovery solutions for lost, corrupted, or deleted files across storage devices including SSDs, HDDs, and USB drives.",
      gradient: "from-teal-500 to-emerald-600",
      bgGradient: "from-teal-50/50 to-emerald-50/50",
      hoverGradient: "from-teal-600 to-emerald-700",
      iconColor: "text-teal-600",
      delay: 0.8
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Comprehensive digital solutions designed to elevate your business and drive meaningful growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: service.delay,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />

                <div className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100/50 group-hover:border-transparent`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                    className="relative mb-6"
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.bgGradient} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                        className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-poppins font-semibold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 font-inter leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center"
                  >
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm`}
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
