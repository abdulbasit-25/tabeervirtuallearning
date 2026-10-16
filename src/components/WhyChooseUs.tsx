import {
  Award,
  Brain,
  Radio,
  BookOpen,
  Lightbulb,
  Calculator,
  ClipboardCheck,
  Youtube,
  Check,
  Sparkles,
} from 'lucide-react';
import { useCountUp } from '@/hooks/useScrollReveal';

const reasons = [
  { icon: Award, label: '9+ Years of Teaching Experience' },
  { icon: Brain, label: 'Concept-Based Physics' },
  { icon: Radio, label: 'Online Live Sessions' },
  { icon: BookOpen, label: 'First Year Physics Preparation' },
  { icon: Lightbulb, label: 'Easy-to-Understand Lectures' },
  { icon: Calculator, label: 'Numerical Problem Solving' },
  { icon: ClipboardCheck, label: 'Exam-Oriented Preparation' },
  { icon: Youtube, label: 'YouTube Learning Resources' },
];

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const { ref, value: v } = useCountUp(value);
  return (
    <div className="reveal text-center">
      <p ref={ref as React.RefObject<HTMLParagraphElement>} className="font-display text-4xl font-extrabold text-white sm:text-5xl">
        {v}
        {suffix}
      </p>
      <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-200/80">{label}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="section-pad relative overflow-hidden bg-navy-50">
      <div
        className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-cyan-200/40 blur-[110px]"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip reveal">
            <Sparkles className="h-3.5 w-3.5 text-cyan-600" />
            Why Choose Us
          </span>
          <h2 className="reveal mt-5 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl text-balance">
            Why Students Choose Tabeer Virtual Learning
          </h2>
        </div>

        {/* Animated counters */}
        <div className="reveal mt-12 grid grid-cols-2 gap-6 rounded-[2rem] border border-navy-100 bg-gradient-to-br from-navy-900 to-navy-950 p-8 shadow-soft sm:grid-cols-4 sm:p-10">
          <Stat value={9} suffix="+" label="Years Experience" />
          <Stat value={11} suffix="th" label="First Year Focus" />
          <Stat value={100} suffix="%" label="Concept-Based" />
          <Stat value={1} suffix="" label="Dedicated Teacher" />
        </div>

        {/* Reasons grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <div
              key={r.label}
              className="reveal group flex items-center gap-3 rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-soft"
              data-reveal-delay={i * 60}
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-navy-900 text-cyan-300 transition-colors group-hover:bg-cyan-400 group-hover:text-navy-900">
                <r.icon className="h-5 w-5" />
              </span>
              <span className="flex items-center gap-2 text-sm font-semibold text-navy-800">
                <Check className="h-4 w-4 flex-none text-cyan-500" />
                {r.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
