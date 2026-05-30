export const NAV_LINKS = ["about", "skills", "experience", "projects", "contact"] as const;

export interface Skill {
  name: string;
  pct: number;
  cat: string;
}

export interface Project {
  id: string;
  name: string;
  desc: string;
  tags: string[];
  status: string;
  year: string;
}

export const SKILLS: Skill[] = [
  { name: "PHP",          pct: 90, cat: "Language" },
  { name: "Laravel",      pct: 88, cat: "Backend"  },
  { name: "PostgreSQL",   pct: 80, cat: "Database" },
  { name: "MySQL",        pct: 78, cat: "Database" },
  { name: "NestJS",       pct: 65, cat: "Backend"  },
  { name: "HTML5 / CSS3", pct: 82, cat: "Frontend" },
  { name: "Bootstrap",    pct: 80, cat: "Frontend" },
  { name: "Git / GitLab", pct: 75, cat: "Tools"    },
  { name: "Go",           pct: 28, cat: "Learning" },
  { name: "Python",       pct: 28, cat: "Learning" },
];

export const PROJECTS: Project[] = [
  {
    id: "N-BR-01",
    name: "CSIRT Ticketing Platform",
    desc: "Cybersecurity incident management system for Indonesia's Constitutional Court. Multi-role RBAC, incident tracking, and DataTables integration.",
    tags: ["Laravel", "PostgreSQL", "RBAC", "DataTables"],
    status: "DEPLOYED", year: "2026",
  },
  {
    id: "N-BR-02",
    name: "SecureTrack",
    desc: "Penetration testing tracker built with the Controller-Service-Request pattern for clean separation of business logic in a security-critical environment.",
    tags: ["Laravel", "PostgreSQL", "CSR Pattern"],
    status: "DEPLOYED", year: "2026",
  },
  {
    id: "N-BR-03",
    name: "Medicine Inventory System",
    desc: "Hospital pharmacy inventory with Safety Stock & Reorder Point algorithms that generate automated procurement recommendations.",
    tags: ["Laravel", "MySQL", "RoP Algorithm"],
    status: "COMPLETED", year: "2025",
  },
  {
    id: "N-BR-04",
    name: "Asset Management Portal",
    desc: "Internal asset tracking portal with server-side data processing, multi-role access control, and NestJS microservice integration.",
    tags: ["Laravel", "NestJS", "PostgreSQL"],
    status: "DEPLOYED", year: "2026",
  },
  {
    id: "N-BR-05",
    name: "Learning Platform",
    desc: "Online learning platform with authentication, course management, content delivery, and transaction handling built during intensive training.",
    tags: ["Laravel", "MySQL", "Auth"],
    status: "COMPLETED", year: "2024",
  },
  {
    id: "N-BR-06",
    name: "Data Scraping Pipeline",
    desc: "Automated data-gathering pipeline that synchronises information across internal government systems, reducing manual data-entry effort.",
    tags: ["PHP", "PostgreSQL", "Automation"],
    status: "DEPLOYED", year: "2026",
  },
];
