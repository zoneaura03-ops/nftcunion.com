import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, MapPin } from "lucide-react";
import { publicContent } from "../lib/public-content";
import Logo from "./logo";

const companyLinks = [
  ["Our story", "/about"],
  ["Member services", "/features"],
  ["Business membership", "/corporate-banking"],
  ["Contact", "/#contact"],
] as const;
const serviceLinks = [
  ["Everyday banking", "/features#personal"],
  ["Savings", "/features"],
  ["Cards & payments", "/features#cards"],
  ["International transfers", "/features#international"],
] as const;

export function PublicFooter() {
  const { footer } = publicContent;
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#07182c] px-5 pb-8 pt-16 text-white sm:px-8 lg:pt-24"
    >
      <div className="absolute -right-40 -top-40 size-[520px] rounded-full border border-[#d8b45b]/10" />
      <div className="absolute -right-24 -top-24 size-[360px] rounded-full border border-[#d8b45b]/10" />
      <div className="relative mx-auto max-w-[1180px]">
        <div className="grid gap-10 border-b border-white/12 pb-14 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#d8b45b]">
              A better banking relationship
            </p>
            <h2 className="mt-5 max-w-2xl font-serif text-4xl font-normal leading-tight sm:text-5xl">
              Your goals deserve more than an account number.
            </h2>
          </div>
          <a
            href={`mailto:${footer.email}`}
            className="inline-flex min-h-14 w-fit items-center gap-3 rounded-full bg-[#d8b45b] px-7 text-sm font-semibold text-[#07182c] hover:bg-[#e4c979] lg:justify-self-end"
          >
            Speak with member care <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid gap-12 py-14 lg:grid-cols-[1.35fr_.7fr_.8fr_1.1fr]">
          <div>
            <div className="inline-flex rounded-2xl bg-white px-4 py-3">
              <Logo />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/52">
              {footer.description}
            </p>
          </div>
          <FooterLinks title="Explore" links={companyLinks} />
          <FooterLinks title="Banking" links={serviceLinks} />
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[.2em] text-[#d8b45b]">
              Member care
            </h3>
            <ul className="mt-6 space-y-5 text-sm leading-6 text-white/58">
              <li className="flex gap-3">
                <MapPin className="mt-1 shrink-0 text-[#78c8c0]" size={17} />
                <span>{footer.address}</span>
              </li>
              <li>
                <a
                  className="flex items-center gap-3 hover:text-white"
                  href={`mailto:${footer.email}`}
                >
                  <Mail className="shrink-0 text-[#78c8c0]" size={17} />
                  {footer.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock3 className="shrink-0 text-[#78c8c0]" size={17} />
                Digital support, around the clock
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/12 pt-7 text-[11px] text-white/42 sm:flex-row sm:items-center">
          <span>
            © 2026 North Fountain Trust Credit Union. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {["Privacy", "Terms", "Security", "Accessibility"].map((item) => (
              <Link key={item} href="/legal" className="hover:text-[#d8b45b]">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<readonly [string, string]>;
}) {
  return (
    <div>
      <h3 className="text-[10px] font-bold uppercase tracking-[.2em] text-[#d8b45b]">
        {title}
      </h3>
      <ul className="mt-6 space-y-4 text-sm text-white/55">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="hover:text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
