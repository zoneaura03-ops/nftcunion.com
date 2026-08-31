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
      className="border-t border-[#dce8e6] bg-[#f1f7f6] px-5 pb-8 pt-14 text-[#0b1f3a] sm:px-8 lg:pt-20"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-12 rounded-[34px] bg-white p-7 shadow-[0_22px_70px_rgba(11,31,58,.06)] sm:p-10 lg:grid-cols-[1.35fr_.75fr_.85fr_1.15fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-500">
              {footer.description}
            </p>
            <a
              href="mailto:support@nftcunion.com"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#e3f2f0] px-5 py-3 text-xs font-semibold text-[#117676]"
            >
              Talk to member care <ArrowUpRight size={14} />
            </a>
          </div>
          <FooterLinks title="Explore" links={companyLinks} />
          <FooterLinks title="Banking" links={serviceLinks} />
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[.18em] text-[#168c8c]">
              Member care
            </h3>
            <ul className="mt-6 space-y-5 text-sm leading-6 text-slate-500">
              <li className="flex gap-3">
                <MapPin className="mt-1 shrink-0 text-[#c8ae72]" size={17} />
                <span>{footer.address}</span>
              </li>
              <li>
                <a
                  className="flex items-center gap-3 hover:text-[#117676]"
                  href={`mailto:${footer.email}`}
                >
                  <Mail className="shrink-0 text-[#c8ae72]" size={17} />
                  {footer.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock3 className="shrink-0 text-[#c8ae72]" size={17} />
                Digital support, around the clock
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 px-2 pt-8 text-[11px] text-slate-500 sm:flex-row sm:items-center">
          <span>
            © 2026 North Fountain Trust Credit Union. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {["Privacy", "Terms", "Security", "Accessibility"].map((item) => (
              <Link key={item} href="/legal" className="hover:text-[#117676]">
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
      <h3 className="text-[11px] font-bold uppercase tracking-[.18em] text-[#168c8c]">
        {title}
      </h3>
      <ul className="mt-6 space-y-4 text-sm text-slate-500">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              className="inline-flex items-center gap-1 hover:text-[#117676]"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
