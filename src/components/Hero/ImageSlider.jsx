import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(timer);
  }, [images.length, isAnimating]);

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  const variants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="relative w-full">
      <AnimatePresence>
        {isAnimating && (
          <motion.img
            key={index}
            src={images[index]}
            alt={`Slide ${index}`}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            onAnimationComplete={handleAnimationComplete}
            transition={{ duration: 1 }}
            className="w-full object-cover"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageSlider;
