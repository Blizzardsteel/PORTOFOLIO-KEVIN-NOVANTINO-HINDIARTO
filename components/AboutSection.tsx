import { Award, GraduationCap } from "lucide-react";
import { MotionReveal } from "@/components/MotionReveal";
import { ProfileFrame } from "@/components/ProfileFrame";
import { SectionShell } from "@/components/SectionShell";
import { certifications, education } from "@/lib/data";



export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="Frontend focused, visually aware."
      description="Computer Engineering student at Universitas Diponegoro with a calm approach to clean digital products."
    >
      <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <MotionReveal>
          <ProfileFrame compact />
        </MotionReveal>

        <div>
          <MotionReveal delay={0.08}>
            <div className="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              <p>
                Saya mahasiswa Teknik Komputer UNDIP angkatan 2024 dengan GPA 3.28. Fokus saya ada di frontend
                development, UI/UX, dan software development.
              </p>
            </div>
          </MotionReveal>

          <div className="mt-8 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <MotionReveal delay={0.12}>
                <InfoCard icon={<GraduationCap size={20} />} title="Education">
                  <div className="space-y-4">
                    {education.map((item) => (
                      <div key={item.school}>
                        <p className="font-semibold text-slate-950 dark:text-white">{item.school}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-300">{item.program}</p>
                        <p className="mt-1 text-sm text-blue-700 dark:text-blue-200">{item.period}</p>
                      </div>
                    ))}
                  </div>
                </InfoCard>
              </MotionReveal>

              <MotionReveal delay={0.16}>
                <InfoCard icon={<Award size={20} />} title="Certifications">
                  <div className="space-y-3">
                    {certifications.map((certification) => (
                      <p key={certification} className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {certification}
                      </p>
                    ))}
                  </div>
                </InfoCard>
              </MotionReveal>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function InfoCard({
  icon,
  title,
  children
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="glass-panel glow-border h-full rounded-2xl p-5 transition duration-300 hover:-translate-y-1">
      <div className="mb-4 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 text-white shadow-glow">{icon}</span>
        <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{title}</h3>
      </div>
      {children}
    </div>
  );
}