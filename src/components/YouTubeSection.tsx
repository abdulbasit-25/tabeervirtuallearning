import { Youtube, ExternalLink, PlayCircle, ThumbsUp, Video } from 'lucide-react';

export default function YouTubeSection() {
  return (
    <section id="youtube" className="section-pad relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/3 rounded-full bg-red-500/20 blur-[100px]"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-300 backdrop-blur">
            <Youtube className="h-3.5 w-3.5" />
            YouTube Channel
          </span>
          <h2 className="reveal mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-balance">
            Learn Physics on YouTube
          </h2>
          <p className="reveal mt-4 text-base leading-relaxed text-navy-200 sm:text-lg">
            Access Physics lectures, conceptual explanations, problem-solving
            sessions, and useful learning content on YouTube.
          </p>
        </div>

        <div className="reveal mx-auto mt-12 max-w-4xl">
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-navy-900 to-navy-950 p-8 shadow-soft sm:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-red-500/20 blur-3xl" />
            <div className="grid items-center gap-8 sm:grid-cols-[auto_1fr]">
              {/* Play badge */}
              <div className="relative mx-auto">
                <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-red-600 text-white shadow-[0_0_50px_-8px_rgba(239,68,68,0.6)] transition-transform duration-300 group-hover:scale-105">
                  <Youtube className="h-14 w-14" />
                </div>
                <span className="absolute -inset-2 -z-10 rounded-3xl border border-red-500/30 animate-pulse-ring" />
              </div>

              <div className="text-center sm:text-left">
                <h3 className="font-display text-2xl font-extrabold text-white">Physics With Kashif</h3>
                <p className="mt-2 text-sm text-navy-200">
                  A growing library of Physics lectures and conceptual videos
                  available to students anytime, free of cost.
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-navy-100">
                    <Video className="h-3.5 w-3.5 text-cyan-300" /> Lectures
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-navy-100">
                    <PlayCircle className="h-3.5 w-3.5 text-cyan-300" /> Concept Videos
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-navy-100">
                    <ThumbsUp className="h-3.5 w-3.5 text-cyan-300" /> Problem Solving
                  </span>
                </div>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-10px_rgba(239,68,68,0.7)] transition-all duration-300 hover:bg-red-500 hover:-translate-y-0.5"
                >
                  <Youtube className="h-4 w-4" />
                  Visit YouTube Channel
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
