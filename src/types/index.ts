export interface Chapter {
  id: string;
  universityName: string;
  amharicName: string;
  city: string;
  region: string;
  establishedEc: number;
  membersCount: number;
  presidentName: string;
  contactTelegram: string;
  leadFaculty: string;
  status: 'Active' | 'Expanding';
}

export interface LibraryResource {
  id: string;
  title: string;
  subject: string;
  yearLevel: 'Year 1' | 'Year 2' | 'Year 3' | 'Year 4' | 'Year 5 (Clerkship)' | 'All Years';
  type: 'Exam Blueprint' | 'Pharmacology Guide' | 'Clinical Guideline' | 'Lecture Notes' | 'Research Paper';
  contributorChapter: string;
  pages: number;
  downloads: number;
  description: string;
  topics: string[];
}

export interface AdvocacyPillar {
  id: string;
  title: string;
  summary: string;
  fullRationale: string;
  targetBody: string;
  progressPercent: number;
  statusText: string;
  studentSignatures: number;
  keyDemands: string[];
}

export interface ActivityMilestone {
  id: string;
  title: string;
  category: 'Academics & Research' | 'National Celebrations' | 'Public Health' | 'Internships' | 'Sports & Culture' | 'Global & IPSF';
  year: string;
  description: string;
  highlightStat: string;
  imageSrc?: string;
  details: string[];
  institutionalPartners?: string[];
}

export interface ClinicalVignette {
  id: string;
  question: string;
  vignette: string;
  subject: string;
  options: string[];
  correctIndex: number;
  rationale: string;
  clinicalPearl: string;
}

export interface ExecutiveMember {
  role: string;
  name: string;
  university: string;
  portfolio: string;
}

export interface OfficialAim {
  id: string;
  title: string;
  description: string;
}

export interface OfficialObjective {
  category: string;
  items: string[];
}
