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

      <section className="relative isolate min-h-[680px] overflow-hidden bg-[#07182c] sm:min-h-[720px] lg:min-h-[760px]">
        <Image
          src="/images/nftcunion-hero-editorial-v3.webp"
          alt="A North Fountain member meeting with a financial adviser"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[64%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,34,.98)_0%,rgba(5,18,34,.9)_32%,rgba(5,18,34,.44)_58%,rgba(5,18,34,.08)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#07182c]/75 to-transparent" />
        <div className="relative mx-auto flex min-h-[680px] max-w-[1220px] items-center px-5 py-16 sm:min-h-[720px] sm:px-8 lg:min-h-[760px]">
          <div className="max-w-[650px] text-white">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.24em] text-[#d8b45b]">
              <span className="h-px w-10 bg-[#d8b45b]" />
              {hero.eyebrow}
            </p>
            <h1 className="mt-7 max-w-[620px] font-serif text-[50px] font-normal leading-[.98] tracking-[-.045em] sm:text-[68px] lg:text-[82px]">
              Banking built around your next chapter.
            </h1>
            <p className="mt-7 max-w-[540px] text-[16px] leading-8 text-white/68">
              {hero.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <AuthTransitionLink
                href="/register"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#d8b45b] px-7 text-sm font-semibold text-[#07182c] shadow-[0_16px_40px_rgba(216,180,91,.2)] hover:-translate-y-0.5 hover:bg-[#e4c979]"
              >
                Become a member <ArrowRight size={16} />
              </AuthTransitionLink>
              <AuthTransitionLink
                href="/login"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/16"
              >
                {hero.secondaryAction}
              </AuthTransitionLink>
            </div>
            <div className="mt-11 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6 text-xs text-white/62">
              {hero.assurances.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={14} className="text-[#d8b45b]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 hidden max-w-[260px] rounded-2xl border border-white/15 bg-[#07182c]/72 p-5 text-white backdrop-blur-xl lg:block">
          <p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#d8b45b]">
            The North Fountain standard
          </p>
          <p className="mt-2 font-serif text-xl leading-7">
            Personal guidance. Cooperative values. Modern access.
          </p>
        </div>
      </section>

      <section className="px-5 py-6 sm:px-8">
        <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-3 rounded-[28px] border border-[#dce8e6] bg-white p-3 shadow-[0_16px_55px_rgba(11,31,58,.05)] sm:grid-cols-3 lg:grid-cols-5">
          {proof.map(([mark, copy], index) => (
            <div
              key={mark}
              className={`${index === 4 ? "col-span-2 sm:col-span-1" : ""} rounded-2xl px-4 py-6 text-center hover:bg-[#fbf7ed]`}
            >
              <b className="text-sm tracking-[.12em]">{mark}</b>
              <span className="mt-2 block text-[9px] uppercase tracking-[.12em] text-slate-400">
                {copy}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#b58e35]">
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
          <div className="mt-14 grid overflow-hidden rounded-[34px] bg-[#f4efe4] lg:grid-cols-[.9fr_1.1fr]">
            <div className="relative min-h-[440px]">
              <Image
                src="/images/nftcunion-members-editorial-v4.webp"
                alt="A member reviewing plans with a financial guide"
                fill
                quality={95}
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
                    <span className="grid size-11 place-items-center rounded-2xl bg-[#f5ecd7] text-[#9b7529]">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-6 font-serif text-2xl">{title}</h3>
                    <p className="mt-2 text-xs font-semibold text-[#b58e35]">
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
              <p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#d8b45b]">
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
                  <span className="grid size-12 place-items-center rounded-full bg-[#d8b45b] text-[#07182c]">
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

      <section className="px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="relative min-h-[560px] overflow-hidden rounded-[12%_36px_12%_36px]">
            <Image
              src="/images/nftcunion-security-editorial-v4.webp"
              alt="Secure mobile account access"
              fill
              quality={95}
              sizes="(min-width:1024px) 52vw,100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.22em] text-[#b58e35]">
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
                <div key={title} className="border-l-2 border-[#d8b45b] pl-4">
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
            <blockquote className="mt-9 rounded-[28px] bg-[#f7f2e8] p-6 font-serif text-xl leading-8">
              {testimonials[0][0]}
              <footer className="mt-4 font-sans text-xs font-semibold text-[#9b7529]">
                {testimonials[0][1]} · {testimonials[0][2]}
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <PublicFooter />
      <LanguageSelector />
    </main>
  );
}
