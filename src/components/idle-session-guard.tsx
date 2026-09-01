"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Clock3 } from "lucide-react";

const USER_TIMEOUT_MS = 30 * 60 * 1000;
const ADMIN_TIMEOUT_MS = 15 * 60 * 1000;
const WARNING_MS = 60 * 1000;
const ACTIVITY_EVENTS = ["pointerdown", "keydown", "touchstart", "scroll"] as const;

export function IdleSessionGuard() {
  const pathname = usePathname();
  const [secondsRemaining, setSecondsRemaining] = useState<number | null>(null);

  useEffect(() => {
    const admin = pathname.startsWith("/admin") && pathname !== "/admin-login";
    const customer = pathname.startsWith("/dashboard");
    if (!admin && !customer) {
      setSecondsRemaining(null);
      return;
    }

    const timeout = admin ? ADMIN_TIMEOUT_MS : USER_TIMEOUT_MS;
    const storageKey = admin ? "nftcunion_admin_activity" : "nftcunion_user_activity";
    let loggingOut = false;
    let lastWrite = 0;

    const logout = async () => {
      if (loggingOut) return;
      loggingOut = true;
      try {
        await fetch("/api/auth/logout", { method: "POST", keepalive: true });
      } finally {
        localStorage.removeItem(storageKey);
        window.location.replace(admin ? "/admin-login?notice=inactive" : "/login?notice=inactive");
      }
    };

    const checkSession = () => {
      const lastActivity = Number(localStorage.getItem(storageKey) || Date.now());
      const remaining = timeout - (Date.now() - lastActivity);
      if (remaining <= 0) {
        setSecondsRemaining(0);
        void logout();
        return;
      }
      setSecondsRemaining(remaining <= WARNING_MS ? Math.ceil(remaining / 1000) : null);
    };

    const recordActivity = () => {
      if (loggingOut || Date.now() - lastWrite < 10_000) return;
      lastWrite = Date.now();
      localStorage.setItem(storageKey, String(lastWrite));
      setSecondsRemaining(null);
    };

    const staySignedIn = () => {
      lastWrite = Date.now();
      localStorage.setItem(storageKey, String(lastWrite));
      setSecondsRemaining(null);
    };

    if (!localStorage.getItem(storageKey)) staySignedIn();
    checkSession();

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") checkSession();
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key === storageKey) checkSession();
    };

    ACTIVITY_EVENTS.forEach((event) => window.addEventListener(event, recordActivity, { passive: true }));
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("storage", onStorage);
    const timer = window.setInterval(checkSession, 1000);

    const keepAliveButton = document.getElementById("session-stay-signed-in");
    keepAliveButton?.addEventListener("click", staySignedIn);

    return () => {
      ACTIVITY_EVENTS.forEach((event) => window.removeEventListener(event, recordActivity));
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("storage", onStorage);
      keepAliveButton?.removeEventListener("click", staySignedIn);
      window.clearInterval(timer);
    };
  }, [pathname, secondsRemaining !== null]);

  if (secondsRemaining === null) return null;

  return (
    <div className="fixed inset-0 z-[1000] grid place-items-center bg-[#06111f]/55 p-4 backdrop-blur-sm" role="alertdialog" aria-modal="true" aria-labelledby="session-expiry-title">
      <div className="w-full max-w-md rounded-3xl border border-gold-200 bg-white p-7 text-center shadow-2xl">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-gold-50 text-gold-600"><Clock3 size={25}/></span>
        <h2 id="session-expiry-title" className="mt-5 text-2xl font-semibold text-[#0b1f3a]">Your session is about to expire</h2>
        <p className="mt-3 text-sm leading-6 text-neutral-500">For your security, you will be signed out after inactivity in <strong className="text-[#0b1f3a]">{secondsRemaining} seconds</strong>.</p>
        <button id="session-stay-signed-in" type="button" className="btn mt-6 w-full justify-center">Stay signed in</button>
      </div>
    </div>
  );
}
