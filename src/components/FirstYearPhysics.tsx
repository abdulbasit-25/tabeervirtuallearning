import {
  BookOpen,
  Brain,
  Calculator,
  HelpCircle,
  ClipboardCheck,
  RefreshCw,
  ArrowRight,
  Layers,
} from 'lucide-react';

const cards = [
  { icon: Layers, title: 'Chapter-wise Lectures', desc: 'Complete coverage of every chapter in the First Year syllabus.' },
  { icon: Brain, title: 'Concept Building', desc: 'Strengthen fundamentals so advanced topics feel natural.' },
  { icon: Calculator, title: 'Numerical Problem Solving', desc: 'Step-by-step methods for every type of numerical.' },
  { icon: HelpCircle, title: 'Important Questions', desc: 'Board-focused questions selected for maximum relevance.' },
  { icon: ClipboardCheck, title: 'Exam Preparation', desc: 'Smart strategies and patterns to approach the exam.' },
  { icon: RefreshCw, title: 'Revision Sessions', desc: 'Regular recaps to keep concepts fresh before exams.' },
];

export default function FirstYearPhysics() {
  return (
    <section id="first-year" className="section-pad relative overflow-hidden bg-navy-50">
      <div
        className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-cyan-200/40 blur-[100px]"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip reveal">
            <Layers className="h-3.5 w-3.5 text-cyan-600" />
            First Year / 11th Class
          </span>
          <h2 className="reveal mt-5 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl text-balance">
            First Year Physics — Online Sessions
          </h2>
          <p className="reveal mt-4 text-base leading-relaxed text-navy-600 sm:text-lg">
            Join online sessions designed specifically for First Year / 11th
            Class Physics. Every topic is taught from the ground up with
            conceptual clarity and exam focus.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="reveal card group relative hover:-translate-y-1.5 hover:border-cyan-200 hover:shadow-soft"
              data-reveal-delay={i * 70}
            >
              <div className="absolute right-5 top-5 h-20 w-20 rounded-full bg-cyan-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-cyan-300 transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-navy-900 group-hover:rotate-6">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="relative mt-5 font-display text-lg font-bold text-navy-900">{c.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-navy-600">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <a href="#join" className="btn-primary group">
            <BookOpen className="h-4 w-4" />
            Join First Year Sessions
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
