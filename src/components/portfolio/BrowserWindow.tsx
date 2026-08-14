import { type ReactNode } from "react";

/**
 * The macOS-style browser frame used throughout the portfolio.
 * Aspect ratio is preserved from the original design and scales fluidly.
 */
export function BrowserWindow({
  children,
  className = "",
  innerClassName = "",
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[18px] border border-white/10 bg-[#1c1c1c] p-1.5 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.9)] sm:rounded-[26px] sm:p-2 ${className}`}
    >
      <div className="overflow-hidden rounded-[13px] bg-[#111] sm:rounded-[20px]">
        <div className="flex items-center justify-between bg-[linear-gradient(90deg,#2b2b2b_0%,#8a8a8a_38%,#d9d9d9_50%,#8a8a8a_62%,#2b2b2b_100%)] px-3 py-2 sm:px-5 sm:py-3">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e] sm:h-2.5 sm:w-2.5" />
            <span className="h-2 w-2 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5" />
          </div>
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-white/70 sm:h-5 sm:w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </div>
        <div className={innerClassName}>{children}</div>
      </div>
    </div>
  );
}
