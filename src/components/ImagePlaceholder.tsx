import { IslamicStar } from "@/components/IslamicStar";

type Props = {
  label: string;
  /** e.g. "4/3", "1/1", "16/9" */
  aspect?: string;
  className?: string;
  showStar?: boolean;
};

export function ImagePlaceholder({ label, aspect = "4/3", className = "", showStar = true }: Props) {
  return (
    <div
      className={`flex w-full items-center justify-center rounded-xl border border-[color:var(--gold-soft)]/60 bg-[color:var(--sand)]/50 ${className}`}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={label}
    >
      <div className="flex flex-col items-center gap-4 px-6 text-center">
        {showStar && <IslamicStar />}
        <p className="tracked-tight text-xs text-[color:var(--taupe)]">{label}</p>
      </div>
    </div>
  );
}
