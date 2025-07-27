import { useState } from "react";
import { motion } from "framer-motion";
import { ServiceDetailDialog, type Service } from "./service-detail-dialog";

const Services = () => {
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

  const services: Service[] = [
    {
      icon: "🎨",
      title: "Branding & Visual Identity",
      description: "Complete brand identity solutions including logo design, brand guidelines, and visual identity to make your business memorable.",
      gradient: "from-orange-500 to-amber-600",
      bgGradient: "from-orange-50/50 to-amber-50/50",
      benefits: [
        "Stand out in a crowded market with unique visual identity",
        "Build trust and recognition with consistent branding",
        "Increase brand recall with memorable design elements",
        "Professional appearance across all platforms"
      ],
      features: [
        "Custom logo design and variations",
        "Brand color palette and typography",
        "Brand guidelines documentation",
        "Business card and stationery design",
        "Social media templates",
        "Marketing collateral design"
      ],
      technologies: [
        "Adobe Creative Suite",
        "Figma",
        "Sketch",
        "Illustrator",
        "Photoshop"
      ],
      process: [
        {
          step: "Discovery",
          description: "Understanding your brand values, target audience, and objectives"
        },
        {
          step: "Research",
          description: "Analyzing competitors and industry design trends"
        },
        {
          step: "Concept Development",
          description: "Creating initial design concepts and variations"
        },
        {
          step: "Refinement",
          description: "Perfecting the chosen design direction"
        },
        {
          step: "Delivery",
          description: "Providing final files and brand guidelines"
        }
      ],
      image: "https://res.cloudinary.com/dl28vjim6/image/upload/v1751024317/branding-service.jpg"
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Native Android applications that provide seamless user experiences and help you reach customers on mobile devices.",
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
      ]
    },
    {
      icon: "🌐",
      title: "Website Development",
      description: "Custom, responsive websites built with modern technologies to showcase your brand and convert visitors into customers.",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50/50 to-indigo-50/50",
      benefits: [
        "24/7 online presence",
        "Global reach",
        "Automated business processes",
        "Improved customer engagement"
      ],
      features: [
        "Custom website design",
        "Responsive layouts",
        "Content management system",
        "E-commerce integration",
        "SEO optimization",
        "Performance monitoring"
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "AWS"
      ],
      process: [
        {
          step: "Planning",
          description: "Defining website goals and structure"
        },
        {
          step: "Design",
          description: "Creating mockups and wireframes"
        },
        {
          step: "Development",
          description: "Building the website"
        },
        {
          step: "Testing",
          description: "Quality assurance and optimization"
        },
        {
          step: "Launch",
          description: "Deployment and monitoring"
        }
      ]
    },
    {
      icon: "📈",
      title: "Digital Marketing",
      description: "Comprehensive digital marketing solutions including SEO, SEM, and social media marketing to boost your online presence and drive growth.",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50/50 to-pink-50/50",
      benefits: [
        "Increased online visibility",
        "Higher conversion rates",
        "Data-driven marketing decisions",
        "Better ROI on marketing spend"
      ],
      features: [
        "Search Engine Optimization (SEO)",
        "Search Engine Marketing (SEM)",
        "Social Media Marketing",
        "Content Marketing Strategy",
        "Analytics and Reporting",
        "Conversion Rate Optimization"
      ],
      technologies: [
        "Google Analytics",
        "Google Ads",
        "SEMrush",
        "Ahrefs",
        "Facebook Ads Manager",
        "HubSpot"
      ],
      process: [
        {
          step: "Audit",
          description: "Analyzing current digital presence and market position"
        },
        {
          step: "Strategy",
          description: "Developing comprehensive marketing plan and KPIs"
        },
        {
          step: "Implementation",
          description: "Executing marketing campaigns and optimizations"
        },
        {
          step: "Monitoring",
          description: "Tracking performance and making data-driven adjustments"
        },
        {
          step: "Reporting",
          description: "Providing detailed analytics and recommendations"
        }
      ]
    },
    {
      icon: "🖥️",
      title: "Server Management",
      description: "Professional server management and maintenance services to ensure your infrastructure runs smoothly and securely.",
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50/50 to-blue-50/50",
      benefits: [
        "24/7 server monitoring",
        "Enhanced security",
        "Improved performance",
        "Reduced downtime"
      ],
      features: [
        "Server Setup & Configuration",
        "Security Management",
        "Performance Optimization",
        "Backup & Recovery",
        "Load Balancing",
        "Monitoring & Alerts"
      ],
      technologies: [
        "Linux/Unix",
        "Windows Server",
        "Docker",
        "Kubernetes",
        "AWS",
        "Azure"
      ],
      process: [
        {
          step: "Assessment",
          description: "Evaluating current infrastructure and requirements"
        },
        {
          step: "Planning",
          description: "Developing server management strategy"
        },
        {
          step: "Implementation",
          description: "Setting up servers and security measures"
        },
        {
          step: "Monitoring",
          description: "Establishing monitoring and maintenance protocols"
        },
        {
          step: "Optimization",
          description: "Continuous improvement and updates"
        }
      ]
    },
    {
      icon: "🔄",
      title: "Data Recovery",
      description: "Expert data recovery services to help you retrieve lost or corrupted data from various storage devices and systems.",
      gradient: "from-red-500 to-orange-600",
      bgGradient: "from-red-50/50 to-orange-50/50",
      benefits: [
        "Professional data recovery",
        "Quick turnaround time",
        "Secure recovery process",
        "Multiple device support"
      ],
      features: [
        "Hard Drive Recovery",
        "SSD Data Recovery",
        "RAID Recovery",
        "Database Recovery",
        "Cloud Backup Recovery",
        "Emergency Recovery Services"
      ],
      technologies: [
        "Data Recovery Tools",
        "Forensic Software",
        "RAID Systems",
        "Cloud Storage",
        "Backup Solutions",
        "Encryption Tools"
      ],
      process: [
        {
          step: "Diagnosis",
          description: "Analyzing the extent of data loss and recovery options"
        },
        {
          step: "Assessment",
          description: "Determining the best recovery method"
        },
        {
          step: "Recovery",
          description: "Implementing data recovery procedures"
        },
        {
          step: "Verification",
          description: "Ensuring data integrity and completeness"
        },
        {
          step: "Prevention",
          description: "Providing recommendations for future data protection"
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.2
          }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.34, 1.56, 0.64, 1] // Spring-like effect
            }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive digital solutions to help your business thrive in the modern world
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ 
                opacity: 0,
                y: 50,
                x: index % 2 === 0 ? -25 : 25,
                rotate: index % 2 === 0 ? -5 : 5
              }}
              animate={{ 
                opacity: 1,
                y: 0,
                x: 0,
                rotate: 0
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: 0,
                transition: { 
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + (index * 0.15),
                ease: "easeOut"
              }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => handleServiceClick(service)}
            >
              <div className="relative p-8">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="mb-5 inline-flex perspective-[1000px]">
                    <motion.span 
                      className="text-5xl transform-gpu relative select-none"
                      style={{
                        transformStyle: "preserve-3d",
                        textShadow: "0 0 10px rgba(0,0,0,0.2)",
                        filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))"
                      }}
                      whileHover={{ 
                        scale: 1.2,
                        rotateY: 180,
                        transition: { duration: 0.5, ease: "easeOut" }
                      }}
                    >
                      {service.icon}
                    </motion.span>
                  </div>

                  {/* Content */}
                  <motion.h3 
                    className="text-xl font-bold mb-3"
                    whileHover={{ 
                      background: `linear-gradient(to right, ${service.gradient.replace('from-', '').replace('to-', '')})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <motion.button
                    className={`mt-4 px-4 py-2 rounded-lg bg-gradient-to-r ${service.gradient} text-white font-medium 
                      opacity-90 hover:opacity-100 transform transition-all duration-200 shadow-md hover:shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click event
                      handleServiceClick(service);
                    }}
                  >
                    Learn More →
                  </motion.button>
                </motion.div>
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
};

export default Services;
