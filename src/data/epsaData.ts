import { Chapter, LibraryResource, AdvocacyPillar, ActivityMilestone, ClinicalVignette, ExecutiveMember, OfficialAim, OfficialObjective } from '../types';

export const EPSA_META = {
  name: "Ethiopian Pharmaceutical Students' Association",
  shortName: "EPSA Ethiopia",
  amharicName: "የኢትዮጵያ ፋርማሲ ተማሪዎች ማህበር",
  motto: "Empowering minds, shaping futures.",
  foundedEc: "2004 E.C.",
  address: "Ras Mekonen Ave, Sahilesilasie building 1st floor, Addis Ababa, Ethiopia",
  email: "epsa.et@gmail.com",
  telegram: "https://t.me/EPSA_Ethiopia",
  telegramHandle: "@EPSA_Ethiopia",
  officialPdfUrl: "/assets/aistudio/EPSA_AIM_OBJECTIVE___ACTIVITIES_Revised__3__add41786.pdf",
  officialPdfName: "EPSA_AIM_OBJECTIVE___ACTIVITIES_Revised_2026.pdf",
  stats: {
    chapters: 25,
    membersCount: "4,500+",
    universitiesRepresented: "25 Regional Chapter Offices",
    ipsfStatus: "Full Member (72nd IPSF GA 2026)",
    internshipsLaunched: "14 Female Interns (10-Month Placement)"
  },
  values: [
    { title: "Quality", desc: "Setting the gold standard in pharmaceutical education and practice across Ethiopia." },
    { title: "Trust", desc: "Transparent, democratic representation serving every pharmacy student." },
    { title: "Integrity", desc: "Upholding high scientific and ethical standards in healthcare." },
    { title: "Perseverance", desc: "Unwavering commitment to student welfare and educational reforms." },
    { title: "Compassion", desc: "Patient-centered care driving our community health campaigns." },
    { title: "Respect", desc: "Fostering inclusivity across all 25 university chapters." },
    { title: "Leadership", desc: "Equipping future healthcare executives, researchers, and innovators." },
    { title: "Excellence", desc: "Promoting rigorous clinical and pharmaceutical research nationwide." },
    { title: "Advocacy", desc: "A unified, courageous voice before governmental and global bodies." },
  ]
};

export const EPSA_OFFICIAL_AIMS: OfficialAim[] = [
  {
    id: "aim_1",
    title: "National Representation",
    description: "To represent all pharmacy students across Ethiopia in discussions and decisions with professional, governmental and non-governmental organizations."
  },
  {
    id: "aim_2",
    title: "Skills & Extracurricular Platform",
    description: "To provide a platform for its members to plan, collaborate and execute their own extracurricular activities which develop their skills."
  },
  {
    id: "aim_3",
    title: "Education Quality & Nationwide Unification",
    description: "To collect updated information and opinions regarding pharmacy education in Ethiopia and suggesting improvements where necessary with the aim of attaining unification of pharmaceutical education across the nation."
  },
  {
    id: "aim_4",
    title: "Professional & Policy Advocacy",
    description: "To advocate for pharmacy related issues such as quality of education and issues related to the profession."
  },
  {
    id: "aim_5",
    title: "Support for Accredited Projects",
    description: "To encourage and support Chapter Offices to organize EPSA’s Accredited Projects annually within their universities."
  },
  {
    id: "aim_6",
    title: "National Public Health Celebrations",
    description: "Encouraging and supporting Chapter Offices to organize Pharmacy related events such as Antimicrobial Resistance Day and World Pharmacists Day."
  }
];

