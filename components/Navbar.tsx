"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const shouldUseDark = storedTheme ? storedTheme === "dark" : true;
    document.documentElement.classList.toggle("dark", shouldUseDark);
    document.documentElement.classList.toggle("light", !shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const section = document.querySelector(href);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const toggleTheme = () => {
    const nextTheme = !isDark;
    document.documentElement.classList.toggle("dark", nextTheme);
    document.documentElement.classList.toggle("light", !nextTheme);
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
    setIsDark(nextTheme);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <nav className="section-container glass-panel flex h-16 items-center justify-between rounded-2xl px-4 sm:px-5">
        <button
          type="button"
          onClick={() => scrollTo("#home")}
          className="group flex items-center gap-3 text-left"
          aria-label="Go to home section"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 text-sm font-semibold text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
            K
          </span>
          <span className="hidden text-sm font-semibold text-slate-900 dark:text-white sm:block">Kevin Novantino</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const itemId = item.href.replace("#", "");
            const isActive = active === itemId;
            return (
              <button
                key={item.href}
                type="button"
                onClick={() => scrollTo(item.href)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-[0_12px_30px_rgba(37,99,235,0.3)]"
                    : "text-slate-600 hover:bg-blue-500/10 hover:text-blue-700 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200/70 bg-white/60 text-slate-700 transition duration-300 hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200/70 bg-white/60 text-slate-700 transition duration-300 hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="section-container glass-panel mt-3 grid gap-2 rounded-2xl p-3 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => scrollTo(item.href)}
              className="rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-blue-500/10 hover:text-blue-700 dark:text-slate-200 dark:hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </header>
  );
}
