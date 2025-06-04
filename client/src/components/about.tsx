import { motion } from "framer-motion";
import { Check, Heart, Users, Award, Zap } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Users,
      title: "Direct Partnership",
      description:
        "Work directly with our founders - no account managers or middlemen, just passionate experts who care about your success",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Heart,
      title: "Mission-Driven",
      description:
        "We're passionate about empowering small businesses to compete with industry giants through smart digital solutions",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      icon: Zap,
      title: "Results-Focused",
      description:
        "Every project is designed with clear goals in mind - increased sales, better engagement, and measurable growth",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description:
        "5+ years of combined expertise with a track record of delivering projects that exceed expectations",
      gradient: "from-orange-500 to-amber-600",
    },
  ];

  const stats = [
    { value: "4+", label: "Projects Completed", color: "text-blue-600" },
    { value: "3+", label: "Years Experience", color: "text-emerald-600" },
    { value: "95%", label: "Client Satisfaction", color: "text-orange-600" },
    { value: "24/7", label: "Support Available", color: "text-purple-600" },
  ];

  const teamMembers = [
    {
      name: "Yogeshwar Verma",
      role: "Full-Stack Developer",
      image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749041838/Screenshot_2025-06-04_182645_yrbvt9.png",
    },
    {
      name: "Naveen Kumar",
      role: "Full-Stack Developer",
      image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749042317/Screenshot_2025-06-04_183356_xtlwqp.png",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About WebAksh
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-inter leading-relaxed">
            We're a passionate team of digital innovators dedicated to
            transforming small businesses into online powerhouses. Our mission
            is simple: make cutting-edge digital solutions accessible to every
            entrepreneur with big dreams.
          </p>
        </motion.div>

        {/* Features & Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side: Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-poppins font-semibold mb-8 text-gray-900">
              Why Choose WebAksh?
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h4 className="font-poppins font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm font-inter leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side: Image with floating cards */}
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
                alt="Professional digital team collaboration workspace"
                className="rounded-3xl shadow-2xl"
              />

              {/* Floating Cards */}
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                  animate={{ y: [-10, 0, -10] }}
                  style={{ animationDelay: `${index}s` }}
                  className={`absolute ${
                    index === 0 ? "-top-6 -left-6" : "-bottom-6 -right-6"
                  } bg-white rounded-2xl p-4 shadow-lg animate-float`}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {member.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {member.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`text-4xl font-bold ${stat.color} mb-2 font-poppins`}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-600 font-inter">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
