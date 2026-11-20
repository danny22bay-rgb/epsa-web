import { useState } from 'react';
import { ADVOCACY_PILLARS } from '../data/epsaData';
import { AdvocacyPillar } from '../types';
import { ShieldCheck, Check, ArrowRight, FileCheck, ThumbsUp, Landmark, HelpCircle, ChevronRight } from 'lucide-react';

export function AdvocacyTracker() {
  const [pillars, setPillars] = useState<AdvocacyPillar[]>(ADVOCACY_PILLARS);
  const [signedIds, setSignedIds] = useState<string[]>([]);
  const [expandedId, setExpandedId] = useState<string>('adv_pharmd');
  const [signModalPillar, setSignModalPillar] = useState<AdvocacyPillar | null>(null);
  const [studentName, setStudentName] = useState('');
  const [studentUni, setStudentUni] = useState('Addis Ababa University');
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const handleOpenSign = (pillar: AdvocacyPillar) => {
    if (signedIds.includes(pillar.id)) return;
    setSignModalPillar(pillar);
  };

  const handleSubmitSignature = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signModalPillar) return;

    // Increment count
    setPillars((prev) =>
      prev.map((p) =>
        p.id === signModalPillar.id ? { ...p, studentSignatures: p.studentSignatures + 1 } : p
      )
    );

    setSignedIds((prev) => [...prev, signModalPillar.id]);
    setSuccessToast(`Voice registered! You endorsed "${signModalPillar.title}".`);
    setSignModalPillar(null);
    setStudentName('');

    setTimeout(() => {
      setSuccessToast(null);
    }, 4000);
  };

  return (
    <section id="advocacy" className="py-16 md:py-24 bg-neutral-100/60 dark:bg-neutral-950/70 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toast */}
        {successToast && (
          <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-emerald-900 text-white shadow-xl flex items-center gap-3 border border-emerald-700 animate-in fade-in slide-in-from-bottom-2">
            <Check className="w-5 h-5 text-emerald-300" />
            <span className="text-xs font-medium">{successToast}</span>
          </div>
        )}

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider mb-2">
              <span>National Representation</span>
              <span aria-hidden="true">·</span>
              <span>Revised 2026 Official Policy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 dark:text-neutral-50 tracking-tight">
              What we advocate for.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
              EPSA speaks for students on the structural issues that shape pharmacy education, hospital practice rights, and career standards across Ethiopia. Track our progress across the 7 student beneficiary advocacies defined in our official Revised 2026 Charter.
            </p>
          </div>

          <a
            href="/assets/aistudio/EPSA_AIM_OBJECTIVE___ACTIVITIES_Revised__3__add41786.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-900 dark:text-white bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 hover:border-emerald-600 rounded-xl shadow-xs transition-all whitespace-nowrap shrink-0"
          >
            <Landmark className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Read Official 2026 Charter (PDF)</span>
          </a>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const isSigned = signedIds.includes(pillar.id);
            const isExpanded = expandedId === pillar.id;

            return (
              <div
                key={pillar.id}
                className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs flex flex-col justify-between transition-all hover:border-neutral-300 dark:hover:border-neutral-700"
              >
                <div className="space-y-4">
                  
                  {/* Status header */}
                  <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400 truncate max-w-[200px]">
                      {pillar.targetBody}
                    </span>
                    <span className="font-mono font-bold tabular-nums">
                      {pillar.progressPercent}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-neutral-100 dark:bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-600 dark:bg-emerald-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${pillar.progressPercent}%` }}
                    />
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-neutral-50">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
                      {pillar.summary}
                    </p>
                  </div>

                  {/* Status Badge text */}
                  <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 text-xs text-neutral-700 dark:text-neutral-300">
                    <span className="font-semibold block text-neutral-900 dark:text-neutral-100 mb-0.5">
                      Current Milestone:
                    </span>
                    {pillar.statusText}
                  </div>

                  {/* Expandable Key Demands */}
                  {isExpanded ? (
                    <div className="space-y-2 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                      <span className="text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                        Core Student Demands:
                      </span>
                      <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                        {pillar.keyDemands.map((demand, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0">·</span>
                            <span>{demand}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => setExpandedId('')}
                        className="text-xs text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 pt-1"
                      >
                        Hide details
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setExpandedId(pillar.id)}
                      className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 dark:text-emerald-400 hover:underline pt-1"
                    >
                      <span>View key demands & policy brief</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                </div>

                {/* Footer action */}
                <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 tabular-nums">
                    {pillar.studentSignatures.toLocaleString()} student endorsements
                  </div>

                  {isSigned ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                      <Check className="w-4 h-4" />
                      <span>Signed</span>
                    </span>
                  ) : (
                    <button
                      onClick={() => handleOpenSign(pillar)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-lg transition-colors border border-neutral-200 dark:border-neutral-700"
                    >
                      <ThumbsUp className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Sign Resolution</span>
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Sign Resolution Modal */}
        {signModalPillar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-xs">
            <div className="relative w-full max-w-md bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 sm:p-7 space-y-5">
              
              <div>
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                  National Student Resolution
                </span>
                <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-neutral-50 mt-1">
                  Endorse {signModalPillar.title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-1 leading-relaxed">
                  Join {signModalPillar.studentSignatures.toLocaleString()} Ethiopian pharmacy students backing this official policy demand submitted to {signModalPillar.targetBody}.
                </p>
              </div>

              <form onSubmit={handleSubmitSignature} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bethlehem Yohannes"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    University / Chapter
                  </label>
                  <select
                    value={studentUni}
                    onChange={(e) => setStudentUni(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none"
                  >
                    <option value="Addis Ababa University">Addis Ababa University</option>
                    <option value="Jimma University">Jimma University</option>
                    <option value="University of Gondar">University of Gondar</option>
                    <option value="Hawassa University">Hawassa University</option>
                    <option value="Mekelle University">Mekelle University</option>
                    <option value="Haramaya University">Haramaya University</option>
                    <option value="Bahir Dar University">Bahir Dar University</option>
                    <option value="Arba Minch University">Arba Minch University</option>
                    <option value="Wollo University">Wollo University</option>
                    <option value="Other Regional Faculty">Other Regional Chapter</option>
                  </select>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSignModalPillar(null)}
                    className="px-4 py-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-all"
                  >
                    Confirm & Add My Signature
                  </button>
                </div>
              </form>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
