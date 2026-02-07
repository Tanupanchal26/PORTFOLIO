'use client';
import { useEffect, useRef } from 'react';

export default function AeroCursor() {
  const cursorRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let isHovering = false;

    const updateCursor = () => {
      const { x, y, prevX, prevY } = posRef.current;
      const dx = x - prevX;
      const dy = y - prevY;
      const velocity = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      const scale = isHovering ? 1.5 : 1;
      const stretch = Math.min(velocity * 0.3, 2);
      
      cursor.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg) scaleX(${1 + stretch * scale}) scaleY(${scale})`;
      cursor.style.opacity = velocity > 0.5 ? '0.8' : '0.6';

      posRef.current.prevX = x;
      posRef.current.prevY = y;
    };

    const handleMove = (e) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
    };

    const handleHover = (e) => {
      const target = e.target;
      isHovering = target.closest('button, a, nav, [role="button"]') !== null;
    };

    const animate = () => {
      updateCursor();
      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mouseover', handleHover, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleHover);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: '-10px',
        left: '-20px',
        width: '40px',
        height: '20px',
        background: 'linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.3), rgba(255,255,255,0.1))',
        borderRadius: '10px',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'screen',
        transition: 'opacity 0.2s ease',
        willChange: 'transform, opacity'
      }}
    />
  );
}
