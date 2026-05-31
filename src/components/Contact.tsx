"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "ok" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async () => {
    setError("");
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setError("Please fill in every field.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setStatus("ok");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section className="block" id="contact">
      <div className="wrap contact-grid">
        <Reveal className="contact-copy">
          <span className="eyebrow">Say hello</span>
          <h2>Let&rsquo;s build something memorable</h2>
          <p>
            Press, partnerships, playtesting, or just a hello, drop us a line
            and we&rsquo;ll get back to you.
          </p>
          <div className="contact-points">
            <div className="cpoint">
              <span className="ic">📬</span> Partnerships &amp; press welcome
            </div>
            <div className="cpoint">
              <span className="ic">🎮</span> Want to playtest? Tell us
            </div>
            <div className="cpoint">
              <span className="ic">⚡</span> We read everything ourselves
            </div>
          </div>
        </Reveal>

        <Reveal className="form">
          {status === "ok" ? (
            <div className="form-success">
              <div className="form-success-ic">✓</div>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out — we&rsquo;ll be in touch soon.</p>
              <button
                className="btn btn-outline"
                onClick={() => setStatus("idle")}
              >
                Send another
              </button>
            </div>
          ) : (
            <>
              <div className="field">
                <label htmlFor="c-name">Name</label>
                <input
                  id="c-name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={update("name")}
                />
              </div>
              <div className="field">
                <label htmlFor="c-email">Email</label>
                <input
                  id="c-email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={update("email")}
                />
              </div>
              <div className="field">
                <label htmlFor="c-message">Message</label>
                <textarea
                  id="c-message"
                  placeholder="What's on your mind?"
                  value={form.message}
                  onChange={update("message")}
                />
              </div>
              {status === "error" && <p className="form-error">{error}</p>}
              <button
                className="btn btn-primary"
                onClick={submit}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send Message →"}
              </button>
              <p className="form-note">
                We&rsquo;ll only use your email to reply to you.
              </p>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
}
