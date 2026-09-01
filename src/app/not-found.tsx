import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";
import { PublicFooter } from "../components/public-footer";
import { PublicHeader } from "../components/public-header";

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen bg-[#f8fafc] text-[#0b1f3a]">
      <PublicHeader />
      <section className="relative isolate overflow-hidden bg-[#07182c] px-5 py-24 text-white sm:px-8 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(216,180,91,.18),transparent_34%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[.28em] text-[#d8b45b]">Error 404</p>
          <h1 className="mt-5 font-serif text-5xl font-normal sm:text-7xl">This path does not lead to a page.</h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/65 sm:text-base">The address may have changed or the page may no longer exist. Your account and information remain secure.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#d8b45b] px-6 text-sm font-semibold text-[#07182c]"><Home size={16}/> Return home</Link>
            <Link href="/faq" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-sm font-semibold text-white"><Search size={16}/> Visit FAQs</Link>
          </div>
          <Link href="/features" className="mt-7 inline-flex items-center gap-2 text-xs text-white/55 hover:text-white"><ArrowLeft size={14}/> Explore member services</Link>
        </div>
      </section>
      <PublicFooter />
    </main>
  );
}
