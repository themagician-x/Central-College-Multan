// Central College Multan — site content, extracted from central.edu.pk and edited.

export const college = {
  name: "Central College Multan",
  shortName: "Central College",
  established: 1992,
  tagline: "Let's study together.",
  phone: "061-6221002-3",
  phoneHref: "tel:0616221002",
  email: "info@central.edu.pk",
  address: "Khakwani House, LMQ Road, opposite Sports Ground, Multan",
  hours: "Monday – Saturday · 7:00 AM – 8:00 PM",
};

export const stats = [
  { value: 4000, suffix: "+", label: "Success stories" },
  { value: 30, suffix: "+", label: "Dedicated faculty" },
  { value: 35, suffix: "", label: "Courses offered" },
  { value: 34, suffix: "", label: "Years of excellence" },
];

export type Program = {
  name: string;
  detail: string;
  eligibility?: string;
};

export type ProgramLevel = {
  level: string;
  blurb: string;
  programs: Program[];
};

export const programLevels: ProgramLevel[] = [
  {
    level: "Intermediate",
    blurb: "Two-year programs preparing students for university and professional study.",
    programs: [
      { name: "F.Sc. Pre-Medical", detail: "Physics · Biology · Chemistry" },
      { name: "F.Sc. Pre-Engineering", detail: "Physics · Mathematics · Chemistry" },
      { name: "ICS", detail: "Physics · Mathematics · Computer Science" },
      { name: "ICS (Statistics)", detail: "Statistics · Mathematics · Computer Science" },
      { name: "ICS (Economics)", detail: "Economics · Statistics · Computer Science" },
      { name: "F.Sc. General Science", detail: "Mathematics · Statistics · Economics" },
      { name: "I.Com.", detail: "Intermediate in Commerce" },
    ],
  },
  {
    level: "Bachelors",
    blurb: "Degree programs across the natural sciences, computing, and commerce.",
    programs: [
      { name: "B.Sc. (Physics)", detail: "Math A · Math B · Physics" },
      { name: "B.Sc. (Statistics)", detail: "Math A · Math B · Statistics" },
      { name: "B.Sc. (Economics)", detail: "Math A · Math B · Economics" },
      { name: "B.Sc. (General)", detail: "General Math · Statistics · Economics" },
      { name: "B.Sc. Computer Science", detail: "The first program of its kind in the region" },
      {
        name: "B.Com.",
        detail: "Bachelor of Commerce",
        eligibility: "Minimum 2nd division in F.A. / F.Sc. or equivalent",
      },
    ],
  },
  {
    level: "Masters",
    blurb: "Advanced study in commerce and business administration.",
    programs: [
      {
        name: "M.Com.",
        detail: "Master of Commerce",
        eligibility: "Minimum 2nd division in B.A. / B.Sc. or equivalent",
      },
      {
        name: "MBA",
        detail: "Master of Business Administration",
        eligibility: "3.5-year program after B.A. / B.Sc. or equivalent",
      },
    ],
  },
  {
    level: "Law — Central Law College",
    blurb: "Professional legal education in South Punjab since 1992.",
    programs: [
      { name: "LL.B. (5-Year)", detail: "Integrated dual-degree — B.A. + LL.B." },
      { name: "LL.B. (3-Year)", detail: "Graduate program for degree holders" },
    ],
  },
];

export type FacultyMember = {
  name: string;
  role: string;
  qualification?: string;
  specialization?: string;
};

export const leadership: FacultyMember[] = [
  {
    name: "Hafiz Khizar Hayat",
    role: "Principal",
    qualification: "M.A. Islamiat",
    specialization: "Islamic Studies",
  },
  {
    name: "Hammad Saleem Khan",
    role: "Vice Principal",
    specialization: "English",
  },
  {
    name: "Asif Sheraz",
    role: "Examination Controller",
    qualification: "M.Phil",
    specialization: "Mathematics",
  },
];

export const teachingFaculty: FacultyMember[] = [
  { name: "Hammad Saleem", role: "Coordinator (Inter)", qualification: "M.A. English" },
  { name: "Ghulam Rasool Abbasi", role: "Lecturer", qualification: "M.A., B.Ed.", specialization: "Urdu" },
  { name: "Tasneem Zahra", role: "Lecturer", qualification: "M.A.", specialization: "Economics" },
  { name: "Mam Naheed", role: "Lecturer", qualification: "M.Sc. Zoology" },
  { name: "Waqar Amjad", role: "Lecturer", qualification: "M.Sc. Accounting" },
  { name: "Ghulam Abbas", role: "Lecturer", qualification: "M.Sc. Computer Science" },
  { name: "Salman Ahmad", role: "H.O.D. Computer Science", qualification: "BS-CS (Gold Medalist)" },
  { name: "Aroosa Awan", role: "Lecturer", qualification: "M.Phil Business Administration" },
  { name: "Muhammad Ishrat", role: "Fee Incharge", specialization: "Physics" },
  { name: "Muhammad Jameel Anwar", role: "H.O.D. Chemistry", qualification: "M.Phil Chemistry" },
  { name: "Sanovia Saleem", role: "Lecturer", qualification: "M.Sc. Psychology" },
  { name: "Kashif Anser", role: "Lecturer", qualification: "M.Sc. Economics" },
  { name: "Muhammad Zunnurain", role: "H.O.D. Statistics", qualification: "M.Phil Statistics" },
  { name: "Muhammad Yousaf", role: "Lecturer", qualification: "M.Sc. Accounting" },
  { name: "Muhammad Sajjad", role: "Lecturer", specialization: "Mathematics" },
  { name: "Sadia Suleman", role: "Lecturer", qualification: "M.Ed." },
  { name: "Mahnoor Farooq", role: "Lecturer", qualification: "M.Phil Botany" },
];

