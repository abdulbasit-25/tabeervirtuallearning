import {
  BookOpen,
  Calculator,
  Brain,
  ClipboardCheck,
  ArrowRight,
  Atom,
  FunctionSquare,
  Orbit,
  Target,
} from 'lucide-react';

const courses = [
  {
    icon: BookOpen,
    accent: Atom,
    title: 'First Year Physics',
    desc: 'Complete conceptual preparation for 11th Class Physics.',
    tag: '11th Class',
  },
  {
    icon: Calculator,
    accent: FunctionSquare,
    title: 'Physics Numericals',
    desc: 'Understand numerical problems step by step.',
    tag: 'Problem Solving',
  },
  {
    icon: Brain,
    accent: Orbit,
    title: 'Concept Building',
    desc: 'Build strong foundations in Physics.',
    tag: 'Foundations',
  },
  {
    icon: ClipboardCheck,
    accent: Target,
    title: 'Exam Preparation',
    desc: 'Prepare smarter with important concepts and questions.',
    tag: 'Board Exams',
  },
];

export default function Courses() {
  return (
    <section id="courses" className="section-pad relative overflow-hidden bg-navy-50">
      <div
        className="absolute right-1/4 top-0 h-72 w-72 rounded-full bg-cyan-200/40 blur-[110px]"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip reveal">
            <BookOpen className="h-3.5 w-3.5 text-cyan-600" />
            Learning Programs
          </span>
          <h2 className="reveal mt-5 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl text-balance">
            Explore Our Physics Learning Programs
          </h2>
          <p className="reveal mt-4 text-base leading-relaxed text-navy-600 sm:text-lg">
            Each program is designed to take you from understanding to mastery,
            one concept at a time.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((c, i) => (
            <div
              key={c.title}
              className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-soft"
              data-reveal-delay={i * 80}
            >
              {/* Decorative accent */}
              <c.accent className="absolute -right-6 -top-6 h-24 w-24 text-navy-100 transition-colors duration-300 group-hover:text-cyan-100" />

              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 text-cyan-300 shadow-soft transition-all duration-300 group-hover:from-cyan-400 group-hover:to-cyan-500 group-hover:text-navy-900 group-hover:rotate-6">
                <c.icon className="h-6 w-6" />
              </div>

              <span className="relative mt-5 inline-flex w-fit items-center rounded-full bg-navy-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy-500">
                {c.tag}
              </span>

              <h3 className="relative mt-3 font-display text-xl font-bold text-navy-900">{c.title}</h3>
              <p className="relative mt-2 flex-1 text-sm leading-relaxed text-navy-600">{c.desc}</p>

              <a
                href="#join"
                className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors group-hover:text-cyan-700"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
