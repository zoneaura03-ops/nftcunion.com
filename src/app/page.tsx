import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CreditCard,
  Globe2,
  HandCoins,
  Headphones,
  Landmark,
  LockKeyhole,
  PiggyBank,
  ShieldCheck,
  Smartphone,
  UserPlus,
  WalletCards,
} from "lucide-react";
import { AuthTransitionLink } from "../components/auth-transition-link";
import { LanguageSelector } from "../components/language-selector";
import { PublicFooter } from "../components/public-footer";
import { PublicHeader } from "../components/public-header";
import { publicContent } from "../lib/public-content";

const productIcons = [Landmark, PiggyBank, CreditCard, HandCoins];
const benefitIcons = [Globe2, Smartphone, ShieldCheck, Headphones];
const stepIcons = [UserPlus, BadgeCheck, WalletCards];

export default function Home() {
  const { hero, proof, products, benefits, steps, security, testimonials } =
    publicContent;
  return (
    <main
      id="main-content"
      className="overflow-hidden bg-[#fbfcfa] text-[#0b1f3a]"
    >
      <PublicHeader />

      <section className="relative px-5 pb-20 pt-10 sm:px-8 lg:pb-28 lg:pt-14">
        <div className="absolute -left-40 top-16 h-80 w-80 rounded-full bg-[#dbeeed]/70 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1220px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="max-w-xl py-8 lg:py-14">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#168c8c]/20 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[.16em] text-[#117676] shadow-sm">
              <span className="size-1.5 rounded-full bg-[#c8ae72]" />{" "}
              {hero.eyebrow}
            </p>
            <h1 className="mt-8 font-serif text-[48px] font-normal leading-[1.02] tracking-[-.045em] sm:text-[66px] lg:text-[76px]">
              A clearer path to{" "}
              <span className="italic text-[#168c8c]">
                financial wellbeing.
              </span>
            </h1>
            <p className="mt-7 max-w-lg text-[16px] leading-8 text-slate-600">
              {hero.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <AuthTransitionLink
                href="/register"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#0b1f3a] px-7 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(11,31,58,.18)] hover:-translate-y-0.5 hover:bg-[#123252]"
              >
                Become a member <ArrowRight size={16} />
              </AuthTransitionLink>
              <AuthTransitionLink
                href="/login"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#0b1f3a]/15 bg-white px-7 text-sm font-semibold hover:border-[#168c8c]/40 hover:bg-[#f2f9f8]"
              >
                {hero.secondaryAction}
              </AuthTransitionLink>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-500">
              {hero.assurances.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={14} className="text-[#168c8c]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px] lg:min-h-[650px]">
            <div className="absolute inset-0 overflow-hidden rounded-[38%_8%_32%_8%] bg-[#0b1f3a] shadow-[0_35px_90px_rgba(11,31,58,.18)]">
              <Image
                src="/images/nftcunion-corporate-hero-v2.webp"
                alt="A North Fountain financial guide meeting a member"
                fill
                priority
                sizes="(min-width:1024px) 56vw,100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/35 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 left-4 max-w-[270px] rounded-3xl border border-white/70 bg-white/95 p-5 shadow-[0_18px_50px_rgba(11,31,58,.16)] backdrop-blur sm:left-8">
              <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#168c8c]">
                Member first
              </p>
              <p className="mt-2 font-serif text-xl leading-7">
                Guidance shaped around your life, not a product quota.
              </p>
            </div>
            <div className="absolute right-3 top-8 rounded-full border border-white/40 bg-[#0b1f3a]/80 px-5 py-3 text-xs text-white backdrop-blur sm:right-6">
              Federally insured savings
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8">
        <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-3 rounded-[28px] border border-[#dce8e6] bg-white p-3 shadow-[0_16px_55px_rgba(11,31,58,.05)] sm:grid-cols-3 lg:grid-cols-5">
          {proof.map(([mark, copy], index) => (
            <div
              key={mark}
              className={`${index === 4 ? "col-span-2 sm:col-span-1" : ""} rounded-2xl px-4 py-6 text-center hover:bg-[#f2f8f7]`}
            >
              <b className="text-sm tracking-[.12em]">{mark}</b>
              <span className="mt-2 block text-[9px] uppercase tracking-[.12em] text-slate-400">
                {copy}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#168c8c]">
                Made for members
              </p>
              <h2 className="mt-5 font-serif text-[42px] font-normal leading-[1.08] sm:text-[56px]">
                Everyday banking, thoughtfully connected.
              </h2>
            </div>
            <p className="max-w-xl text-[15px] leading-8 text-slate-500">
              From your first checking account to the plans that shape your
              future, one cooperative relationship keeps everything clear.
            </p>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-[34px] bg-[#eaf4f3] lg:grid-cols-[.9fr_1.1fr]">
            <div className="relative min-h-[440px]">
              <Image
                src="/images/nftcunion-business-services-v2.webp"
                alt="A member reviewing plans with a financial guide"
                fill
                sizes="(min-width:1024px) 45vw,100vw"
                className="object-cover"
              />
            </div>
            <div className="grid bg-white/55 p-4 sm:grid-cols-2 sm:p-7">
              {products.slice(0, 4).map(([title, benefit, copy], index) => {
                const Icon = productIcons[index];
                return (
                  <article
                    key={title}
                    className="group rounded-3xl p-6 transition hover:bg-white hover:shadow-[0_14px_40px_rgba(11,31,58,.08)]"
                  >
                    <span className="grid size-11 place-items-center rounded-2xl bg-[#dff0ee] text-[#117676]">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-6 font-serif text-2xl">{title}</h3>
                    <p className="mt-2 text-xs font-semibold text-[#168c8c]">
                      {benefit}
                    </p>
                    <p className="mt-3 text-xs leading-6 text-slate-500">
                      {copy}
                    </p>
                    <AuthTransitionLink
                      href="/register"
                      className="mt-5 inline-flex items-center gap-2 text-xs font-semibold"
                    >
                      Explore <ArrowRight size={13} />
                    </AuthTransitionLink>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b1f3a] px-5 py-24 text-white sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#74c5bf]">
                Your financial pathway
              </p>
              <h2 className="mt-5 max-w-2xl font-serif text-[42px] font-normal leading-[1.08] sm:text-[56px]">
                Start simply. Grow confidently.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/55">
              Membership opens a relationship designed to evolve as your plans
              do.
            </p>
          </div>
          <ol className="mt-14 grid gap-4 lg:grid-cols-3">
            {steps.map(([title, copy], index) => {
              const Icon = stepIcons[index];
              return (
                <li
                  key={title}
                  className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[.055] p-7"
                >
                  <span className="absolute right-5 top-2 font-serif text-7xl text-white/[.04]">
                    0{index + 1}
                  </span>
                  <span className="grid size-12 place-items-center rounded-full bg-[#168c8c] text-white">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-8 font-serif text-2xl">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">{copy}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="relative min-h-[560px] overflow-hidden rounded-[12%_36px_12%_36px]">
            <Image
              src="/images/nftcunion-security-trust-v2.webp"
              alt="Secure mobile account access"
              fill
              sizes="(min-width:1024px) 52vw,100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#168c8c]">
              Quietly protected
            </p>
            <h2 className="mt-5 font-serif text-[42px] font-normal leading-[1.08] sm:text-[54px]">
              Security that works in the background.
            </h2>
            <p className="mt-6 text-[15px] leading-8 text-slate-500">
              Private by design, simple by experience, and supported by real
              people whenever you need them.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {security.slice(0, 4).map(([title, copy]) => (
                <div key={title} className="border-l-2 border-[#68bbb5] pl-4">
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
            <blockquote className="mt-9 rounded-[28px] bg-[#edf7f5] p-6 font-serif text-xl leading-8">
              {testimonials[0][0]}
              <footer className="mt-4 font-sans text-xs font-semibold text-[#117676]">
                {testimonials[0][1]} · {testimonials[0][2]}
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-8 rounded-[38px] bg-[#c8ae72] px-7 py-12 sm:px-12 lg:flex-row lg:items-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.2em]">
              Your next chapter
            </p>
            <h2 className="mt-3 font-serif text-4xl font-normal">
              Membership begins with one conversation.
            </h2>
          </div>
          <AuthTransitionLink
            href="/register"
            className="inline-flex min-h-14 shrink-0 items-center gap-2 rounded-full bg-[#0b1f3a] px-7 text-sm font-semibold text-white"
          >
            Open your account <ArrowRight size={16} />
          </AuthTransitionLink>
        </div>
      </section>

      <PublicFooter />
      <LanguageSelector />
    </main>
  );
}
