"use client";

import { ArrowRight, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProfileFrame } from "@/components/ProfileFrame";

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.28], [1, 0.55]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-32 sm:pt-36">
      <motion.div style={{ y, opacity }} className="section-container grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-700 backdrop-blur dark:border-blue-300/20 dark:text-blue-200"
          >
            <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.9)]" />
            Portfolio 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl font-semibold leading-[1.05] text-slate-950 dark:text-white sm:text-6xl lg:text-7xl"
          >
            Kevin Novantino Hindiarto
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-xl font-medium text-blue-700 dark:text-blue-200 sm:text-2xl"
          >
            Computer Engineering Student & Frontend Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg"
          >
            I create clean, responsive interfaces with a calm technology aesthetic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <button
              type="button"
              onClick={() => scrollTo("#projects")}
              className="button-glow inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
            >
              View Projects
              <ArrowRight size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/70 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-700 dark:border-white/12 dark:bg-white/5 dark:text-white dark:hover:border-blue-300"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex items-center gap-3"
          >
            {[
              { label: "Email", href: "mailto:kevin.novantino@email.com", icon: Mail },
              { label: "GitHub", href: "https://github.com/kevinnovantino", icon: Mail },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/kevinnovantino", icon: Mail }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-slate-200/70 bg-white/55 text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <ProfileFrame />
          <div className="absolute -right-2 top-8 hidden rounded-2xl border border-white/15 bg-slate-950/60 p-4 text-white shadow-soft-blue backdrop-blur-xl lg:block">
            <p className="text-sm font-semibold">Frontend Focus</p>
            <p className="mt-1 text-xs text-blue-100/85">React.js / UI / Motion</p>
          </div>
          <div className="absolute -bottom-6 left-2 hidden rounded-2xl border border-white/15 bg-slate-950/60 p-4 text-white shadow-soft-blue backdrop-blur-xl lg:block">
            <p className="text-sm font-semibold">GPA 3.28</p>
            <p className="mt-1 text-xs text-blue-100/85">Teknik Komputer UNDIP</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
