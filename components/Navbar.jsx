"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "System", href: "#System" },
  { label: "About Us", href: "#AboutUs" },
  { label: "How It Works", href: "#HowWeWork" },
  { label: "Modules", href: "#Modules" },
  { label: "Run Analysis", href: "#Run-Analysis" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const panelRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    const handlePointerDown = (e) => {
      const panel = panelRef.current;
      const button = btnRef.current;

      if (!panel) return;

      const clickedInsidePanel = panel.contains(e.target);
      const clickedButton = button?.contains(e.target);

      if (!clickedInsidePanel && !clickedButton) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (open) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const desktopLinkClass = `
    relative px-4 lg:px-5 py-2
    text-[11px] xl:text-[12px]
    font-extrabold uppercase tracking-[0.14em]
    rounded-xl transition-all duration-300
    hover:text-purple-600 hover:bg-gradient-to-r hover:from-sky-50/70 hover:to-purple-50/70
    group whitespace-nowrap
  `;

  const mobileLinkClass = `
    px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-[0.14em]
    transition-all duration-300
  `;

  return (
    <header className="fixed left-0 right-0 top-0 z-[100]">
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/60 bg-white/95 shadow-lg backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[68px] w-full max-w-[1440px] items-center justify-between px-4 sm:h-[72px] sm:px-6 md:px-8 lg:h-[76px] lg:px-10 xl:px-12">
          {/* Logo */}
          <a href="#top" className="flex min-w-0 shrink-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/30 shadow-sm sm:h-11 sm:w-11 relative">
              <Image src="/logo.jpeg" alt="logo"
                priority
                fill
                className="object-cover"
                sizes="(max-width: 768px) 40px, 44px"
              />
            </div>

            <span
              className={`truncate text-base font-semibold tracking-tight transition-colors duration-300 sm:text-lg lg:text-xl ${
                scrolled ? "text-slate-800" : "text-white"
              }`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              SYNCHROYST
            </span>
          </a>

          {/* Desktop / Tablet Nav */}
          <nav className="hidden flex-1 items-center justify-end pr-8 md:flex lg:pr-14 xl:pr-20">
            <div className="flex items-center gap-1 lg:gap-2 xl:gap-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`${desktopLinkClass} ${
                    scrolled ? "text-slate-700" : "text-white"
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-1 left-4 right-4 h-[2px] origin-center scale-x-0 bg-gradient-to-r from-sky-400 to-purple-500 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Button - old style */}
          <div className="ml-3 md:hidden">
            <button
              ref={btnRef}
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border shadow-sm transition-all duration-300 active:scale-95 ${
                scrolled
                  ? "border-slate-200 bg-white text-slate-900"
                  : "border-white/30 bg-white/10 text-white backdrop-blur"
              }`}
            >
              <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu - old style */}
        {open && (
          <div
            ref={panelRef}
            className={`w-full border-t backdrop-blur-xl transition-all duration-300 md:hidden ${
              scrolled
                ? "border-slate-200 bg-white/95"
                : "border-white/15 bg-slate-950/75"
            }`}
          >
            <div className="px-4 py-4 sm:px-6">
              <nav className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`${mobileLinkClass} ${
                      scrolled
                        ? "text-slate-700 hover:bg-slate-100"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}