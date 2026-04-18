
import ScrollStack from "./ScrollStack.jsx";
import { ScrollStackItem } from "./ScrollStackItem.jsx";
import { motion } from 'framer-motion';
import { ArrowRight} from 'lucide-react';

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
        accent: "bg-black",
        border: "border-white"
    },
    {
        num: "03",
        title: "Activation",
        desc: "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is.",
        video: "https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4",
        bg: "bg-[#31D18A]",
        accent: "bg-black",
        border: "border-white"
    },
    {
        num: "04",
        title: "Data",
        desc: "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
        video: "https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4",
        bg: "bg-[#2B79FB]",
        accent: "bg-black",
        border: "border-white"
    }
];

export default function ExpertisesSection() {
    return (
        <section className="bg-[#F9F6F0]">
            <ScrollStack itemStackDistance={25} baseScale={0.92}>
                {DATA.map((item, i) => (
                    <ScrollStackItem key={i} itemClassName="mb-[15vh] !p-0">
                        <div className={`w-full  md:h-1/2 ${item.bg} rounded-[40px] flex flex-col md:flex-row p-3 md:p-16 relative overflow-hidden`}>

                            {/* Ghost Number */}
                            <span className="absolute top-4 right-8 text-6xl md:text-8xl font-black opacity-5 pointer-events-none">
                                {item.num}
                            </span>

                            {/* Text Side */}
                            <div className="w-full md:w-3/5 flex flex-col justify-center z-10">
                                <div className="bg-gray-100 self-start px-3 py-2 rounded text-md font-bold mb-2 md:mb-6 uppercase">Expertise</div>
                                <h2 className="text-2xl md:text-6xl font-black mb-2 md:mb-6 tracking-tighter">{item.title}</h2>
                                <p className="text-md md:text-xl w-full md:max-w-md opacity-80 mb-3 md:mb-8">{item.desc}</p>
                                <motion.button
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.4 }}
    // Added 'w-fit' and 'self-start' to fix the width
    className={`w-fit self-start group flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-sm md:text-md text-white hover:bg-black hover:text-white hover:scale-105 transition-transform active:scale-95 hover:rotate-3 cursor-pointer ${item.accent}`}
>
    Meer over {item.title.toLowerCase()}
    <motion.div
        whileHover={{ rotate: 45 }}
        className="bg-white text-black p-1 rounded-lg group-hover:bg-white group-hover:text-black transition-colors"
    >
        <ArrowRight size={20} />
    </motion.div>
</motion.button>
                            </div>

                            {/* Video Side */}
                            <div className="w-full md:w-2/5 flex items-center justify-center mt-3 md:mt-0">
                                <div className={`w-3xs md:w-80 aspect-9/12 rounded-4xl border-6 ${item.border} overflow-hidden shadow-2xl transform rotate-3`}>
                                    <video src={item.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                                </div>
                            </div>

                        </div>
                    </ScrollStackItem>
                ))}
            </ScrollStack>
        </section>
    );
}