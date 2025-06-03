import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function About() {
  const features = [
    {
      title: "Expert Development",
      description: "5+ years of combined experience in web and mobile development",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Creative Design",
      description: "Award-winning designs that convert visitors into customers",
      gradient: "from-cyan-500 to-emerald-500"
    },
    {
      title: "Personal Approach",
      description: "Direct communication with founders, no middlemen or account managers",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const stats = [
    { value: "50+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "100%", label: "Satisfaction Rate" }
  ];

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Full-Stack Developer",
      gradient: "from-indigo-500 to-purple-500",
      icon: "💻"
    },
    {
      name: "Maya Patel",
      role: "UI/UX Designer",
      gradient: "from-cyan-500 to-emerald-500",
      icon: "🎨"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
              <span className="gradient-text">Meet Our Team</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're a passionate duo of digital creators committed to helping small businesses and startups achieve their online goals through innovative design and cutting-edge technology.
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-8 h-8 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-indigo-600 mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Two-person digital agency team collaborating in modern workspace"
                className="rounded-3xl shadow-2xl"
              />
              
              {/* Floating cards with team info */}
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.2) }}
                  viewport={{ once: true }}
                  animate={{ y: [-10, 0, -10] }}
                  style={{ animationDelay: `${index}s` }}
                  className={`absolute ${index === 0 ? '-top-6 -left-6' : '-bottom-6 -right-6'} bg-white rounded-2xl p-4 shadow-lg animate-float`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center text-white text-lg`}>
                      {member.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{member.name}</div>
                      <div className="text-sm text-gray-600">{member.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
