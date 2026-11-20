import { useState } from 'react';
import { EPSA_OFFICIAL_AIMS, EPSA_OBJECTIVES, EPSA_META } from '../data/epsaData';
import { Users, Layers, Award, CheckCircle, FileText, Download, GitBranch, Target, Shield, ExternalLink, ChevronRight } from 'lucide-react';

export function StructureGovernance() {
  const [activeTab, setActiveTab] = useState<'organogram' | 'aims' | 'objectives'>('organogram');

  return (
    <section id="structure" className="py-16 md:py-24 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider mb-2">
              <span>Constitution & Governance</span>
              <span aria-hidden="true">·</span>
              <span>Revised 2026 Charter</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 dark:text-neutral-50 tracking-tight">
              EPSA’s Aim, Objectives & Management System
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed max-w-3xl">
              Officially governing 4,500+ pharmacy students across 25 university chapters through democratic national and regional assemblies, 8 national standing committees, and dedicated taskforces.
            </p>
          </div>

          {/* Download Official Document Button */}
          <a
            href={EPSA_META.officialPdfUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-xs transition-all whitespace-nowrap shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Download Official 2026 Charter (PDF)</span>
          </a>
        </div>

        {/* Tab Controls (Zero-pill discipline: Clean segmented control buttons) */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-800/80 rounded-xl mb-10 overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveTab('organogram')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'organogram'
                ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            Hierarchical Management System
          </button>
          <button
            onClick={() => setActiveTab('aims')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'aims'
                ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            The 6 Official Aims
          </button>
          <button
            onClick={() => setActiveTab('objectives')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'objectives'
                ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            Constitutional Objectives
          </button>
        </div>

        {/* Tab 1: Hierarchical Management System */}
        {activeTab === 'organogram' && (
          <div className="space-y-10">
            {/* Overview Summary */}
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/80 leading-relaxed text-sm text-neutral-700 dark:text-neutral-300">
              <span className="font-bold text-neutral-900 dark:text-white block mb-1">
                Constitutional Governance Structure (Revised 2026):
              </span>
              EPSA operates seven voting and two Co-opted Non-voting Executive Committee members at the national level with their own defined roles and eight specialized subcommittees/organizing bodies to ease national operations. At the chapter level, EPSA unites 25 regional Chapter Offices and over 4,500 members with five Executive Committee members, five subcommittees, and dynamic project taskforces.
            </div>

            {/* 2-Tier Visual Architecture Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* National Tier (Fig 1.1) */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                    <span className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
                      Figure 1.1 · National Structure
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-neutral-500">General Assembly</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-neutral-50">
                    National Executive Committee (NEC)
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                    7 Voting Members · 2 Co-Opted Non-Voting Members · Auditor · Executive Assistants
                  </p>
                </div>

                {/* Authentic Diagram from Page 6 of PDF */}
                <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white p-2">
                  <span className="text-[10px] font-mono text-neutral-400 block mb-1">
                    Document Excerpt · Page 6 Fig (1.1)
                  </span>
                  <img
                    src="/assets/projects/national_structure_diagram.jpg"
                    alt="Figure 1.1: Structure of the National Executive Committee and Subcommittees"
                    className="w-full h-auto object-contain rounded-md"
                  />
                </div>

                {/* Subcommittees Breakdown */}
                <div className="space-y-3 pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
                    6 National Subcommittees:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">
                      <span className="font-semibold text-neutral-900 dark:text-white block">1. Media & Publications</span>
                      <span className="text-neutral-500 text-[11px]">Digital outreach, journals & PR</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">
                      <span className="font-semibold text-neutral-900 dark:text-white block">2. Documentations</span>
                      <span className="text-neutral-500 text-[11px]">Archives, resolutions & records</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">
                      <span className="font-semibold text-neutral-900 dark:text-white block">3. External Affairs</span>
                      <span className="text-neutral-500 text-[11px]">EPA, MoH, MoE & NGO partnerships</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">
                      <span className="font-semibold text-neutral-900 dark:text-white block">4. Internal Affairs</span>
                      <span className="text-neutral-500 text-[11px]">Chapter coordination & welfare</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">
                      <span className="font-semibold text-neutral-900 dark:text-white block">5. Fundraising & Finance</span>
                      <span className="text-neutral-500 text-[11px]">Grants, sponsorship & audits</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">
                      <span className="font-semibold text-neutral-900 dark:text-white block">6. Student Exchange (SEP)</span>
                      <span className="text-neutral-500 text-[11px]">SEO, Contact Person & CP Support</span>
                    </div>
                  </div>
                </div>

                {/* 2 Project Organizing Committees */}
                <div className="space-y-2 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
                    2 Standing Project Organizing Committees:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200">
                      <span className="font-bold block">EPSA Directed Studies Organizing Committee</span>
                      <span className="text-[11px] opacity-80">Annual national research symposium</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200">
                      <span className="font-bold block">General Assembly Organizing Committee</span>
                      <span className="text-[11px] opacity-80">National convention and electoral assembly</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Chapter Tier (Fig 1.2) */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 dark:bg-amber-400" />
                    <span className="text-xs font-mono font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider">
                      Figure 1.2 · Chapter Structure
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-neutral-500">Regional Assembly</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-neutral-50">
                    25 Regional Chapter Executives (RCE)
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                    5 Chapter Officers: President · Secretary · VP External · VP Internal · Treasurer
                  </p>
                </div>

                {/* Authentic Diagram from Page 6 of PDF */}
                <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white p-2">
                  <span className="text-[10px] font-mono text-neutral-400 block mb-1">
                    Document Excerpt · Page 6 Fig (1.2)
                  </span>
                  <img
                    src="/assets/projects/chapter_structure_diagram.jpg"
                    alt="Figure 1.2: Structure of the Chapter Office Executive Committee and Subcommittees"
                    className="w-full h-auto object-contain rounded-md"
                  />
                </div>

                {/* Chapter Subcommittees */}
                <div className="space-y-3 pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
                    5 Chapter Standing Subcommittees:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">
                      <span className="font-semibold text-neutral-900 dark:text-white block">Media & Publications</span>
                      <span className="text-neutral-500 text-[11px]">Campus noticeboards & Telegram</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">
                      <span className="font-semibold text-neutral-900 dark:text-white block">Documentations</span>
                      <span className="text-neutral-500 text-[11px]">Member registries & meeting minutes</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">
                      <span className="font-semibold text-neutral-900 dark:text-white block">External Affairs</span>
                      <span className="text-neutral-500 text-[11px]">Hospital deans & regional health bureau</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">
                      <span className="font-semibold text-neutral-900 dark:text-white block">Internal Affairs</span>
                      <span className="text-neutral-500 text-[11px]">Student tutoring, CSE & PCE events</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 sm:col-span-2">
                      <span className="font-semibold text-neutral-900 dark:text-white block">Fundraising & Finance</span>
                      <span className="text-neutral-500 text-[11px]">Local charity drives & event logistics</span>
                    </div>
                  </div>
                </div>

                {/* Taskforces */}
                <div className="space-y-2 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block">
                    Temporary & Permanent Taskforces:
                  </span>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Dynamic ad-hoc and standing taskforces mobilizing students for AMR Awareness Day, Pharmacists Day celebrations, Blood Donation drives, and Pharma Cup inter-class tournaments.
                  </p>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Tab 2: The 6 Official Aims */}
        {activeTab === 'aims' && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/80 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              <span className="font-bold text-neutral-900 dark:text-white block mb-0.5">
                Section 1 of Revised 2026 Constitution:
              </span>
              These 6 core aims define EPSA’s statutory mandate to represent, advocate, unify, and empower pharmacy students across all public and accredited institutions in Ethiopia.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EPSA_OFFICIAL_AIMS.map((aim, idx) => (
                <div
                  key={aim.id}
                  className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                      AIM 0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold font-display text-neutral-900 dark:text-neutral-50">
                      {aim.title}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {aim.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 text-[11px] text-neutral-400">
                    Constitutional Charter · Page 3
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Objectives & Values */}
        {activeTab === 'objectives' && (
          <div className="space-y-10">
            {/* Core Values Ribbon */}
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/80 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 block">
                Section 3 · The 9 Core Values
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {EPSA_META.values.map((v, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700/60">
                    <span className="text-xs font-bold text-neutral-900 dark:text-white block">{v.title}</span>
                    <span className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-tight block mt-0.5">{v.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Categorized Constitutional Objectives */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-neutral-50">
                Section 2 · Constitutional Objectives (Revised 2026)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {EPSA_OBJECTIVES.map((obj, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-4"
                  >
                    <div className="flex items-center gap-2 pb-2 border-b border-neutral-100 dark:border-neutral-800">
                      <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                        {obj.category}
                      </h4>
                    </div>

                    <ul className="space-y-2.5 text-xs text-neutral-600 dark:text-neutral-300">
                      {obj.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5 leading-relaxed">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold shrink-0 mt-0.5">·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}



      </div>
    </section>
  );
}
