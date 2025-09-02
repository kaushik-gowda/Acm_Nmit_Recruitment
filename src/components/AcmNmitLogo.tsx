import { cn } from "@/lib/utils";

export function AcmNmitLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto", className)}
      aria-label="ACM NMIT Logo"
    >
      <g transform="translate(10, -5) scale(0.8)">
        <g transform="rotate(45 50 50)">
          <rect x="25" y="25" width="50" height="50" fill="#42A5F5" />
          <circle cx="50" cy="50" r="20" fill="#0D47A1" />
          <text
            x="50"
            y="54"
            textAnchor="middle"
            fill="white"
            fontSize="18"
            fontFamily="sans-serif"
            fontWeight="bold"
          >
            acm
          </text>
        </g>
        <g transform="rotate(45 50 50)">
          <path d="M 20 20 L 80 20 L 80 80" fill="none" stroke="white" strokeWidth="6" />
          <path d="M 20 20 L 20 80 L 80 80" fill="none" stroke="white" strokeWidth="6" transform="translate(5, 5)"/>
        </g>
      </g>
      <text
        x="125"
        y="45"
        textAnchor="middle"
        fill="hsl(var(--foreground))"
        fontSize="24"
        fontFamily="sans-serif"
        fontWeight="bold"
      >
        NMIT
      </text>
      <text
        x="125"
        y="65"
        textAnchor="middle"
        fill="hsl(var(--muted-foreground))"
        fontSize="10"
        fontFamily="sans-serif"
        letterSpacing="0.1em"
      >
        STUDENT CHAPTER
      </text>
    </svg>
  );
}