export const EPSA_OBJECTIVES: OfficialObjective[] = [
  {
    category: "Professional Competence & Health Services",
    items: [
      "Promote the pharmacy profession in Ethiopia and contribute to the improvement of health services by equipping students with the required knowledge, skills, ethics, and creativity required.",
      "Broadcast pharmacy and other health-related educational programs through mass media to inform the society.",
      "Contribute its share as part of the health sciences by raising awareness on public health, reproductive health, and medical flare-ups in primary and secondary schools, universities, and public living areas."
    ]
  },
  {
    category: "Student Rights, Autonomy & Welfare",
    items: [
      "Create an environment where students' autonomy, benefit, and rights are protected; students feel empowered by the control or ownership they have over their learning, developing responsibility and self-motivation.",
      "Actively participate in formulating policies, laws, and directives governing the pharmaceutical sector as the representative voice of its members.",
      "Prepare projects and organize events that will encourage and award outstanding students for their performance, hard work, productivity, and morale."
    ]
  },
  {
    category: "Stakeholders & Industry Collaboration",
    items: [
      "Work with relevant internal and external stakeholders such as wholesalers, suppliers, customers, government, business owners, university staff members, and patients to advance pharmacy education and ensure quality.",
      "Establish a strong relationship with sister associations and organizations in and out of Ethiopia, working on the growth, promotion, and awareness of the pharmacy profession.",
      "Mobilize funds in the name of the association and organize various events serving as a platform for students to exchange knowledge, experience, and ideas."
    ]
  },
  {
    category: "Research, Publications & Knowledge Dissemination",
    items: [
      "Encourage the conduction of research in the pharmaceutical sector, and create opportunities for students to publish papers and experiment with their ideas across dedicated platforms.",
      "Organize and participate in meetings, scientific conferences, and seminars to share and discuss research findings, exchange insights, and network for career development.",
      "Disseminate scientific and professional knowledge through an interactive process of communication via scientific publications, conferences, presentations, interviews, and panel discussions.",
      "Utilize multimedia and publications under EPSA to build the image of the association, increase member acquisition, and provide invaluable authenticity and credibility."
    ]
  },
  {
    category: "Civic Outreach & Community Charity",
    items: [
      "Help society by raising funds, supplying required goods, and other necessities to organize charity events and strengthen the personal values of students.",
      "Serve as a bridge to connect pharmacy students at national and international universities.",
      "Become one of the leading associations in Ethiopia, a role model in Africa, and respected worldwide."
    ]
  }
];

