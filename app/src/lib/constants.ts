export const STATS = [
  { value: '1.5M', label: 'Engineering grads/year in India' },
  { value: '83%', label: 'Got no offer in 2024' },
  { value: '3', label: 'Structured assessments' },
  { value: '2hrs', label: 'Per assessment window' },
];

export const WHAT_IS_CARDS = [
  {
    icon: 'Building2',
    color: 'primary',
    title: 'Company-Sourced Problems',
    description: 'No textbook exercises or DSA puzzles. Every problem comes from a real company — scoped from actual operational, product, or engineering challenges.',
  },
  {
    icon: 'Layers',
    color: 'pink',
    title: '3 Challenges, 2 Hours Each',
    description: 'Three independent assessments across one week. Each challenge tests different skills. Attempt all three to maximize your signal.',
  },
  {
    icon: 'Bot',
    color: 'accent',
    title: 'AI Tools Permitted',
    description: "84% of developers use AI daily. We test how you use it — judgment, structuring, and execution with AI as a co-pilot. Not whether you can avoid it.",
  },
  {
    icon: 'Target',
    color: 'success',
    title: 'Direct Hiring Pipeline',
    description: "Top performers are mapped directly to participating companies for internship and entry-level interviews. Built for outcomes — not certificates.",
  },
];

export const FORMAT_ITEMS = [
  { icon: 'Globe', title: 'Fully Online', description: 'Participate from anywhere in India' },
  { icon: 'User', title: 'Individual', description: 'Your execution. Your signal.' },
  { icon: 'Layers', title: '3 Challenges', description: '3 assessments over one week' },
  { icon: 'Timer', title: '2-Hour Timer', description: 'Per challenge. Auto-lock on submit.' },
  { icon: 'Brain', title: 'AI Permitted', description: 'Use any AI tool you want' },
  { icon: 'FileCode', title: 'Code + Explanation', description: 'Structured submission format' },
];

export const COMPARISON_DATA = [
  { dimension: 'Format', hackathon: 'Multi-day, team-based', vantax: '3 challenges, 2 hrs each, individual' },
  { dimension: 'Outcome', hackathon: 'Prizes and swag', vantax: 'Internship interviews' },
  { dimension: 'Problems', hackathon: 'Open-ended, self-chosen', vantax: 'Company-sourced, scoped' },
  { dimension: 'Evaluation', hackathon: 'Demo + subjective judges', vantax: 'AI pre-score + human moderation' },
  { dimension: 'AI Tools', hackathon: 'Often restricted', vantax: 'Encouraged' },
  { dimension: 'Signal', hackathon: 'Team dynamics', vantax: 'Individual execution' },
  { dimension: 'Hiring Intent', hackathon: 'Maybe, post-event', vantax: 'Built into the format' },
];

export const RUBRIC_DATA = [
  { weight: 25, label: 'Execution Quality', description: 'Does it work? Is the code clean and functional?' },
  { weight: 20, label: 'Problem Understanding', description: 'Did they grasp the business context and constraints?' },
  { weight: 20, label: 'Logical Structuring', description: 'Is the approach organized and defensible?' },
  { weight: 20, label: 'Practical Feasibility', description: 'Could this be used in a real environment?' },
  { weight: 15, label: 'Communication Clarity', description: 'Can you understand it without a walkthrough?' },
];

export const TIMELINE_DATA = [
  { date: '14 April 2026', title: 'Jury & Partner Announcement', description: 'Jury panel, partnerships, and sponsors revealed' },
  { date: '23 April 2026', title: 'VantaX 2026 Launches', description: 'Event goes live — registration closes at launch' },
  { date: '25 April 2026', title: 'Challenge 1 — Submissions Open', description: '2-day window · 2-hour timed assessment' },
  { date: '27 April 2026', title: 'Challenge 2 — Submissions Open', description: '2-day window · 2-hour timed assessment' },
  { date: '29 April 2026', title: 'Challenge 3 — Submissions Open', description: '2-day window · 2-hour timed assessment' },
  { date: '1 May 2026', title: 'Top 10 + Final Results', description: 'Leaderboard published · Top performers shortlisted' },
];

export const HOW_IT_WORKS = [
  { step: '01', title: 'Submit a Real Problem', description: 'Provide a practical, scoped problem that can be attempted within 2 hours — from your actual business.' },
  { step: '02', title: 'Candidates Solve 3 Challenges', description: 'Candidates solve each challenge individually in a 2-hour timed, AI-augmented environment across one week.' },
  { step: '03', title: 'We Evaluate and Shortlist', description: 'AI pre-scoring + human moderation. Top performers identified using a standardized rubric.' },
  { step: '04', title: 'You Access Filtered Talent', description: 'Shortlisted profiles with scores, resumes, GitHub, and full solution submissions — within 7 days.' },
];

