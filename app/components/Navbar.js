"use client";

import { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { navLinks, personalData } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-navy/90 backdrop-blur-md border-b border-line/70"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-lg font-bold tracking-[0.15em] text-brand-green transition-opacity hover:opacity-80 sm:text-xl"
        >
          {personalData.name.toUpperCase()}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-base font-medium tracking-wide text-gray-300 transition-colors hover:text-brand-pink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-brand-green transition-colors hover:bg-panel lg:hidden"
        >
          {open ? <MdClose size={26} /> : <MdMenu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-line bg-panel px-4 py-3 lg:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-3 text-base font-medium tracking-wide text-gray-300 transition-colors hover:bg-navy hover:text-brand-pink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
