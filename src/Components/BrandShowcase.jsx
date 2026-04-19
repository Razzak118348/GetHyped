import React, { useId } from 'react';
import { motion } from 'framer-motion';

// --- Configuration ---
const brands = [
  { name: "Tho", logo: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684b062ebc242028ca4b3ea1_tho.svg" },
  { name: "De Talententuin", logo: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684c05642bf8f5cea7384403_de-talententuin.svg" },
  { name: "Zwarte Cross", logo: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c1952f22281ee50d3620b5_zclv.svg" },
  { name: "Bullit Digital", logo: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69241146b4df63c4ca966552_Bullit%20Digital.svg" },
  { name: "Morssinkhof", logo: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c194e6d1b186563459b107_morssinkhof.svg" },
  { name: "Salontopper", logo: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d88f755388cc2c74ecff_salontopper.svg" },
  { name: "Seesing Flex", logo: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d880bed5996600cbc586_seesing-flex.svg" },
  { name: "Graafschap College", logo: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d86cd6ba384af3c14e58_graafschap-college.svg" },
  { name: "Fides", logo: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d85341bf0d7476e56a8c_fides.svg" },
  { name: "SRHK", logo: "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d838fc5735f090bd9843_SRHK.svg" },
];

// --- Sub-Component: A Single Logo Card ---
const LogoCard = ({ logo, name }) => (
  <motion.div
    whileHover={{ rotate: 3, scale: 1.05 }} // Added hover rotation and scale
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    className="group flex shrink-0 h-25 w-45 sm:h-32 sm:w-56 md:h-40 md:w-62 items-center justify-center rounded-2xl border border-gray-200 bg-white/60 py-4 md:p-6 transition-colors duration-300 hover:bg-white/95"
  >
    <img
      src={logo}
      alt={`${name} logo`}
      // Removed grayscale, increased size via lower padding and hover scale
      className="max-h-[80%] max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-110"
    />
  </motion.div>
);

// --- Main Section Component ---
const BrandShowcase = () => {
  const uniqueId = useId();
  const marqueeItems = [...brands, ...brands];

  return (
    <section className="w-full pt-16 pb-12 sm:pt-20 sm:pb-16 overflow-hidden">
      <div className="max-w-full md:max-w-7xl mx-auto  mb-16 sm:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-left md:-ml-6"
        >
          These brands <br className="hidden sm:block" /> got hyped.
        </motion.h2>
      </div>

      <div className="relative w-full overflow-x-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-5 sm:gap-6 md:gap-8 pr-5 sm:pr-6 md:pr-8"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 6,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((brand, index) => (
            <LogoCard
              key={`${uniqueId}-${index}`}
              {...brand}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandShowcase;