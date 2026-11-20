import { useState, useEffect } from 'react';
import { DAILY_CLINICAL_QUESTIONS } from '../data/epsaData';
import { Sparkles, CheckCircle2, XCircle, ArrowRight, RotateCcw, Zap, HelpCircle, Lightbulb, Calendar, FileText } from 'lucide-react';

export function DailyLounge() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [streak, setStreak] = useState(3);
  const [totalSolved, setTotalSolved] = useState(14);
  const [activeTab, setActiveTab] = useState<'clinical' | 'dosageTool'>('clinical');

  // Dosage calculator state for the quick desk
  const [crclScr, setCrclScr] = useState('1.1');
  const [crclAge, setCrclAge] = useState('54');
  const [crclWeight, setCrclWeight] = useState('68');
  const [crclGender, setCrclGender] = useState<'male' | 'female'>('male');

  useEffect(() => {
    const savedStreak = localStorage.getItem('epsa_quiz_streak');
    if (savedStreak) setStreak(parseInt(savedStreak, 10));
    const savedSolved = localStorage.getItem('epsa_quiz_solved');
    if (savedSolved) setTotalSolved(parseInt(savedSolved, 10));
  }, []);

  const currentQuestion = DAILY_CLINICAL_QUESTIONS[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQuestion.correctIndex) {
      const newStreak = streak + 1;
      const newSolved = totalSolved + 1;
      setStreak(newStreak);
      setTotalSolved(newSolved);
      localStorage.setItem('epsa_quiz_streak', newStreak.toString());
      localStorage.setItem('epsa_quiz_solved', newSolved.toString());
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setCurrentIdx((prev) => (prev + 1) % DAILY_CLINICAL_QUESTIONS.length);
  };

  const handleResetStreak = () => {
    setStreak(1);
    localStorage.setItem('epsa_quiz_streak', '1');
  };

  // Cockcroft-Gault CrCl calculation: ((140 - age) * weight) / (72 * Scr) * (0.85 if female)
  const calculateCrCl = () => {
    const age = parseFloat(crclAge) || 0;
    const wt = parseFloat(crclWeight) || 0;
    const scr = parseFloat(crclScr) || 1;
    if (scr <= 0 || age <= 0 || wt <= 0) return 0;
    let crcl = ((140 - age) * wt) / (72 * scr);
    if (crclGender === 'female') crcl *= 0.85;
    return Math.round(crcl * 10) / 10;
  };

  const crclResult = calculateCrCl();

  return (
    <section id="lounge" className="py-16 md:py-20 bg-neutral-100/70 dark:bg-neutral-950/80 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
              <span>Daily Student Lounge</span>
              <span aria-hidden="true">·</span>
              <span>Interactive Ward & Board Prep</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-neutral-900 dark:text-neutral-50 tracking-tight mt-1">
              Sharpen your clinical instincts daily.
            </h2>
          </div>

          {/* Interactive Mode Tabs */}
          <div className="flex items-center gap-1 p-1 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('clinical')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'clinical'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
            >
              Daily Clinical Vignette
            </button>
            <button
              onClick={() => setActiveTab('dosageTool')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'dosageTool'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
            >
              Ward CrCl Calculator
            </button>
          </div>
        </div>

        {activeTab === 'clinical' ? (
          /* Clinical Vignette Card */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Vignette & Options */}
            <div className="lg:col-span-8 p-6 sm:p-8 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-6">
              
              {/* Question metadata */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                    {currentQuestion.subject}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Question {currentIdx + 1} of {DAILY_CLINICAL_QUESTIONS.length}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleResetStreak}
                    title="Reset streak counters"
                    className="text-[11px] text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Case vignette text */}
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
                  <span className="font-bold text-neutral-900 dark:text-white block mb-1">
                    Clinical Case Presentation:
                  </span>
                  {currentQuestion.vignette}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-50 pt-1">
                  {currentQuestion.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQuestion.options.map((option, optIdx) => {
                  const isSelected = selectedOption === optIdx;
                  const isCorrect = optIdx === currentQuestion.correctIndex;

                  let optionStyles = "bg-neutral-50 dark:bg-neutral-800/40 border-neutral-200 dark:border-neutral-700 hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20";

                  if (isAnswered) {
                    if (isCorrect) {
                      optionStyles = "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200";
                    } else if (isSelected && !isCorrect) {
                      optionStyles = "bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200";
                    } else {
                      optionStyles = "opacity-50 border-neutral-200 dark:border-neutral-800";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`w-full text-left p-3.5 rounded-xl border text-sm font-medium transition-all flex items-start justify-between gap-3 ${optionStyles}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-mono font-bold bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 shrink-0 mt-0.5">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{option}</span>
                      </div>

                      {isAnswered && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      )}
                      {isAnswered && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Rationale upon answer */}
              {isAnswered && (
                <div className="p-4 sm:p-5 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <span>Clinical Rationale & Pharmacology Breakdown</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {currentQuestion.rationale}
                  </p>
                  <div className="pt-2 border-t border-neutral-200 dark:border-neutral-700 flex items-start gap-2 text-xs text-emerald-800 dark:text-emerald-300 font-medium">
                    <span className="font-bold shrink-0">Clinical Pearl:</span>
                    <span>{currentQuestion.clinicalPearl}</span>
                  </div>
                </div>
              )}

              {/* Next Question Control */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {isAnswered ? "Answer revealed. Ready for the next case?" : "Select your best clinical judgment above."}
                </span>

                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                >
                  <span>Next Clinical Question</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Right: Daily Streak & Quick Desk Card */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Daily Streak & Performance Box */}
              <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Your Study Momentum
                  </span>
                  <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50">
                    <span className="text-2xl font-extrabold font-mono text-amber-800 dark:text-amber-400 tabular-nums">
                      {streak} Days
                    </span>
                    <p className="text-[11px] font-medium text-amber-900/70 dark:text-amber-300/80 mt-0.5">
                      Daily Case Streak
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/50">
                    <span className="text-2xl font-extrabold font-mono text-emerald-800 dark:text-emerald-400 tabular-nums">
                      {totalSolved}
                    </span>
                    <p className="text-[11px] font-medium text-emerald-900/70 dark:text-emerald-300/80 mt-0.5">
                      Cases Completed
                    </p>
                  </div>
                </div>

                <div className="text-xs text-neutral-500 dark:text-neutral-400 leading-normal pt-2 border-t border-neutral-100 dark:border-neutral-800">
                  Answering one clinical scenario each morning prepares you for the National Exit Exam and bedside hospital ward discussions.
                </div>
              </div>

              {/* Live Student Bulletin / Important Dates */}
              <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider">
                  <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>National Student Bulletin</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60">
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100 block">
                      Paid Internship Cohort 2 Applications
                    </span>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-0.5">
                      Joint program with EPA expanding slots for 5th-year pharmacy graduates.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60">
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100 block">
                      Directed Studies Research Abstract Call
                    </span>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-0.5">
                      Open to all graduating seniors presenting original pharmacy research.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60">
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100 block">
                      IPSF Student Exchange Program (SEP)
                    </span>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-0.5">
                      Bilateral slots confirmed following EPSA full membership ratification.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* Ward CrCl Calculator Tool */
          <div className="p-6 sm:p-8 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm max-w-3xl mx-auto space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
                Bedside Cockcroft-Gault Creatinine Clearance (CrCl) Calculator
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Essential bedside tool for 4th and 5th-year students calculating antimicrobial and cardiac drug dose adjustments on clinical hospital rounds.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                  Patient Age (years)
                </label>
                <input
                  type="number"
                  value={crclAge}
                  onChange={(e) => setCrclAge(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                  Actual Body Weight (kg)
                </label>
                <input
                  type="number"
                  value={crclWeight}
                  onChange={(e) => setCrclWeight(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                  Serum Creatinine (mg/dL)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={crclScr}
                  onChange={(e) => setCrclScr(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                  Biological Sex
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setCrclGender('male')}
                    className={`py-2 text-xs font-medium rounded-lg border transition-colors ${
                      crclGender === 'male'
                        ? 'bg-emerald-700 text-white border-emerald-700'
                        : 'bg-neutral-50 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700'
                    }`}
                  >
                    Male (1.0 factor)
                  </button>
                  <button
                    onClick={() => setCrclGender('female')}
                    className={`py-2 text-xs font-medium rounded-lg border transition-colors ${
                      crclGender === 'female'
                        ? 'bg-emerald-700 text-white border-emerald-700'
                        : 'bg-neutral-50 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700'
                    }`}
                  >
                    Female (0.85 factor)
                  </button>
                </div>
              </div>
            </div>

            {/* Result Box */}
            <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-emerald-900 dark:text-emerald-300 block">
                  Estimated Creatinine Clearance:
                </span>
                <span className="text-3xl font-extrabold font-mono text-emerald-800 dark:text-emerald-400 tabular-nums">
                  {crclResult} <span className="text-sm font-sans font-normal text-emerald-700 dark:text-emerald-300">mL/min</span>
                </span>
              </div>
              <div className="text-right text-xs text-neutral-600 dark:text-neutral-400 max-w-xs">
                {crclResult >= 90 && "Normal renal clearance. Standard antimicrobial dosing applicable."}
                {crclResult < 90 && crclResult >= 60 && "Mild renal impairment. Monitor narrow therapeutic index agents."}
                {crclResult < 60 && crclResult >= 30 && "Moderate renal impairment. Dose reduction indicated for Vancomycin, Cefepime, Enoxaparin."}
                {crclResult < 30 && "Severe renal impairment. Mandatory clinical pharmacy consult for renal dosage adjustments."}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
