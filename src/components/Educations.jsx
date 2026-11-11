import { BookOpen, CalendarDays, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { educationHistory } from '../constants';
const Educations = ({ className }) => {
  return (
    <section id="EDUCATION" className={`font-nunita ${className}`}>
      <div className="mx-auto mb-8 max-w-xl text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
          <GraduationCap size={15} aria-hidden="true" />
          Academic journey
        </div>
        <h2 className="font-oswald text-3xl font-bold tracking-wide text-slate-100 md:text-4xl">
          Education
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-400 md:text-base">
          A foundation in computer science, built through continuous learning.
        </p>
      </div>

      <div className="relative">
        <div
          className="absolute left-1/2 top-8 hidden h-px w-[calc(100%-9rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent md:block"
          aria-hidden="true"
        />
        <ol className="grid gap-5 md:grid-cols-2 md:gap-6">
          {educationHistory.map((record, index) => {
            const status = record.status ?? 'Completed';
            const statusStyles = {
              'In progress': 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
              Completed: 'border-slate-600 bg-slate-800 text-slate-300',
              Discontinued: 'border-amber-400/30 bg-amber-400/10 text-amber-200',
            };

            return (
              <motion.li
                key={record.schoolName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                className="relative rounded-2xl border border-slate-700/80 bg-slate-900/70 p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-cyan-500/10 md:p-6"
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <BookOpen size={21} aria-hidden="true" />
                  </div>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-bold ${
                      statusStyles[status]
                    }`}
                  >
                    {status}
                  </span>
                </div>

                <h3 className="font-oswald text-2xl font-semibold leading-tight text-slate-100">
                  {record.schoolName}
                </h3>
                <p className="mt-2 text-base font-medium text-cyan-200/90">
                  {record.department}
                </p>
                <div className="mt-5 flex items-center gap-2 border-t border-slate-700/70 pt-4 text-sm text-slate-400">
                  <CalendarDays
                    size={16}
                    className="text-cyan-400"
                    aria-hidden="true"
                  />
                  <span>{record.durationYear}</span>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Educations;
