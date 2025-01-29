"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Framer = ({
  children,
  delay = 0,
  initial = { y: 300, opacity: 0 },
  animate = { y: 0, opacity: 1 },
  duration = "0.5",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : {}}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};
export default Framer;
