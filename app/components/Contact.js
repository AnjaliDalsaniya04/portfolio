"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { personalData } from "../data";
import SectionHeading from "./SectionHeading";

// Web3Forms access keys are designed to be public and are locked to your
// domain, so NEXT_PUBLIC_ is the correct prefix here. Set it in .env.local.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const socials = [
  { href: personalData.github, label: "GitHub", Icon: FaGithub },
  { href: personalData.linkedIn, label: "LinkedIn", Icon: FaLinkedin },
  { href: personalData.leetcode, label: "LeetCode", Icon: SiLeetcode },
];

const details = [
  { Icon: MdEmail, label: personalData.email, href: `mailto:${personalData.email}` },
  { Icon: MdPhone, label: personalData.phone, href: `tel:${personalData.phone.replace(/\s/g, "")}` },
  { Icon: MdLocationOn, label: personalData.address, href: null },
];

const EMPTY = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const update = (field) => (event) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Bots fill every field they find, including the hidden one.
    if (honeypot) return;

    // Without a key configured the form would fail silently, so fall back to
    // opening the visitor's mail client rather than losing the message.
    if (!ACCESS_KEY) {
      const subject = `Portfolio contact from ${form.name || "a visitor"}`;
      const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
      window.location.href = `mailto:${personalData.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus({ state: "sending", message: "" });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio contact from ${form.name || "a visitor"}`,
          from_name: "Portfolio Website",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          state: "success",
          message: "Thanks! Your message has been sent.",
        });
        setForm(EMPTY);
      } else {
        setStatus({
          state: "error",
          message:
            data.message || `Could not send. Please email ${personalData.email}`,
        });
      }
    } catch {
      setStatus({
        state: "error",
        message: `Network error. Please email ${personalData.email}`,
      });
    }
  };

  const sending = status.state === "sending";

  const inputClass =
    "w-full rounded-md border border-line bg-navy px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-gray-600 focus:border-brand-violet disabled:opacity-60";

  return (
    <section id="contact" className="relative my-12 lg:my-24">
      {/* Vertical tab: centred on the section and only shown from 1400px up,
          the width at which the 1280px container leaves room beside it. */}
      <div className="absolute top-1/2 right-0 z-20 hidden -translate-y-1/2 flex-col items-center min-[1400px]:flex">
        <span className="section-title-line h-24 w-[2px] opacity-50" />
        <span className="vertical-tab my-3 rounded-l-md border-y border-l border-line bg-panel px-2 py-8 text-sm font-bold tracking-[0.3em] text-gray-300">
          CONTACT
        </span>
        <span className="section-title-line h-24 w-[2px] opacity-50" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* The side tab is the section label from 1400px up. Below that it is
            hidden (it would overlap the content), so the top heading takes over
            — exactly one label is ever visible. */}
        <div className="min-[1400px]:hidden">
          <SectionHeading title="CONTACT" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 min-[1400px]:mt-0 lg:grid-cols-2 lg:gap-16">
          {/* Left — form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-line bg-panel p-6 sm:p-8"
          >
            <p className="text-base font-bold tracking-[0.25em] text-brand-green sm:text-lg">
              SEND ME A MESSAGE
            </p>

            <div className="mt-6 flex flex-col gap-5">
              <label className="flex flex-col gap-2">
                <span className="text-base text-gray-400">Your Name</span>
                <input
                  type="text"
                  required
                  disabled={sending}
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Jane Doe"
                  className={inputClass}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-base text-gray-400">Your Email</span>
                <input
                  type="email"
                  required
                  disabled={sending}
                  value={form.email}
                  onChange={update("email")}
                  placeholder="jane@example.com"
                  className={inputClass}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-base text-gray-400">Your Message</span>
                <textarea
                  required
                  rows={5}
                  disabled={sending}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me about your project..."
                  className={`${inputClass} resize-y`}
                />
              </label>

              {/* Honeypot — hidden from people, irresistible to bots. */}
              <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />

              <button
                type="submit"
                disabled={sending}
                className="self-start rounded-full bg-gradient-to-r from-brand-pink to-brand-violet px-9 py-3.5 text-base font-semibold tracking-wide text-white transition-transform duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
              >
                {sending ? "SENDING..." : "SEND MESSAGE"}
              </button>

              {status.state !== "idle" && status.message && (
                <p
                  role="status"
                  className={`text-base ${
                    status.state === "success"
                      ? "text-brand-green"
                      : "text-red-400"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>

          {/* Right — details */}
          <div className="lg:pt-4">
            <p className="text-base font-bold tracking-[0.25em] text-brand-green sm:text-lg">
              GET IN TOUCH
            </p>

            <ul className="mt-6 flex flex-col gap-5">
              {details.map(({ Icon, label, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="rounded-md bg-panel p-3 text-brand-pink">
                    <Icon size={22} />
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="text-base break-all text-gray-300 transition-colors hover:text-brand-green sm:text-lg"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-base text-gray-300 sm:text-lg">
                      {label}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-brand-pink"
                >
                  <Icon size={28} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
