import { useState } from 'react';
import { EPSA_ACTIVITIES, EPSA_META } from '../data/epsaData';
import { ActivityMilestone } from '../types';
import { ChevronRight, X, CheckCircle2, Send, ExternalLink, Image as ImageIcon, Sparkles, ZoomIn } from 'lucide-react';

export function ActivitiesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModal, setActiveModal] = useState<ActivityMilestone | null>(null);

  const categories = ['All', 'Internships', 'Global & IPSF', 'Academics & Research', 'Public Health', 'Sports & Culture'];

  const filteredActivities = EPSA_ACTIVITIES.filter((act) =>
    selectedCategory === 'All' ? true : act.category === selectedCategory
  );

  return (
    <section id="activities" className="py-16 md:py-24 bg-neutral-100/60 dark:bg-neutral-950/70 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
              <span>Impact & Photo Gallery</span>
              <span aria-hidden="true">·</span>
              <span>Documented Initiatives</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 dark:text-neutral-50 tracking-tight mt-1">
              Interactive Projects & Milestones
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-2xl mt-2">
              From our landmark 1st paid internship and full IPSF membership to national research competitions, AMR awareness drives, and the Pharma Cup. Explore photos and real-time updates from our main Telegram channel.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href={EPSA_META.telegram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram Photo Feed ({EPSA_META.telegramHandle})</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Category Tabs (clean segmented buttons with click handlers) */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Activities & Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((act) => (
            <div
              key={act.id}
              onClick={() => setActiveModal(act)}
              className="group p-0 overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs hover:border-emerald-500/80 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Authentic Document Photo */}
                {act.imageSrc ? (
                  <div className="relative h-56 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-100 dark:border-neutral-800">
                    <img
                      src={act.imageSrc}
                      alt={act.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    
                    {/* Floating Zoom icon badge */}
                    <div className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-black/60 backdrop-blur-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>

                    <div className="absolute bottom-3 left-3 text-xs font-medium text-white/90">
                      <span>{act.year}</span>
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-video w-full bg-gradient-to-br from-emerald-950 via-emerald-900 to-neutral-900 p-5 flex flex-col justify-between text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-semibold">
                        {act.category}
                      </span>
                      <ImageIcon className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-emerald-200">{act.year}</span>
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  {/* Clean unboxed metadata */}
                  <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                    <span className="text-emerald-700 dark:text-emerald-400 font-semibold">{act.category}</span>
                    <span className="font-mono text-neutral-400">{act.year}</span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-neutral-50 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {act.title}
                  </h3>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed">
                    {act.description}
                  </p>

                  {/* Highlight metric strip */}
                  <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 flex items-center justify-between text-xs">
                    <span className="text-neutral-500 dark:text-neutral-400">Key Milestone:</span>
                    <span className="font-semibold text-emerald-800 dark:text-emerald-400 font-mono">
                      {act.highlightStat}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-neutral-100 dark:border-neutral-800 mt-2 flex items-center justify-between">
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                  {act.details.length} Key Achievements
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 group-hover:underline">
                  <span>View Photo & Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Telegram Field Photo Stream Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 uppercase tracking-wider">
                <Send className="w-3.5 h-3.5" />
                <span>Live Telegram Channel Community</span>
              </div>
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-neutral-50">
                Follow real-time chapter projects & event dispatches
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Our active Telegram channel <span className="font-mono font-semibold text-neutral-800 dark:text-neutral-200">@EPSA_Ethiopia</span> features daily photos, clinical webinar links, competition schedules, and direct announcements for pharmacy students.
              </p>
            </div>

            <a
              href="https://t.me/EPSA_Ethiopia"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-xs transition-all whitespace-nowrap shrink-0"
            >
              <Send className="w-4 h-4" />
              <span>Join @EPSA_Ethiopia on Telegram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Future Accredited Projects Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-100 dark:border-neutral-800">
            <div>
              <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                Looking Ahead · Accredited Professional Events
              </span>
              <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-neutral-50 mt-1">
                Upcoming EPSA National Accredited Competitions
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-neutral-500 dark:text-neutral-400">
              Session 2026/27 E.C.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 space-y-1">
              <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">CSE</span>
              <h4 className="text-sm font-bold text-neutral-900 dark:text-white">Clinical Skills Event</h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Hospital pharmacotherapy case simulations evaluating real-time drug interaction intervention.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 space-y-1">
              <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">PCE</span>
              <h4 className="text-sm font-bold text-neutral-900 dark:text-white">Patient Counseling Event</h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Empathetic, clear patient counseling drills tested with standardized standardized patients.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 space-y-1">
              <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">LDP</span>
              <h4 className="text-sm font-bold text-neutral-900 dark:text-white">Leadership Development</h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Intensive governance, public health advocacy, and chapter management incubator.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 space-y-1">
              <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">SEP</span>
              <h4 className="text-sm font-bold text-neutral-900 dark:text-white">Student Exchange Program</h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                IPSF bilateral summer attachments across Europe, Asia, and the Americas for Ethiopian students.
              </p>
            </div>
          </div>
        </div>

        {/* Activity Details & Lightbox Modal */}
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-xs overflow-y-auto">
            <div className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 sm:p-8 space-y-5 my-8">
              
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 z-10 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-xs"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Full Modal Image (Authentic Document Photo) */}
              {activeModal.imageSrc && (
                <div className="relative w-full max-h-[480px] overflow-hidden rounded-xl bg-neutral-950 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
                  <img
                    src={activeModal.imageSrc}
                    alt={activeModal.title}
                    referrerPolicy="no-referrer"
                    className="w-full max-h-[460px] object-contain rounded-lg"
                  />
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-black/75 text-[11px] font-mono text-white backdrop-blur-xs">
                    Document Excerpt · {activeModal.year}
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <span>{activeModal.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeModal.year}</span>
                </div>
                <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-neutral-50">
                  {activeModal.title}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/70 border border-neutral-200 dark:border-neutral-700 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {activeModal.description}
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Key Outcomes & Program Execution:
                </span>
                <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                  {activeModal.details.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={EPSA_META.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>View live photo coverage on Telegram ({EPSA_META.telegramHandle})</span>
                </a>

                <button
                  onClick={() => setActiveModal(null)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
