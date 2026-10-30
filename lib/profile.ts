export const contact = {
  name: 'Benjamin Hays',
  credentials: ['PMP', 'PMI-ACP', 'CSM'],
  title: 'Project Manager & Business Analyst',
  location: 'Sacramento, California',
  phoneDisplay: '916-862-3408',
  phoneHref: 'tel:+19168623408',
  email: 'Benjamin.Hays@gmail.com',
  github: 'https://github.com/TechFluentBenjamin/',
  githubLabel: 'github.com/TechFluentBenjamin',
}

export const summary =
  'Results-driven project manager with two master’s degrees, in Project Management and Information Technology Management, and a track record of saving organizations millions of dollars through practical, stakeholder-centered project solutions. US citizen, remote-ready in the Sacramento region.'

export const highlights = [
  { value: '$1M', label: 'Annual late fees eliminated' },
  { value: '90%', label: 'Fewer workflow errors' },
  { value: '40%', label: 'More small-business use' },
  { value: '25%', label: 'More usable talking books' },
]

export type Role = {
  title: string
  org: string
  location: string
  dates: string
  note?: string
  points: string[]
}

export const experience: Role[] = [
  {
    title: 'Information Technology Coordinator',
    org: 'California State Library',
    location: 'Sacramento, CA',
    dates: 'Sep 2025 – 2026',
    note: 'Volunteer position',
    points: [
      'Assisted library staff in programming talking book machines for blind and low-vision patrons throughout California, ensuring ease of use and compliant distribution to recipients.',
      'Developed a new process that increased usable talking books by 25%, reducing expenses and increasing throughput.',
      'Maintained check-in and check-out records for talking book machines, confirming the accuracy of all information entered.',
    ],
  },
  {
    title: 'Data Security Coordinator',
    org: 'Xpert Tax and Financial',
    location: 'Sacramento, CA',
    dates: 'Dec 2024 – Apr 2025',
    note: 'Temporary position, 60% remote',
    points: [
      'Implemented daily stand-ups and taught agile and information security concepts to staff, improving workflow efficiency and reinforcing security processes.',
      'Authored a comprehensive IRS-compliant information security plan, including policies, risk assessments, procedures, and staff training, to safeguard taxpayer data.',
      'Created a streamlined checklist for tax preparers and internal auditors that cut workflow errors by 90% and reduced client interaction time by 30 minutes.',
    ],
  },
  {
    title: 'IT Project Manager & Teacher',
    org: 'Visuttharangsi School',
    location: 'Thailand',
    dates: 'Mar 2016 – Mar 2017',
    points: [
      'Designed and launched a Microsoft SharePoint knowledge management system that consolidated lesson-planning resources and best-practice documentation.',
      'Developed and taught IT fundamentals (Microsoft Office, Python, and Photoshop) to students in grades 7–12, boosting engagement and core technology skills.',
    ],
  },
  {
    title: 'Analyst & Coordinator',
    org: 'CAL FIRE, State of California',
    location: 'Sacramento, CA',
    dates: 'Sep 2006 – Sep 2015',
    points: [
      'Served as business analyst for a new Accounts Payable system, a centralized procurement system, and an internal HR system in a matrix environment. All delivered on time, on budget, and to stakeholder satisfaction.',
      'Results included $1M per year in reduced late fees, a 40% increase in small-business use, and 30 minutes saved per new-employee onboarding.',
      'Interviewed stakeholders and observed end users to quantify pain points against benchmarks from other agencies; modeled current and future processes in Visio and UML.',
      'Developed budget proposals for senior management and the Department of Finance, identified resources and subcontractors, and drafted contracts.',
      'Supported agile ceremonies (user stories, planning poker, “remember the future”), and introduced a “design the product box” exercise and a “one change per scrum” rule to reduce change requests.',
      'Built PowerPoint wireframes to gather user feedback, and helped develop and deliver multi-day training sessions.',
    ],
  },
]

export const certifications = [
  {
    code: 'PMP',
    name: 'Project Management Professional',
    issuer: 'Project Management Institute',
  },
  {
    code: 'PMI-ACP',
    name: 'Agile Certified Practitioner',
    issuer: 'Project Management Institute',
  },
  {
    code: 'CSM',
    name: 'Certified Scrum Master',
    issuer: 'Scrum Alliance',
  },
]

export const education = [
  { degree: 'Master of Information Technology Management', school: 'Colorado State University' },
  { degree: 'Master of Project Management', school: 'Colorado State University' },
  { degree: 'Bachelor of Project Management', school: 'Colorado State University' },
]

export const currentStudies = {
  school: 'Sacramento City College, Fall 2026',
  courses: ['Introduction to Python', 'Introduction to Microsoft PowerPoint'],
}

export const skillGroups = [
  {
    name: 'Project Management',
    skills: ['Advanced scheduling (CPM)', 'Gantt charts', 'WBS creation', 'Baseline vs. actual', 'Task tracking', 'Microsoft Project', 'Jira & Jira Cloud', 'JQL'],
  },
  {
    name: 'Data & Analytics',
    skills: ['Excel & Power BI', 'Pivot tables', 'Time intelligence', 'Tableau dashboards', 'Calculated fields', 'Filters & slicers', 'PostgreSQL', 'pgAdmin', 'Schema design'],
  },
  {
    name: 'Development & Tools',
    skills: ['Python', 'Pandas', 'NumPy', 'unittest', 'Git', 'VS Code', 'Bash & PowerShell', 'StackHawk'],
  },
  {
    name: 'Collaboration Platforms',
    skills: ['SharePoint taxonomy', 'Managed Metadata Service', 'Version control policies', 'SharePoint UI/UX', 'Google Workspace', 'Google Sheets automation', 'Microsoft Word & PowerPoint'],
  },
]

export const softSkills = [
  'Communication & stakeholder engagement',
  'Team collaboration & leadership',
  'Problem-solving & critical thinking',
  'Organization & time management',
  'Adaptability & prioritization',
  'Conflict resolution',
  'Accountability & attention to detail',
  'Facilitation & continuous improvement',
]

export const publication = {
  title: 'GPT4All: Installing, Configuring, and Using a Chatbot that You Control',
  publisher: 'Amazon Kindle Direct Publishing',
  year: '2026',
  asin: 'B0G2KDYB45',
  url: 'https://www.amazon.com/dp/B0G2KDYB45',
  description:
    'A practical guide to configuring the local chatbot GPT4All, including how to use AI to optimize project processes.',
}

export const membership = 'Project Management Institute, Sacramento Valley Chapter'