export const PROBLEM_TYPES = [
  'Design a simplified automation workflow for a business process',
  'Build a candidate ranking logic for a hiring use case',
  'Create a structured AI-assisted document processing pipeline',
  'Prototype a scoring system or decision engine',
  'Design and implement a minimal viable technical solution',
];

export const WHAT_YOU_GAIN = [
  { icon: 'Eye', title: 'Real Solution Quality', description: 'Observe how candidates approach your actual problem' },
  { icon: 'Scale', title: 'Structured Comparability', description: 'Rubric-scored submissions, not subjective impressions' },
  { icon: 'Zap', title: 'Execution-Based Data', description: 'Filter for builders, not just test-takers' },
  { icon: 'Shield', title: 'Reduced Hiring Risk', description: 'See the work before the interview' },
  { icon: 'Rocket', title: 'Early Talent Pipeline', description: 'Identify high-potential freshers before competitors do' },
];

export const INDUSTRY_OPTIONS = [
  'SaaS', 'HRTech', 'AI / ML Product', 'EdTech', 'FinTech',
  'Automation / Workflow', 'MSME Tech', 'Other',
];

export const COMPANY_STAGE_OPTIONS = [
  'Early-stage (0–20 employees)',
  'Growth-stage (20–100 employees)',
  'Established (100+ employees)',
];

export const DIFFICULTY_OPTIONS = [
  { value: 'Conceptual', description: 'Primarily tests structured thinking and approach design' },
  { value: 'Balanced', description: 'Equal weight on logic, structuring, and working implementation' },
  { value: 'Execution-Heavy', description: 'Requires strong implementation; working code expected' },
];

export const HIRING_INTENT_OPTIONS = [
  'Yes — Paid internship',
  'Yes — Stipend-based internship',
  'Yes — Entry-level / full-time role',
  'Depends on quality of submissions',
  'No — participating for talent visibility only',
];

export const SKILLS_OPTIONS = [
  'Python', 'JavaScript / Node.js', 'Prompt engineering / LLM integration',
  'Backend development', 'Frontend / React', 'System design',
  'Automation / scripting', 'Data analysis', 'AI/ML fundamentals',
];

export const DELIVERABLE_OPTIONS = [
  'Code (GitHub link or ZIP upload)',
  'Structured explanation (PDF/Doc)',
  'Flow diagram / system architecture',
  'Short demo video (2–3 min)',
  'Logic document / pseudocode',
];

export const CONFIRMATION_ITEMS = [
  'The problem does not require proprietary or confidential data',
  'It can reasonably be attempted by one person within 2 hours',
  'It is intended for evaluation of early-career candidates',
  'AI tools may be used by participants unless specified restrictions above',
];

export const JURY_WHY_FORMAT = [
  'Company-sourced real-world problems, not textbook exercises',
  '3 challenges, each with a 2-hour timed window — individual submissions',
  'AI tools permitted — testing judgment, not memorization',
  'Structured and comparable — rubric-scored, not vibes-judged',
  'Top performers mapped directly to internship pipelines',
];

export const JURY_ROLES = [
  'Review top shortlisted submissions only (pre-filtered)',
  'Evaluate using a standardized scoring rubric',
  'Participate in final shortlisting discussions',
  'Optionally attend a virtual jury review session (45 min)',
  'Provide high-level feedback on submission quality',
];

export const JURY_BENEFITS = [
  'See real execution ability under time constraint',
  'Identify internship-ready candidates before the open market',
  'Access shortlisted profiles — resumes, GitHub, full submissions',
  'Build early-stage hiring pipelines from verified talent',
  'Shape how India discovers early-career talent',
  'Help define the standard for how the next generation of builders gets evaluated',
];

export const DOMAIN_OPTIONS = [
  'Backend Engineering', 'Frontend / React', 'Full-Stack Development',
  'System Design', 'AI / ML', 'Product Management',
  'Data Engineering', 'DevOps / Cloud', 'Technical Hiring',
];

