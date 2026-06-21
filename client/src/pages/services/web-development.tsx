import { motion } from "framer-motion";
import { Code, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Responsive design that works on all devices",
  "SEO-friendly architecture for better visibility",
  "Fast loading speeds and optimal performance",
  "Secure and scalable infrastructure",
  "Easy content management system",
  "24/7 technical support"
];

const whyChooseUs = [
  "Expert team with 5+ years of experience",
  "Custom solutions tailored to your needs",
  "Agile development methodology",
  "Transparent communication and progress updates",
  "Post-launch support and maintenance",
  "Competitive pricing with flexible options"
];

const technologies = [
  { name: "React.js", level: "Advanced" },
  { name: "Node.js", level: "Advanced" },
  { name: "TypeScript", level: "Expert" },
  { name: "Next.js", level: "Advanced" },
  { name: "MongoDB", level: "Advanced" },
  { name: "AWS", level: "Intermediate" }
];

const caseStudy = {
  title: "OptiClair.in E-commerce Platform",
  description: "Complete e-commerce solution for an eyewear company with virtual try-on feature",
  challenges: [
    "Complex product inventory management",
    "Real-time virtual try-on integration",
    "Secure payment processing",
    "Mobile-responsive design"
  ],
  solutions: [
    "Custom inventory management system",
    "WebGL-based virtual try-on feature",
    "Integrated payment gateway with multiple options",
    "Progressive Web App (PWA) implementation"
  ],
  results: [
    "50% increase in online sales",
    "30% reduction in cart abandonment",
    "95% positive user feedback",
    "2x increase in mobile conversions"
  ],
  image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1749035577/Screenshot_2025-06-04_163744_a0a0yt.png"
};

export default function WebDevelopment() {
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
              Web Development Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Create powerful, scalable, and beautiful web applications that drive your business forward
            </p>
            <Button
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-6 text-lg rounded-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Project
              <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits for Your Business</h2>
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

      {/* Why Choose WebAksh */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose WebAksh</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center p-6 bg-white rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-gray-700 font-medium">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Case Study: {caseStudy.title}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="rounded-xl shadow-lg w-full"
              />
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
                      <ArrowRight className="w-4 h-4 text-green-600 mr-2" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-sm text-center"
              >
                <h3 className="font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-primary-600">{tech.level}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Web Project?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Let's create something amazing together
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
