import { useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  useEffect(() => {
    gsap.from(".hero-line", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
    });
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center md:justify-start px-6 md:px-20 text-center md:text-left">
      <video className="absolute w-full h-full object-cover" autoPlay muted loop>
        <source src="/hero.mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10">
        <h1 className="hero-line text-4xl md:text-7xl font-bold">We Create</h1>
        <h1 className="hero-line text-4xl md:text-7xl font-bold text-pink-500">
          Viral Content
        </h1>
      </div>
    </section>
  );
}