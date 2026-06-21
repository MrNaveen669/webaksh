import { useState } from "react";
import { motion } from "framer-motion";
import { ServiceDetailDialog, type Service } from "./service-detail-dialog";

const SERVICES_DATA = [
  {
    icon: "💻",
    title: "Web Development",
    description: "Custom web solutions built with modern technologies to create fast, secure, and scalable websites and web applications.",
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50/50 to-indigo-50/50",
    benefits: [
      "Increased online presence and visibility",
      "Better user engagement and conversion rates",
      "Mobile-responsive design for all devices",
      "Optimized performance and loading speed"
    ],
    features: [
      "Custom website development",
      "E-commerce solutions",
      "Content Management Systems",
      "Progressive Web Apps",
      "API integration",
      "Performance optimization"
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "PostgreSQL"
    ],
    process: [
      {
        step: "Planning",
        description: "Defining project scope, requirements, and architecture"
      },
      {
        step: "Design",
        description: "Creating wireframes and visual designs"
      },
      {
        step: "Development",
        description: "Building the application with modern technologies"
      },
      {
        step: "Testing",
        description: "Quality assurance and performance testing"
      },
      {
        step: "Deployment",
        description: "Launching and monitoring the application"
      }
    ],
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1751024317/web-development.jpg"
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.",
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50/50 to-emerald-50/50",
    benefits: [
      "Reach users on their preferred devices",
      "Offline functionality",
      "Push notifications for engagement",
      "App store presence"
    ],
    features: [
      "Native iOS & Android apps",
      "Cross-platform development",
      "Real-time sync",
      "Push notifications",
      "Analytics integration",
      "In-app purchases"
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "AWS Mobile"
    ],
    process: [
      {
        step: "Strategy",
        description: "Defining app features and target platforms"
      },
      {
        step: "Design",
        description: "Creating UI/UX for mobile interfaces"
      },
      {
        step: "Development",
        description: "Building native or cross-platform app"
      },
      {
        step: "Testing",
        description: "Device testing and bug fixing"
      },
      {
        step: "Launch",
        description: "App store submission and release"
      }
    ],
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1751024317/mobile-development.jpg"
  },
  {
    icon: "🚀",
    title: "SEO & Digital Marketing",
    description: "Comprehensive digital marketing strategies to increase your online visibility and drive meaningful traffic to your business.",
    gradient: "from-purple-500 to-violet-600",
    bgGradient: "from-purple-50/50 to-violet-50/50",
    benefits: [
      "Improved search engine rankings",
      "Increased organic traffic",
      "Better ROI on marketing spend",
      "Enhanced brand visibility"
    ],
    features: [
      "SEO optimization",
      "Content marketing",
      "Social media management",
      "Email marketing",
      "PPC campaigns",
      "Analytics and reporting"
    ],
    technologies: [
      "Google Analytics",
      "SEMrush",
      "Ahrefs",
      "Mailchimp",
      "Google Ads",
      "Social Media Tools"
    ],
    process: [
      {
        step: "Audit",
        description: "Analyzing current online presence and performance"
      },
      {
        step: "Strategy",
        description: "Developing targeted marketing plans"
      },
      {
        step: "Optimization",
        description: "Implementing SEO and marketing tactics"
      },
      {
        step: "Monitoring",
        description: "Tracking performance and results"
      },
      {
        step: "Refinement",
        description: "Adjusting strategies based on data"
      }
    ],
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1751024317/digital-marketing.jpg"
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "User-centered design solutions that create intuitive, engaging, and memorable digital experiences for your customers.",
    gradient: "from-pink-500 to-rose-600",
    bgGradient: "from-pink-50/50 to-rose-50/50",
    benefits: [
      "Improved user satisfaction",
      "Higher conversion rates",
      "Reduced development costs",
      "Better user retention"
    ],
    features: [
      "User research",
      "Wireframing",
      "Interface design",
      "Prototyping",
      "Usability testing",
      "Design systems"
    ],
    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "InVision",
      "Principle",
      "Zeplin"
    ],
    process: [
      {
        step: "Research",
        description: "Understanding user needs and behaviors"
      },
      {
        step: "Wireframing",
        description: "Creating low-fidelity layouts"
      },
      {
        step: "Design",
        description: "Developing high-fidelity designs"
      },
      {
        step: "Prototyping",
        description: "Building interactive prototypes"
      },
      {
        step: "Testing",
        description: "Conducting user testing sessions"
      }
    ],
    image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1751024317/ui-ux-design.jpg"
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => handleServiceClick(service as Service)}
            >
              <div className="relative p-8">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className="relative">
                  <div className="mb-5 inline-flex">
                    <span className="text-4xl">{service.icon}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Dialog */}
      <ServiceDetailDialog
        service={selectedService}
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
      />
    </section>
  );
}
