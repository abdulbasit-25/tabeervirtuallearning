import { useEffect, useState } from 'react';
import { Menu, X, Atom } from 'lucide-react';
import { useScrolled } from '@/hooks/useScrollReveal';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Live Classes', href: '#live' },
  { label: 'YouTube', href: '#youtube' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-navy-100 bg-white/85 backdrop-blur-xl shadow-soft'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-cyan-300 shadow-glow">
            <Atom className="h-5 w-5 animate-spin-slow" />
          </span>
          <span className="flex flex-col leading-none">
            <span className={`font-display text-base font-extrabold tracking-tight ${scrolled ? 'text-navy-900' : 'text-navy-900'}`}>
              Tabeer
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-600">
              Virtual Learning
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-100 hover:text-navy-900"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#join" className="btn-primary">
            Join Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-navy-200 bg-white/70 text-navy-800 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-x pb-5">
          <div className="rounded-3xl border border-navy-100 bg-white p-4 shadow-soft">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#join" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full">
              Join Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
