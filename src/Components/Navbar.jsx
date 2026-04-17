import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({
  logo = "/images/icon.png",
  logoAlt = "GETHYPED",
  activeHref = "/",
  className = "",
  baseColor = "#000000",
  pillColor = "#000000",
  pillTextColor = "#ffffff",
}) {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    { label: "Expertises", href: "/expertises" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  // Label Stack Component to reuse for Mobile & Desktop
  const NavLabel = ({ label, isSelected, color, activeColor }) => (
    <div className="relative z-50 flex flex-col items-center overflow-hidden h-5 ">
      <motion.span
        className="text-sm md:text-base font-bold block"
        animate={{ y: isSelected ? -30 : 0, opacity: isSelected ? 0 : 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ color: color }}
      >
        {label}
      </motion.span>
      <motion.span
        className="text-sm md:text-base font-bold absolute"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: isSelected ? 0 : 30, opacity: isSelected ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ color: activeColor }}
      >
        {label}
      </motion.span>
    </div>
  );

  return (
    <nav className={`relative lg:-mt-2 lg:-ml-6 w-full flex justify-between items-center bg-[#F9F6F0] z-100 ${className}`}>
      {/* Logo */}
      <div className="z-110">
        <a href="/">
          <img className="w-56 md:w-72 object-contain" src={logo} alt={logoAlt} />
        </a>
      </div>

      {/* Desktop Menu */}
      <ul
        className="hidden md:flex items-center gap-1 px-2 py-2 bg-white rounded-full shadow-sm border border-gray-100 relative h-12"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {navItems.map((item, index) => {
          const isSelected = hoveredIndex === index || activeHref === item.href;
          return (
            <li
              key={item.label}
              className="relative px-6 py-2 cursor-pointer rounded-full"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <NavLabel
                label={item.label}
                isSelected={isSelected}
                color={baseColor}
                activeColor={pillTextColor}
              />
              {isSelected && (
                <motion.div
                  layoutId="desktop-pill"
                  className="absolute inset-0 z-0 rounded-full"
                  style={{ backgroundColor: pillColor }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </li>
          );
        })}
      </ul>

      {/* Desktop CTA */}
      <button className="hidden md:flex items-center gap-2 px-3 py-2 bg-[#F8C1F8] border-2 border-[#E9A6E9] rounded-2xl font-bold text-sm hover:scale-105 transition-transform active:scale-95 hover:rotate-8">
        Get Results
        <span className="bg-white p-1 rounded-lg">🔥</span>
      </button>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex flex-col gap-1.5 cursor-pointer z-110" onClick={() => setOpen(!open)}>
        <motion.div animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="w-8 h-1 bg-black rounded" />
        <motion.div animate={open ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }} className="w-8 h-1 bg-black rounded" />
        <motion.div animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="w-8 h-1 bg-black rounded" />
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-[#F8C1F8] flex flex-col items-center justify-center p-6"
          >
            <div className="flex flex-col items-center gap-6 w-full max-w-xs">
              {navItems.map((item, index) => {
                const isActive = activeHref === item.href;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="relative w-full py-5 flex justify-center items-center bg-white rounded-2xl shadow-md overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLabel
                      label={item.label}
                      isSelected={isActive}
                      color="#000000"
                      activeColor="#000000"
                    />
                    {isActive && (
                      <motion.div
                        layoutId="mobile-pill"
                        className="absolute bottom-2 w-1.5 h-1.5 bg-black rounded-full"
                      />
                    )}
                  </motion.a>
                );
              })}

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="w-full mt-4 flex items-center justify-center gap-3 px-8 py-5 bg-[#1A1A1A] text-white rounded-2xl font-bold text-xl border-4 border-black"
              >
                Get Results 🔥
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}