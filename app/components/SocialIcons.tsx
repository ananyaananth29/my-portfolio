import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { useState } from "react";

export default function SocialIcons() {
  const [hovered, setHovered] = useState<string | null>(null);

  const icons = [
    {
      id: "github",
      icon: <FaGithub size={24} />,
      label: "GitHub",
      href: "https://github.com/ananyaananth29",
    },
    {
      id: "linkedin",
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ananyaananth/",
    },
    {
      id: "email",
      icon: <FaMailBulk size={24} />,
      label: "Email Me",
      href: "https://mail.google.com/mail/?view=cm&to=ananya.ananth.jain@gmail.com",
    },
  ];

  return (
    <div className="flex gap-6 mt-8 relative">
      {icons.map(({ id, icon, label, href }) => (
        <div
          key={id}
          className="relative"
          onMouseEnter={() => setHovered(id)}
          onMouseLeave={() => setHovered(null)}
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition"
          >
            {icon}
          </a>

          <AnimatePresence>
            {hovered === id && (
              <motion.span
                initial={{ opacity: 0, y: 6, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap"
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
