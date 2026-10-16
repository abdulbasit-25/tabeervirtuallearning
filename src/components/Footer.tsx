import { Atom, Youtube, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Sir M. Kashif', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Live Classes', href: '#live' },
  { label: 'YouTube', href: '#youtube' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 pt-16">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      <div className="container-x relative">
        <div className="grid gap-10 pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-navy-900 shadow-glow">
                <Atom className="h-5 w-5 animate-spin-slow" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold text-white">Tabeer</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Virtual Learning
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-300">
              Making Physics Simple. Building Strong Concepts.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-navy-200 transition-colors hover:bg-red-600 hover:text-white"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-navy-200 transition-colors hover:bg-cyan-400 hover:text-navy-900"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                aria-label="Phone"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-navy-200 transition-colors hover:bg-cyan-400 hover:text-navy-900"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-navy-300 transition-colors hover:text-cyan-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* YouTube + location */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">YouTube</h3>
            <a
              href="#youtube"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition-colors hover:text-red-300"
            >
              <Youtube className="h-4 w-4" />
              Physics With Kashif
            </a>
            <div className="mt-5 flex items-start gap-2.5 text-sm text-navy-300">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-cyan-400" />
              Online — Serving Students Across Pakistan
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-center text-xs text-navy-400 sm:text-left">
            © 2026 Tabeer Virtual Learning. All Rights Reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-navy-100 transition-colors hover:bg-white/15 hover:text-white"
          >
            Back to Top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
