export const NAV_LINKS = ["about", "skills", "experience", "projects", "contact"] as const;

export interface SkillGroup {
  cat: string;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  { cat: "Backend",      skills: ["PHP", "Laravel", "NestJS", "REST API", "RBAC", "Server-side DataTables"] },
  { cat: "Database",     skills: ["PostgreSQL", "MySQL"] },
  { cat: "Architecture", skills: ["Clean Architecture", "CSR Pattern", "Multi-role Access Control"] },
  { cat: "Tools",        skills: ["Git", "GitLab", "Postman"] },
];

export const LEARNING = ["Go", "Python"];

export const PROJECT_META = [
  { id: "N-BR-01", tags: ["Laravel", "PostgreSQL", "RBAC", "DataTables"], status: "DEPLOYED",  year: "2026" },
  { id: "N-BR-02", tags: ["Laravel", "PostgreSQL", "CSR Pattern"],        status: "DEPLOYED",  year: "2026" },
  { id: "N-BR-03", tags: ["Laravel", "MySQL", "RoP Algorithm"],           status: "COMPLETED", year: "2025" },
  { id: "N-BR-04", tags: ["Laravel", "NestJS", "PostgreSQL"],             status: "DEPLOYED",  year: "2026" },
  { id: "N-BR-05", tags: ["Laravel", "MySQL", "Auth"],                    status: "COMPLETED", year: "2024" },
  { id: "N-BR-06", tags: ["PHP", "PostgreSQL", "Automation"],             status: "DEPLOYED",  year: "2026" },
];
