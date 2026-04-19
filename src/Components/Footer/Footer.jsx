import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import ImageTrail from './ImageTrail';

// Icons
import { IoMailOutline, IoFlame } from "react-icons/io5";
import { SiInstagram, SiYoutube, SiTiktok } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const stickerRef = useRef(null);
  const footerRef = useRef(null);
  const bgRef = useRef(null);

  const trailImages = [
    'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg',
    'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415233f03ab6c1143fa_gh-logo-pink.svg',
    'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415e192971624995445_gh-logo-green.svg',
  ];

  useEffect(() => {
    // Continuous Rotation for Sticker
    gsap.to(stickerRef.current, {
      rotation: 360,
      duration: 12,
      repeat: -1,
      ease: "none",
    });

    // Parallax Background
    gsap.fromTo(bgRef.current,
      { y: 50 },
      {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true
        }
      }
    );
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#FAF8F5] pt-24 md:pt-32 pb-10 overflow-hidden font-sans text-[#111]"
    >
      {/* REACTBITS IMAGE TRAIL
          This is set to absolute cover so the trail works anywhere inside the footer
      */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <ImageTrail
          items={trailImages}
          variant="1"
        />
      </div>

      {/* Animated Slanted Background Layer */}
      <div
        ref={bgRef}
        className="absolute bottom-0 left-0 w-full h-[60%] md:h-[65%] bg-[#EAE7E1] z-0 origin-bottom-left -skew-y-2 md:-skew-y-4"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-end"
      >
        {/* Left Section: Branding */}
        <motion.div variants={itemVariants} className="md:col-span-3 flex justify-center md:justify-start">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="/images/icon.png"
            alt="GetHyped"
            className="w-40 md:w-80 h-auto object-contain cursor-pointer drop-shadow-sm"
          />
        </motion.div>

        {/* Center Section */}
        <div className="md:col-span-6 flex flex-col items-center text-center space-y-10">
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase"
          >
            Let’s Get <span className="inline-block italic text-[#FF6036]">Hyped!</span>
          </motion.h2>

          {/* CTA Group */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
            <motion.button
              className="group flex items-center gap-3 bg-black text-white px-6 py-4 rounded-full font-bold shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer relative z-40"
            >
              Mail ons direct
              <div className="bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-700 transition-colors">
                <IoMailOutline size={18} />
              </div>
            </motion.button>

            <motion.button
              className="flex items-center gap-3 bg-[#FF6036] text-white px-6 py-4 rounded-full font-bold shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer relative z-40"
            >
              Get Results
              <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                <IoFlame size={18} className="text-white" />
              </div>
            </motion.button>
          </motion.div>

          {/* Navigation Pills */}
          <motion.nav variants={itemVariants} className="flex flex-wrap justify-center gap-3 w-full relative z-40">
            {['Expertises', 'Work', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -3, backgroundColor: "#FF6036", color: "#FFF" }}
                className="bg-white px-5 py-2 rounded-full text-xs md:text-sm font-extrabold shadow-sm transition-all border border-black/5"
              >
                {item}
              </motion.a>
            ))}
          </motion.nav>

          {/* Socials */}
          <motion.div variants={itemVariants} className="flex items-center gap-5 pt-2 relative z-40">
            <span className="font-black text-[10px] tracking-[0.2em] uppercase opacity-40">Follow us</span>
            <div className="flex gap-3">
              {[
                { icon: <FaLinkedin size={18} />, label: 'LinkedIn' },
                { icon: <SiTiktok size={18} />, label: 'TikTok' },
                { icon: <SiInstagram size={18} />, label: 'Instagram' },
                { icon: <SiYoutube size={18} />, label: 'YouTube' }
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ y: -5, rotate: 5, backgroundColor: "#FF6036", color: "#FFF" }}
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md transition-all text-zinc-800"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div variants={itemVariants} className="md:col-span-3 space-y-8 text-center md:text-left">
          <div className="group cursor-default">
            <h4 className="font-black text-xs tracking-widest uppercase mb-3 text-[#FF6036]">Contact</h4>
            <p className="font-bold text-lg">info@gethyped.nl</p>
            <p className="font-bold text-lg opacity-60">+31 6 1533 7496</p>
          </div>
          <div className="group cursor-default">
            <h4 className="font-black text-xs tracking-widest uppercase mb-3 text-[#FF6036]">Adres</h4>
            <p className="font-bold text-lg">Beltrumsestraat 6,</p>
            <p className="font-bold text-lg opacity-60">7141 AL Groenlo</p>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-12 border-t border-black/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] font-black opacity-30 gap-6"
        >
          <p>© 2026 GET HYPED</p>
          <p className="hover:opacity-100 transition-opacity cursor-pointer border-b border-transparent hover:border-black/30">
            © DESIGN BY ABDUR RAZZAK
          </p>
          <a href="#" className="hover:opacity-100 transition-opacity">PRIVACYVOORWAARDEN</a>
        </motion.div>
      </motion.div>

      {/* GSAP Floating Sticker */}
      <div
        ref={stickerRef}
        className="hidden lg:flex absolute top-16 right-[10%] w-40 h-40 text-[#C887AF] items-center justify-center z-20 pointer-events-none drop-shadow-xl"
      >
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
          </defs>
          <text fill="currentColor" className="text-[7px] font-black uppercase tracking-widest">
            <textPath xlinkHref="#circlePath">
              GET HYPED • GET NOTICED • GET HYPED • GET NOTICED •
            </textPath>
          </text>
          <text x="50" y="58" textAnchor="middle" className="fill-current font-black text-[22px]">GH</text>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;