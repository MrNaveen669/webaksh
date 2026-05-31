import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const stacks = [
  {
    category: "Frontend",
    color: "from-blue-500 to-indigo-600",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "TS" },
      { name: "Tailwind", icon: "🌊" },
    ],
  },
  {
    category: "Backend",
    color: "from-green-500 to-emerald-600",
    items: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "Ex" },
      { name: "REST APIs", icon: "🔌" },
      { name: "GraphQL", icon: "◈" },
    ],
  },
  {
    category: "Database",
    color: "from-purple-500 to-violet-600",
    items: [
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Firebase", icon: "🔥" },
      { name: "Redis", icon: "♦" },
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "from-orange-500 to-amber-600",
    items: [
      { name: "AWS", icon: "☁️" },
      { name: "Vercel", icon: "▲" },
      { name: "Docker", icon: "🐳" },
      { name: "Linux", icon: "🐧" },
    ],
  },
  {
    category: "Mobile",
    color: "from-pink-500 to-rose-600",
    items: [
      { name: "React Native", icon: "📱" },
      { name: "Expo", icon: "🌐" },
      { name: "Android SDK", icon: "🤖" },
      { name: "Firebase", icon: "🔥" },
    ],
  },
  {
    category: "Tools",
    color: "from-cyan-500 to-sky-600",
    items: [
      { name: "Figma", icon: "🎨" },
      { name: "Git", icon: "🌿" },
      { name: "Razorpay", icon: "₹" },
      { name: "Stripe", icon: "💳" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="section-pad bg-[#060611] relative overflow-hidden">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="container-pad">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-cyan-300 font-medium mb-6 border border-cyan-500/20">
            <Code2 className="w-3.5 h-3.5" />
            Tech Stack
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-5">
            Built With{" "}
            <span className="gradient-text">Modern Technology</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg">
            We use the latest, most powerful technologies to ensure your product is fast, scalable, and future-proof.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stacks.map((stack, i) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-8 h-1 rounded-full bg-gradient-to-r ${stack.color}`} />
                <h3 className="text-white font-poppins font-semibold">{stack.category}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {stack.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="glass rounded-xl p-3 flex items-center gap-2.5 cursor-default"
                  >
                    <span className="text-xl leading-none">{item.icon}</span>
                    <span className="text-white/75 text-sm font-medium">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
