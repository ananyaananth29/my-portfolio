"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

export default function ContactInfo() {
  const [copied, setCopied] = useState("");

  const handleCopy = (value, key) => {
    navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(""), 1500);
  };

  const infoItems = [
    {
      id: "email",
      icon: <FaMailBulk className="text-blue-400" />,
      label: "ananya.ananth.jain@gmail.com",
      href: "mailto:ananya.ananth.jain@gmail.com",
    },
    {
      id: "github",
      icon: <FaGithub className="text-gray-300" />,
      label: "github.com/ananyaananth29",
      href: "https://github.com/ananyaananth29",
    },
    {
      id: "linkedin",
      icon: <FaLinkedin className="text-blue-500" />,
      label: "linkedin.com/in/ananyaananth/",
      href: "https://www.linkedin.com/in/ananyaananth/",
    },
    {
      id: "phone",
      icon: <span className="text-green-400">📞</span>,
      label: "+1 (801) 662-8290",
      href: "tel:+18016628290",
    }
  ];

  return (
    <ul className="space-y-4 text-white/90">
      {infoItems.map(({ id, icon, label, href }) => (
        <li
          key={id}
          className="flex flex-wrap items-center gap-3 w-full break-words"
        >
          {/* Icon */}
          <span className="shrink-0 text-lg">{icon}</span>

          {/* Text Link */}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-0 break-words hover:text-purple-300"
          >
            {label}
          </a>

          {/* Copy Button */}
          <button
            onClick={() => handleCopy(label, id)}
            className="shrink-0 px-3 py-1 text-xs rounded bg-white/10 hover:bg-white/20 transition"
          >
            <AnimatePresence mode="wait">
              {copied === id ? (
                <motion.span
                  key="copied"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="text-green-400"
                >
                  Copied!
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  Copy
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </li>
      ))}
    </ul>
  );
}
