import React, { useRef, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Card = ({ videoSrc, title, brand, color, index }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  const colorMap = {
    orange: 'border-[#FF5F2E] text-white bg-[#FF5F2E]',
    blue: 'border-[#0085FF] text-white bg-[#0085FF]',
    green: 'border-[#36C68E] text-white bg-[#36C68E]',
  };

  return (
    <motion.div
      whileHover={{ y: -10,x:10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full"
    >
      <Link
        to={`/work/${brand.toLowerCase()}`}
        className={`relative group block rounded-4xl border-6 overflow-hidden transition-all duration-500 ease-out
          ${colorMap[color].split(' ')[0]}
          ${index === 1 ? 'lg:-mt-16' : index === 2 ? 'lg:-mt-32' : ''}
        h-88 md:h-125 w-full md:md:max-w-95 mx-auto`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Video Background */}
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 p-4 flex flex-col justify-end">
          <motion.div
            initial={{ y: 10, opacity: 0.9 }}
            whileHover={{ y: 0, opacity: 1 }}
            className={`relative p-4 rounded-4xl ${colorMap[color].split(' ').slice(1).join(' ')}`}
          >
            {/* Arrow Icon */}
            <div className="absolute top-4 right-4 bg-white rounded-full p-1 md:p-2 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="text-black w-6 h-6" />
            </div>

            <h3 className="text-md md:text-2xl font-bold leading-tight mb-4 pr-10">
              {title}
            </h3>

            <span className="inline-block px-1 md:px-4 py-1 rounded-lg bg-white/20 backdrop-blur-md text-sm font-medium">
              {brand}
            </span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function WorkSection() {
  const cards = [
    {
      title: "Van nul naar vol, binnen 3 weken",
      brand: "Bullit",
      videoSrc: "https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4",
      color: "orange"
    },
    {
      title: "Zacht in smaak, sterk in beeld",
      brand: "Roasta",
      videoSrc: "https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4",
      color: "blue"
    },
    {
      title: "Content die écht smaakt (en raakt)",
      brand: "Loco",
      videoSrc: "https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4",
      color: "green"
    }
  ];

  return (
    <section className="w-full mb-10 lg:mb-20">
      <div className="max-w-full lg:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start pt-10 lg:pt-20">
          {cards.map((card, idx) => (
            <Card key={idx} {...card} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}