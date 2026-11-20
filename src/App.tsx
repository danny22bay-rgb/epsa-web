import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DailyLounge } from './components/DailyLounge';
import { MegaLibrary } from './components/MegaLibrary';
import { AdvocacyTracker } from './components/AdvocacyTracker';
import { ActivitiesShowcase } from './components/ActivitiesShowcase';
import { StructureGovernance } from './components/StructureGovernance';
import { MemberPassModal } from './components/MemberPassModal';
import { CloudflareDeployModal } from './components/CloudflareDeployModal';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);

  // Initialize theme from preference or storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('epsa_theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('epsa_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('epsa_theme', 'light');
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors">
      {/* Top Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onOpenJoinModal={() => setIsJoinModalOpen(true)}
        onOpenDeployModal={() => setIsDeployModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenJoinModal={() => setIsJoinModalOpen(true)} />

        {/* Daily Student Lounge & Clinical Challenge */}
        <DailyLounge />

        {/* Mega E-Library & Academic Resources */}
        <MegaLibrary />

        {/* Advocacy Tracker (6 Core Pillars) */}
        <AdvocacyTracker />

        {/* Flagship Activities, Interactive Project Gallery & Milestones */}
        <ActivitiesShowcase />

        {/* Structure & National Executive Governance */}
        <StructureGovernance />
      </main>

      {/* Footer */}
      <Footer 
        onOpenJoinModal={() => setIsJoinModalOpen(true)} 
        onOpenDeployModal={() => setIsDeployModalOpen(true)} 
      />

      {/* Interactive Member Pass Generator Modal */}
      <MemberPassModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />

      {/* Cloudflare Pages Deploy & Export Package Modal */}
      <CloudflareDeployModal
        isOpen={isDeployModalOpen}
        onClose={() => setIsDeployModalOpen(false)}
      />
    </div>
  );
}
