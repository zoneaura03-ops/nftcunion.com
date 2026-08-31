import Link from "next/link";

export function BrandMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} fill="none">
      <circle cx="32" cy="32" r="27" stroke="var(--logo-navy, #0b1f3a)" strokeWidth="3" />
      <path d="M32 5 36 16 32 14 28 16 32 5Z" fill="var(--logo-gold, #c6a15b)" />
      <path d="M32 16v15" stroke="var(--logo-navy, #0b1f3a)" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 40c5-7 9-9 14-9s9 2 14 9" stroke="var(--logo-teal, #168c8c)" strokeWidth="4" strokeLinecap="round" />
      <path d="M22 47c3-6 6-9 10-9s7 3 10 9" stroke="var(--logo-teal, #168c8c)" strokeWidth="4" strokeLinecap="round" />
      <path d="M27 52c1-5 3-8 5-8s4 3 5 8" stroke="var(--logo-gold, #c6a15b)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ compact = false, href = "/", sidebar = false }: { compact?: boolean; href?: string; sidebar?: boolean }) {
  return (
    <Link href={href} aria-label="North Fountain Trust Credit Union home" className={`inline-flex shrink-0 items-center ${sidebar ? "gap-2" : "gap-3"}`}>
      <BrandMark className={`${compact ? "h-10 w-10" : sidebar ? "h-10 w-10" : "h-11 w-11 sm:h-12 sm:w-12"} shrink-0`} />
      {!compact && (
        <span className={`leading-tight uppercase text-[#0b1f3a] ${sidebar ? "text-[10px] tracking-[.08em]" : "text-[12px] tracking-[.1em] sm:text-[14px]"}`}>
          <strong className="block whitespace-nowrap font-semibold">North Fountain</strong>
          <span className="block whitespace-nowrap text-[.68em] font-semibold tracking-[.18em] text-[#168c8c]">Trust Credit Union</span>
        </span>
      )}
    </Link>
  );
}
