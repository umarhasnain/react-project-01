
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Animation = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    // Create a timeline for sequential animations
    const tl = gsap.timeline();

    tl.from(titleRef.current, { opacity: 0, x: -100, duration: 10 })
      .from(subtitleRef.current, { opacity: 0, y: 50, duration: 10 }, '-=0.5')
      .from(boxRef.current, { scale: 0, duration: 1, ease: 'back.out(1.7)' });
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 ref={titleRef} className="text-4xl font-bold">Welcome to GSAP</h1>
      <p ref={subtitleRef} className="text-xl">Let's animate with React!</p>
      <div ref={boxRef} className="w-40 h-40 bg-purple-500 rounded-lg text-white flex items-center justify-center">
        Cool Animation!
      </div>
    </div>
  );
};

export default Animation;
