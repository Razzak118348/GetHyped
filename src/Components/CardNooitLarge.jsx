import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router';

const CardNooitLarge = () => {
  return (
    <section className="relative w-full py-20  flex flex-col md:flex-row items-center justify-between  overflow-hidden">

      {/* Left Image */}
      <div className="w-72 flex justify-center">
        <img
          src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp"
          alt="Anniek Bril"
          className="rounded-3xl w-full max-w-72 object-cover shadow-sm"
        />
      </div>

      {/* Center Text & Button */}
      <div className="w-full md:w-1/3 flex flex-col items-start gap-10">
        <h2 className="text-2xl font-bold leading-tight ">
          We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar.
          Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie.
          Nooit meer content zonder resultaat.
        </h2>

        {/* Action Button with Rotate Hover */}
       <Link to="/" className="cursor-pointer inline-block">
  <motion.button
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.4 }}

    className="group flex items-center gap-3 px-6 py-2 border-2 border-black rounded-xl font-semibold hover:bg-black hover:text-white hover:scale-105 transition-transform active:scale-95 hover:rotate-3 cursor-pointer"
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

      {/* Down Arrow with "Looping" Hover Effect */}
      <div className="absolute bottom-10 right-10 md:relative md:bottom-0 md:right-0">
        <motion.div
          className="p-4 border border-gray-400 rounded-2xl cursor-pointer overflow-hidden relative group"
          initial="initial"
          whileHover="hover"
        >
          <motion.div
            variants={{
              initial: { y: 0 },
              hover: { y: 40, transition: { duration: 0.3 } }
            }}
          >
            <ArrowDown size={24} className="text-orange-600" />
          </motion.div>

          {/* Duplicate arrow that comes from the top */}
          <motion.div
            className="absolute top-0 left-0 p-4"
            variants={{
              initial: { y: -40 },
              hover: { y: 0, transition: { duration: 0.3 } }
            }}
          >
            <ArrowDown size={24} className="text-orange-600" />
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default CardNooitLarge;