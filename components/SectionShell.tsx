import type { ReactNode } from "react";
import { MotionReveal } from "@/components/MotionReveal";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = ""
}: SectionShellProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-24 sm:py-28 ${className}`}>
      <div className="section-container">
        <MotionReveal className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase text-blue-600 dark:text-blue-300">{eyebrow}</p>
          <h2 className="text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">{title}</h2>
          {description ? (
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">{description}</p>
          ) : null}
        </MotionReveal>
        {children}
      </div>
    </section>
  );
}
