import { useState } from 'react';
import {
  MessageCircle,
  Phone,
  Mail,
  Youtube,
  Facebook,
  Instagram,
  Send,
  CheckCircle2,
  MapPin,
} from 'lucide-react';

const channels = [
  { icon: MessageCircle, label: 'WhatsApp', value: 'Available on request', href: '#', tone: 'text-green-400' },
  { icon: Phone, label: 'Phone', value: 'Available on request', href: '#', tone: 'text-cyan-400' },
  { icon: Mail, label: 'Email', value: 'Available on request', href: '#', tone: 'text-navy-300' },
  { icon: Youtube, label: 'YouTube', value: 'Physics With Kashif', href: '#', tone: 'text-red-400' },
  { icon: Facebook, label: 'Facebook', value: 'Available on request', href: '#', tone: 'text-blue-400' },
  { icon: Instagram, label: 'Instagram', value: 'Available on request', href: '#', tone: 'text-pink-400' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-navy-50">
      <div
        className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-cyan-200/40 blur-[110px]"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip reveal">
            <Mail className="h-3.5 w-3.5 text-cyan-600" />
            Contact
          </span>
          <h2 className="reveal mt-5 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl text-balance">
            Get in Touch
          </h2>
          <p className="reveal mt-4 text-base leading-relaxed text-navy-600 sm:text-lg">
            Have a question about classes, schedules, or enrollment? Reach out
            and Sir M. Kashif's team will respond.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Contact channels */}
          <div className="reveal grid gap-4 sm:grid-cols-2">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group flex items-center gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-soft"
              >
                <span className={`flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-navy-50 ${c.tone} transition-colors group-hover:bg-navy-900 group-hover:text-cyan-300`}>
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">{c.label}</p>
                  <p className="truncate text-sm font-bold text-navy-900">{c.value}</p>
                </div>
              </a>
            ))}
            <div className="sm:col-span-2 flex items-center gap-4 rounded-2xl border border-navy-100 bg-white p-5 shadow-card">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-navy-900 text-cyan-300">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">Location</p>
                <p className="text-sm font-bold text-navy-900">Online — Serving Students Across Pakistan</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="reveal">
            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-navy-100 bg-white p-7 shadow-soft sm:p-9"
            >
              <div className="space-y-5">
                <Field label="Name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="input"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="input"
                  />
                </Field>
                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="input resize-none"
                  />
                </Field>

                <button type="submit" className="btn-primary group w-full">
                  <Send className="h-4 w-4" />
                  Send Message
                </button>

                {sent && (
                  <p className="flex items-center justify-center gap-2 text-sm font-semibold text-green-600 animate-fade-in">
                    <CheckCircle2 className="h-4 w-4" />
                    Thank you! Your message has been recorded.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.9rem;
          border: 1px solid #d9e2f5;
          background: #f8fafc;
          padding: 0.7rem 0.95rem;
          font-size: 0.9rem;
          color: #0a1538;
          transition: border-color .2s, box-shadow .2s, background .2s;
        }
        .input::placeholder { color: #94a3b8; }
        .input:focus {
          outline: none;
          border-color: #22d3ee;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(34,211,238,.18);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-navy-800">
        {label}
      </label>
      {children}
    </div>
  );
}
