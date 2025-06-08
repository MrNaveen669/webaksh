import { motion } from "framer-motion";
import { Check, Heart, Users, Award, Zap } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Users,
      title: "Direct Partnership",
      description:
        "Work directly with our founders — no account managers or middlemen. Just passionate experts who care about your success.",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Heart,
      title: "Mission-Driven",
      description:
        "We're passionate about empowering small businesses to compete with industry giants through smart digital solutions.",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      icon: Zap,
      title: "Results-Focused",
      description:
        "Every project is designed with clear goals in mind — increased sales, better engagement, and measurable growth.",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description:
        "5+ years of combined expertise with a track record of delivering projects that exceed expectations.",
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
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SEO H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          About WebAksh
        </motion.h1>

        {/* SEO Paragraph */}
        <p className="text-xl text-gray-600 max-w-4xl mx-auto text-center mb-16 leading-relaxed">
          WebAksh is a leading software company in Raipur, Chhattisgarh, known for providing cutting-edge web development, mobile apps, and digital marketing solutions to startups and enterprises. Our goal is to help your business grow with scalable, high-quality tech.
        </p>

        {/* Features Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-semibold mb-8 text-gray-900">
              Why Choose WebAksh?
            </h2>

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
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Team Image and Floating Cards */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600"
              alt="Team working in software agency"
              className="rounded-3xl shadow-2xl"
            />
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                viewport={{ once: true }}
                className={`absolute ${index === 0 ? "-top-6 -left-6" : "-bottom-6 -right-6"} bg-white rounded-2xl p-4 shadow-lg`}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{member.name}</div>
                    <div className="text-sm text-gray-600">{member.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-xl border"
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
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SEO Footer Text Block */}
        <div className="mt-12 text-center max-w-4xl mx-auto text-gray-500 text-sm leading-relaxed">
          <p>
            WebAksh is trusted as one of the <strong>best software companies in Raipur</strong> offering services in web apps, SEO, and full-stack development. Clients often search for:
            <br />
            <em>"top IT company in Raipur", "digital marketing Raipur", "software company Chhattisgarh", "MNC company Raipur"</em>
          </p>
        </div>
      </div>
    </section>
  );
}
