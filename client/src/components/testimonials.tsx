import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      content: "Big thanks to WebAksh for creating a beautiful and easy-to-use website for Opticlair! Our customers now find it much easier to shop, and we’ve seen a 150% increase in orders. It really helped us grow and build more trust.",
      author: "Tukeshwar Sahu",
      role: "Owner, Opticlair",
      avatar: "T",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      content: "A big thank you to WebAksh for helping us take Bajaj Group’s online presence to the next level. Their clean, modern website design showcases our grain, real estate, and transport services perfectly. It’s made it easier for our customers to connect and trust our brand.  ",
      author: "Subham Bajaj",
      role: "Founder, Bajaj Groups",
      avatar: "S",
      gradient: "from-cyan-500 to-emerald-500"
    },
    {
      content: "We truly appreciate WebAksh for turning our vision into reality! The platform you developed for Harbaras.com has made it easy and quick for customers to verify products. Your work has played a key role in stopping fake goods and building real trust with every scan.",
      author: "Avinash Pandey",
      role: "Owner",
      avatar: "A",  
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
