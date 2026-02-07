'use client';
import { useEffect, useRef } from 'react';

export default function AeroCursor() {
  const cursorRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0, targetX: 0, targetY: 0 });
  const rafRef = useRef(null);
  const hoverRef = useRef(false);

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const updateCursor = () => {
      const pos = posRef.current;
      
      // Smooth lerp
      pos.x += (pos.targetX - pos.x) * 0.15;
      pos.y += (pos.targetY - pos.y) * 0.15;
      
      const dx = pos.x - pos.prevX;
      const dy = pos.y - pos.prevY;
      const velocity = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      const scale = hoverRef.current ? 2 : 1;
      const stretch = Math.min(velocity * 0.5, 3);
      
      cursor.style.transform = `translate(${pos.x}px, ${pos.y}px) rotate(${angle}deg) scaleX(${1 + stretch}) scaleY(${scale})`;
      cursor.style.opacity = velocity > 0.5 ? '1' : '0.8';

      pos.prevX = pos.x;
      pos.prevY = pos.y;
      
      rafRef.current = requestAnimationFrame(updateCursor);
    };

    const handleMove = (e) => {
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;
    };

    const handleHover = (e) => {
      const target = e.target;
      hoverRef.current = target.closest('button, a, nav, [role="button"], .group') !== null;
    };

    document.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mouseover', handleHover, { passive: true });
    rafRef.current = requestAnimationFrame(updateCursor);

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
        background: 'radial-gradient(ellipse, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'screen',
        filter: 'blur(2px)',
        transition: 'opacity 0.1s ease',
        willChange: 'transform, opacity',
        boxShadow: '0 0 30px rgba(255,255,255,0.4)'
      }}
    />
  );
}
