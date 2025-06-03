import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "TechStore Online",
      category: "E-commerce",
      description: "Modern e-commerce platform with advanced filtering, payment integration, and mobile-first design resulting in 150% increase in sales.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50/50 to-indigo-50/50",
      delay: 0.1
    },
    {
      title: "FitTracker Pro",
      category: "Mobile App",
      description: "Native Android fitness app with real-time tracking, social features, and personalized workouts. Over 10K downloads in first month.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50/50 to-emerald-50/50",
      delay: 0.2
    },
    {
      title: "Bella Vista Restaurant",
      category: "Branding",
      description: "Complete brand identity and website redesign for upscale restaurant, including logo, menu design, and online reservation system.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      gradient: "from-orange-500 to-amber-600",
      bgGradient: "from-orange-50/50 to-amber-50/50",
      delay: 0.3
    },
    {
      title: "DataInsight Pro",
      category: "SaaS Platform",
      description: "Enterprise analytics platform with real-time dashboards, custom reporting, and AI-powered insights for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50/50 to-violet-50/50",
      delay: 0.4
    },
    {
      title: "Prime Properties",
      category: "Real Estate",
      description: "Modern real estate platform with advanced search, virtual tours, and lead management system. 200% increase in qualified leads.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50/50 to-teal-50/50",
      delay: 0.5
    },
    {
      title: "LearnHub Academy",
      category: "Education",
      description: "Comprehensive e-learning platform with video courses, interactive quizzes, progress tracking, and certification system.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50/50 to-rose-50/50",
      delay: 0.6
    }
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
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            Discover some of our recent work and the transformative impact we've made for our clients
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: project.delay,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                transition: { duration: 0.4 }
              }}
              className="group relative"
            >
              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
              
              {/* Main Card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100/50">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={`${project.title} project showcase`}
                    className="w-full h-64 object-cover"
                  />
                  
                  {/* Overlay Gradient */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`}
                  />
                  
                  {/* Category Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: project.delay + 0.2 }}
                    viewport={{ once: true }}
                    className="absolute top-4 left-4"
                  >
                    <span className={`px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium shadow-lg`}>
                      {project.category}
                    </span>
                  </motion.div>

                  {/* View Project Button Overlay */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl shadow-lg backdrop-blur-sm border border-white/20 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-poppins font-semibold mb-3 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 font-inter leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  {/* Bottom CTA */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`text-transparent bg-gradient-to-r ${project.gradient} bg-clip-text font-semibold flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300`}
                    >
                      <span>View Case Study</span>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
            className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-indigo-700 hover:to-purple-700 transform transition-all duration-300 shadow-xl hover:shadow-2xl font-poppins"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