export const ADVOCACY_PILLARS: AdvocacyPillar[] = [
  {
    id: "adv_quality",
    title: "1. Improvement of Quality of Pharmacy Education",
    summary: "Ensuring an increment in the quality of pharmacy education as the foundation for producing knowledgeable, competent graduates and fostering a healthy society.",
    fullRationale: "Quality education serves as the foundation for producing knowledgeable and healthy communities. Specifically, an increment in the quality of pharmacy education is essential for fostering a healthy society and nurturing competent students who can serve as symbols of their field, profession, and country.",
    targetBody: "Ministry of Education & Deans' Committee of Pharmacy Schools",
    progressPercent: 85,
    statusText: "Unified National Syllabus Recommendations Under Implementation",
    studentSignatures: 4290,
    keyDemands: [
      "Unification of pharmaceutical education standards across all Ethiopian universities",
      "Subsidized access to digital biomedical libraries and clinical journals",
      "Faculty training on modern clinical simulation and interactive pharmacotherapy"
    ]
  },
  {
    id: "adv_pharmd",
    title: "2. Doctor of Pharmacy (PharmD) Program",
    summary: "Advocating for the Doctor of Pharmacy Program to prepare effective problem solvers, independent lifelong learners, and leaders in patient care and innovation.",
    fullRationale: "Since a PharmD degree opens up opportunities in patient care, scientific research, and innovation, EPSA works to engage with different stakeholders to promote its initiation across Ethiopian universities.",
    targetBody: "Ministry of Health (MoH) & Ministry of Education (MoE)",
    progressPercent: 78,
    statusText: "PharmD National Curriculum Blueprint Gazetted for Review",
    studentSignatures: 3840,
    keyDemands: [
      "National transition to 6-year PharmD curriculum with embedded clinical rotations",
      "Direct bedside clinical ward participation alongside medical teams from 3rd year",
      "Formal preceptor certification and clinical recognition for hospital pharmacists"
    ]
  },
  {
    id: "adv_internships",
    title: "3. Paid 5th-Year Internships for Pharmacy Students",
    summary: "Statutory introduction of paid internships during 5th-year hospital and community attachments to inspire productivity and cultivate excellence.",
    fullRationale: "Paid internships are vital for the development of the pharmacy profession. They help attract the best and most competent students, inspire students to be more productive, and cultivate a sense of responsibility for producing high-quality work. Successfully piloted on January 1, 2026 with EPA for 14 female seniors.",
    targetBody: "Ethiopian Pharmaceutical Association (EPA) & Ministry of Health",
    progressPercent: 88,
    statusText: "Piloted with EPA (14 Female Interns); Scaling to All Chapters",
    studentSignatures: 4420,
    keyDemands: [
      "Guaranteed monthly living stipends for all 5th-year pharmacy interns",
      "Institutional attachment matching and clinical workplace insurance",
      "Standardized rotation assessment logbooks across teaching hospitals"
    ]
  },
  {
    id: "adv_exams",
    title: "4. Standardization of Exams & Exam Blueprints",
    summary: "Standardized student evaluation creating a fair playing field, ensuring accountability in schools, and tracking student improvement over time.",
    fullRationale: "Standardized testing creates a fair playing field for all students, ensures accountability in schools, and maintains high standards for educational reform. Additionally, it allows for tracking student improvement over time through repeated testing and facilitates easy comparison of student test scores to demonstrate changes in progress.",
    targetBody: "National Educational Assessment & Examinations Agency (NEAEA)",
    progressPercent: 92,
    statusText: "Standardized Exam Blueprint Gazetted; Mock Hub Live in E-Library",
    studentSignatures: 3950,
    keyDemands: [
      "Publishing standardized domain blueprints well in advance of exit exams",
      "Inclusion of OSCE clinical practical scenarios alongside MCQs",
      "Free mock assessments and practice question banks for every graduating senior"
    ]
  },
  {
    id: "adv_accreditation",
    title: "5. Accreditation of Pharmacy Schools & Departments",
    summary: "A rigorous quality assurance mechanism setting benchmarks that institutions must meet to deliver high-quality education and international recognition.",
    fullRationale: "Accreditation serves as a quality assurance mechanism by setting certain standards and benchmarks that institutions must meet to ensure the delivery of high-quality education, establishes credibility and recognition of pharmacy programs, encourages ongoing assessment, and facilitates international student mobility.",
    targetBody: "Higher Education Relevance & Quality Agency (HERQA / ETA)",
    progressPercent: 70,
    statusText: "Audits of Compounding & Analytical Facilities Across 8 New Faculties",
    studentSignatures: 3620,
    keyDemands: [
      "Mandatory equipped formulation, compounding, and analytical laboratories",
      "Enforceable student-to-preceptor ratios during hospital ward rotations",
      "International alignment with FIP and IPSF academic quality guidelines"
    ]
  },
  {
    id: "adv_council",
    title: "6. Establishment of Independent Pharmacy Council",
    summary: "A statutory Pharmacy Council setting licensure criteria, conducting examinations, maintaining a register of qualified pharmacists, and protecting professional interests.",
    fullRationale: "An independent council holds tremendous importance in the realm of pharmacy education and practice. It will set criteria for licensure, conduct examinations, maintain a register of qualified pharmacists, oversee accreditation and recognition of pharmacy programs, and represent the interests and professional growth of pharmacists.",
    targetBody: "House of Peoples' Representatives & Ministry of Health",
    progressPercent: 65,
    statusText: "Draft Autonomous Council Proclamation Under Parliamentary Review",
    studentSignatures: 4110,
    keyDemands: [
      "Statutory licensure exams and centralized digital register of pharmacists",
      "Direct EPSA student representative seat on the national governing council",
      "National mandatory continuing professional development (CPD) frameworks"
    ]
  },
  {
    id: "adv_library",
    title: "7. Establishment of EPSA Mega E-Library",
    summary: "A centralized digital hub hosting lecturers' materials, exam resources, reference books, research papers, and policy documents anytime, anywhere.",
    fullRationale: "By developing a Mega E-Library hosting a wide range of lecturers' materials and exam resources, EPSA enables students and professionals to access high-quality academic content anytime and anywhere, fostering continuous education, improving exam preparedness, and promoting collaborative learning.",
    targetBody: "EPSA National Academic Committee & University Deans",
    progressPercent: 90,
    statusText: "Live Platform Operational Across All 25 University Chapters",
    studentSignatures: 4500,
    keyDemands: [
      "Centralized cloud repository with verified lecture slides and board summaries",
      "Free access to high-yield clinical clerkship and pharmacotherapy guides",
      "Peer-contributed directed studies papers and research protocols"
    ]
  }
];

