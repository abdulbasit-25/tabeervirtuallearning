import { ArrowRight, Radio, Youtube, Sparkles } from 'lucide-react';
import { AtomGraphic, DotGrid } from '@/components/PhysicsDecor';

export default function CTASection() {
  return (
    <section id="join" className="section-pad relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
      <DotGrid className="text-cyan-400/30" />
      <AtomGraphic className="absolute -right-10 top-1/2 hidden h-72 w-72 -translate-y-1/2 text-cyan-400/20 animate-spin-slow lg:block" />
      <div
        className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/3 rounded-full bg-cyan-500/20 blur-[110px]"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-200 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Join the Academy
          </span>
          <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white text-balance sm:text-5xl">
            Ready to Make Physics{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              Easier?
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg">
            Join Tabeer Virtual Learning and learn Physics with clear concepts,
            expert guidance, and interactive online sessions.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary group">
              <Radio className="h-4 w-4" />
              Join Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#youtube" className="btn-outline-light group">
              <Youtube className="h-4 w-4" />
              Watch YouTube Lectures
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
