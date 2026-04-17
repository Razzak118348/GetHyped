import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function MixedBounceCards({
  className = '',
  cardsContent = [],
  animationDelay = 0.5,
  animationStagger = 0.1,
  easeType = 'elastic.out(1, 0.8)',
  // Only use rotations now, the Grid handles the positioning
  transformStyles = [
    'rotate(-6deg)',
    'rotate(4deg)',
    'rotate(-3deg)',
    'rotate(7deg)'
  ],
  enableHover = true,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.card',
        { scale: 0, y: 50, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [animationStagger, easeType, animationDelay]);

  const handleMouseEnter = (idx) => {
    if (!enableHover) return;
    gsap.to(`.card-${idx}`, {
      rotation: 0,
      scale: 1.05,
      zIndex: 10,
      duration: 0.4,
      ease: 'back.out(1.7)',
    });
  };

  const handleMouseLeave = (idx) => {
    if (!enableHover) return;
    gsap.to(`.card-${idx}`, {
      rotation: parseInt(transformStyles[idx].replace(/[^0-9-]/g, '')),
      scale: 1,
      zIndex: 1,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  return (
    <div
      ref={containerRef}
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10 w-full max-w-7xl mx-auto ${className}`}
    >
      {cardsContent.map((data, idx) => (
        <div
          key={idx}
          className={`card card-${idx} relative w-88 h- aspect-3/4 rounded-3xl overflow-hidden shadow-xl transition-shadow hover:shadow-2xl`}
          style={{
            transform: transformStyles[idx] || 'none',
            backgroundColor: data.type === 'text' ? 'transparent' : '#eee'
          }}
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={() => handleMouseLeave(idx)}
        >
          {/* Renderer based on type */}
          {data.type === 'image' && (
            <img
              className="w-full h-full object-cover"
              src={data.content}
              alt={`card-${idx}`}
            />
          )}

          {data.type === 'video' && (
            <video
              className="w-full h-full object-cover"
              src={data.content}
              autoPlay
              loop
              muted
              playsInline
            />
          )}

          {data.type === 'text' && (
            <div
              className={`w-full h-full flex flex-col justify-between p-8 ${data.bgColor || ''}`}
              style={{ color: data.textColor || '#000' }}
            >
              <h2 className="text-5xl font-black tracking-tighter">
                {data.title}
              </h2>
              <div>
                <hr />
                <p className="text-xl font-bold leading-tight">
                  {data.subtitle}
                </p>
                <p className="text-sm opacity-80 mt-2">{data.desc}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}