export const EPSA_ACTIVITIES: ActivityMilestone[] = [
  {
    id: "act_paid_internship",
    title: "EPSA First Paid Internship Program",
    category: "Internships",
    year: "Launched 1 January 2026",
    description: "On January 1, 2026, EPSA in strong partnership with the Ethiopian Pharmaceutical Association (EPA) successfully launched a 10-month internship program designed for female graduating pharmacy students. A total of 14 interns were selected from leading institutions across the country.",
    highlightStat: "14 Female Interns Funded",
    imageSrc: "/assets/projects/paid_internship_document.jpg",
    details: [
      "4 students selected from Jimma University",
      "4 students selected from Addis Ababa University",
      "2 students selected from Mekelle University",
      "4 students selected from Menellik Health Science College",
      "Inaugurated with keynote address by Mr. Assegid Samuel, Lead Executive Officer for Human Resource Development Improvement at the Ministry of Health",
      "Demonstrates dedication to capacity building, gender equity, and strengthening Ethiopia's pharmaceutical workforce"
    ],
    institutionalPartners: ["Ethiopian Pharmaceutical Association (EPA)", "Ministry of Health (MoH)"]
  },
  {
    id: "act_ipsf_full",
    title: "IPSF Full Membership Ratification",
    category: "Global & IPSF",
    year: "Joined 2015 · Full Member 2026",
    description: "EPSA joined IPSF in 2015 after months of rigorous application. Following delegations from IPSF (Dr. Yao Mfaofao and Dr. David Figan) and participation in the 68th and 72nd IPSF General Assemblies, EPSA acquired full voting membership in 2026, bringing bright global opportunities to Ethiopian pharmacy students.",
    highlightStat: "Full Voting Rights Globally",
    imageSrc: "/assets/projects/ipsf_membership_document.jpg",
    details: [
      "Official representation at the IPSF World Congress and African Regional Office (AfRO)",
      "Unlocks bilateral Student Exchange Program (SEP) attachments worldwide",
      "Reception program for IPSF delegates Dr. Yao Mfaofao and Dr. David Figan",
      "Direct participation in global health initiatives and international pharmacy leadership"
    ],
    institutionalPartners: ["International Pharmaceutical Students' Federation (IPSF)"]
  },
  {
    id: "act_directed_studies",
    title: "EPSA Directed Studies Competition",
    category: "Academics & Research",
    year: "Since 2015 E.C.",
    description: "An annual national research competition providing a platform for graduating pharmacy students to showcase their research capabilities and present findings to a panel of experts. The first edition took place in 2015 E.C. in collaboration with EPA and ZAF Pharmaceuticals.",
    highlightStat: "120+ Student Papers Presented",
    imageSrc: "/assets/projects/directed_studies_document.jpg",
    details: [
      "Organized in collaboration with EPA and ZAF Pharmaceuticals",
      "National awards presented at EPA Annual Conferences (2015 & 2017 E.C.)",
      "Enables students to network across Ethiopia and receive professional recognition",
      "Covers phytochemistry of indigenous medicinal plants, AMR surveillance, and clinical pharmacy"
    ],
    institutionalPartners: ["Ethiopian Pharmaceutical Association (EPA)", "ZAF Pharmaceuticals"]
  },
  {
    id: "act_pharmacists_day",
    title: "Ethiopian Pharmacists' Day Celebration",
    category: "National Celebrations",
    year: "Annual Since 2015 E.C.",
    description: "EPSA took initiative in celebration of Ethiopian Pharmacist's Day after its revitalization since 2015 E.C. across university campuses, raising awareness about the multifaceted nature of the profession—dispensing, counseling, research, and public health collaboration.",
    highlightStat: "Celebrated Across Universities",
    imageSrc: "/assets/projects/pharmacists_day_document.jpg",
    details: [
      "Colorfully celebrated in university auditoriums and hospital walkways",
      "Public health screenings and patient counseling exhibitions",
      "Fosters pride, unity, and inspiration for future generations of pharmacists"
    ]
  },
  {
    id: "act_amr_day",
    title: "Antimicrobial Resistance (AMR) Day Celebration",
    category: "Public Health",
    year: "Annual Campaign Since 2015",
    description: "In 2015, EPSA celebrated Antimicrobial Resistance day (AMR) across 15 universities in collaboration with school/departments of pharmacy. The initiative encompassed university campus campaigns, environmental cleaning, and prudent antibiotic awareness.",
    highlightStat: "15+ Universities Mobilized",
    imageSrc: "/assets/projects/amr_day_document.jpg",
    details: [
      "Collaboration with university schools/departments of pharmacy",
      "Environmental cleaning and sanitation campaigns in hospital neighborhoods",
      "Community education combating over-the-counter antibiotic abuse",
      "Supporting advocacy for policymakers to invest in surveillance and public health"
    ]
  },
  {
    id: "act_community_outreach",
    title: "Charity & Community Outreach Activities",
    category: "Public Health",
    year: "Continuous Civic Program",
    description: "EPSA's participation extends deeply into community health through blood donations, environmental cleaning campaigns, supporting charity initiatives in money and kind, and hospital patient visiting events.",
    highlightStat: "1,800+ Blood Units Donated",
    imageSrc: "/assets/projects/community_outreach_document.jpg",
    details: [
      "Voluntary blood donation drives with the Ethiopian Red Cross",
      "Hospital patient visits and geriatric medication support",
      "Supplying goods and financial contributions to underprivileged community centers",
      "Environmental sanitation drives on campuses and surrounding towns"
    ]
  },
  {
    id: "act_pharma_cup",
    title: "The Pharma Cup Tournament",
    category: "Sports & Culture",
    year: "Annual Championship",
    description: "A chapter-level male soccer competition designed to unite pharmacy students through sport, teamwork, and healthy rivalry. Beyond the excitement of the game, it fosters solidarity, leadership, and holistic student development.",
    highlightStat: "16 Chapter Teams Competing",
    imageSrc: "/assets/projects/pharma_cup_document.jpg",
    details: [
      "Promotes unity and engagement through a shared space for collaboration and friendship",
      "Supports student well-being by integrating physical activity and recreation into academic life",
      "Builds identity and pride across EPSA chapters, empowering students both academically and socially"
    ]
  },
  {
    id: "act_career_webinars",
    title: "Career Development Webinar Series",
    category: "Academics & Research",
    year: "Multi-Episode Series",
    description: "A webinar series where successful individuals at the top of their fields are invited to share their journeys and experiences, helping students better understand their field of study and find inspiration in the pharmaceutical manufacturing and clinical sectors.",
    highlightStat: "5,000+ Participants Reached",
    imageSrc: "/assets/projects/career_webinar_document.jpg",
    details: [
      "Featured episodes on the Pharmaceutical Manufacturing Sector (e.g. Kilinto Industrial Park)",
      "Interactive sessions with senior regulatory and global health specialists",
      "Guiding students through career pathways, scholarships, and post-graduate clerkships"
    ]
  }
];

