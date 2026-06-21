import { motion } from "framer-motion";
import { Palette, CheckCircle, ArrowRight, Users, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Improved user satisfaction and engagement",
  "Higher conversion rates",
  "Reduced development time and costs",
  "Consistent brand experience",
  "Data-driven design decisions",
  "Accessibility compliance"
];

const whyChooseUs = [
  "User-centered design approach",
  "Research-based solutions",
  "Industry best practices",
  "Collaborative design process",
  "Rapid prototyping",
  "Continuous iteration and improvement"
];

const designProcess = [
  {
    title: "Research",
    description: "Understanding users, market, and competition",
    icon: Users,
    items: ["User research", "Market analysis", "Competitor analysis", "User personas"]
  },
  {
    title: "Design",
    description: "Creating beautiful and functional interfaces",
    icon: Palette,
    items: ["Wireframes", "UI design", "Prototypes", "Design system"]
  },
  {
    title: "Testing",
    description: "Validating designs with real users",
    icon: Layout,
    items: ["Usability testing", "A/B testing", "User feedback", "Analytics"]
  }
];

const caseStudy = {
  title: "E-learning Platform Redesign",
  description: "Improving user experience and engagement for an online learning platform",
  challenges: [
    "Complex user journey",
    "Poor user engagement",
    "Inconsistent design",
    "High bounce rate"
  ],
  solutions: [
    "Simplified navigation",
    "Engaging interactive elements",
    "Consistent design system",
    "Optimized user flow"
  ],
  results: [
    "45% increase in user engagement",
    "30% decrease in bounce rate",
    "90% positive user feedback",
    "25% increase in course completion"
  ],
  beforeAfter: {
    before: "path/to/before-image.jpg",
    after: "path/to/after-image.jpg"
  }
};

export default function UIUXDesign() {
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
              UI/UX Design Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Create intuitive and engaging digital experiences that users love
            </p>
            <Button
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-6 text-lg rounded-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Design Project
              <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Good UI/UX</h2>
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

      {/* Design Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Design Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {designProcess.map((process, index) => {
              const Icon = process.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-sm"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{process.title}</h3>
                  <p className="text-gray-600 mb-6">{process.description}</p>
                  <ul className="space-y-3">
                    {process.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Case Study: {caseStudy.title}</h2>
          <div className="grid md:grid-cols-2 gap-12">
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
                      <Layout className="w-4 h-4 text-green-600 mr-2" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 p-4 rounded-xl aspect-video flex items-center justify-center"
              >
                <p className="text-gray-500">Before & After Screenshots</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose WebAksh</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <CheckCircle className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{reason}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your User Experience?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Let's create an engaging and intuitive design together
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-primary-900 hover:bg-primary-50 px-8 py-6 text-lg rounded-full"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Design Project
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
