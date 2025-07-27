import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ExternalLink, X } from "lucide-react";
import type { Project } from './projects';

interface ProjectDetailDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailDialog: React.FC<ProjectDetailDialogProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-lg text-gray-600">
            {project.category}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-xl overflow-hidden mb-8"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-10`} />
          </motion.div>

          {/* Project Description */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Overview</h3>
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`px-4 py-2 rounded-full text-white bg-gradient-to-r ${project.gradient}`}
                  >
                    <span className="mr-2">{tech.icon}</span>
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <span className={`text-2xl ${project.gradient} bg-clip-text text-transparent`}>•</span>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Results & Impact */}
            {project.results && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Impact & Results</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {project.results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`p-4 rounded-xl bg-gradient-to-br ${project.gradient} text-white`}
                    >
                      <p className="text-lg font-semibold">{result}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Visit Website Button */}
            {project.url && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center mt-8"
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-semibold hover:opacity-90 transition-opacity`}
                >
                  <span>Visit Live Site</span>
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
