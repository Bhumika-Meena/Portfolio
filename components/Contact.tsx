'use client';

import { FormEvent, useState } from "react";
import { SectionWrapper } from "./SectionWrapper";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    };

    try {
      setIsSubmitting(true);
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
        <div>
          <h2 className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Let&apos;s connect
          </h2>
          <p className="mb-4 max-w-xl text-base leading-relaxed text-charcoal/75 sm:text-lg">
            Have a project in mind, or just want to say hi? Share a few
            details, and I&apos;ll get back to you soon.
          </p>
          <p className="text-sm text-charcoal/70">
            I&apos;m especially interested in thoughtful products, design-driven
            teams, and opportunities where engineering and UX work closely
            together.
          </p>
        </div>
        <div className="rounded-[32px] border border-white/70 bg-white/95 p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="mb-8 space-y-2">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-rose/70">
              Secure Channel
            </p>
            <h3 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">
              Direct Access Terminal
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-charcoal/70">
              Initialize a secure end-to-end encrypted link to transmit your
              message through the primary gateway.
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-rose/80">
                  01. Identifier
                </p>
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="USER_NAME"
                    className="w-full rounded border border-charcoal/5 bg-blush/40 px-4 py-3 text-xs uppercase tracking-[0.18em] text-charcoal outline-none transition duration-300 placeholder:text-charcoal/40 focus:border-rose/70 focus:ring-2 focus:ring-rose/70 focus:ring-offset-2 focus:ring-offset-blush"
                  />
                  <span className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[18px] text-charcoal/30">
                    fingerprint
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-rose/80">
                  02. Link
                </p>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="TARGET_ADDR"
                    className="w-full rounded border border-charcoal/5 bg-blush/40 px-4 py-3 text-xs uppercase tracking-[0.18em] text-charcoal outline-none transition duration-300 placeholder:text-charcoal/40 focus:border-rose/70 focus:ring-2 focus:ring-rose/70 focus:ring-offset-2 focus:ring-offset-blush"
                  />
                  <span className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[18px] text-charcoal/30">
                    alternate_email
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-rose/80">
                03. Transmission
              </p>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="TYPE_MESSAGE_HERE..."
                className="w-full rounded border border-charcoal/5 bg-blush/40 px-4 py-3 text-xs uppercase tracking-[0.16em] text-charcoal outline-none transition duration-300 placeholder:text-charcoal/35 focus:border-rose/70 focus:ring-2 focus:ring-rose/70 focus:ring-offset-2 focus:ring-offset-blush"
              />
            </div>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-[11px] text-charcoal/60">
                <span className="material-symbols-outlined text-[18px] text-rose">
                  gpp_good
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
                  256-bit AES encryption enabled
                </span>
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded bg-rose px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-white shadow-soft transition duration-300 hover:shadow-lg hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-blush sm:w-auto"
              >
                EXECUTE SEND
                <span className="material-symbols-outlined ml-2 text-sm">
                  send
                </span>
              </button>
            </div>
          </form>

          <div className="mt-6 border-t border-white/70 pt-4 text-[11px] text-charcoal/60">
            <p>Or reach out directly:</p>
            <div className="mt-2 flex flex-wrap gap-4">
              <a
                href="mailto:your.email@example.com"
                className="transition duration-300 hover:text-rose"
              >
                Email
              </a>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noreferrer"
                className="transition duration-300 hover:text-rose"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noreferrer"
                className="transition duration-300 hover:text-rose"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

