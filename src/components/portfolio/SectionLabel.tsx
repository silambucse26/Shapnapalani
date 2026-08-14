export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-white shadow-[0_0_14px_2px_rgba(255,255,255,0.45)]" />
      <span className="font-display text-[clamp(1.1rem,4vw,1.5rem)] text-white/90">{children}</span>
    </div>
  );
}
