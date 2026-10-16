import { Award, BookOpenCheck, Lightbulb, Target, GraduationCap } from 'lucide-react';
import { DotGrid } from '@/components/PhysicsDecor';

const features = [
  {
    icon: BookOpenCheck,
    title: 'Concept-Based Learning',
    desc: 'Lessons built around understanding the why behind every formula, not just memorizing the result.',
  },
  {
    icon: Lightbulb,
    title: 'Easy & Clear Explanations',
    desc: 'Difficult topics broken into simple steps so every student can follow along with confidence.',
  },
  {
    icon: Target,
    title: 'Exam-Focused Preparation',
    desc: 'Important questions, numerical patterns, and revision strategies aligned with board exams.',
  },
];

export default function AboutTeacher() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-navy-50">
      <DotGrid className="text-navy-300" />
      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image placeholder */}
          <div className="reveal relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="relative overflow-hidden rounded-[2rem] border border-navy-100 bg-gradient-to-br from-navy-900 to-navy-950 p-8 shadow-soft">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-2xl" />
              <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-navy-500/30 blur-2xl" />
              <div className="relative flex aspect-[4/5] items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-400/30">
                    <GraduationCap className="h-10 w-10" />
                  </div>
                  <p className="mt-4 font-display text-lg font-bold text-white">Sir M. Kashif</p>
                  <p className="text-sm text-cyan-200/80">Physics Educator</p>
                  <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold text-cyan-200">
                    <Award className="h-3.5 w-3.5" />
                    9+ Years Teaching Experience
                  </div>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-navy-100 bg-white px-4 py-3 shadow-soft sm:-right-6">
              <p className="font-display text-2xl font-extrabold text-navy-900">9+</p>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-navy-500">Years Experience</p>
            </div>
          </div>

          {/* Copy */}
          <div>
            <span className="chip reveal">
              <GraduationCap className="h-3.5 w-3.5 text-cyan-600" />
              About the Teacher
            </span>
            <h2 className="reveal mt-5 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl text-balance">
              Learn Physics with Experience
            </h2>
            <p className="reveal mt-5 max-w-xl text-base leading-relaxed text-navy-600 sm:text-lg">
              Sir M. Kashif is an experienced Physics teacher with 9+ years of
              teaching experience. His teaching approach focuses on building
              strong concepts, simplifying difficult topics, and helping
              students develop confidence in Physics.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-cyan-200 bg-cyan-50 px-5 py-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-navy-900">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg font-bold text-navy-900">9+ Years Teaching Experience</p>
                <p className="text-sm text-navy-600">Guiding students toward conceptual mastery</p>
              </div>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="reveal card group hover:-translate-y-1 hover:border-cyan-200 hover:shadow-soft"
                  data-reveal-delay={i * 90}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-cyan-300 transition-colors group-hover:bg-cyan-400 group-hover:text-navy-900">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-navy-900">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
