import { ArrowRight, BookOpen, GraduationCap, Globe, Users, Award, ShieldCheck, FileText } from 'lucide-react';
import { EPSA_META } from '../data/epsaData';

interface HeroProps {
  onOpenJoinModal: () => void;
}

export function Hero({ onOpenJoinModal }: HeroProps) {
  return (
    <section id="top" className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Sub-kicker: Clean unboxed text with subtle typographic separators */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-4">
          <span>National Student Association</span>
          <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
          <span>Since {EPSA_META.foundedEc}</span>
          <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
          <span className="text-amber-700 dark:text-amber-400 font-bold">72nd IPSF Full Member 2026</span>
        </div>

        {/* 2-Column Split: Content & Focal Anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-neutral-900 dark:text-neutral-50 [text-wrap:balance] leading-[1.12]">
              Empowering minds, <br className="hidden sm:inline" />
              <span className="text-emerald-700 dark:text-emerald-400 underline decoration-amber-400/80 decoration-wavy decoration-2">
                shaping futures.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed">
              EPSA is the leading Ethiopian advocacy organization uniting pharmacy students across 25 university chapters. We advance the pharmacy profession through unified education, clinical training, national exit exam prep, policy advocacy, and international IPSF representation.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#library"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Mega E-Library</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-neutral-800 dark:text-neutral-100 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-lg transition-colors whitespace-nowrap shrink-0 border border-neutral-200 dark:border-neutral-700"
              >
                <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Get Digital Member ID</span>
              </button>

              <a
                href={EPSA_META.officialPdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-emerald-700 dark:hover:text-emerald-400 bg-white dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Official Charter (PDF)</span>
              </a>

              <a
                href={EPSA_META.telegram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-sky-700 dark:text-sky-300 hover:text-sky-800 dark:hover:text-sky-200 transition-colors whitespace-nowrap shrink-0"
              >
                <span>Telegram: {EPSA_META.telegramHandle}</span>
              </a>
            </div>

            {/* IPSF Full Membership Announcement Highlight Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-amber-950 dark:text-amber-200">
                    Historic Milestone: EPSA is Now a Full Member of IPSF
                  </h2>
                  <p className="mt-1 text-xs text-amber-900/80 dark:text-amber-300/90 leading-relaxed">
                    At the 72nd General Assembly of the International Pharmaceutical Students’ Federation (IPSF) in 2026, the motion formally accepting EPSA Ethiopia as a full voting member was ratified. This elevates Ethiopian pharmacy students to global health leadership and bilateral Student Exchange Programs (SEP).
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural focal container with Core Association Pillars */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/80 space-y-5 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-700">
                <div className="space-y-0.5">
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                    Governance & Scope
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-50">
                    National Student Federation
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-neutral-500 dark:text-neutral-400">
                    EST. 2004 E.C.
                  </span>
                </div>
              </div>

              {/* 3 Core Impact Highlights */}
              <div className="space-y-3.5">
                <div className="p-3.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700/60">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                      1st National Paid Internship
                    </span>
                    <span className="text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400">
                      Launched Jan 2026
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                    10-month hospital attachments funded with Ethiopian Pharmaceutical Association for 14 female seniors.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700/60">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                      Directed Studies Research Symposium
                    </span>
                    <span className="text-xs font-mono font-medium text-neutral-500 dark:text-neutral-400">
                      Since 2015 E.C.
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                    Annual graduation research presentations defended before senior clinicians and academic juries.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700/60">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                      National AMR & Pharmacists Day
                    </span>
                    <span className="text-xs font-mono font-medium text-amber-700 dark:text-amber-400">
                      15+ Universities
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                    Active antibiotic stewardship audits, community blood donation drives, and hospital walk-through counseling.
                  </p>
                </div>
              </div>

              {/* Values ribbon: clean inline typographic tags without pills */}
              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-700">
                <span className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 block mb-1.5 uppercase tracking-wider">
                  Core Values
                </span>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-normal">
                  Quality · Trust · Integrity · Perseverance · Compassion · Respect · Leadership · Excellence · Advocacy
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Proof of Scope / Quantitative Rigor Strip (Full-width below hero split) */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-neutral-900 dark:text-neutral-50 tabular-nums">
                25
              </span>
            </div>
            <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
              Regional Chapter Offices nationwide
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-neutral-900 dark:text-neutral-50 tabular-nums">
                4,500+
              </span>
            </div>
            <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
              Active pharmacy student members
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-neutral-900 dark:text-neutral-50">
                IPSF
              </span>
            </div>
            <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
              Full Member, 72nd General Assembly 2026
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-neutral-900 dark:text-neutral-50 tabular-nums">
                2004 E.C.
              </span>
            </div>
            <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
              Over two decades of student advocacy
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
