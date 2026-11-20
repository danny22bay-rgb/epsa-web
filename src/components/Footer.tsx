import { BrandLogo } from './BrandLogo';
import { EPSA_META } from '../data/epsaData';
import { Mail, Send, MapPin, Globe, ArrowUpRight, Cloud, Download } from 'lucide-react';

interface FooterProps {
  onOpenJoinModal: () => void;
  onOpenDeployModal?: () => void;
}

export function Footer({ onOpenJoinModal, onOpenDeployModal }: FooterProps) {
  return (
    <footer id="contact" className="bg-neutral-900 text-neutral-300 border-t border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand & Manifesto */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo className="w-9 h-9" />
              <div>
                <span className="text-lg font-bold font-display text-white tracking-tight">
                  EPSA Ethiopia
                </span>
                <span className="text-[11px] text-neutral-400 block font-mono">
                  {EPSA_META.amharicName}
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Empowering minds, shaping futures. The official national representative body uniting 4,500+ pharmacy students across 25 Ethiopian universities. Full member of IPSF.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <button
                onClick={onOpenJoinModal}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors"
              >
                <span>Get Digital Member Pass</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {onOpenDeployModal && (
                <button
                  onClick={onOpenDeployModal}
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-orange-400 hover:text-white bg-neutral-800 hover:bg-neutral-750 border border-neutral-700 rounded-lg transition-colors"
                >
                  <Cloud className="w-3.5 h-3.5 text-orange-400" />
                  <span>Cloudflare Deploy ZIP</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-100">
              Interactive Resources
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#lounge" className="hover:text-emerald-400 transition-colors">
                  Daily Clinical Vignettes & Quiz
                </a>
              </li>
              <li>
                <a href="#library" className="hover:text-emerald-400 transition-colors">
                  EPSA Mega E-Library & Exit Exams
                </a>
              </li>
              <li>
                <a href="#advocacy" className="hover:text-emerald-400 transition-colors">
                  What We Advocate For (7 Pillars)
                </a>
              </li>
              <li>
                <a href="#activities" className="hover:text-emerald-400 transition-colors">
                  Interactive Projects & Photo Gallery
                </a>
              </li>
              <li>
                <a href={EPSA_META.officialPdfUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <span>Official Revised 2026 Charter (PDF)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://t.me/EPSA_Ethiopia" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                  Official Telegram Dispatches (@EPSA_Ethiopia)
                </a>
              </li>
              <li>
                <a href="#structure" className="hover:text-emerald-400 transition-colors">
                  EPSA Aims, Objectives & Governance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Secretariat Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-100">
              National Headquarters & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{EPSA_META.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={`mailto:${EPSA_META.email}`} className="hover:text-white transition-colors">
                  {EPSA_META.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Send className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={EPSA_META.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Official Telegram: {EPSA_META.telegramHandle}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <span>International Pharmaceutical Students’ Federation (IPSF)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Values String & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Ethiopian Pharmaceutical Students’ Association (EPSA). All rights reserved.
          </div>
          <div className="text-center md:text-right text-[11px] text-neutral-400">
            Quality · Trust · Integrity · Perseverance · Compassion · Respect · Leadership · Excellence · Advocacy
          </div>
        </div>

      </div>
    </footer>
  );
}
