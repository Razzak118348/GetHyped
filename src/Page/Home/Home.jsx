import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight} from 'lucide-react';

import HeroSection from '../../Components/Hero/HeroSection';
import CardNooitLarge from '../../Components/CardNooitLarge';
import CardNooitSmall from '../../Components/CardNooitSmall';
// import ScrollCard from '../../Components/ScrollCard';
import ExpertisesSection from '../../Components/ScrollCard/ExpertisesSection';
import WorkSection from '../../Components/WorkSection/WorkSection';
import BrandShowcase from '../../Components/BrandShowcase';
const Home = () => {
    return (
        <div className='mx-6 mt-10 '>
            <div className='w-full lg:w-2/3'>
                <h1 className='text-4xl md:text-8xl font-bold text-black '>Get Hyped. Get Noticed. Get Results.</h1>
                <p className='text-lg md:text-xl font-bold mt-4'>
                    Klaar met gokken op content <br />
                    die niets oplevert?
                </p>
            </div>

            <HeroSection></HeroSection>
            <div >
                <div className='mt-16 md:mt-28'>
                    <h1 className="w-full md:w-4/5 text-2xl md:text-6xl font-bold text-balance md:text-left">
                        Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
                    </h1>
                </div>

                <div className='hidden md:flex'>
                    <CardNooitLarge></CardNooitLarge>
                </div>

                <div className='flex md:hidden'>
                    <CardNooitSmall></CardNooitSmall>
                </div>
            </div>
            <ExpertisesSection></ExpertisesSection>
            <div className='space-y-4 mb-6 ml-0 md:ml-20'>
<h1 className=" text-2xl md:text-7xl font-bold text-balance md:text-left">Content <br /> dat scoort.
</h1>
<p className='text-lg lg:text-2xl text-balance font-bold mt-4 w-full md:w-2/3 lg:w-1/3'>Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.</p>
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
            </div>

<WorkSection></WorkSection>
<BrandShowcase></BrandShowcase>
        </div>
    );
};
export default Home;