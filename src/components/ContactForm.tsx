"use client";

import { useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { t, type Locale } from "@/lib/i18n";

export default function ContactForm() {
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] || "ko") as Locale;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`/${locale}/contact/api/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const data = await res.json();
      if (res.ok && !data.error) {
        setStatus("success");
        setName(""); setEmail(""); setSubject(""); setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder={t("contact.form.name", locale)}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="rounded-lg border border-[#dedee5] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7132f5]/30"
        />
        <input
          type="email"
          placeholder={t("contact.form.email", locale)}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="rounded-lg border border-[#dedee5] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7132f5]/30"
        />
      </div>
      <input
        type="text"
        placeholder={t("contact.form.subject", locale)}
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
        className="w-full rounded-lg border border-[#dedee5] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7132f5]/30"
      />
      <textarea
        placeholder={t("contact.form.message", locale)}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={6}
        className="w-full rounded-lg border border-[#dedee5] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7132f5]/30 resize-y"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-lg bg-[#7132f5] px-6 py-3 text-sm font-semibold text-white hover:bg-[#5741d8] transition-colors disabled:opacity-50"
      >
        {status === "loading" ? t("contact.form.sending", locale) : t("contact.form.send", locale)}
      </button>
      {status === "success" && (
        <p className="text-sm text-green-600">{t("contact.form.sent", locale)}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">{t("contact.form.error", locale)}</p>
      )}
    </form>
  );
}
