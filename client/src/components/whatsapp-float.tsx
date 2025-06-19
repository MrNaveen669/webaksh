import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your digital services. Can we discuss my project?");
    const phoneNumber = "+91 91314 56765"; // Replace with actual WhatsApp business number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group relative"
      >
        {/* Pulse animation background */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-green-500 rounded-full opacity-20"
        />
        
        {/* Main button */}
        <div className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Chat with us on WhatsApp
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
}