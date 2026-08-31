import Image from "next/image";
import { Fingerprint, LockKeyhole, Sparkles } from "lucide-react";
import { BrowserBackButton } from "./browser-back-button";
import Logo from "./logo";

export function AuthLayout({
  children,
  register = false,
}: {
  children: React.ReactNode;
  register?: boolean;
}) {
  return (
    <main className="min-h-screen bg-[#edf6f4] p-3 sm:p-5 lg:p-7">
      <div className="mx-auto grid min-h-[calc(100vh-24px)] max-w-[1480px] overflow-hidden rounded-[32px] bg-white shadow-[0_30px_90px_rgba(11,31,58,.12)] sm:min-h-[calc(100vh-40px)] lg:min-h-[calc(100vh-56px)] lg:grid-cols-[.92fr_1.08fr]">
        <aside className="relative hidden overflow-hidden lg:block">
          <Image
            src={
              register
                ? "/images/nftcunion-auth-towers-v2.webp"
                : "/images/nftcunion-login-lounge-v2.webp"
            }
            alt={
              register
                ? "North Fountain member center"
                : "North Fountain private member lounge"
            }
            fill
            priority
            quality={90}
            sizes="46vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/85 via-[#0b1f3a]/15 to-transparent" />
          {register && (
            <div className="absolute left-10 top-9 rounded-2xl bg-white/95 px-4 py-3 backdrop-blur">
              <Logo />
            </div>
          )}
          <div className="absolute inset-x-10 bottom-10 text-white">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#e4c979]">
              <Sparkles size={14} />
              Member-owned banking
            </div>
            <h1 className="mt-5 max-w-lg font-serif text-5xl font-normal leading-[1.06]">
              Your finances deserve a calmer place.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
              Private access, thoughtful guidance, and tools designed around
              your next chapter.
            </p>
          </div>
        </aside>
        <section className="relative flex min-h-screen items-center justify-center px-4 py-20 sm:min-h-0 sm:px-8 lg:px-14">
          {register && (
            <BrowserBackButton className="absolute left-4 top-4 z-20 sm:hidden" />
          )}
          <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.14em] text-slate-400 sm:inset-x-8">
            <span className="flex items-center gap-2">
              <Fingerprint size={15} className="text-[#d8b45b]" />
              Protected access
            </span>
            <span className="flex items-center gap-2">
              <LockKeyhole size={13} className="text-[#d8b45b]" />
              Encrypted
            </span>
          </div>
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
}
