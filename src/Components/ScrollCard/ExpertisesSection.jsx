import { Link } from "react-router";
import ScrollStack from "./ScrollStack.jsx";
import { ScrollStackItem } from "./ScrollStackItem.jsx";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const DATA = [
    {
        num: "01",
        title: "Social strategy",
        desc: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken.",
        video: "https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4",
        bg: "bg-white",
        accent: "bg-[#FF5C35]",
        border: "border-[#FF5C35]"
    },
    {
        num: "02",
        title: "Content creation",
        desc: "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
        video: "https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4",
        bg: "bg-[#F3B1F3]",
        accent: "bg-white",
        border: "border-white"
    },
    {
        num: "03",
        title: "Activation",
        desc: "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is.",
        video: "https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4",
        bg: "bg-[#31D18A]",
        accent: "bg-white",
        border: "border-white"
    },
    {
        num: "04",
        title: "Data",
        desc: "We duiken in de cijfers om te snappen what écht werkt. En sturen jouw content scherp bij.",
        video: "https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4",
        bg: "bg-[#2B79FB]",
        accent: "bg-white",
        border: "border-white"
    }
];

export default function ExpertisesSection() {
    return (
        <section className="">
            {/* Remove horizontal padding on mobile for full-width cards */}
            <ScrollStack itemStackDistance={25} baseScale={0.92} className="px-0 md:px-4">
                {DATA.map((item, i) => (
                    <ScrollStackItem key={i} itemClassName="mb-[1vh] lg:mb-[15vh] !p-0">
                        <Link to="/" className="cursor-pointer">
                        <div className={`w-full ${item.bg} rounded-4xl flex flex-col md:flex-row p-6 md:p-16 relative overflow-hidden`}>

                            {/* Ghost Number */}
                            <span className="absolute top-4 right-8 text-2xl md:text-5xl font-black opacity-5 pointer-events-none">
                                {item.num}
                            </span>

                            {/* Wrapper for reordering on mobile */}
                            <div className="w-full flex flex-col md:flex-row gap-6 md:gap-0 z-10">

                                {/* Left Content: Title and Metadata */}
                                <div className="w-full md:w-3/5 flex flex-col justify-center">
                                    <div className="bg-gray-100 self-start py-1 px-2 rounded text-xs md:text-md font-bold mb-4 md:mb-6 uppercase order-1">
                                        Expertise
                                    </div>
                                    <h2 className="text-2xl md:text-6xl font-black mb-3 md:mb-6 tracking-tighter order-2">
                                        {item.title}
                                    </h2>

                                    {/* Video: Injected here for Mobile (order-3), hidden on Desktop */}
                                    <div className="w-full flex md:hidden items-center justify-center order-3 my-4">
                                        <div className={`w-full h-62 aspect-9/12 rounded-3xl border-4 ${item.border} overflow-hidden shadow-xl transform rotate-2`}>
                                            <video src={item.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                                        </div>
                                    </div>

                                    <p className="text-sm md:text-xl w-full md:max-w-md opacity-80 mb-6 md:mb-8 order-4">
                                        {item.desc}
                                    </p>

                                    <motion.button
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className={`w-fit self-start group flex items-center gap-3 px-1 md:px-4 py-1 md:py-3 rounded-xl font-semibold md:font-bold text-sm md:text-md hover:text-white hover:bg-black hover:scale-105 transition-transform active:scale-95 order-5 cursor-pointer hover:rotate-6 ${item.accent}`}
                                    >
                                        Meer over {item.title.toLowerCase()}
                                        <motion.div
                                            whileHover={{ rotate: 45 }}
                                            className="bg-black text-white hover:bg-white hover:text-black p-1 rounded-lg"
                                        >
                                            <ArrowRight size={20} />
                                        </motion.div>
                                    </motion.button>
                                </div>

                                {/* Right Content: Video for Desktop only */}
                                <div className="hidden md:flex md:w-2/5 items-center justify-center">
                                    <div className={`w-80 aspect-9/12 rounded-4xl border-6 ${item.border} overflow-hidden shadow-2xl transform rotate-3`}>
                                        <video src={item.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                                    </div>
                                </div>

                            </div>
                        </div></Link>
                    </ScrollStackItem>
                ))}
            </ScrollStack>
        </section>
    );
}