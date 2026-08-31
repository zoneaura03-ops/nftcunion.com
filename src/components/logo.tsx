import Link from "next/link";

export function BrandMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        d="M32 5v13"
        stroke="var(--logo-navy,#0b1f3a)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="m32 5 3.2 8L32 11.7 28.8 13 32 5Z"
        fill="var(--logo-gold,#c8ae72)"
      />
      <path
        d="M14 31a18 18 0 0 1 36 0"
        stroke="var(--logo-gold,#c8ae72)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M17 42c5-8 10-11 15-11s10 3 15 11"
        stroke="var(--logo-gold,#d8b45b)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M22 48c3-7 6-10 10-10s7 3 10 10"
        stroke="var(--logo-gold,#d8b45b)"
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <path
        d="M27 53c1.2-5.5 2.9-8 5-8s3.8 2.5 5 8"
        stroke="var(--logo-gold,#c8ae72)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 55h24"
        stroke="var(--logo-navy,#0b1f3a)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity=".55"
      />
    </svg>
  );
}

export default function Logo({
  compact = false,
  href = "/",
  sidebar = false,
  inverse = false,
}: {
  compact?: boolean;
  href?: string;
  sidebar?: boolean;
  inverse?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label="North Fountain Trust Credit Union home"
      className={`inline-flex shrink-0 items-center ${sidebar ? "gap-2" : "gap-3"}`}
    >
      <BrandMark
        className={`${compact ? "h-10 w-10" : sidebar ? "h-9 w-9" : "h-11 w-11 sm:h-12 sm:w-12"} shrink-0`}
      />
      {!compact && (
        <span
          className={`leading-tight uppercase ${inverse ? "text-white" : "text-[#0b1f3a]"} ${sidebar ? "text-[9px] tracking-[.12em]" : "text-[11px] tracking-[.17em] sm:text-[13px]"}`}
        >
          <span className="block whitespace-nowrap font-medium">
            North Fountain
          </span>
          <span className="mt-1 block whitespace-nowrap text-[.63em] font-medium tracking-[.24em] text-[#d8b45b]">
            Trust Credit Union
          </span>
        </span>
      )}
    </Link>
  );
}
