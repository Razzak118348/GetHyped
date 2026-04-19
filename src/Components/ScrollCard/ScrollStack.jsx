import { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 25,
  stackPosition = '10%',
  scaleEndPosition = '10%',
  baseScale = 0.92,
  useWindowScroll = true,
}) => {
  const scrollerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const isUpdatingRef = useRef(false);

  // Helper to prevent sub-pixel bouncing
  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;
    isUpdatingRef.current = true;

    const scrollTop = window.scrollY;
    const containerHeight = window.innerHeight;
    const stackPositionPx = (parseFloat(stackPosition) / 100) * containerHeight;
    const scaleEndPositionPx = (parseFloat(scaleEndPosition) / 100) * containerHeight;

    const endElement = document.querySelector('.scroll-stack-end');
    const endElementTop = endElement ? endElement.getBoundingClientRect().top + window.scrollY : 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardRect = card.getBoundingClientRect();
      const cardTop = cardRect.top + window.scrollY - (parseFloat(card.style.transform.split(',')[1]) || 0);

      const pinStart = cardTop - stackPositionPx - (itemStackDistance * i);
      const pinEnd = endElementTop - containerHeight;

      const triggerStart = pinStart;
      const triggerEnd = cardTop - scaleEndPositionPx;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + (i * itemScale);
      const scale = 1 - (scaleProgress * (1 - targetScale));

      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPositionPx + (itemStackDistance * i);
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + (itemStackDistance * i);
      }


      card.style.transform = `translate3d(0, ${Math.round(translateY)}px, 0) scale(${scale.toFixed(4)})`;
    });

    isUpdatingRef.current = false;
  }, [itemScale, itemStackDistance, stackPosition, scaleEndPosition, baseScale, calculateProgress]);

  useLayoutEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.08, // Lower lerp = smoother, less "springy"
      wheelMultiplier: 1,
      infinite: false,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      updateCardTransforms();
      animationFrameRef.current = requestAnimationFrame(raf);
    };

    animationFrameRef.current = requestAnimationFrame(raf);
    cardsRef.current = Array.from(document.querySelectorAll('.scroll-stack-card'));

    // Critical: Disable CSS smooth scroll which fights with Lenis
    document.documentElement.style.scrollBehavior = 'auto';

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      lenis.destroy();
      document.documentElement.style.scrollBehavior = 'smooth';
    };
  }, [updateCardTransforms]);

  return (
    <div className={`relative w-full overflow-x-hidden ${className}`} ref={scrollerRef}>
      <div className="scroll-stack-inner pt-[4vh] lg:pt-[10vh] pb-[16vh] lg:pb-[20vh]">
        {children}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;