export const lawFaculty: FacultyMember[] = [
  { name: "Muhammad Aslam Parvez", role: "Law Faculty" },
  { name: "Khalid Goheer", role: "Law Faculty" },
  { name: "Yahya Mumtaz", role: "Law Faculty" },
  { name: "Kamran Ashraf", role: "Law Faculty" },
];

export const supportStaff: FacultyMember[] = [
  { name: "Muhammad Ismail", role: "Accountant" },
  { name: "Muhammad Rizwan Hussain", role: "Accountant" },
  { name: "Zahoor-ud-din", role: "Accountant" },
  { name: "Hafiz Shafeeq Ahmad", role: "Accountant" },
  { name: "Ghazanfar Abbas", role: "Sports Incharge" },
  { name: "Hasaan Doger", role: "Computer Lab Attendant" },
  { name: "Muhammad Irfan", role: "Chemistry Lab Attendant" },
  { name: "Muhammad Sajjad", role: "Physics Lab Attendant" },
];

export type CollegeEvent = {
  name: string;
  note: string;
  season: string;
};

export const events: CollegeEvent[] = [
  {
    name: "Milad",
    note: "An evening of devotion and reflection, observed together by the whole college.",
    season: "Rabi al-Awwal",
  },
  {
    name: "Prize Distribution",
    note: "Celebrating the year's top performers — don't be afraid to give up the good to go for the great.",
    season: "Spring",
  },
  {
    name: "Sports Gala",
    note: "A week of cricket, athletics, and tug-of-war. Sports build confidence and discipline.",
    season: "February",
  },
  {
    name: "Annual Trip",
    note: "A journey is best measured in friends rather than miles — northern areas, every year.",
    season: "Summer",
  },
  {
    name: "Concert Night",
    note: "Music, qawwali, and performances from the students themselves.",
    season: "Winter",
  },
  {
    name: "Welcome & Farewell Parties",
    note: "Marking arrivals and goodbyes — happiness is a state of activity.",
    season: "Term start & end",
  },
];

export type ShortCourse = {
  name: string;
  duration: string;
  topics: string[];
};

export const shortCourses: ShortCourse[] = [
  {
    name: "Web Development",
    duration: "3 months",
    topics: ["HTML & CSS", "Bootstrap", "JavaScript & jQuery", "PHP", "MySQL"],
  },
  {
    name: "Android Development",
    duration: "3 months",
    topics: ["Android Studio", "Layout design", "Java", "App development", "Play Store & AdMob"],
  },
  {
    name: "Programming Languages",
    duration: "3 months",
    topics: ["C++", "Python", "C#", "R"],
  },
  {
    name: "Graphic Designing",
    duration: "3 months",
    topics: ["Photoshop", "Illustrator", "InDesign", "CorelDRAW", "GIMP & Inkscape"],
  },
  {
    name: "Content Marketing & Advertising",
    duration: "3 months",
    topics: ["Content marketing", "Marketing funnels", "WordPress", "On-page SEO & backlinking"],
  },
  {
    name: "Basic Computer Course",
    duration: "8 weeks",
    topics: ["MS Office", "Windows installation & troubleshooting", "Application setup", "Audio & video management"],
  },
  {
    name: "English Language",
    duration: "3 months",
    topics: ["Grammar & composition", "Spoken English", "Presentation skills"],
  },
  {
    name: "Chinese Language",
    duration: "3 months",
    topics: ["HSK fundamentals", "Conversation", "Reading & writing"],
  },
];

export const lawFaqs = [
  {
    q: "How can I apply for admission to the LL.B. program?",
    a: "Collect the Admission Application Form from the college office and submit it along with the required documents.",
  },
  {
    q: "How can I practice law after completing my LL.B.?",
    a: "After completing the LL.B., graduates take a written test conducted by the Punjab Bar Council. On passing, they acquire the license to practice as an Advocate.",
  },
  {
    q: "What is the difference between the 3-year and 5-year LL.B.?",
    a: "The integrated 5-year LL.B. is a dual-degree program (B.Com. / BBA / B.A. + LL.B.), saving you a year. Recruiters treat 5-year graduates on par with 3-year LL.B. graduates of similar universities.",
  },
  {
    q: "Why should I prefer Central Law College?",
    a: "Central Law College offers strong job placement, graduates who consistently perform well in competitive examinations, and a faculty of eminent legal scholars — making it one of the strongest academic choices in South Punjab.",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/campus", label: "Campus" },
  { href: "/faculty", label: "Faculty" },
  { href: "/short-courses", label: "Short Courses" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];
