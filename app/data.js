// Single source of truth for every section on the page.

export const personalData = {
  name: "Anjali Dalsaniya",
  designation: "Backend Developer",
  email: "anjalidalsaniya2212@gmail.com",
  phone: "+91 9265260394",
  address: "Gujarat, India",
  github: "https://github.com/AnjaliDalsaniya04",
  linkedIn:
    "https://www.linkedin.com/in/anjali-dalsaniya-cte-gecbvn-it-68b917372/",
  leetcode: "https://leetcode.com/u/Anjali_dalsaniya",
  // Must match the file in /public exactly, including case — Windows is
  // case-insensitive but Vercel/Linux is not, so a mismatch 404s only in prod.
  resume: "/Anjali_resume.pdf",
  profile: "/profile.png",
  description:
    "I'm a backend developer currently working at Tassos Consultancy Services, building HRMS-ERP systems using Node.js, Express.js and PostgreSQL. I love designing clean REST APIs, optimizing database queries, and building secure authentication systems. Graduating from GEC Bhavnagar in June 2026 with CGPA 8.48.",
};

export const experiences = [
  {
    id: 1,
    title: "Backend Developer",
    company: "Tassos Consultancy Services",
    duration: "Jan 2026 - Present",
    description:
      "Developing and maintaining backend modules for an HRMS-ERP system using Node.js, Express.js and PostgreSQL. Designed RESTful APIs for employee management, authentication, department handling and role-based access control. Built JWT-based authentication for Admin, HR and Employee panels.",
  },
  {
    id: 2,
    title: "AI for Manufacturing Trainee",
    company: "Intel Digital Readiness × GTU",
    duration: "Feb 2025 - Jun 2025",
    description:
      "Completed a 4-month AI for Manufacturing program under GTU and Intel India. Gained foundational knowledge of AI and its practical applications in industrial settings. Credential ID: AI4MGTUS1507250029.",
  },
  {
    id: 3,
    title: ".NET & Angular Developer Intern",
    company: "Tatvasoft",
    duration: "Jul 2025",
    description:
      "Worked on backend development using .NET framework. Gained practical exposure to API development, routing, CRUD operations and database connectivity.",
  },
];

export const projects = [
  {
    id: 1,
    name: "HRMS – Human Resource Management System",
    role: "Backend Developer",
    tools: ["Node.js", "Express.js", "PostgreSQL", "JWT", "REST API"],
    code: "",
    description:
      "Built at Tassos Consultancy Services — a comprehensive HRMS to automate HR operations including employee management, payroll processing, attendance tracking and leave management with role-based access control. Private company project.",
  },
  {
    id: 2,
    name: "AMPLIMENTOR – Mentorship Platform",
    role: "Full Stack Developer",
    tools: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript"],
    code: "https://github.com/AnjaliDalsaniya04/Amplimentor",
    description:
      "A web-based mentorship platform connecting students with mentors. Features student-mentor matching, session scheduling, progress tracking and doubt-solving interactions.",
  },
  {
    id: 3,
    name: "Movie Zone – Movie Browsing Application",
    role: "Frontend Developer",
    tools: ["React", "Vite", "JavaScript", "Bootstrap", "CSS"],
    code: "https://github.com/AnjaliDalsaniya04/Movie-zone",
    description:
      "A responsive movie browsing application built with React and Vite. Users can explore movies across categories and genres with reusable UI components and dynamic rendering.",
  },
];

// Two kinds of entry:
//   `icon`      — path segment appended to the devicon CDN base URL.
//   `reactIcon` — key into the REACT_ICONS map in components/Skills.js, used for
//                 tools devicon does not ship. `color` sets that icon's tint.
// `invert` flips near-black devicons so they stay readable on the dark background.
export const skills = [
  { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "express/express-original.svg", invert: true },
  { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "mysql/mysql-original.svg" },
  { name: "React", icon: "react/react-original.svg" },
  { name: "Angular", icon: "angular/angular-original.svg" },
  { name: "JavaScript", icon: "javascript/javascript-original.svg" },
  { name: "Java", icon: "java/java-original.svg" },
  { name: "DSA", reactIcon: "dsa", color: "text-amber-300" },
  { name: "OOP", reactIcon: "oop", color: "text-sky-300" },
  { name: "HTML", icon: "html5/html5-original.svg" },
  { name: "CSS", icon: "css3/css3-original.svg" },
  { name: "Git", icon: "git/git-original.svg" },
  { name: "Postman", icon: "postman/postman-original.svg" },

  // Editors & AI tools
  { name: "VS Code", icon: "vscode/vscode-original.svg" },
  { name: "ChatGPT", reactIcon: "chatgpt", color: "text-[#74AA9C]" },
  { name: "Claude", reactIcon: "claude", color: "text-[#D97757]" },
  { name: "Codex", reactIcon: "codex", color: "text-gray-200" },
  { name: "Kiro", reactIcon: "kiro", color: "text-violet-400" },
  { name: "Antigravity", reactIcon: "antigravity", color: "text-sky-400" },
];

export const DEVICON_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

export const educations = [
  {
    id: 1,
    title: "B.E. in Information Technology",
    institution: "Government Engineering College Bhavnagar",
    duration: "July 2022 - June 2026",
    grade: "CGPA: 8.48",
  },
  {
    id: 2,
    title: "HSC (12th) — Science",
    institution: "Shree B M Patel School",
    duration: "2020 - 2022",
    grade: "Percentage: 76.33%",
  },
  {
    id: 3,
    title: "SSC (10th)",
    institution: "Shree B M Patel School",
    duration: "2020",
    grade: "Percentage: 80.66%",
  },
];

export const certifications = [
  {
    id: 1,
    title: "AI for Manufacturing",
    issuer: "Intel Digital Readiness × GTU",
    duration: "Jul 2025",
    grade: "ID: AI4MGTUS1507250029",
  },
  {
    id: 2,
    title: "Google Cloud Computing Fundamentals & Generative AI Arcade",
    issuer: "GDSC GEC Bhavnagar",
    duration: "Oct 2023",
    grade: "",
  },
  {
    id: 3,
    title: "Problem Solving (Beginner)",
    issuer: "HackerRank",
    duration: "",
    grade: "",
  },
];

export const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EDUCATION", href: "#education" },
  { label: "CERTIFICATES", href: "#certifications" },
];
