export const NAV_LINKS = ["about", "skills", "experience", "projects", "contact"] as const;

export const CONTACT = {
  email:          "agilahmadmaulana3@gmail.com",
  github:         "https://github.com/agilahmad",
  githubHandle:   "agilahmad",
  linkedin:       "https://linkedin.com/in/agilahmad",
  linkedinHandle: "agilahmad",
} as const;

export interface SkillGroup {
  cat: string;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  { cat: "Backend",      skills: ["PHP", "Laravel", "NestJS", "Go", "Python", "REST API", "RBAC", "Server-side DataTables"] },
  { cat: "Database",     skills: ["PostgreSQL", "MySQL", "MongoDB"] },
  { cat: "Frontend",     skills: ["HTML5", "CSS3", "JavaScript", "Next.js", "Tailwind CSS"] },
  { cat: "Architecture", skills: ["Clean Architecture", "CSR Pattern", "Multi-role Access Control"] },
  { cat: "Tools",        skills: ["Git", "GitHub", "GitLab", "Postman"] },
];

export const SKILL_ICONS: Record<string, string> = {
  "PHP":          "/logos/php.png",
  "Laravel":      "/logos/laravel.png",
  "NestJS":       "/logos/nestjs.png",
  "PostgreSQL":   "/logos/postgresql.png",
  "MySQL":        "/logos/mysql.png",
  "MongoDB":      "/logos/mongodb.png",
  "HTML5":        "/logos/html5.png",
  "CSS3":         "/logos/css3.png",
  "JavaScript":   "/logos/javascript.png",
  "Next.js":      "/logos/nextjs.png",
  "Tailwind CSS": "/logos/tailwindcss.png",
  "Git":          "/logos/git.png",
  "GitHub":       "/logos/github.png",
  "GitLab":       "/logos/gitlab.png",
  "Postman":      "/logos/postman.png",
  "Go":           "/logos/go.png",
  "Python":       "/logos/python.png",
};

/* black monochrome logos — inverted to white in dark mode via .logo-invert-dark */
export const DARK_LOGOS = new Set(["Next.js", "GitHub"]);

export interface ProjectMeta {
  id: string;
  tags: string[];
  status: string;
  year: string;
  url?: string;
  github?: string;
}

export const PROJECT_META: ProjectMeta[] = [
  { id: "N-BR-01", tags: ["Laravel", "PostgreSQL", "RBAC", "DataTables"], status: "DEPLOYED",  year: "2026", url: "https://csirt.mkri.id/", github: "https://github.com/agilahmad/landing-csirt" },
  { id: "N-BR-02", tags: ["Laravel", "PostgreSQL", "CSR Pattern"],        status: "DEPLOYED",  year: "2026", github: "https://github.com/agilahmad/ticketing-pentest" },
  { id: "N-BR-03", tags: ["Laravel", "MySQL", "RoP Algorithm"],           status: "COMPLETED", year: "2025", github: "https://github.com/agilahmad/manajemen-obat" },
  { id: "N-BR-04", tags: ["Laravel", "NestJS", "PostgreSQL"],             status: "DEPLOYED",  year: "2026" },
  { id: "N-BR-05", tags: ["Laravel", "MySQL", "Auth"],                    status: "COMPLETED", year: "2024" },
  { id: "N-BR-06", tags: ["PHP", "PostgreSQL", "Automation"],             status: "DEPLOYED",  year: "2026" },
];
