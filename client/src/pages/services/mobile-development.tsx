import { motion } from "framer-motion";
import { Smartphone, CheckCircle, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Native performance and user experience",
  "Offline functionality",
  "Push notifications for better engagement",
  "Secure data storage and transmission",
  "Integration with device features",
  "Regular updates and maintenance"
];

const whyChooseUs = [
  "Experienced mobile development team",
  "Cross-platform development expertise",
  "Rigorous testing and QA process",
  "Regular progress updates and communication",
  "Post-launch support and monitoring",
  "Competitive pricing with flexible options"
];

const technologies = [
  { name: "React Native", level: "Expert" },
  { name: "Flutter", level: "Advanced" },
  { name: "Swift", level: "Advanced" },
  { name: "Kotlin", level: "Advanced" },
  { name: "Firebase", level: "Expert" },
  { name: "AWS Mobile", level: "Advanced" }
];

const caseStudy = {
  title: "Food Delivery App",
  description: "A comprehensive food delivery platform with real-time tracking",
  challenges: [
    "Real-time order tracking",
    "Complex payment integration",
    "Multiple user roles (customers, restaurants, drivers)",
    "Offline functionality"
  ],
  solutions: [
    "WebSocket implementation for real-time updates",
    "Secure payment gateway integration",
    "Role-based access control",
    "Local data synchronization"
  ],
  results: [
    "100,000+ app downloads",
    "4.8 star rating on app stores",
    "35% increase in restaurant partners",
    "98% delivery success rate"
  ],
  image: "https://your-image-url.com/food-delivery-app.jpg"
};

export default function MobileAppDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mobile App Development
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Build powerful mobile applications that engage users and drive business growth
            </p>
            <Button
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-6 text-lg rounded-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Mobile App
              <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Mobile Apps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle className="w-6 h-6 text-primary-600 mr-4 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Planning", icon: "📋" },
              { title: "Design", icon: "🎨" },
              { title: "Development", icon: "👨‍💻" },
              { title: "Testing & Launch", icon: "🚀" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-sm"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-xl shadow-sm text-center"
              >
                <h3 className="font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-primary-600">{tech.level}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Case Study: {caseStudy.title}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl overflow-hidden">
                {/* Replace with actual image */}
                <div className="flex items-center justify-center text-6xl">
                  📱
                </div>
              </div>
            </motion.div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Challenges</h3>
                <ul className="space-y-2">
                  {caseStudy.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 text-primary-600 mr-2" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Solutions</h3>
                <ul className="space-y-2">
                  {caseStudy.solutions.map((solution, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Results</h3>
                <ul className="space-y-2">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Build Your Mobile App?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Let's turn your app idea into reality
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-primary-900 hover:bg-primary-50 px-8 py-6 text-lg rounded-full"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Free Consultation
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
