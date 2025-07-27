import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronUp, ChevronDown } from "lucide-react";

/**
 * Normalize phone: remove spaces, +, dashes, parentheses.
 */
function normalizePhone(raw = "") {
  return raw.replace(/[^\d]/g, ""); // keep digits only
}

/**
 * Build a WhatsApp URL depending on platform.
 * wa.me works everywhere, but web.whatsapp.com is nicer on desktop.
 */
function buildWhatsAppUrl(phone, message, isMobile) {
  const encodedMsg = encodeURIComponent(message || "Hi! I'd like to discuss a project with WebAksh team.");
  const clean = normalizePhone(phone);

  if (!clean) return null;
  
  return isMobile
    ? `whatsapp://send?phone=${clean}&text=${encodedMsg}`
    : `https://web.whatsapp.com/send?phone=${clean}&text=${encodedMsg}`;

  // Desktop: try WhatsApp Web
  if (!isMobile) {
    return `https://web.whatsapp.com/send?phone=${clean}&text=${encodedMsg}`;
  }

  // Mobile: deep‑link
  return `https://wa.me/${clean}?text=${encodedMsg}`;
}

/**
 * Simple mobile check.
 */
function useIsMobile() {
  return useMemo(() => {
    if (typeof navigator === "undefined") return false;
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(
      navigator.userAgent
    );
  }, []);
}

export default function WhatsAppFloat({
  phone = "919131456765",
  defaultMessage = "Hi! I'm interested in your digital services. Can we discuss my project?",
  quickMessages = [],
  tooltip = "Chat with us on WhatsApp",
  pulse = true,
}) {
  const isMobile = useIsMobile();
  const [openList, setOpenList] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(defaultMessage);

  const toggleList = () => setOpenList((v) => !v);

  const handleWhatsAppClick = (msg) => {
    const finalMsg = msg ?? selectedMessage ?? defaultMessage;
    const url = buildWhatsAppUrl(phone, finalMsg, isMobile);
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handlePresetClick = (msg) => {
    setSelectedMessage(msg);
    handleWhatsAppClick(msg);
    setOpenList(false);
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
    >
      {/* Quick message presets dropdown */}
      <AnimatePresence>
        {openList && quickMessages.length > 0 && (
          <motion.ul
            key="wa-presets"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="mb-2 w-56 max-h-64 overflow-auto rounded-lg bg-white shadow-xl border border-gray-200 text-sm text-gray-800"
          >
            {quickMessages.map((msg) => (
              <li
                key={msg}
                className="px-3 py-2 hover:bg-green-50 cursor-pointer leading-snug"
                onClick={() => handlePresetClick(msg)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handlePresetClick(msg);
                }}
                tabIndex={0}
                role="button"
              >
                {msg}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Main floating button group */}
      <motion.div
        initial={false}
        animate={{}}
        className="relative group"
      >
        {/* Pulse animation background */}
        {pulse && (
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-green-500 rounded-full"
          />
        )}

        {/* Main WhatsApp button */}
        <button
          type="button"
          aria-label="Open WhatsApp chat"
          onClick={() => handleWhatsAppClick()}
          className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </button>

        {/* Dropdown toggle (if quick messages exist) */}
        {quickMessages.length > 0 && (
          <button
            type="button"
            onClick={toggleList}
            aria-label="Choose a WhatsApp message"
            className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow hover:bg-gray-50"
          >
            {openList ? (
              <ChevronDown className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronUp className="w-4 h-4 text-gray-600" />
            )}
          </button>
        )}

        {/* Tooltip */}
        <div
          role="tooltip"
          className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          {tooltip}
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
        </div>
      </motion.div>
    </motion.div>
  );
}
