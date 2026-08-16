"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollUp}
      aria-label="Scroll back to top"
      className="animate-fade-up fixed right-4 bottom-4 z-50 rounded-full bg-gradient-to-r from-brand-pink to-brand-violet p-3 text-white shadow-lg shadow-black/40 transition-transform duration-300 hover:scale-110 sm:right-6 sm:bottom-6"
    >
      <FaArrowUp size={20} />
    </button>
  );
}
