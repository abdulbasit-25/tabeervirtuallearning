import { useEffect, useState } from 'react';

/**
 * Lightweight SVG physics decorations. These are pure presentational
 * components used to give the page a science-inspired feel without relying
 * on external image assets.
 */

export function AtomGraphic({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="atomCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="100%" stopColor="#2f50ad" />
        </radialGradient>
      </defs>
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <ellipse cx="100" cy="100" rx="80" ry="32" />
        <ellipse cx="100" cy="100" rx="80" ry="32" transform="rotate(60 100 100)" />
        <ellipse cx="100" cy="100" rx="80" ry="32" transform="rotate(120 100 100)" />
      </g>
      <circle cx="100" cy="100" r="10" fill="url(#atomCore)" />
      <circle cx="100" cy="100" r="4" fill="#ecfeff" />
    </svg>
  );
}

export function WaveGraphic({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 80" className={className} preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0 40 Q 25 0 50 40 T 100 40 T 150 40 T 200 40 T 250 40 T 300 40 T 350 40 T 400 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M0 40 Q 25 64 50 40 T 100 40 T 150 40 T 200 40 T 250 40 T 300 40 T 350 40 T 400 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function OrbitGraphic({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 220" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="110" cy="110" r="100" strokeOpacity="0.5" />
        <circle cx="110" cy="110" r="74" strokeOpacity="0.35" />
        <circle cx="110" cy="110" r="48" strokeOpacity="0.25" />
      </g>
      <circle cx="110" cy="10" r="6" fill="#67e8f9" />
      <circle cx="184" cy="110" r="4" fill="#22d3ee" />
      <circle cx="62" cy="110" r="3" fill="#7e9bdc" />
      <circle cx="110" cy="110" r="14" fill="#2f50ad" />
    </svg>
  );
}

export function FormulaChip({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={`inline-flex items-center rounded-lg border border-navy-200/70 bg-white/80 px-3 py-1.5 font-mono text-xs text-navy-700 shadow-sm backdrop-blur ${className}`}
    >
      {children}
    </span>
  );
}

/** Floating physics formulas + particles used in the hero background. */
export function PhysicsField({ className = '' }: { className?: string }) {
  const items = [
    { text: 'F = ma', top: '8%', left: '6%', delay: '0s', anim: 'animate-float' },
    { text: 'E = mc²', top: '18%', left: '82%', delay: '0.6s', anim: 'animate-float' },
    { text: 'v = u + at', top: '62%', left: '4%', delay: '1.1s', anim: 'animate-float' },
    { text: 'λ = h/p', top: '78%', left: '88%', delay: '0.3s', anim: 'animate-float' },
    { text: '½mv²', top: '40%', left: '92%', delay: '0.9s', anim: 'animate-pulse' },
    { text: 'W = Fd', top: '86%', left: '40%', delay: '1.4s', anim: 'animate-pulse' },
  ];
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {items.map((it) => (
        <span
          key={it.text}
          className={`absolute font-mono text-sm text-cyan-200/70 ${it.anim}`}
          style={{ top: it.top, left: it.left, animationDelay: it.delay }}
        >
          {it.text}
        </span>
      ))}
    </div>
  );
}

/** Animated concentric pulse rings, used behind the live-class badge. */
export function PulseRings({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <span className="absolute inset-0 m-auto h-24 w-24 rounded-full border border-cyan-400/40 animate-pulse-ring" />
      <span
        className="absolute inset-0 m-auto h-24 w-24 rounded-full border border-cyan-400/40 animate-pulse-ring"
        style={{ animationDelay: '1.2s' }}
      />
    </div>
  );
}

/** Small dot grid used as a subtle section backdrop. */
export function DotGrid({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 opacity-[0.18] ${className}`}
      style={{
        backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }}
      aria-hidden="true"
    />
  );
}

/** Hook that returns true once the component has mounted on the client. */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
