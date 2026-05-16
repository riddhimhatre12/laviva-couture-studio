import { motion } from "framer-motion";
import React from "react";

const ease = [0.19, 1, 0.22, 1] as const;

export function FadeIn({
  children,
  delay = 0,
  y = 30,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
