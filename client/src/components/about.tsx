import { motion } from "framer-motion";
import { Shield, Heart, Zap, Award, Users, Target } from "lucide-react";

const whyUs = [
  { icon: Zap, title: "Fast Delivery", desc: "We move fast without cutting corners. Most projects launch within 4–8 weeks.", color: "from-yellow-500 to-orange-500" },
  { icon: Shield, title: "SEO Optimized", desc: "Every project is built with search engines in mind — so customers can find you.", color: "from-green-500 to-emerald-600" },
  { icon: Target, title: "Mobile First", desc: "Your users are on mobile. We design for mobile first, desktop second.", color: "from-blue-500 to-indigo-600" },
  { icon: Heart, title: "Dedicated Support", desc: "We're with you beyond launch — responsive, caring, and invested in your success.", color: "from-pink-500 to-rose-600" },
  { icon: Award, title: "Scalable Solutions", desc: "Built to grow with your business — from 10 to 10,000 users without breaking a sweat.", color: "from-purple-500 to-violet-600" },
  { icon: Users, title: "Direct Partnership", desc: "Work directly with our founders. No middlemen, no miscommunication.", color: "from-cyan-500 to-sky-600" },
];

const teamMembers = [
  {
    name: "Yogeshwar Verma",
    role: "Full-Stack Developer",
    bio: "Specializes in web development, React ecosystems, and backend architecture.",
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749041838/Screenshot_2025-06-04_182645_yrbvt9.png",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    name: "Naveen Kumar",
    role: "Full-Stack Developer",
    bio: "Expert in mobile development, cloud infrastructure, and system design.",
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749042317/Screenshot_2025-06-04_183356_xtlwqp.png",
    gradient: "from-purple-500 to-pink-600",
  },
];

const stats = [
  { value: "5+", label: "Projects Delivered", color: "from-blue-500 to-indigo-600" },
  { value: "3+", label: "Years Experience", color: "from-green-500 to-emerald-600" },
  { value: "95%", label: "Client Satisfaction", color: "from-orange-500 to-amber-600" },
  { value: "24/7", label: "Support Available", color: "from-purple-500 to-violet-600" },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-[#060611] relative overflow-hidden">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="container-pad">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-pink-300 font-medium mb-6 border border-pink-500/20">
            <Heart className="w-3.5 h-3.5" />
            About Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-5">
            A Small Team With{" "}
            <span className="gradient-text">Big Ambitions</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg">
            We're two passionate developers from Raipur, India — building digital solutions
            that help businesses of every size compete and win online.
          </p>
        </motion.div>

        {/* Team */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-20">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.gradient} blur-md opacity-40`} />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-24 h-24 rounded-full object-cover border-2 border-white/10"
                />
              </div>
              <h3 className="text-white font-poppins font-semibold text-lg mb-1">{member.name}</h3>
              <p className="text-indigo-400 text-sm mb-3">{member.role}</p>
              <p className="text-white/45 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8 mb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`text-4xl font-poppins font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-white/45 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-white">
            Why Businesses Choose <span className="gradient-text">WebAksh</span>
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-6 flex items-start gap-4"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-poppins font-semibold mb-1.5">{item.title}</h4>
                  <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
