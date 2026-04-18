import React from 'react';
import HeroSection from '../../Components/Hero/HeroSection';
import CardNooitLarge from '../../Components/CardNooitLarge';
import CardNooitSmall from '../../Components/CardNooitSmall';
// import ScrollCard from '../../Components/ScrollCard';
import ExpertisesSection from '../../Components/ScrollCard/ExpertisesSection';
const Home = () => {
    return (
        <div className='mx-6 mt-10 '>
            <div className='w-full md:w-2/3'>
                <h1 className='text-5xl md:text-8xl font-bold text-black '>Get Hyped. Get Noticed. Get Results.</h1>
                <p className='text-lg md:text-xl font-bold mt-4'>
                    Klaar met gokken op content <br />
                    die niets oplevert?
                </p>
            </div>

            <HeroSection></HeroSection>
            <div >
                <div className='mt-16 md:mt-28'>
                    <h1 className="w-full md:w-4/5 pl-0 md:pl-16 text-2xl md:text-6xl font-bold text-balance md:text-left">
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
        </div>
    );
};
export default Home;