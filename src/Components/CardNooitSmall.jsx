import { motion } from 'framer-motion';
import { ArrowRight} from 'lucide-react';
import { Link } from 'react-router';

const CardNooitSmall = () => {
  return (
    // Outer container for spacing
    <div className="w-full flex flex-col items-center gap-12 p-6 md:p-12">

      {/* 1. Animated Video Card with 3-degree tilt */}
      <motion.div
        className="w-full max-w-4xl overflow-hidden rounded-3xl shadow-2xl origin-center"

        initial={{ opacity: 0, scale: 0.95, rotate: -1 }}

        animate={{ opacity: 1, scale: 1, rotate: 3 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}

        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-72 object-cover"
        >
          <source
            src="https://gethyped.b-cdn.net/New%20Reach/new-reach-loop.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* 2. Text & Button Section */}
      <div className="w-full text-center flex flex-col items-center gap-8">
        <h2 className="text-lg font-bold leading-tight text-balance">
          We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar.
          Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie.
          Nooit meer content zonder resultaat.
        </h2>

        {/* 3. Your Action Button (Fixed/Enhanced) */}
             <Link to="/" className="cursor-pointer inline-block">
  <motion.button
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.4 }}
    /* Added cursor-pointer here as well for safety */
    className="group flex items-center gap-3 px-3 py-2 border-2 border-black rounded-xl font-semibold text-sm hover:bg-black hover:text-white hover:scale-105 transition-transform active:scale-95 hover:rotate-3 cursor-pointer"
  >
    Leer ons kennen
    <motion.div
      whileHover={{ rotate: 45 }}
      className="bg-black text-white p-1 rounded-lg group-hover:bg-white group-hover:text-black transition-colors"
    >
      <ArrowRight size={20} />
    </motion.div>
  </motion.button>
</Link>
      </div>
    </div>
  );
};

export default CardNooitSmall;