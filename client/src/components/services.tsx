import { motion } from "framer-motion";
import { Code, Smartphone, TrendingUp, Palette, MessageSquare, Lightbulb } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom, responsive websites built with modern technologies to showcase your brand and convert visitors into customers.",
      gradient: "from-indigo-50 to-purple-50",
      iconGradient: "from-indigo-500 to-purple-500",
      tags: ["React", "Next.js", "WordPress"],
      tagColors: ["bg-indigo-100 text-indigo-700", "bg-purple-100 text-purple-700", "bg-blue-100 text-blue-700"]
    },
    {
      icon: Smartphone,
      title: "Android App Development",
      description: "Native Android applications that provide seamless user experiences and help you reach customers on mobile devices.",
      gradient: "from-cyan-50 to-emerald-50",
      iconGradient: "from-cyan-500 to-emerald-500",
      tags: ["Kotlin", "Java", "Flutter"],
      tagColors: ["bg-cyan-100 text-cyan-700", "bg-emerald-100 text-emerald-700", "bg-teal-100 text-teal-700"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies including SEO, PPC, content marketing, and analytics to grow your online presence.",
      gradient: "from-pink-50 to-rose-50",
      iconGradient: "from-pink-500 to-rose-500",
      tags: ["SEO", "PPC", "Analytics"],
      tagColors: ["bg-pink-100 text-pink-700", "bg-rose-100 text-rose-700", "bg-red-100 text-red-700"]
    },
    {
      icon: Palette,
      title: "Branding",
      description: "Complete brand identity solutions including logo design, brand guidelines, and visual identity to make your business memorable.",
      gradient: "from-amber-50 to-orange-50",
      iconGradient: "from-amber-500 to-orange-500",
      tags: ["Logo Design", "Brand Guidelines", "Visual Identity"],
      tagColors: ["bg-amber-100 text-amber-700", "bg-orange-100 text-orange-700", "bg-yellow-100 text-yellow-700"]
    },
    {
      icon: MessageSquare,
      title: "Social Media Management",
      description: "Strategic social media management to build your online community and engage with your audience across all platforms.",
      gradient: "from-violet-50 to-fuchsia-50",
      iconGradient: "from-violet-500 to-fuchsia-500",
      tags: ["Content Strategy", "Community Management", "Analytics"],
      tagColors: ["bg-violet-100 text-violet-700", "bg-fuchsia-100 text-fuchsia-700", "bg-purple-100 text-purple-700"]
    },
    {
      icon: Lightbulb,
      title: "Digital Consulting",
      description: "Expert guidance and strategic planning to help you navigate the digital landscape and make informed technology decisions.",
      gradient: "from-emerald-50 to-teal-50",
      iconGradient: "from-emerald-500 to-teal-500",
      tags: ["Strategy", "Planning", "Optimization"],
      tagColors: ["bg-emerald-100 text-emerald-700", "bg-teal-100 text-teal-700", "bg-green-100 text-green-700"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the online world
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group bg-gradient-to-br ${service.gradient} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 bg-gradient-to-r ${service.iconGradient} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (tagIndex * 0.05) }}
                      viewport={{ once: true }}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${service.tagColors[tagIndex]}`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
