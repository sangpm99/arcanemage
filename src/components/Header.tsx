"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { img } from "@/lib/cdn";
import LocaleSwitcher from "./LocaleSwitcher";

const NAV = [
  { href: "/", key: "characters" },
  { href: "/equipment", key: "equipment" },
  { href: "/story", key: "story" },
  { href: "/mods", key: "mods" },
  { href: "/community", key: "community" },
  { href: "/support", key: "support" },
] as const;

export default function Header() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  // Khóa cuộn trang + đóng bằng phím Esc khi drawer mở
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="header-bar sticky top-0 z-40 backdrop-blur">
        <div className="page-container flex h-16 items-center gap-8">
          <Link href="/" className="shrink-0">
            <Image
              src={img("logo.webp")}
              alt={t("home")}
              // Logo gốc 512×341 (tỉ lệ ~3:2) → cao 40px thì rộng 60px
              width={60}
              height={40}
              loading="eager"
              className="h-10 w-auto"
            />
          </Link>

          {/* Menu desktop */}
          <nav className="hidden flex-1 items-center gap-2 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-lg px-4 py-1.5 text-[15px] font-medium transition-colors ${
                  isActive(item.href)
                    ? "nav-active"
                    : "border border-transparent text-slate-100 hover:text-[#f8cf6a]"
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <LocaleSwitcher />
            <button
              type="button"
              aria-label={t("menu")}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen(true)}
              className="rounded-md p-2 text-slate-100 hover:text-[#f8cf6a] lg:hidden"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Drawer mobile: đặt NGOÀI <header> (xem lưu ý bên dưới) */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
        inert={!open}
      >
        {/* Lớp nền tối */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel trượt từ phải */}
        <aside
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          className={`absolute right-0 top-0 flex h-full w-72 max-w-[85vw] flex-col border-l border-[#d9a441]/40 bg-[linear-gradient(180deg,#1c1534_0%,#110d21_100%)] shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="header-bar relative flex h-16 items-center justify-between px-4">
            <span className="text-sm font-semibold text-slate-400">
              {t("menuTitle")}
            </span>
            <button
              type="button"
              aria-label={t("close")}
              onClick={() => setOpen(false)}
              className="rounded-md p-2 text-slate-300 hover:bg-white/10"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`mb-2 block rounded-lg px-4 py-2.5 text-base font-medium ${
                  isActive(item.href)
                    ? "nav-active after:hidden"
                    : "border border-transparent text-slate-100 hover:text-[#f8cf6a]"
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
}
