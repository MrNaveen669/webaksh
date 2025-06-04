import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      content: "Opticlair revolutionized our online presence! Their sleek e-commerce platform made it incredibly easy for our customers to browse and purchase. We've seen a 150% boost in monthly orders and built stronger customer trust—all thanks to their intuitive design and seamless user experience.",
      author: "Tukeshwar Sahu",
      role: "Owner, Opticlair",
      avatar: "T",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      content: "Bajaj Group has consistently delivered excellence across every sector they operate in. From their state-of-the-art grain facilities to cutting-edge real estate projects and reliable transport services, their commitment to quality and innovation is unmatched. Partnering with Bajaj Group has been a game-changer for our operations.  ",
      author: "Subham Bajaj",
      role: "Founder, Bajaj Groups",
      avatar: "S",
      gradient: "from-cyan-500 to-emerald-500"
    },
    {
      content: "Harbaras.com has revolutionized how we ensure product authenticity. Our customers now feel more confident knowing they can verify their purchase instantly. It’s a powerful tool in the fight against counterfeit goods and has significantly boosted our brand’s trust and credibility.",
      author: "Yash",
      role: "Owner",
      avatar: "Y",  
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
            <span className="gradient-text">What Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped grow
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-5 h-5" fill="currentColor" />
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className="text-gray-600 mb-6 leading-relaxed"
              >
                "{testimonial.content}"
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
