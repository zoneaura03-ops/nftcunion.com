import { BrandMark } from "./logo";

export function LogoLoader({
  fullScreen = true,
  transparent = false,
}: {
  fullScreen?: boolean;
  transparent?: boolean;
}) {
  return (
    <div
      className={`grid place-items-center ${transparent ? "bg-transparent" : "bg-[#f7f9fc]"} ${fullScreen ? "min-h-screen" : "min-h-[55vh]"}`}
      role="status"
      aria-live="polite"
      aria-label="Loading North Fountain Trust Credit Union"
    >
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-white/95 px-9 py-7 shadow-[0_18px_55px_rgba(11,31,58,.14)] backdrop-blur">
        <div className="animate-pulse">
          <BrandMark className="h-20 w-20" />
        </div>
        <span className="text-center text-[10px] font-semibold uppercase leading-5 tracking-[.18em] text-[#0b1f3a]">
          North Fountain{" "}
          <span className="block text-[#d8b45b]">Trust Credit Union</span>
        </span>
      </div>
      <span className="sr-only">Loading North Fountain Trust Credit Union</span>
    </div>
  );
}
