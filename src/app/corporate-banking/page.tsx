import { PublicHeader } from "../../components/public-header";
import { LanguageSelector } from "../../components/language-selector";
import { PublicFooter } from "../../components/public-footer";
import { AuthTransitionLink } from "../../components/auth-transition-link";
import {
  ArrowRight,
  Building2,
  ChartPie,
  Globe2,
  HandCoins,
} from "lucide-react";

export default function CorporateBankingPage() {
  const services = [
    [
      Building2,
      "Business accounts",
      "Flexible operating accounts with team access and clear controls.",
    ],
    [
      Globe2,
      "International payments",
      "Send and receive cross-border payments with transparent tracking.",
    ],
    [
      HandCoins,
      "Working capital",
      "Financing options designed around responsible business growth.",
    ],
    [
      ChartPie,
      "Cash-flow insights",
      "Reporting tools that make incoming and outgoing funds easier to understand.",
    ],
  ] as const;
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <PublicHeader />
      <section className="bg-bank-900 px-5 py-24 text-white sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#d8b45b]">
            Corporate Banking
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-normal leading-tight sm:text-6xl">
            Financial tools that move at the speed of your business.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60">
            Manage payments, working capital, team access, and international
            growth through one secure banking relationship.
          </p>
          <AuthTransitionLink
            href="/register"
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-[#d8b45b] px-6 text-sm font-bold text-[#0b1f3a] hover:bg-[#e3c777]"
          >
            Open a business account <ArrowRight size={16} />
          </AuthTransitionLink>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1100px] gap-5 px-5 py-24 sm:px-8 md:grid-cols-2">
        {services.map(([Icon, title, copy]) => (
          <article
            className="rounded-xl border border-[#e4e7ec] bg-white p-8 shadow-[0_12px_35px_rgba(7,24,44,.07)]"
            key={title}
          >
            <Icon className="text-[#b58e35]" />
            <h2 className="mt-7 text-2xl">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-neutral-500">{copy}</p>
          </article>
        ))}
      </section>
      <PublicFooter />
      <LanguageSelector />
    </main>
  );
}
