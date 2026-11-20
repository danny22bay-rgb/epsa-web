import { useState } from 'react';
import { EPSA_CHAPTERS } from '../data/epsaData';
import { Chapter } from '../types';
import { Search, MapPin, Users, Send, Check, X, Building2, ExternalLink } from 'lucide-react';

export function ChaptersDirectory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryMessage, setInquiryMessage] = useState('');

  const regions = ['All', 'Central', 'Oromia', 'Amhara', 'Southern', 'Tigray', 'Eastern', 'Western'];

  const filteredChapters = EPSA_CHAPTERS.filter((ch) => {
    const matchesSearch =
      ch.universityName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ch.amharicName.includes(searchQuery) ||
      ch.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ch.leadFaculty.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRegion = selectedRegion === 'All' || ch.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setSelectedChapter(null);
      setInquiryMessage('');
    }, 2500);
  };

  return (
    <section id="chapters" className="py-16 md:py-24 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
              <span>National Network</span>
              <span aria-hidden="true">·</span>
              <span>Regional Assemblies & Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-neutral-900 dark:text-neutral-50 tracking-tight mt-1">
              25 University Chapter Offices
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-2xl mt-2">
              Each chapter operates with an autonomous 5-member executive committee, 5 subcommittees, and student taskforces executing accredited projects and community outreach.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <span className="tabular-nums font-bold text-neutral-900 dark:text-neutral-100 text-lg">
              {filteredChapters.length}
            </span>
            <span>of 25 Chapters Listed</span>
          </div>
        </div>

        {/* Search & Region Filter */}
        <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/80 space-y-4 mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by university name, Amharic name, or city (e.g. AAU, Gondar, Jimma, ሀዋሳ)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          {/* Region Tabs (clean segmented buttons) */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1">
            <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mr-2 whitespace-nowrap shrink-0">
              Region:
            </span>
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedRegion === reg
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-xs'
                    : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-700'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChapters.map((ch) => (
            <div
              key={ch.id}
              className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs hover:border-emerald-500/80 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                  <div className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>{ch.city}</span>
                    <span aria-hidden="true">·</span>
                    <span>{ch.region}</span>
                  </div>
                  <span className="font-mono text-neutral-400">EST. {ch.establishedEc} E.C.</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-neutral-50">
                    {ch.universityName}
                  </h3>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 font-sans block mt-0.5">
                    {ch.amharicName}
                  </span>
                </div>

                <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2">
                  {ch.leadFaculty}
                </p>

                <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 space-y-1 text-xs">
                  <div className="flex items-center justify-between text-neutral-600 dark:text-neutral-300">
                    <span>Chapter President:</span>
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">{ch.presidentName}</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-600 dark:text-neutral-300">
                    <span>Active Student Members:</span>
                    <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400 tabular-nums">
                      {ch.membersCount}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                  @{ch.contactTelegram}
                </span>

                <button
                  onClick={() => setSelectedChapter(ch)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-lg transition-colors border border-neutral-200 dark:border-neutral-700"
                >
                  <Send className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  <span>Connect</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Chapter Contact Modal */}
        {selectedChapter && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-xs">
            <div className="relative w-full max-w-lg bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 sm:p-7 space-y-5">
              
              <button
                onClick={() => setSelectedChapter(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <Building2 className="w-4 h-4" />
                  <span>Regional Chapter Office</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedChapter.city}, {selectedChapter.region}</span>
                </div>
                <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-neutral-50">
                  {selectedChapter.universityName}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {selectedChapter.leadFaculty}
                </p>
              </div>

              {inquirySent ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-2">
                  <Check className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
                    Message Dispatched to Chapter Committee
                  </h4>
                  <p className="text-xs text-emerald-800 dark:text-emerald-300">
                    President {selectedChapter.presidentName} and the local executive desk will connect with you via Telegram shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendInquiry} className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Executive Chair:</span>
                      <span className="font-semibold text-neutral-900 dark:text-white">{selectedChapter.presidentName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Official Telegram Channel:</span>
                      <a
                        href={`https://t.me/${selectedChapter.contactTelegram}`}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-sky-600 hover:underline flex items-center gap-1"
                      >
                        <span>t.me/{selectedChapter.contactTelegram}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                      Your Message or Academic Inquiry
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      placeholder="Ask about local chapter events, student representation, or internship placement matching..."
                      className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedChapter(null)}
                      className="px-4 py-2 text-xs font-medium text-neutral-600 dark:text-neutral-400"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send to Chapter Desk</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
