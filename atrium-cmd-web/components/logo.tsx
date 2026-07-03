import { cn } from "@/lib/utils";

export function AtriumMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 26 26"
      fill="none"
      className={cn("h-[22px] w-[22px]", className)}
      aria-hidden="true"
    >
      <rect x="1.5" y="1.5" width="23" height="23" rx="3" stroke="currentColor" strokeWidth="1.2" />
      <rect x="6.5" y="6.5" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.1" />
      <rect x="11" y="11" width="4" height="4" fill="currentColor" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <AtriumMark />
      <span className="text-[17px] font-semibold tracking-tight">Atrium CMD</span>
    </span>
  );
}