export const MEGA_LIBRARY_RESOURCES: LibraryResource[] = [
  {
    id: "lib_exit_exam",
    title: "National Pharmacy Exit Exam Blueprint & Practice Questions (2026 Edition)",
    subject: "Comprehensive Board Prep",
    yearLevel: "Year 5 (Clerkship)",
    type: "Exam Blueprint",
    contributorChapter: "AAU & Jimma Joint Academic Taskforce",
    pages: 148,
    downloads: 3820,
    description: "Official guide to domain weightings, sample clinical case vignettes, calculation drills, and rationale explanations aligned with the National Exit Exam.",
    topics: ["Pharmacotherapy", "Pharmaceutics & Biopharmaceutics", "Medicinal Chemistry", "Pharmacy Law & Ethics"]
  },
  {
    id: "lib_pharmacology_cheat",
    title: "High-Yield Pharmacology & Autonomic Nervous System Summary",
    subject: "Pharmacology",
    yearLevel: "Year 3",
    type: "Pharmacology Guide",
    contributorChapter: "University of Gondar Chapter",
    pages: 72,
    downloads: 2940,
    description: "Compact classification tables, receptors, drug-drug interactions, side-effect mnemonics, and Ethiopian Essential Drug List cross-references.",
    topics: ["Autonomic Receptors", "Cardiovascular Agents", "Antimicrobials", "CNS Drugs"]
  },
  {
    id: "lib_amr_guidelines",
    title: "Ethiopian Antimicrobial Stewardship & National STG Pocket Manual",
    subject: "Infectious Diseases & Clinical Pharmacy",
    yearLevel: "Year 4",
    type: "Clinical Guideline",
    contributorChapter: "Hawassa University Chapter",
    pages: 94,
    downloads: 2410,
    description: "Bedside empirical therapy guide based on Ethiopian Standard Treatment Guidelines (STG) for hospital-acquired infections, TB, malaria, and surgical prophylaxis.",
    topics: ["Antimicrobial Stewardship", "Empirical Regimens", "Dosage Adjustments in Renal Failure", "AWaRe Classification"]
  },
  {
    id: "lib_compounding_lab",
    title: "Extemporaneous Compounding & Dispensing Practical Manual",
    subject: "Pharmaceutics",
    yearLevel: "Year 2",
    type: "Lecture Notes",
    contributorChapter: "Mekelle University Chapter",
    pages: 64,
    downloads: 1890,
    description: "Formulation calculations, ointment bases, suspension stability, cleanroom sterile technique, and compounding quality control checklists.",
    topics: ["Alligation Calculations", "Suspensions & Emulsions", "Ophthalmic Preparations", "Incompatibilities"]
  },
  {
    id: "lib_clinical_clerkship",
    title: "Internal Medicine & ICU Clinical Clerkship Ward Companion",
    subject: "Pharmacotherapy",
    yearLevel: "Year 5 (Clerkship)",
    type: "Clinical Guideline",
    contributorChapter: "Tikur Anbessa Hospital EPSA Committee",
    pages: 112,
    downloads: 3150,
    description: "SOAP note documentation templates, therapeutic drug monitoring (vancomycin, aminoglycosides), electrolyte replacement protocols, and clinical ward pearls.",
    topics: ["SOAP Note Writing", "Vancomycin TDM", "Diabetic Ketoacidosis Protocol", "Heart Failure Optimization"]
  },
  {
    id: "lib_research_methodology",
    title: "Directed Studies & Senior Research Project Handbook",
    subject: "Pharmaceutical Research",
    yearLevel: "Year 4",
    type: "Research Paper",
    contributorChapter: "Haramaya & Bahir Dar Chapters",
    pages: 58,
    downloads: 1620,
    description: "Formulating research proposals, IRB ethical clearance protocols, biostatistical tests in SPSS/R, and paper structure for the EPSA Directed Studies Competition.",
    topics: ["Study Design", "Sample Size Calculation", "Ethical Clearance", "Manuscript Formatting"]
  },
  {
    id: "lib_medicinal_chemistry",
    title: "Structure-Activity Relationship (SAR) Atlas of Modern Therapeutics",
    subject: "Medicinal Chemistry",
    yearLevel: "Year 3",
    type: "Lecture Notes",
    contributorChapter: "Arba Minch University Chapter",
    pages: 86,
    downloads: 2110,
    description: "Visual functional group breakdown, stereochemistry, prodrug strategies, and metabolic biotransformation pathways for beta-lactams, NSAIDs, and statins.",
    topics: ["Beta-Lactam Ring SAR", "CYP450 Metabolism", "Receptor Binding Thermodynamics", "Bioisosteres"]
  },
  {
    id: "lib_pharmacy_law",
    title: "Ethiopian Drug Administration, Control & Proclamation Digest",
    subject: "Social & Administrative Pharmacy",
    yearLevel: "Year 1",
    type: "Lecture Notes",
    contributorChapter: "EPSA National Legal Committee",
    pages: 45,
    downloads: 1470,
    description: "Essential legal frameworks, EFDA regulations, narcotic registers, controlled substance storage laws, and patient confidentiality obligations in Ethiopia.",
    topics: ["EFDA Regulations", "Narcotic Schedule Books", "Pharmacy Premises Licensing", "Professional Ethics"]
  }
];

