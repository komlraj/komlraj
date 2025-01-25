"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string[];
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.01 * i,
      },
    }),
  };

  const charVariants: Variants = {
    hidden: {
      opacity: 0.4,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {text.map((paragraph, paragraphIndex) => (
        <motion.p key={paragraphIndex} style={{ marginBottom: "1rem" }}>
          {paragraph.split("").map((char: string, index: number) => (
            <motion.span
              key={`${paragraphIndex}-${index}`}
              variants={charVariants}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
