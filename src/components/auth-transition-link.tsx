"use client";

import Link from "next/link";
import { useState, type MouseEvent, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LogoLoader } from "./logo-loader";

export function AuthTransitionLink({
  href,
  className,
  children,
  onNavigate,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  function startLoading(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    )
      return;
    event.preventDefault();
    if (loading) return;
    onNavigate?.();
    setLoading(true);
    const homepageAuthTransition =
      pathname === "/" && (href.startsWith("/login") || href.startsWith("/register"));
    window.setTimeout(() => router.push(href), homepageAuthTransition ? 700 : 0);
  }

  return (
    <>
      <Link
        href={href}
        prefetch
        data-transition-loader="manual"
        onClick={startLoading}
        className={className}
        aria-busy={loading}
      >
        {children}
      </Link>
      {loading && (
        <div
          className="fixed inset-0 z-[200] bg-[#0b1f3a]/20 backdrop-blur-[1px]"
          aria-hidden="false"
        >
          <LogoLoader transparent />
        </div>
      )}
    </>
  );
}

// Hostinger source snapshot sync.
