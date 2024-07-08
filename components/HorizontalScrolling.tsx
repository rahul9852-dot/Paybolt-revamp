import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { InfiniteMovingCards } from './ui/InfiniteCards';

const list = [
  '/Fino_Bank.png',
  '/Axis_Bank.png',
  '/Rbl_Bank.png',
  '/YesBank.jpeg',
  '/Fino_Bank.png',
  '/Axis_Bank.png',
  '/Rbl_Bank.png',
  '/YesBank.jpeg',
];

const HorizontalScrolling = () => {
  const scrollTextRef1 = useRef<HTMLDivElement>(null);
  const scrollTextRef2 = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (scrollTextRef1.current && scrollTextRef2.current) {
      animationRef.current = gsap.to(
        [scrollTextRef1.current, scrollTextRef2.current],
        {
          xPercent: -101.5,
          duration: 16,
          repeat: -1,
          ease: 'none', // Use the string 'none' for no easing
        },
      );

      const handleMouseEnter = () => {
        if (animationRef.current) {
          animationRef.current.pause();
        }
      };

      const handleMouseLeave = () => {
        if (animationRef.current) {
          animationRef.current.resume();
        }
      };

      scrollTextRef1.current.addEventListener('mouseenter', handleMouseEnter);
      scrollTextRef1.current.addEventListener('mouseleave', handleMouseLeave);
      scrollTextRef2.current.addEventListener('mouseenter', handleMouseEnter);
      scrollTextRef2.current.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        if (scrollTextRef1.current) {
          scrollTextRef1.current.removeEventListener(
            'mouseenter',
            handleMouseEnter,
          );
          scrollTextRef1.current.removeEventListener(
            'mouseleave',
            handleMouseLeave,
          );
        }
        if (scrollTextRef2.current) {
          scrollTextRef2.current.removeEventListener(
            'mouseenter',
            handleMouseEnter,
          );
          scrollTextRef2.current.removeEventListener(
            'mouseleave',
            handleMouseLeave,
          );
        }
        if (animationRef.current) {
          animationRef.current.kill();
        }
      };
    }
  }, []);

  return (
      <div className="grid gap-x-10 grid-flow-col bg-white-100 overflow-hidden mb-10 py-2 rounded-md">
        <div
          ref={scrollTextRef1}
          className="scroll-text grid gap-x-10 grid-flow-col items-center justify-between"
        >
          {list.map((el, idx) => (
            <div key={idx} className="min-h-15 min-w-56 mr-18">
              <img
                alt={`Logo ${idx}`}
                src={el}
                className="w-[200px] h-[120px] object-cover"
              />
            </div>
          ))}
        </div>
        <div
          ref={scrollTextRef2}
          className="scroll-text grid gap-x-10 grid-flow-col items-center justify-between"
        >
          {list.map((el, idx) => (
            <div key={idx} className="min-h-15 min-w-56 mr-18">
              <img
                alt={`Logo ${idx}`}
                src={el}
                className="w-[200px] h-[120px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
  );
};

export default HorizontalScrolling;
