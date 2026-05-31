import { motion } from "framer-motion";
import { Phone, FileText, Palette, Code2, TestTube, Rocket, Headphones } from "lucide-react";

const steps = [
  { icon: Phone, title: "Discovery Call", desc: "We start with a free consultation to understand your business, goals, and vision. No fluff — just clarity.", color: "from-blue-500 to-indigo-600" },
  { icon: FileText, title: "Requirement Analysis", desc: "We break down your project into clear features, timelines, and technical requirements, then share a detailed proposal.", color: "from-indigo-500 to-purple-600" },
  { icon: Palette, title: "UI/UX Design", desc: "Our designers create high-fidelity mockups and prototypes. You see exactly how your product will look before we write a line of code.", color: "from-purple-500 to-violet-600" },
  { icon: Code2, title: "Development", desc: "We build your product with clean, scalable code — keeping you updated at every milestone with regular previews.", color: "from-violet-500 to-pink-600" },
  { icon: TestTube, title: "Testing & QA", desc: "Rigorous testing across devices and edge cases ensures your product is rock-solid before it reaches your users.", color: "from-pink-500 to-rose-600" },
  { icon: Rocket, title: "Deployment", desc: "We deploy to your production environment, configure domains, SSL, and ensure everything runs smoothly at launch.", color: "from-rose-500 to-orange-600" },
  { icon: Headphones, title: "Ongoing Support", desc: "We don't disappear after launch. Get dedicated support, updates, and improvements whenever you need them.", color: "from-orange-500 to-amber-600" },
];

export default function HowWeWork() {
  return (
    <section className="section-pad bg-[#080814] relative overflow-hidden">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="container-pad">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-violet-300 font-medium mb-6 border border-violet-500/20">
            <Rocket className="w-3.5 h-3.5" />
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-5">
            How We Turn Your{" "}
            <span className="gradient-text">Idea Into Reality</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg">
            A transparent, proven process that delivers results — from the first call to long-term support.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
          <div className="grid grid-cols-7 gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-4 relative z-10`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div className="text-white/30 text-xs font-medium mb-1">Step {i + 1}</div>
                  <h4 className="text-white font-poppins font-semibold text-sm mb-2">{step.title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-5 flex items-start gap-4"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white/30 text-xs mb-0.5">Step {i + 1}</div>
                  <h4 className="text-white font-poppins font-semibold mb-1">{step.title}</h4>
                  <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
