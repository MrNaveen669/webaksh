import { motion } from "framer-motion";
import { TrendingUp, CheckCircle, ArrowRight, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Increased organic traffic and visibility",
  "Higher search engine rankings",
  "Better user experience",
  "Increased conversion rates",
  "Long-term sustainable results",
  "Measurable ROI"
];

const whyChooseUs = [
  "Data-driven SEO strategies",
  "Comprehensive keyword research",
  "Technical SEO expertise",
  "Regular performance reporting",
  "White-hat SEO practices",
  "Local SEO optimization"
];

const services = [
  {
    title: "Technical SEO",
    items: ["Site architecture", "Mobile optimization", "Speed optimization", "XML sitemaps"]
  },
  {
    title: "On-Page SEO",
    items: ["Keyword optimization", "Meta tags", "Content optimization", "Internal linking"]
  },
  {
    title: "Off-Page SEO",
    items: ["Link building", "Social signals", "Brand mentions", "Local citations"]
  },
  {
    title: "Content Strategy",
    items: ["Content planning", "Keyword research", "Content creation", "Content optimization"]
  }
];

const caseStudy = {
  title: "E-commerce SEO Success Story",
  description: "Increasing organic traffic and sales for an online store",
  challenges: [
    "Low organic visibility",
    "Technical SEO issues",
    "Poor mobile performance",
    "Limited quality backlinks"
  ],
  solutions: [
    "Comprehensive technical SEO audit",
    "Mobile-first optimization",
    "Quality content strategy",
    "Strategic link building"
  ],
  results: [
    "250% increase in organic traffic",
    "180% increase in organic sales",
    "Top 3 rankings for main keywords",
    "40% increase in mobile conversions"
  ],
  graphs: [
    {
      title: "Organic Traffic Growth",
      percentage: 250,
      color: "primary"
    },
    {
      title: "Keyword Rankings",
      percentage: 180,
      color: "green"
    },
    {
      title: "Conversion Rate",
      percentage: 40,
      color: "indigo"
    }
  ]
};

export default function SEOServices() {
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
              Search Engine Optimization
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Drive organic traffic and increase your online visibility with our data-driven SEO strategies
            </p>
            <Button
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-6 text-lg rounded-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get SEO Analysis
              <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of SEO</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <TrendingUp className="w-6 h-6 text-primary-600 mr-4 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our SEO Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
                      <LineChart className="w-4 h-4 text-green-600 mr-2" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid gap-6">
              {caseStudy.graphs.map((graph, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <h4 className="text-lg font-semibold mb-2">{graph.title}</h4>
                  <div className="flex items-center">
                    <div className="flex-1 bg-gray-200 h-4 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: `${graph.percentage}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full bg-${graph.color}-600`}
                      />
                    </div>
                    <span className="ml-4 font-bold text-lg">{graph.percentage}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Improve Your Search Rankings?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Get a free SEO audit and discover your website's potential
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-primary-900 hover:bg-primary-50 px-8 py-6 text-lg rounded-full"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Free SEO Audit
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
