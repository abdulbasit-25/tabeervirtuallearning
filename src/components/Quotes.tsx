import { useEffect, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const quotes = [
  'Success in Physics begins when you stop memorizing and start understanding.',
  "Don't fear difficult concepts. Break them down, understand them, and master them.",
  'Great results come from strong concepts and consistent practice.',
  'Physics is not just about formulas — it\u2019s about understanding how the world works.',
];

export default function Quotes() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % quotes.length), 5500);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: number) =>
    setActive((a) => (a + dir + quotes.length) % quotes.length);

  return (
    <section className="section-pad relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-200 backdrop-blur">
            <Quote className="h-3.5 w-3.5" />
            Inspiration
          </span>
          <h2 className="reveal mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Words to Learn By
          </h2>
        </div>

        <div
          className="reveal relative mx-auto mt-10 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-12">
            <Quote className="absolute left-6 top-6 h-10 w-10 text-cyan-400/30" />

            <div className="relative min-h-[7rem]">
              {quotes.map((q, i) => (
                <blockquote
                  key={i}
                  className={`absolute inset-0 flex items-center transition-all duration-700 ${
                    i === active
                      ? 'translate-y-0 opacity-100'
                      : 'pointer-events-none translate-y-4 opacity-0'
                  }`}
                >
                  <p className="font-display text-xl font-medium leading-relaxed text-white sm:text-2xl text-balance">
                    "{q}"
                  </p>
                </blockquote>
              ))}
            </div>

            <div className="relative mt-8 flex items-center justify-between">
              <div className="flex gap-1.5">
                {quotes.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Quote ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? 'w-7 bg-cyan-400' : 'w-1.5 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous quote"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/15"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next quote"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/15"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
