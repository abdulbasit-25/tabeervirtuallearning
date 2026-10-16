import {
  Radio,
  MessageSquare,
  Calculator,
  Users,
  ClipboardCheck,
  RefreshCw,
  Check,
  ArrowRight,
  CalendarDays,
  Clock,
  BookOpen,
} from 'lucide-react';
import { PulseRings, DotGrid } from '@/components/PhysicsDecor';

const features = [
  { icon: BookOpen, label: 'Live Concept Explanation' },
  { icon: MessageSquare, label: 'Interactive Q&A' },
  { icon: Calculator, label: 'Numerical Problem Solving' },
  { icon: Users, label: 'Student Discussion' },
  { icon: ClipboardCheck, label: 'Exam Preparation' },
  { icon: RefreshCw, label: 'Regular Revision' },
];

export default function LiveLectures() {
  return (
    <section id="live" className="section-pad relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
      <DotGrid className="text-cyan-400/40" />
      <div
        className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/20 blur-[110px]"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-200 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Live & Interactive
          </span>
          <h2 className="reveal mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-balance">
            Live Physics Classes
          </h2>
          <p className="reveal mt-4 text-base leading-relaxed text-navy-200 sm:text-lg">
            Learn directly with Sir M. Kashif through interactive live online
            lectures.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Features list */}
          <div className="reveal grid gap-3 sm:grid-cols-2">
            {features.map((f, i) => (
              <div
                key={f.label}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
                data-reveal-delay={i * 60}
              >
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-400/20 transition-colors group-hover:bg-cyan-400 group-hover:text-navy-900">
                  <f.icon className="h-4.5 w-4.5" />
                </span>
                <span className="flex items-center gap-2 text-sm font-medium text-navy-100">
                  <Check className="h-4 w-4 flex-none text-cyan-400" />
                  {f.label}
                </span>
              </div>
            ))}
            <div className="sm:col-span-2">
              <a href="#join" className="btn-primary group mt-2 w-full sm:w-auto">
                <Radio className="h-4 w-4" />
                Join a Live Lecture
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Next live class card */}
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-navy-900 to-navy-950 p-8 shadow-soft">
              <PulseRings />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-300 ring-1 ring-red-500/30">
                    <Radio className="h-3.5 w-3.5" /> Next Live Class
                  </span>
                  <span className="text-xs font-medium text-navy-300">Schedule</span>
                </div>

                <div className="mt-7 space-y-4">
                  <Row icon={CalendarDays} label="Date" value="Coming Soon" />
                  <Row icon={Clock} label="Time" value="Coming Soon" />
                  <Row icon={BookOpen} label="Topic" value="Coming Soon" />
                </div>

                <a href="#join" className="btn-primary mt-7 w-full">
                  Join Class
                  <ArrowRight className="h-4 w-4" />
                </a>
                <p className="mt-3 text-center text-xs text-navy-300">
                  The schedule will appear here once the next session is announced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof CalendarDays;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <span className="flex items-center gap-2.5 text-sm font-medium text-navy-200">
        <Icon className="h-4 w-4 text-cyan-300" />
        {label}
      </span>
      <span className="font-display text-sm font-bold text-white">{value}</span>
    </div>
  );
}
