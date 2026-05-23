import Image from "next/image";

type ProfileFrameProps = {
  compact?: boolean;
};

export function ProfileFrame({ compact = false }: ProfileFrameProps) {
  return (
    <div className={`relative mx-auto ${compact ? "max-w-[320px]" : "max-w-[420px]"}`}>
      <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_160deg,rgba(59,130,246,0.08),rgba(37,99,235,0.55),rgba(14,165,233,0.2),rgba(255,255,255,0.1),rgba(59,130,246,0.08))] blur-xl" />
      <div className="relative rounded-[2rem] border border-white/20 bg-white/60 p-3 shadow-soft-blue backdrop-blur-2xl dark:border-white/10 dark:bg-white/5">
        <div className="relative aspect-square overflow-hidden rounded-[1.6rem] border border-blue-200/50 bg-slate-100 dark:border-white/10 dark:bg-slate-950">
          <Image
            src="/placeholders/profile.svg"
            alt="Kevin Novantino Hindiarto profile placeholder"
            fill
            sizes={compact ? "320px" : "420px"}
            priority={!compact}
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute -bottom-5 left-8 right-8 h-10 rounded-full bg-blue-500/25 blur-2xl" />
    </div>
  );
}