export const DAILY_CLINICAL_QUESTIONS: ClinicalVignette[] = [
  {
    id: "vignette_1",
    subject: "Pharmacotherapy · Cardiology",
    vignette: "A 58-year-old male with heart failure with reduced ejection fraction (HFrEF, EF 32%) and type 2 diabetes mellitus is admitted for optimization. His baseline eGFR is 48 mL/min/1.73m² and serum potassium is 4.7 mEq/L. He is currently on Carvedilol 25 mg BID and Enalapril 10 mg BID.",
    question: "Which medication should be prioritized next according to standard GDMT (Guideline-Directed Medical Therapy) to reduce cardiovascular mortality?",
    options: [
      "SGLT2 inhibitor (e.g., Dapagliflozin 10 mg daily)",
      "Amlodipine 5 mg daily for afterload reduction",
      "Digoxin 0.25 mg daily for positive inotropy",
      "Hydrochlorothiazide 25 mg daily"
    ],
    correctIndex: 0,
    rationale: "SGLT2 inhibitors (Dapagliflozin or Empagliflozin) are recommended as core quadruple therapy for HFrEF regardless of diabetes status, proven to reduce CV death and HF hospitalizations. His eGFR is well above the initiation threshold (>20-25 mL/min). Calcium channel blockers like Amlodipine provide no mortality benefit in HFrEF.",
    clinicalPearl: "Core GDMT in HFrEF consists of: ARNI/ACEi, Beta-blocker, MRA (Spironolactone), and SGLT2i ('The Fantastic Four')."
  },
  {
    id: "vignette_2",
    subject: "Infectious Diseases · Antimicrobial Stewardship",
    vignette: "A 32-year-old female presents to an outpatient pharmacy in Addis Ababa demanding Ciprofloxacin for acute uncomplicated cystitis. She has no fever, flank pain, or known allergies.",
    question: "According to the Ethiopian Standard Treatment Guidelines (STG) and global stewardship guidelines, what is the most appropriate recommendation?",
    options: [
      "Dispense Ciprofloxacin 500 mg BID for 3 days as requested",
      "Recommend first-line Nitrofurantoin 100 mg BID for 5 days instead, saving fluoroquinolones",
      "Switch to Ceftriaxone 1g IM single dose",
      "Advise drinking cranberry juice only without antimicrobial therapy"
    ],
    correctIndex: 1,
    rationale: "Nitrofurantoin (or Fosfomycin / Cotrimoxazole where local resistance <20%) is the first-line empirical agent for uncomplicated lower UTI. Fluoroquinolones like Ciprofloxacin should be reserved due to collateral damage, high risk of tendonitis, QT prolongation, and emergence of ESBL resistance.",
    clinicalPearl: "Reserve fluoroquinolones for pyelonephritis, complicated UTI, or severe systemic infections to protect national efficacy."
  },
  {
    id: "vignette_3",
    subject: "Clinical Toxicology · Antidotes",
    vignette: "A 24-year-old female is rushed to the emergency department 5 hours after ingesting approximately 15 grams of Paracetamol (Acetaminophen) in a deliberate self-harm attempt.",
    question: "What is the primary mechanism of action of the definitive antidote, N-Acetylcysteine (NAC)?",
    options: [
      "Direct chemical binding and neutralization of unabsorbed paracetamol in the gut lumen",
      "Replenishing hepatic glutathione stores to detoxify the reactive metabolite NAPQI",
      "Induction of renal tubular clearance of acetaminophen glucuronide conjugates",
      "Competitive blockade of cytochrome P450 2E1 receptor sites"
    ],
    correctIndex: 1,
    rationale: "Paracetamol overdose depletes hepatic glutathione, causing toxic NAPQI to bind covalently to hepatocellular proteins, inducing acute hepatic necrosis. N-acetylcysteine provides cysteine, which restores glutathione synthesis and serves as an alternative substrate for NAPQI conjugation.",
    clinicalPearl: "NAC is nearly 100% hepatoprotective if administered within 8 hours of acute ingestion; never delay while waiting for lab levels."
  },
  {
    id: "vignette_4",
    subject: "Pharmaceutics · Biopharmaceutics",
    vignette: "During a formulation workshop, a student team is compounding an oral suspension of a poorly water-soluble active pharmaceutical ingredient (API). The particles are observed to form a compact, irreversible sediment at the bottom of the bottle after 48 hours.",
    question: "Which phenomenon is taking place, and what is the formulation solution?",
    options: [
      "Caking in a deflocculated system; formulate as a controlled flocculated suspension with a flocculating agent",
      "Coalescence; add an HLB 15 emulsifying agent",
      "Syneresis in a gel; increase the concentration of methylcellulose",
      "Ostwald ripening; decrease the storage temperature"
    ],
    correctIndex: 0,
    rationale: "In deflocculated suspensions, particles settle slowly as individual units, forming an impenetrable, tightly packed sediment known as 'caking' that cannot be resuspended by shaking. A controlled flocculated suspension allows particles to form loose, fluffy aggregates ('flocs') that settle faster but readily redisperse with gentle shaking.",
    clinicalPearl: "A good suspension does not prevent settling entirely; it ensures settled particles easily redisperse upon mild agitation."
  }
];

