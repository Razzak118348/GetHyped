import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Helper functions for the math logic
const lerp = (a, b, n) => (1 - n) * a + n * b;

const getLocalPointerPos = (e, rect) => {
  let clientX = e.touches ? e.touches[0].clientX : e.clientX;
  let clientY = e.touches ? e.touches[0].clientY : e.clientY;
  return { x: clientX - rect.left, y: clientY - rect.top };
};

const getMouseDistance = (p1, p2) => Math.hypot(p1.x - p2.x, p1.y - p2.y);

const ImageTrail = ({ items, variant = "1" }) => {
  const containerRef = useRef(null); // Fixes the "containerRef is not defined" error
  const imagesRef = useRef([]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Internal state management for the animation logic
    const state = {
      images: imagesRef.current.map((el) => ({
        el,
        inner: el.querySelector('.content__img-inner'),
        rect: el.getBoundingClientRect(),
      })),
      imgPosition: 0,
      zIndexVal: 1,
      activeImagesCount: 0,
      isIdle: true,
      threshold: 80,
      mousePos: { x: 0, y: 0 },
      lastMousePos: { x: 0, y: 0 },
      cacheMousePos: { x: 0, y: 0 },
    };

    const showNextImage = () => {
      state.zIndexVal++;
      state.imgPosition = state.imgPosition < state.images.length - 1 ? state.imgPosition + 1 : 0;
      const img = state.images[state.imgPosition];

      gsap.killTweensOf(img.el);

      // Animation Logic for Variant 1
      gsap.timeline({
        onStart: () => state.activeImagesCount++,
        onComplete: () => {
          state.activeImagesCount--;
          if (state.activeImagesCount === 0) state.isIdle = true;
        }
      })
      .fromTo(img.el, {
        opacity: 1,
        scale: 1,
        zIndex: state.zIndexVal,
        x: state.cacheMousePos.x - img.rect.width / 2,
        y: state.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 0.4,
        ease: 'power1',
        x: state.mousePos.x - img.rect.width / 2,
        y: state.mousePos.y - img.rect.height / 2
      }, 0)
      .to(img.el, {
        duration: 0.4,
        ease: 'power3',
        opacity: 0,
        scale: 0.2
      }, 0.4);
    };

    const render = () => {
      let distance = getMouseDistance(state.mousePos, state.lastMousePos);
      state.cacheMousePos.x = lerp(state.cacheMousePos.x, state.mousePos.x, 0.1);
      state.cacheMousePos.y = lerp(state.cacheMousePos.y, state.mousePos.y, 0.1);

      if (distance > state.threshold) {
        showNextImage();
        state.lastMousePos = { ...state.mousePos };
      }
      requestAnimationFrame(render);
    };

    const handleMove = (ev) => {
      const rect = container.getBoundingClientRect();
      state.mousePos = getLocalPointerPos(ev, rect);
    };

    // Initial listener to start the loop
    const initRender = (ev) => {
      const rect = container.getBoundingClientRect();
      state.mousePos = getLocalPointerPos(ev, rect);
      state.cacheMousePos = { ...state.mousePos };
      requestAnimationFrame(render);
      window.removeEventListener('mousemove', initRender);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousemove', initRender);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousemove', initRender);
    };
  }, [items]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((src, i) => (
        <div
          key={i}
          ref={(el) => (imagesRef.current[i] = el)}
          className="content__img absolute opacity-0"
          style={{ width: '100px', height: '100px' }}
        >
          <img
            src={src}
            alt=""
            className="content__img-inner w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageTrail;