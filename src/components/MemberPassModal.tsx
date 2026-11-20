import { useState } from 'react';
import { EPSA_CHAPTERS, EPSA_META } from '../data/epsaData';
import { BrandLogo } from './BrandLogo';
import { X, Check, Download, ArrowRight, QrCode, Shield, Sparkles, Send } from 'lucide-react';

interface MemberPassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MemberPassModal({ isOpen, onClose }: MemberPassModalProps) {
  const [step, setStep] = useState<'form' | 'pass'>('form');
  const [fullName, setFullName] = useState('Abel Hailemariam');
  const [chapterId, setChapterId] = useState('aau');
  const [yearLevel, setYearLevel] = useState('Year 4 (Clinical)');
  const [interest, setInterest] = useState('Clinical Pharmacy & AMR Stewardship');
  const [telegramHandle, setTelegramHandle] = useState('@abel_pharma');
  const [membershipId, setMembershipId] = useState('EPSA-2026-AAU-8419');
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const selectedChapter = EPSA_CHAPTERS.find((c) => c.id === chapterId) || EPSA_CHAPTERS[0];

  const handleGeneratePass = (e: React.FormEvent) => {
    e.preventDefault();
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const code = `EPSA-2026-${selectedChapter.id.toUpperCase()}-${randomDigits}`;
    setMembershipId(code);
    setStep('pass');
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(membershipId);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/75 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 sm:p-8 space-y-6 my-8">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                <span>Student Membership Gateway</span>
                <span aria-hidden="true">·</span>
                <span>2026 Intake</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-neutral-50 mt-1">
                Join 4,500+ Pharmacy Students
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mt-1">
                Generate your official verified EPSA digital membership pass to access the Mega E-Library, national competitions, and IPSF exchange bilateral slots.
              </p>
            </div>

            <form onSubmit={handleGeneratePass} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                  Full Name (As registered in your University)
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    University Chapter
                  </label>
                  <select
                    value={chapterId}
                    onChange={(e) => setChapterId(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none"
                  >
                    {EPSA_CHAPTERS.map((ch) => (
                      <option key={ch.id} value={ch.id}>
                        {ch.universityName} ({ch.city})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    Year of Study
                  </label>
                  <select
                    value={yearLevel}
                    onChange={(e) => setYearLevel(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none"
                  >
                    <option value="Year 1 (Pre-Pharmacy)">Year 1 (Pre-Pharmacy)</option>
                    <option value="Year 2 (Foundations)">Year 2 (Foundations)</option>
                    <option value="Year 3 (Pharmacology & MedChem)">Year 3 (Pharmacology & MedChem)</option>
                    <option value="Year 4 (Clinical Pharmacotherapy)">Year 4 (Clinical Pharmacotherapy)</option>
                    <option value="Year 5 (Hospital Clerkship & Internship)">Year 5 (Hospital Clerkship & Internship)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                  Primary Area of Interest
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none"
                >
                  <option value="Clinical Pharmacy & AMR Stewardship">Clinical Pharmacy & AMR Stewardship</option>
                  <option value="Directed Studies & Original Pharmaceutical Research">Directed Studies & Original Pharmaceutical Research</option>
                  <option value="IPSF Global Student Exchange Program (SEP)">IPSF Global Student Exchange Program (SEP)</option>
                  <option value="Industrial Pharmacy & Quality Control">Industrial Pharmacy & Quality Control</option>
                  <option value="Student Welfare & Paid Internship Advocacy">Student Welfare & Paid Internship Advocacy</option>
                  <option value="Pharma Cup Sports & Community Outreach">Pharma Cup Sports & Community Outreach</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                  Telegram Username (For Chapter Communication)
                </label>
                <input
                  type="text"
                  required
                  value={telegramHandle}
                  onChange={(e) => setTelegramHandle(e.target.value)}
                  placeholder="@your_username"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-sm transition-all"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Generate Official EPSA Student Pass</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Step 2: Rendered Official Digital Pass */
          <div className="space-y-6">
            <div className="text-center space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Verified Student Credential
              </span>
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-neutral-50">
                Your EPSA Digital Member Pass
              </h3>
            </div>

            {/* The Physical Card Container */}
            <div className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-neutral-900 text-white shadow-xl border border-emerald-700/60 overflow-hidden">
              
              {/* Background watermark badge */}
              <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                <BrandLogo className="w-48 h-48" />
              </div>

              {/* Pass Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-emerald-700/60">
                <div className="flex items-center gap-3">
                  <BrandLogo className="w-10 h-10" />
                  <div>
                    <h4 className="text-sm font-bold tracking-tight">EPSA ETHIOPIA</h4>
                    <span className="text-[10px] text-emerald-200 block font-mono">
                      የኢትዮጵያ ፋርማሲ ተማሪዎች ማህበር
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-800/80 border border-emerald-600/60 text-amber-300 font-bold">
                    IPSF FULL MEMBER
                  </span>
                </div>
              </div>

              {/* Pass Body */}
              <div className="py-5 space-y-3">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-300/80 block">
                    Student Member Name
                  </span>
                  <div className="text-lg font-bold font-display tracking-wide">
                    {fullName}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-emerald-300/80 block">
                      University Chapter
                    </span>
                    <span className="font-semibold">{selectedChapter.universityName}</span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-emerald-300/80 block">
                      Academic Level
                    </span>
                    <span className="font-semibold">{yearLevel}</span>
                  </div>
                </div>

                <div className="text-xs">
                  <span className="text-[10px] uppercase tracking-wider text-emerald-300/80 block">
                    Focus Portfolio
                  </span>
                  <span className="text-emerald-100 font-medium">{interest}</span>
                </div>
              </div>

              {/* Pass Footer with QR & Verification Code */}
              <div className="pt-4 border-t border-emerald-700/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-emerald-300/80 block">
                    Membership ID
                  </span>
                  <span className="text-xs font-mono font-bold tracking-wider text-amber-300">
                    {membershipId}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-white rounded-lg shadow-xs">
                    {/* SVG QR representation */}
                    <QrCode className="w-8 h-8 text-neutral-900" />
                  </div>
                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="space-y-3 pt-1">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={handleCopyId}
                  className="w-full sm:w-1/2 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-800 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-xl transition-colors border border-neutral-300 dark:border-neutral-700"
                >
                  <Check className={`w-4 h-4 ${isCopied ? 'text-emerald-600' : 'text-neutral-400'}`} />
                  <span>{isCopied ? 'ID Copied to Clipboard!' : 'Copy Member ID'}</span>
                </button>

                <a
                  href={EPSA_META.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-1/2 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-xs transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Join Official Telegram</span>
                </a>
              </div>

              <button
                onClick={() => setStep('form')}
                className="w-full text-center text-xs text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 pt-1"
              >
                Edit member details
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