export const EXECUTIVE_BOARD: ExecutiveMember[] = [
  { role: "National President", name: "Natnael Tefera", university: "Addis Ababa University", portfolio: "Strategic Leadership & MoE/MoH Representation" },
  { role: "VP of Internal Affairs", name: "Betelehem Getachew", university: "Jimma University", portfolio: "25 Regional Chapter Operations & General Assembly" },
  { role: "VP of External Affairs", name: "Kidus Assefa", university: "University of Gondar", portfolio: "IPSF Liaison, Global Exchanges & EPA Partnership" },
  { role: "Secretary General", name: "Tsion Haile", university: "Hawassa University", portfolio: "National Secretariat, Records & Official Resolutions" },
  { role: "Treasurer & Finance Chair", name: "Yohannes Bekele", university: "Mekelle University", portfolio: "Sponsorships, Project Grants & Audit Oversight" },
  { role: "Public Relations Officer", name: "Meklit Desta", university: "Haramaya University", portfolio: "Digital Media, Publications & Telegram Channel" },
  { role: "National Project Coordinator", name: "Eyob Worku", university: "Bahir Dar University", portfolio: "CSE, PCE, AMR Day & Mega E-Library Operations" },
  { role: "Co-opted Regional Liaison", name: "Abdi Mohammed", university: "Arba Minch University", portfolio: "Regional Assembly Taskforces & University Deans" },
  { role: "Co-opted Legal & Policy Advisor", name: "Fikirte Alemayehu", university: "Addis Ababa University", portfolio: "PharmD Proclamation & Exit Exam Blueprint Advocacy" },
];

