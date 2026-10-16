import { ArrowRight, PlayCircle, Sparkles, GraduationCap, Radio } from 'lucide-react';
import { AtomGraphic, OrbitGraphic, PhysicsField, WaveGraphic, FormulaChip } from '@/components/PhysicsDecor';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-950 pt-28 md:pt-36">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" aria-hidden="true" />
      <div
        className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-navy-500/30 blur-[100px]"
        aria-hidden="true"
      />
      <PhysicsField />

      <div className="container-x relative pb-20 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-200 backdrop-blur animate-fade-in">
              <Sparkles className="h-3.5 w-3.5" />
              Tabeer Virtual Learning
            </span>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
              Master Physics.{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                Understand Concepts.
              </span>{' '}
              Achieve Excellence.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-navy-200 lg:mx-0 sm:text-lg">
              Online Physics Classes with Sir M. Kashif — 9+ Years of Teaching
              Experience. Built for First Year / 11th Class students who want
              real clarity, not memorization.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start justify-center">
              <a href="#live" className="btn-primary group">
                <Radio className="h-4 w-4" />
                Join Live Classes
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#courses" className="btn-outline-light group">
                <PlayCircle className="h-4 w-4" />
                Explore Physics Lectures
              </a>
            </div>

            <p className="mt-7 flex items-center justify-center gap-2 text-sm text-cyan-100/80 lg:justify-start">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Learn Physics with clarity, concepts, and confidence.
            </p>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-square">
              {/* Orbit ring */}
              <OrbitGraphic className="absolute inset-0 h-full w-full text-cyan-400/70 animate-spin-slow" />
              {/* Atom */}
              <AtomGraphic className="absolute inset-0 h-full w-full text-cyan-300/80 animate-spin-rev" />
              {/* Core card */}
              <div className="absolute inset-0 m-auto flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-navy-800 to-navy-950 shadow-glow ring-1 ring-white/10 sm:h-52 sm:w-52">
                <div className="text-center">
                  <GraduationCap className="mx-auto h-10 w-10 text-cyan-300" />
                  <p className="mt-2 font-display text-lg font-bold text-white">Physics</p>
                  <p className="text-xs font-medium uppercase tracking-widest text-cyan-200">First Year</p>
                </div>
              </div>

              {/* Floating formula chips */}
              <FormulaChip className="absolute left-0 top-6 animate-float">F = ma</FormulaChip>
              <FormulaChip className="absolute right-2 top-1/3 animate-float" >
                E = mc²
              </FormulaChip>
              <FormulaChip className="absolute bottom-8 left-4 animate-float" >
                v = u + at
              </FormulaChip>

              {/* Wave */}
              <WaveGraphic className="absolute -bottom-2 left-1/2 h-10 w-3/4 -translate-x-1/2 text-cyan-400/60 animate-wave" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="relative">
        <svg viewBox="0 0 1440 120" className="block w-full" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0 64 C 240 120 480 0 720 32 C 960 64 1200 120 1440 56 L 1440 120 L 0 120 Z"
            fill="#eef2fb"
          />
        </svg>
      </div>
    </section>
  );
}
