import React from 'react';
import HeroSection from '../../Components/Hero/HeroSection';

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
        </div>
    );
};

export default Home;