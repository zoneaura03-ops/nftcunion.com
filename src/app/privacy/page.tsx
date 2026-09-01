import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ShieldCheck } from "lucide-react";
import { PublicFooter } from "../../components/public-footer";
import { PublicHeader } from "../../components/public-header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how North Fountain Trust Credit Union collects, uses, protects, and manages personal information.",
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy Policy | North Fountain Trust Credit Union", description: "Our approach to privacy, security, data use, and member rights.", url: "/privacy", type: "website" },
  twitter: { card: "summary", title: "North Fountain Privacy Policy", description: "Our approach to privacy, security, data use, and member rights." },
};

const sections = [
  ["Information we collect", "We may collect identity, contact, account, transaction, device, security, support, and verification information when you apply, use digital services, or contact member care."],
  ["How information is used", "Information is used to provide requested services, authenticate access, process instructions, prevent fraud, meet legal obligations, communicate important updates, and improve member experiences."],
  ["How information is protected", "We use access controls, encryption, monitoring, secure session management, and operational safeguards designed to protect information from unauthorized access, alteration, or disclosure."],
  ["Sharing and service providers", "Information may be shared with vetted service providers when necessary to operate services, verify identity, deliver communications, process transactions, or comply with lawful requests. We do not sell personal information."],
  ["Retention and your choices", "Information is retained only for operational, legal, security, and recordkeeping needs. Subject to applicable law, you may request access, correction, deletion, restriction, or a copy of eligible personal information."],
  ["Cookies and digital services", "Essential cookies keep sessions secure and remember necessary preferences. Optional analytics or marketing technologies should only be enabled with any consent required in your jurisdiction."],
] as const;

export default function PrivacyPage() {
  return <main id="main-content" className="min-h-screen bg-[#f8fafc] text-[#0b1f3a]"><PublicHeader/><section className="bg-[#07182c] px-5 py-20 text-white sm:px-8"><div className="mx-auto max-w-4xl"><p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.22em] text-[#d8b45b]"><ShieldCheck size={16}/> Privacy and data care</p><h1 className="mt-5 font-serif text-5xl font-normal sm:text-6xl">Privacy Policy</h1><p className="mt-5 max-w-2xl text-sm leading-7 text-white/65">A clear overview of how personal information is handled when you use North Fountain Trust Credit Union digital services.</p><p className="mt-4 text-xs text-white/45">Last updated: September 1, 2026</p></div></section><section className="mx-auto max-w-4xl px-5 py-16 sm:px-8"><div className="space-y-5">{sections.map(([title,copy],index)=><article key={title} className="rounded-2xl border border-[#e1e6ef] bg-white p-6 shadow-[0_8px_24px_rgba(11,31,58,.04)] sm:p-8"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#b58e35]">0{index+1}</p><h2 className="mt-3 font-serif text-2xl">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p></article>)}</div><aside className="mt-10 rounded-2xl bg-[#0b1f3a] p-7 text-white"><Mail className="text-[#d8b45b]"/><h2 className="mt-4 font-serif text-2xl">Privacy questions</h2><p className="mt-2 text-sm leading-7 text-white/60">Contact <a className="text-[#d8b45b] underline" href="mailto:support@nftcunion.com">support@nftcunion.com</a> or review our <Link className="text-[#d8b45b] underline" href="/faq">frequently asked questions</Link>.</p></aside></section><PublicFooter/></main>;
}
