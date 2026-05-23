"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const particles = [
  { left: "7%", top: "18%", delay: 0, duration: 9 },
  { left: "18%", top: "72%", delay: 1.2, duration: 11 },
  { left: "29%", top: "34%", delay: 0.4, duration: 8 },
  { left: "41%", top: "12%", delay: 1.8, duration: 12 },
  { left: "53%", top: "82%", delay: 0.9, duration: 10 },
  { left: "64%", top: "28%", delay: 1.4, duration: 9 },
  { left: "77%", top: "66%", delay: 0.2, duration: 13 },
  { left: "89%", top: "22%", delay: 1.1, duration: 10 },
  { left: "12%", top: "49%", delay: 2.1, duration: 12 },
  { left: "34%", top: "88%", delay: 0.7, duration: 9 },
  { left: "71%", top: "45%", delay: 1.6, duration: 11 },
  { left: "93%", top: "79%", delay: 0.3, duration: 10 }
];

export function BackgroundScene() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-[-14%] animate-mesh">
        <div className="aurora-ribbon top-[4%]" />
        <div className="aurora-ribbon top-[42%] opacity-70" style={{ transform: "rotate(7deg)" }} />
        <div className="aurora-ribbon top-[72%] opacity-55" style={{ transform: "rotate(-3deg)" }} />
      </motion.div>
      <div className="grid-fade absolute inset-0 opacity-75" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.38),rgba(255,255,255,0)_35%,rgba(255,255,255,0.26))] dark:bg-[linear-gradient(180deg,rgba(6,17,31,0.34),rgba(6,17,31,0)_34%,rgba(6,17,31,0.72))]" />
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-blue-500/35 shadow-[0_0_24px_rgba(59,130,246,0.72)] dark:bg-blue-200/45"
          style={{ left: particle.left, top: particle.top }}
          animate={{ y: [0, -18, 0], opacity: [0.25, 0.9, 0.25] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
