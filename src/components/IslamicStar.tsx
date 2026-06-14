export function IslamicStar({ className = "" }: { className?: string }) {
  // Minimal 8-point star, used as a quiet section divider.
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-16 bg-[color:var(--gold-soft)] opacity-60" />
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="text-[color:var(--gold)] opacity-80"
      >
        <path
          d="M12 1l2.5 5.5L20 9l-4 4.5L17 20l-5-3-5 3 1-6.5L4 9l5.5-2.5L12 1z"
          fill="currentColor"
          opacity="0.5"
        />
        <path
          d="M12 3.5l1.6 4.4 4.4 1.6-3.2 3.4.8 5-3.6-2.2-3.6 2.2.8-5L6 9.5l4.4-1.6L12 3.5z"
          fill="currentColor"
        />
      </svg>
      <span className="h-px w-16 bg-[color:var(--gold-soft)] opacity-60" />
    </div>
  );
}

export function ArchMotif({ className = "" }: { className?: string }) {
  // Whisper-light Islamic arch outline as a background accent.
  return (
    <svg
      viewBox="0 0 400 600"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    >
      <path d="M200 20 C 80 20, 40 140, 40 260 L 40 580 L 360 580 L 360 260 C 360 140, 320 20, 200 20 Z" />
      <path d="M200 70 C 110 70, 80 170, 80 270 L 80 530 L 320 530 L 320 270 C 320 170, 290 70, 200 70 Z" opacity="0.6" />
      <path d="M200 120 C 140 120, 120 200, 120 280 L 120 480 L 280 480 L 280 280 C 280 200, 260 120, 200 120 Z" opacity="0.35" />
    </svg>
  );
}
