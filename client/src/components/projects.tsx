import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "TechStore Online",
      category: "E-commerce",
      description: "Modern e-commerce platform with advanced filtering, payment integration, and mobile-first design resulting in 150% increase in sales.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      categoryColor: "bg-indigo-100 text-indigo-700",
      linkColor: "text-indigo-600 hover:text-indigo-700"
    },
    {
      title: "FitTracker Pro",
      category: "Mobile App",
      description: "Native Android fitness app with real-time tracking, social features, and personalized workouts. Over 10K downloads in first month.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      categoryColor: "bg-cyan-100 text-cyan-700",
      linkColor: "text-cyan-600 hover:text-cyan-700"
    },
    {
      title: "Bella Vista Restaurant",
      category: "Branding",
      description: "Complete brand identity and website redesign for upscale restaurant, including logo, menu design, and online reservation system.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      categoryColor: "bg-amber-100 text-amber-700",
      linkColor: "text-amber-600 hover:text-amber-700"
    },
    {
      title: "DataInsight Pro",
      category: "SaaS Platform",
      description: "Enterprise analytics platform with real-time dashboards, custom reporting, and AI-powered insights for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      categoryColor: "bg-purple-100 text-purple-700",
      linkColor: "text-purple-600 hover:text-purple-700"
    },
    {
      title: "Prime Properties",
      category: "Real Estate",
      description: "Modern real estate platform with advanced search, virtual tours, and lead management system. 200% increase in qualified leads.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      categoryColor: "bg-emerald-100 text-emerald-700",
      linkColor: "text-emerald-600 hover:text-emerald-700"
    },
    {
      title: "LearnHub Academy",
      category: "Education",
      description: "Comprehensive e-learning platform with video courses, interactive quizzes, progress tracking, and certification system.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      categoryColor: "bg-pink-100 text-pink-700",
      linkColor: "text-pink-600 hover:text-pink-700"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover some of our recent work and the impact we've made for our clients
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  src={project.image}
                  alt={`${project.title} project interface`}
                  className="w-full h-64 object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.categoryColor}`}>
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`flex items-center font-medium transition-colors duration-300 ${project.linkColor}`}
                >
                  <span>View Case Study</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-purple-700 transform transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
