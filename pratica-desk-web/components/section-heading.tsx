import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <div
        className={cn(
          "eyebrow flex items-center gap-3",
          dark && "text-zinc-400"
        )}
      >
        <span
          className={cn(
            "inline-block h-px w-8",
            dark ? "bg-zinc-600" : "bg-muted-foreground/40"
          )}
        />
        {eyebrow}
      </div>
      <h2
        className={cn(
          "max-w-3xl text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-[44px] sm:leading-[1.05]",
          dark ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "max-w-xl text-[17px] leading-relaxed",
            dark ? "text-zinc-400" : "text-muted-foreground",
            align === "center" && "mx-auto"
          )}
        >
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}
