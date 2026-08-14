import { useEffect, useRef, useState } from "react";
import { useHasPointer } from "@/hooks/use-reveal";

/** Soft light that trails the cursor. Desktop only, purely decorative. */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);
  const hasPointer = useHasPointer();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!hasPointer) return;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      setVisible(true);
    };

    const loop = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [hasPointer]);

  if (!hasPointer) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[5] h-[420px] w-[420px] rounded-full opacity-0 transition-opacity duration-700"
      style={{
        opacity: visible ? 1 : 0,
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--cursor-hue, oklch(1 0 0)) 12%, transparent) 0%, transparent 65%)",
      }}
    />
  );
}
