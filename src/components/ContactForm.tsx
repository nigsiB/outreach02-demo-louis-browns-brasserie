"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: fd.get("name"), email: fd.get("email"), phone: fd.get("phone"), message: fd.get("message") }),
    });
    setStatus(res.ok ? "ok" : "err");
  }
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input required name="name" placeholder="Name" className="form-input" />
      <input required type="email" name="email" placeholder="Email" className="form-input" />
      <input name="phone" placeholder="Phone" className="form-input" />
      <textarea required name="message" placeholder="Message" rows={4} className="form-input" />
      <button type="submit" className="form-btn">Send</button>
      {status === "ok" ? <p className="text-sm text-green-600">Thanks — received.</p> : null}
      {status === "err" ? <p className="text-sm text-red-600">Error — try again.</p> : null}
    </form>
  );
}
