import { useState } from 'react';
import { MEGA_LIBRARY_RESOURCES } from '../data/epsaData';
import { LibraryResource } from '../types';
import { Search, BookOpen, Download, Bookmark, FileText, Check, X, ArrowUpRight, GraduationCap } from 'lucide-react';

export function MegaLibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('All Years');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [previewResource, setPreviewResource] = useState<LibraryResource | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(['lib_exit_exam']);
  const [downloadNotification, setDownloadNotification] = useState<string | null>(null);

  const yearOptions = ['All Years', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5 (Clerkship)'];
  const typeOptions = ['All', 'Exam Blueprint', 'Pharmacology Guide', 'Clinical Guideline', 'Lecture Notes', 'Research Paper'];

  const filteredResources = MEGA_LIBRARY_RESOURCES.filter((res) => {
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.contributorChapter.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesYear = selectedYear === 'All Years' || res.yearLevel === selectedYear;
    const matchesType = selectedType === 'All' || res.type === selectedType;

    return matchesSearch && matchesYear && matchesType;
  });

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter((item) => item !== id));
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
    }
  };

  const handleDownload = (res: LibraryResource, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDownloadNotification(`Downloaded "${res.title}" successfully.`);
    setTimeout(() => {
      setDownloadNotification(null);
    }, 3500);
  };

  return (
    <section id="library" className="py-16 md:py-24 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toast Alert */}
        {downloadNotification && (
          <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-emerald-900 text-white shadow-xl flex items-center gap-3 border border-emerald-700 animate-in fade-in slide-in-from-bottom-2">
            <Check className="w-5 h-5 text-emerald-300" />
            <span className="text-xs font-medium">{downloadNotification}</span>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
              <span>Academic Repository</span>
              <span aria-hidden="true">·</span>
              <span>25 University Chapters Shared Knowledge</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 dark:text-neutral-50 tracking-tight mt-1">
              EPSA Mega E-Library
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-2xl mt-2">
              National exit exam blueprints, clinical pharmacotherapy protocols, pharmacology summaries, and research manuals curated by student academic taskforces.
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs font-mono font-semibold text-neutral-500 dark:text-neutral-400 uppercase">
              Curated Documents
            </span>
            <div className="text-2xl font-extrabold font-mono text-emerald-700 dark:text-emerald-400 tabular-nums">
              {MEGA_LIBRARY_RESOURCES.length} Master Guides
            </div>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/80 space-y-4 mb-8">
          
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic (e.g. exit exam, pharmacology, STG, vancomycin, research)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-500"
            />
          </div>

          {/* Filter Bar (Zero-pill discipline: Clean segmented buttons with click handlers) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
            
            {/* Year filter */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
              <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mr-2 whitespace-nowrap shrink-0">
                Level:
              </span>
              {yearOptions.map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    selectedYear === yr
                      ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-xs'
                      : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-700'
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>

            {/* Document Type select */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 whitespace-nowrap shrink-0">
                Type:
              </span>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="text-xs font-medium px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 focus:outline-none"
              >
                {typeOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Resources Grid */}
        {filteredResources.length === 0 ? (
          <div className="p-12 text-center rounded-2xl border border-dashed border-neutral-200 dark:border-neutral-800 space-y-3">
            <BookOpen className="w-8 h-8 text-neutral-400 mx-auto" />
            <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-200">
              No academic materials found matching your filters
            </h3>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto">
              Try adjusting your search keywords or resetting the level filter to &quot;All Years&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedYear('All Years');
                setSelectedType('All');
              }}
              className="px-4 py-2 text-xs font-medium text-emerald-700 dark:text-emerald-400 hover:underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((res) => {
              const isBookmarked = bookmarkedIds.includes(res.id);

              return (
                <div
                  key={res.id}
                  onClick={() => setPreviewResource(res)}
                  className="group relative p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/80 dark:hover:border-emerald-500/60 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Clean unboxed metadata with subtle typographic separators */}
                    <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                      <div className="flex items-center gap-1.5 font-medium">
                        <span className="text-emerald-700 dark:text-emerald-400 font-semibold">{res.yearLevel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{res.type}</span>
                      </div>
                      
                      <button
                        onClick={(e) => toggleBookmark(res.id, e)}
                        title={isBookmarked ? "Remove bookmark" : "Save resource"}
                        className={`p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ${
                          isBookmarked ? 'text-amber-500 fill-amber-500' : 'text-neutral-400'
                        }`}
                      >
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-50 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {res.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed">
                      {res.description}
                    </p>

                    {/* Topics: clean inline text list */}
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-neutral-500 dark:text-neutral-400 pt-1">
                      {res.topics.slice(0, 3).map((topic, i) => (
                        <span key={i} className="inline-flex items-center">
                          {topic}{i < 2 && res.topics.length > 1 ? " ·" : ""}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-5 mt-5 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate max-w-[180px]">
                      {res.contributorChapter}
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-neutral-400 tabular-nums">
                        {res.pages}p · {res.downloads}
                      </span>
                      <button
                        onClick={(e) => handleDownload(res, e)}
                        className="p-1.5 text-neutral-600 dark:text-neutral-300 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 rounded-lg transition-colors"
                        title="Download Document"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Resource Preview Modal */}
        {previewResource && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-xs">
            <div className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setPreviewResource(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <span>{previewResource.yearLevel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{previewResource.type}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-neutral-500 font-normal">{previewResource.pages} Pages</span>
                </div>
                <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-neutral-50">
                  {previewResource.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Curated & Verified by: <span className="font-semibold text-neutral-700 dark:text-neutral-300">{previewResource.contributorChapter}</span>
                </p>
              </div>

              {/* Rationale / Summary */}
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/70 border border-neutral-200 dark:border-neutral-700 space-y-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <span className="font-bold text-neutral-900 dark:text-white block">
                  Document Overview & Clinical Purpose:
                </span>
                <p>{previewResource.description}</p>
              </div>

              {/* High-yield topics outline */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Key Table of Contents & Competency Modules:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {previewResource.topics.map((t, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                  {previewResource.downloads} student downloads across 25 chapters
                </span>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setPreviewResource(null)}
                    className="px-4 py-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      handleDownload(previewResource);
                      setPreviewResource(null);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Resource (PDF)</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
