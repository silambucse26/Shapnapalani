import { useRef, type ReactNode } from "react";
import { useHasPointer } from "@/hooks/use-reveal";

/**
 * Button/link with a subtle magnetic pull toward the cursor.
 * Falls back to a plain element on touch devices.
 */
export function MagneticLink({
  children,
  className = "",
  strength = 0.28,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const raf = useRef<number | null>(null);
  const hasPointer = useHasPointer();

  const move = (e: React.MouseEvent) => {
    if (!hasPointer) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate3d(0,0,0)";
  };

  return (
    <a
      ref={ref}
      onMouseMove={move}
      onMouseLeave={reset}
      className={`inline-flex transition-[transform,color,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
