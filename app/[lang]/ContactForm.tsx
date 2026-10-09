"use client";

import { useState, type FormEvent } from "react";
import { LoaderCircle, Send } from "lucide-react";

type ContactFormLabels = {
  name: string;
  email: string;
  message: string;
  send: string;
  sending: string;
  success: string;
  error: string;
};

export default function ContactForm({ labels }: { labels: ContactFormLabels }) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      if (!response.ok) throw new Error("Contact request failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-field">
        <label htmlFor="contact-name">{labels.name}</label>
        <input
          autoComplete="name"
          id="contact-name"
          maxLength={100}
          name="name"
          required
        />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-email">{labels.email}</label>
        <input
          autoComplete="email"
          id="contact-email"
          maxLength={254}
          name="email"
          required
          type="email"
        />
      </div>
      <div className="contact-field">
        <label htmlFor="contact-message">{labels.message}</label>
        <textarea
          id="contact-message"
          maxLength={4000}
          name="message"
          required
          rows={5}
        />
      </div>
      <div className="contact-honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          autoComplete="off"
          id="contact-website"
          name="website"
          tabIndex={-1}
        />
      </div>
      <button
        className="contact-submit"
        disabled={status === "sending"}
        type="submit"
      >
        {status === "sending" ? (
          <LoaderCircle
            aria-hidden="true"
            className="contact-submit-icon is-spinning"
            size={16}
          />
        ) : (
          <Send aria-hidden="true" className="contact-submit-icon" size={16} />
        )}
        {status === "sending" ? labels.sending : labels.send}
      </button>
      <p
        aria-live="polite"
        className={`contact-form-status is-${status}`}
        role="status"
      >
        {status === "success"
          ? labels.success
          : status === "error"
            ? labels.error
            : ""}
      </p>
    </form>
  );
}
