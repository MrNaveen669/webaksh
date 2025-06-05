import { motion } from "framer-motion";
import { useIsMobile } from "../hooks/use-mobile";

export default function Hero() {
  const isMobile = useIsMobile();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />

      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          style={{ display: isMobile ? "none" : "block" }}
        />
        <motion.div
          animate={{ y: [-20, 0, -20] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-cyan-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          style={{ display: isMobile ? "none" : "block" }}
        />
        <motion.div
          animate={{ y: [-20, 0, -20] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute -bottom-10 left-1/2 w-80 h-80 bg-gradient-to-r from-pink-300 to-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          style={{ display: isMobile ? "none" : "block" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div
          className={`grid gap-12 items-center ${
            isMobile ? "grid-cols-1" : "grid-cols-2"
          }`}
        >
          {/* Left Text Content */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`font-space font-bold leading-tight mb-6 ${
                isMobile ? "text-4xl" : "text-5xl md:text-6xl lg:text-7xl"
              }`}
            >
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                One Click.
              </span>
              <br />
              <span className="text-gray-900">Infinite Growth</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                Your Digital Future Starts Here
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 ${
                isMobile ? "text-lg" : "text-xl md:text-2xl"
              }`}
            >
              "Your vision deserves more than code — it deserves a digital
              legacy. Let’s build it together."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`flex gap-4 justify-center lg:justify-start ${
                isMobile ? "flex-col" : "flex-row"
              }`}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("services")}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-purple-700 transform transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full border-2 border-gray-200 hover:border-indigo-600 hover:text-indigo-600 transform transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Get in Touch
              </motion.button>
            </motion.div>

            {/* Stats section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className={`mt-12 flex items-center justify-center lg:justify-start space-x-0 ${
                isMobile ? "flex-col space-y-6" : "flex-row space-x-8"
              }`}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">4+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">95%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </motion.div>
          </div>

          {/* Right Image Content */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative max-w-full mx-auto"
            >
              <div className="relative">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Digital agency team collaborating on modern projects"
                  className="rounded-3xl shadow-2xl transform transition-transform duration-700"
                />
                <motion.div
                  animate={{ y: [-20, 0, -20] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-20"
                />
                <motion.div
                  animate={{ y: [-20, 0, -20] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full opacity-20"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
