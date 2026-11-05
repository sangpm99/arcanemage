"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useLocale, useTranslations, type Locale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LABELS: Record<Locale, string> = { vi: "Tiếng Việt", en: "English" };

export default function LocaleSwitcher() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  // Đóng khi bấm ra ngoài
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const change = (next: Locale) => {
    setOpen(false);
    startTransition(() => router.replace(pathname, { locale: next }));
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label={t("language")}
        onClick={() => setOpen((v) => !v)}
        disabled={isPending}
        className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/10 disabled:opacity-50"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
        </svg>
        {locale.toUpperCase()}
      </button>

      {open && (
        <ul className="absolute right-0 mt-1 w-36 overflow-hidden rounded-md border border-white/10 bg-slate-900 py-1 shadow-lg">
          {routing.locales.map((l) => (
            <li key={l}>
              <button
                type="button"
                onClick={() => change(l)}
                className={`block w-full px-3 py-2 text-left text-sm ${
                  l === locale
                    ? "text-amber-400"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                {LABELS[l]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
