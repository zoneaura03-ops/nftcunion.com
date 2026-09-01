import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PublicFooter } from "../../components/public-footer";
import { PublicHeader } from "../../components/public-header";

export const metadata: Metadata = { title: "Thank You", description: "Thank you for contacting North Fountain Trust Credit Union. Review the next steps or return to member services.", robots: { index: false, follow: true } };

export default function ThankYouPage() {
  return <main id="main-content" className="min-h-screen bg-[#f8fafc] text-[#0b1f3a]"><PublicHeader/><section className="grid min-h-[620px] place-items-center px-5 py-20 sm:px-8"><div className="w-full max-w-2xl rounded-[32px] border border-[#e1e6ef] bg-white p-8 text-center shadow-[0_22px_70px_rgba(11,31,58,.09)] sm:p-12"><span className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-50 text-emerald-600"><CheckCircle2 size={30}/></span><p className="mt-6 text-xs font-bold uppercase tracking-[.22em] text-[#b58e35]">Request received</p><h1 className="mt-4 font-serif text-4xl font-normal sm:text-5xl">Thank you.</h1><p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-slate-600">Your submission has been received. When a response is required, member care will contact you through the details associated with your request.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d8b45b] px-6 text-sm font-semibold text-[#07182c]">Return home</Link><Link href="/faq" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#d8dee8] px-6 text-sm font-semibold">Read FAQs <ArrowRight size={15}/></Link></div></div></section><PublicFooter/></main>;
}