export const EPSA_CHAPTERS: Chapter[] = [
  { id: "aau", universityName: "Addis Ababa University", amharicName: "አዲስ አበባ ዩኒቨርሲቲ", city: "Addis Ababa", region: "Central", establishedEc: 2004, membersCount: 420, presidentName: "Yared Tesfaye", contactTelegram: "epsa_aau", leadFaculty: "School of Pharmacy, Tikur Anbessa & Sefere Selam Campus", status: "Active" },
  { id: "ju", universityName: "Jimma University", amharicName: "ጅማ ዩኒቨርሲቲ", city: "Jimma", region: "Oromia", establishedEc: 2005, membersCount: 380, presidentName: "Selamawit Bekele", contactTelegram: "epsa_ju", leadFaculty: "Institute of Health, School of Pharmacy", status: "Active" },
  { id: "uog", universityName: "University of Gondar", amharicName: "የጎንደር ዩኒቨርሲቲ", city: "Gondar", region: "Amhara", establishedEc: 2005, membersCount: 350, presidentName: "Dawit Abebe", contactTelegram: "epsa_uog", leadFaculty: "College of Medicine and Health Sciences, School of Pharmacy", status: "Active" },
  { id: "hu", universityName: "Hawassa University", amharicName: "ሀዋሳ ዩኒቨርሲቲ", city: "Hawassa", region: "Southern", establishedEc: 2007, membersCount: 310, presidentName: "Eyerusalem Tadesse", contactTelegram: "epsa_hu", leadFaculty: "College of Medicine and Health Sciences", status: "Active" },
  { id: "mu", universityName: "Mekelle University", amharicName: "መቐለ ዩኒቨርሲቲ", city: "Mekelle", region: "Tigray", establishedEc: 2006, membersCount: 290, presidentName: "Bereket Kahsay", contactTelegram: "epsa_mu", leadFaculty: "Ayder Comprehensive Specialized Hospital, School of Pharmacy", status: "Active" }
];
