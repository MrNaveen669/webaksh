import React from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  bgGradient: string;
  benefits: string[];
  features: string[];
  technologies: string[];
  process: {
    step: string;
    description: string;
  }[];
    image?: string;
}

interface ServiceDetailDialogProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ServiceDetailDialog({ service, isOpen, onClose }: ServiceDetailDialogProps) {
  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Service Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">{service.icon}</span>
              <h2 className="text-2xl font-bold">{service.title}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>

          {/* Service Image */}
          <div className="mb-8 rounded-xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={
                service.title === "Server Management"
                  ? "https://res.cloudinary.com/dl28vjim6/image/upload/v1753619336/How_Can_You_Find_the_Best_Managed_Dedicated_Servers__m98ral.gif"
                  : service.title === "Digital Marketing"
                  ? "https://res.cloudinary.com/dl28vjim6/image/upload/v1753619517/digital-marketing-company-in-lucknow_lq78zs.gif"
                  : service.title === "Digital Marketing"
                  ? "https://res.cloudinary.com/dl28vjim6/image/upload/v1753619517/digital-marketing-company-in-lucknow_lq78zs.gif"
                  : service.title === "Data Recovery"
                  ? "https://res.cloudinary.com/dl28vjim6/image/upload/v1753619431/original-cf381e17969479c25e33a2a910be1019_fqhgk5.gif"
                  : service.title === "Mobile App Development"
                  ? "https://res.cloudinary.com/dl28vjim6/image/upload/v1753619256/react-native-build-mobile-apps-with-increased-developer-productivity_jllmmx.gif"
                  : service.title === "Website Development"
                  ? "https://res.cloudinary.com/dl28vjim6/image/upload/v1753618974/97639-coding_xfgya3.gif"
                  : service.image || "https://res.cloudinary.com/dl28vjim6/image/upload/v1753619517/digital-marketing-company-in-lucknow_lq78zs.gif"
              }
              alt={`${service.title} Illustration`}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Key Benefits */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-gray-50"
                >
                  <span className="text-green-500 mt-1">✓</span>
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Features</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-gray-50"
                >
                  <span className="text-blue-500 mt-1">•</span>
                  <p className="text-gray-700">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Development Process */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Our Process</h3>
            <div className="space-y-4">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{step.step}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Technologies We Use</h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
