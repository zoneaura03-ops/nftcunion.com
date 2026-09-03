import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CircleHelp } from "lucide-react";
import { PublicFooter } from "../../components/public-footer";
import { PublicHeader } from "../../components/public-header";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers about North Fountain membership, account access, verification, transfers, cards, security, and member support.",
  alternates: { canonical: "/faq" },
  openGraph: { title: "FAQs | North Fountain Trust Credit Union", description: "Helpful answers about membership, digital banking, cards, transfers, and security.", url: "/faq", type: "website" },
  twitter: { card: "summary", title: "North Fountain FAQs", description: "Helpful answers about membership, digital banking, cards, transfers, and security." },
};

const faqs = [
  ["How do I become a member?", "Choose Open Account, complete the registration form, verify your email, and submit the requested identity information. You can follow the status from your account."],
  ["Why is identity verification required?", "Identity verification helps protect members, reduce fraud, and support applicable account-opening requirements. Submit clear, current documents that match your registration details."],
  ["How do I reset my password?", "Select Forgot password on the sign-in page. A time-limited reset link will be sent to the registered email address when email delivery is configured."],
  ["How do transfers work?", "Available transfer options appear in your dashboard. Review recipient information, applicable requirements, amount, and confirmation details carefully before submitting."],
  ["Can I apply for a virtual card?", "Eligible verified members can submit a card application from the Cards page. Applications remain pending until reviewed and approved."],
  ["How are my sessions protected?", "User sessions automatically expire after 30 minutes of inactivity and administrator sessions after 15 minutes. A warning appears one minute before logout."],
  ["How can I contact member care?", "Use secure customer support inside your dashboard or email support@nftcun.com. Never send passwords, PINs, CVVs, or complete card numbers."],
] as const;

export default function FaqPage() {
  return <main id="main-content" className="min-h-screen bg-[#f8fafc] text-[#0b1f3a]"><PublicHeader/><section className="bg-[#07182c] px-5 py-20 text-center text-white sm:px-8"><CircleHelp className="mx-auto text-[#d8b45b]" size={30}/><p className="mt-5 text-xs font-bold uppercase tracking-[.22em] text-[#d8b45b]">Member guidance</p><h1 className="mt-4 font-serif text-5xl font-normal sm:text-6xl">Frequently asked questions</h1><p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65">Clear answers for account access, membership, transfers, cards, verification, and security.</p></section><section className="mx-auto max-w-4xl px-5 py-16 sm:px-8"><div className="space-y-3">{faqs.map(([question,answer])=><details key={question} className="group rounded-2xl border border-[#e1e6ef] bg-white p-6 open:border-[#d8b45b]/70"><summary className="cursor-pointer list-none pr-8 font-semibold marker:hidden">{question}<span className="float-right text-[#b58e35] group-open:rotate-45">+</span></summary><p className="mt-4 border-t border-neutral-100 pt-4 text-sm leading-7 text-slate-600">{answer}</p></details>)}</div><div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl bg-[#f3ecdc] p-7 sm:flex-row sm:items-center"><div><h2 className="font-serif text-2xl">Still need assistance?</h2><p className="mt-2 text-sm text-slate-600">Member care can help with questions not answered here.</p></div><Link href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-[#0b1f3a] px-6 py-3 text-sm font-semibold text-white">Contact member care <ArrowRight size={15}/></Link></div></section><PublicFooter/></main>;
}