export const WHY_VANTAX_EXISTS = [
  { icon: 'FileX2', text: 'Resumes don\'t measure execution' },
  { icon: 'Binary', text: 'DSA puzzles don\'t measure real-world thinking' },
  { icon: 'Presentation', text: 'Hackathons reward presentation, not precision' },
  { icon: 'Users', text: 'Referrals distort merit' },
  { icon: 'Bot', text: 'AI has changed how builders work — hiring hasn\'t adapted' },
];

export const WHY_COMPANIES_PARTICIPATE = [
  { icon: 'Filter', title: 'Pre-Filtered Talent', description: 'Execution-ranked candidates — only top 5% reach your pipeline' },
  { icon: 'Brain', title: 'AI-Scored Submissions', description: 'Structured AI evaluation with human moderation overlay' },
  { icon: 'MapPin', title: 'No Campus Travel', description: 'Zero logistics cost — fully online, company-branded problems' },
  { icon: 'PhoneOff', title: 'No Mass Screening Calls', description: 'Skip the 500-call funnel — work speaks for itself' },
  { icon: 'ClipboardCheck', title: 'Transparent Audit Trail', description: 'Every score backed by rubric evidence and structured reasoning' },
  { icon: 'Zap', title: '7-Day Turnaround', description: 'From challenge to shortlist in one week — hiring at execution speed' },
];

export const INTEGRITY_ITEMS = [
  { icon: 'KeyRound', title: 'Individual Login + Timed Environment', description: 'Unique session per candidate with hard 2-hour lockout' },
  { icon: 'ScanSearch', title: 'Plagiarism Detection + AI-Pattern Analysis', description: 'Automated similarity checks across all submissions' },
  { icon: 'MessageSquareText', title: 'Structured Explanation Required', description: 'Reasoning matters — code alone doesn\'t pass' },
  { icon: 'Shuffle', title: 'Randomized Problem Pools', description: 'Variations prevent copy-paste across candidates' },
  { icon: 'UserCheck', title: 'Manual Review for Shortlisted', description: 'Human jury validates top performers before company handoff' },
];

export const SCORING_DETAILS = [
  'Multi-stage scoring: AI pre-score + human moderation',
  'Standard deviation normalization across problem pools',
  'Inter-rater reliability check for top 10% submissions',
];

export const SUBMISSION_FORMAT = [
  { icon: 'Github', text: 'GitHub repo or code file' },
  { icon: 'FileText', text: 'Short architecture explanation (max 300 words)' },
  { icon: 'Bot', text: 'AI usage disclosure — what tools, how used' },
  { icon: 'Scale', text: 'Trade-offs and assumptions documented' },
  { icon: 'ExternalLink', text: 'Demo link (if applicable)' },
];

export const FAQ_DATA = [
  {
    question: 'Is this beginner-friendly?',
    answer: 'VantaX is designed for early-career builders — final-year students, recent graduates, and anyone with 0–2 years of experience. Problems are scoped to be solvable in 2 hours. You don\'t need to be an expert, but you need to be able to think clearly and execute.',
  },
  {
    question: 'What languages/tools are allowed?',
    answer: 'Any language, any framework, any AI tool. We evaluate your output — not your stack. Use whatever you\'re most productive with.',
  },
  {
    question: 'Can non-CS students apply?',
    answer: 'Absolutely. If you can break down a problem and build a solution, your degree doesn\'t matter. VantaX evaluates execution, not credentials.',
  },
  {
    question: 'Can I participate in multiple challenges?',
    answer: 'Yes. There are 3 challenges across the week — 25, 27, and 29 April, each with a 2-day submission window. You can attempt all three. Each is independent and has its own leaderboard.',
  },
  {
    question: 'What if I lose internet mid-assessment?',
    answer: 'Your timer pauses are not supported — the 2-hour window runs continuously once started. Choose a stable connection. Submissions auto-lock at the deadline.',
  },
  {
    question: 'Will I get a certificate?',
    answer: 'All participants receive a VantaX participation credential. Top performers earn the VantaX Verified Builder Badge — a performance-backed credential you can add to LinkedIn.',
  },
  {
    question: 'Can I retake a challenge?',
    answer: 'No. Each challenge has a single submission window. This isn\'t a practice test — it\'s a hiring audition.',
  },
  {
    question: 'Is it free or paid?',
    answer: '₹199 to register. This gives you access to all 3 challenges, structured hiring exposure, and a direct path to participating companies.',
  },
];

export const POWERED_BY_POINTS = [
  'Built by talent leaders who scaled teams at product companies',
  'Bangalore-based, hiring-first platform',
  'Connecting execution-verified talent directly to companies ready to hire',
];
