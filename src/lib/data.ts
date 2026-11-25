export const NAV_LINKS = ["about", "skills", "experience", "projects", "contact"] as const;

export const CONTACT = {
  email:          "agilahmadmaulana3@gmail.com",
  github:         "https://github.com/agilahmad",
  githubHandle:   "agilahmad",
  linkedin:       "https://linkedin.com/in/agilahmad",
  linkedinHandle: "agilahmad",
} as const;

export type SkillCategory = "backend" | "database" | "frontend" | "platform" | "architecture" | "tools";

export interface SkillGroup {
  category: SkillCategory;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  { category: "backend", skills: ["PHP", "Laravel", "NestJS", "Go", "Fiber", "Python", "TypeScript", "Colyseus", "REST API", "RBAC", "Server-side DataTables"] },
  { category: "database", skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"] },
  { category: "frontend", skills: ["HTML5", "CSS3", "JavaScript", "Astro", "React", "Next.js", "Vite", "Bootstrap", "Tailwind CSS"] },
  { category: "platform", skills: ["Cloudflare"] },
  { category: "architecture", skills: ["Clean Architecture", "CSR Pattern", "Multi-role Access Control"] },
  { category: "tools", skills: ["Git", "GitHub", "GitLab", "Postman", "DBeaver"] },
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
  "Astro":        "/logos/astro.svg",
  "Next.js":      "/logos/nextjs.svg",
  "Tailwind CSS": "/logos/tailwindcss.png",
  "Bootstrap":    "/logos/bootstrap.svg",
  "Firebase":     "/logos/firebase.svg",
  "DBeaver":      "/logos/dbeaver.svg",
  "Git":          "/logos/git.png",
  "GitHub":       "/logos/github.png",
  "GitLab":       "/logos/gitlab.png",
  "Postman":      "/logos/postman.png",
  "Go":           "/logos/go.png",
  "Python":       "/logos/python.png",
  "Fiber":        "/logos/fiber.svg",
  "React":        "/logos/react.svg",
  "TypeScript":   "/logos/typescript.svg",
    "Vite":         "/logos/vite.svg",
  "Cloudflare":   "/logos/cloudflare.svg",
  "Colyseus":     "/logos/colyseus.png",
};

/* black monochrome logos — inverted to white in dark mode via .logo-invert-dark */
export const DARK_LOGOS = new Set(["GitHub", "Next.js"]);

/* wide wordmark logos — rendered at a fixed height with auto width */
export const WIDE_LOGOS = new Set(["Fiber"]);

export type ProjectId = "N-BR-01" | "N-BR-02" | "N-BR-03" | "N-BR-04" | "N-BR-05" | "N-BR-06" | "N-BR-07" | "N-BR-08";
export type ProjectStatus = "DEPLOYED" | "COMPLETED" | "IN_DEVELOPMENT";

export interface ProjectMeta {
  id: ProjectId;
  tags: string[];
  status: ProjectStatus;
  /* display order on the site, 1 = first card */
  rank: number;
  /* completion month, ISO "YYYY-MM" — shown on the card */
  end: string;
  year: string;
  url?: string;
  github?: string;
  image?: string;
  thumb?: string;
  mobileImage?: string;
  gallery?: { src: string; mobileSrc?: string; label?: string; thumb?: string }[];
  details?: {
    overview: string;
    modules: string[];
    architecture: string;
    role?: string;
    problem?: string;
    decisions?: string[];
    result?: string;
    impact?: string;
  };
}

const PROJECTS: ProjectMeta[] = [
  { id: "N-BR-08", rank: 1, end: "2026-11", tags: ["TypeScript", "Colyseus", "Vite"], status: "IN_DEVELOPMENT", year: "2026" },
  { id: "N-BR-07", rank: 2, end: "2026-10", tags: ["Astro", "React", "Firebase", "Cloudflare"], status: "DEPLOYED", year: "2026", url: "https://kado.livales.com/", image: "/projects/livales-kado-home.png", thumb: "/projects/thumbs/livales-kado-home.webp", mobileImage: "/projects/livales-kado-mobile.png", gallery: [{ src: "/projects/livales-kado-home.png", mobileSrc: "/projects/livales-kado-mobile.png", thumb: "/projects/thumbs/livales-kado-home.webp", label: "Beranda" }, { src: "/projects/kado-quiz-hasil.png", mobileSrc: "/projects/kado-quiz-mobile.png", thumb: "/projects/thumbs/kado-quiz-hasil.webp", label: "Hasil" }, { src: "/projects/kado-kirim.png", mobileSrc: "/projects/kado-mobile-kirim.png", thumb: "/projects/thumbs/kado-kirim.webp", label: "Kirim kado" }, { src: "/projects/kado-temukan.png", mobileSrc: "/projects/kado-mobile-temukan.png", thumb: "/projects/thumbs/kado-temukan.webp", label: "Kado untuk teman" }, { src: "/projects/kado-katalog.png", mobileSrc: "/projects/kado-mobile-katalog.png", thumb: "/projects/thumbs/kado-katalog.webp", label: "Katalog" }, { src: "/projects/kado-hari-ibu.png", mobileSrc: "/projects/kado-mobile-hari-ibu.png", thumb: "/projects/thumbs/kado-hari-ibu.webp", label: "Panduan Hari Ibu" }], details: { overview: "Kado by Livales helps Indonesian shoppers find a gift the recipient will actually like, then send it, wishlist it, or buy it together.", modules: ["Four-step gift quiz with SEO product pages", "Gift card delivery by link", "Name search and public wishlist", "Group gifting board with votes", "Affiliate redirect worker"], architecture: "Astro 7 static output with React 19 islands and Tailwind CSS 4, Firebase Auth, Firestore, and Cloud Functions in asia-southeast2, deployed to Cloudflare Workers through @astrojs/cloudflare with a custom worker for /go, /k, /w, and /p.", problem: "Gift shopping stalls at ideas that do not fit the recipient, and marketplace links are hard to share with a group.", decisions: ["Kept the catalog as JSON in the repo and user data in Firestore", "Resolved affiliate destinations server-side in a Worker so links cannot be tampered with", "Split each gifting flow into its own route with no login required to start"], result: "Live at kado.livales.com with five gifting flows and affiliate checkout.", impact: "Turns gift discovery into a shareable flow: quiz, product, gift card, then group purchase." } },
  { id: "N-BR-03", rank: 5, end: "2026-08", tags: ["Next.js", "NestJS", "PostgreSQL"], status: "DEPLOYED", year: "2026", image: "/projects/it-asset-dashboard.png", thumb: "/projects/thumbs/it-asset-dashboard.webp", mobileImage: "/projects/it-asset-mobile.png", gallery: [{ src: "/projects/it-asset-dashboard.png", mobileSrc: "/projects/it-asset-mobile.png", thumb: "/projects/thumbs/it-asset-dashboard.webp", label: "Dashboard" }, { src: "/projects/it-asset-assets.png", mobileSrc: "/projects/it-asset-mobile-assets.png", thumb: "/projects/thumbs/it-asset-assets.webp", label: "Data Aset" }, { src: "/projects/it-asset-master-data.png", mobileSrc: "/projects/it-asset-mobile-master-data.png", thumb: "/projects/thumbs/it-asset-master-data.webp", label: "Master Data" }, { src: "/projects/it-asset-reports.png", mobileSrc: "/projects/it-asset-mobile-reports.png", thumb: "/projects/thumbs/it-asset-reports.webp", label: "Laporan" }] },
  { id: "N-BR-04", rank: 4, end: "2026-05", tags: ["Laravel", "PostgreSQL", "Automation"], status: "DEPLOYED", year: "2026", image: "/projects/mrtg-dashboard.png", thumb: "/projects/thumbs/mrtg-dashboard.webp", gallery: [{ src: "/projects/mrtg-dashboard.png", thumb: "/projects/thumbs/mrtg-dashboard.webp", label: "Peta Layanan" }, { src: "/projects/mrtg-chart.png", thumb: "/projects/thumbs/mrtg-chart.webp", label: "Grafik Trafik" }], details: { overview: "MRTG (Peta) network monitoring dashboard that maps monitored services across Indonesia and charts their bandwidth.", modules: ["Service map with per-site markers", "Traffic graph per service", "System statistics and recent services", "Manual service coordinate input"], architecture: "Laravel application that scrapes MRTG graph pages, parses the traffic series, caches the result, and renders it with Leaflet and a chart layer." } },
  { id: "N-BR-06", rank: 2, end: "2026-04", tags: ["Laravel", "PostgreSQL", "CSR Pattern"], status: "DEPLOYED", year: "2026", github: "https://github.com/agilahmad/ticketing-pentest", image: "/projects/ticketing-dashboard.png", thumb: "/projects/thumbs/ticketing-dashboard.webp", mobileImage: "/projects/ticketing-mobile-dashboard.png", gallery: [{ src: "/projects/ticketing-dashboard.png", mobileSrc: "/projects/ticketing-mobile-dashboard.png", thumb: "/projects/thumbs/ticketing-dashboard.webp", label: "Dashboard" }, { src: "/projects/ticketing-aplikasi.png", mobileSrc: "/projects/ticketing-mobile-aplikasi.png", thumb: "/projects/thumbs/ticketing-aplikasi.webp", label: "Aplikasi" }, { src: "/projects/ticketing-pentest.png", mobileSrc: "/projects/ticketing-mobile-pentest.png", thumb: "/projects/thumbs/ticketing-pentest.webp", label: "Pentest" }, { src: "/projects/ticketing-pentest-detail.png", mobileSrc: "/projects/ticketing-mobile-pentest-detail.png", thumb: "/projects/thumbs/ticketing-pentest-detail.webp", label: "Kerentanan" }, { src: "/projects/ticketing-va.png", mobileSrc: "/projects/ticketing-mobile-va.png", thumb: "/projects/thumbs/ticketing-va.webp", label: "Vuln. Assessment" }, { src: "/projects/ticketing-kriptografi.png", mobileSrc: "/projects/ticketing-mobile-kriptografi.png", thumb: "/projects/thumbs/ticketing-kriptografi.webp", label: "Kriptografi" }, { src: "/projects/ticketing-insiden.png", mobileSrc: "/projects/ticketing-mobile-insiden.png", thumb: "/projects/thumbs/ticketing-insiden.webp", label: "Insiden" }, { src: "/projects/ticketing-insiden-detail.png", mobileSrc: "/projects/ticketing-mobile-insiden-detail.png", thumb: "/projects/thumbs/ticketing-insiden-detail.webp", label: "Detail Insiden" }, { src: "/projects/ticketing-users.png", mobileSrc: "/projects/ticketing-mobile-users.png", thumb: "/projects/thumbs/ticketing-users.webp", label: "Users" }], details: { overview: "Internal cybersecurity report ticketing application for CSIRT incident, pentest, vulnerability, and cryptography operations.", modules: ["Admin dashboard and operational statistics", "Incident ticket and community report workflows", "Pentest, VA, vulnerability, and evidence tracking", "Role-based authentication and two-factor security", "Cryptography implementation monitoring"], architecture: "Laravel MVC with Controller-Service-Request boundaries, middleware access control, Eloquent models, and server-side aggregate queries.", role: "Backend contributor", problem: "CSIRT operations needed one system for incident reports, pentest findings, vulnerabilities, and remediation tracking.", decisions: ["Used server-side tables for large operational datasets", "Applied RBAC and audit logs to protect sensitive workflows", "Added 2FA for stronger access control"], result: "Centralizes security reports, testing findings, and remediation tracking for the CSIRT team.", impact: "Centralizes security reports, testing findings, and remediation tracking for the CSIRT team." } },
  // aislop-ignore-next-line ai-slop/hardcoded-url -- Public portfolio link to production website
  { id: "N-BR-05", rank: 3, end: "2026-03", tags: ["Laravel", "PostgreSQL", "RBAC", "DataTables"], status: "DEPLOYED", year: "2026", url: "https://csirt.mkri.id/", github: "https://github.com/agilahmad/landing-csirt", image: "/projects/csirt-landing-home.png", thumb: "/projects/thumbs/csirt-landing-home.webp", mobileImage: "/projects/csirt-landing-mobile.png", gallery: [{ src: "/projects/csirt-landing-home.png", mobileSrc: "/projects/csirt-landing-mobile.png", thumb: "/projects/thumbs/csirt-landing-home.webp", label: "Beranda" }, { src: "/projects/csirt-landing-pedoman.png", mobileSrc: "/projects/csirt-landing-mobile-pedoman.png", thumb: "/projects/thumbs/csirt-landing-pedoman.webp", label: "Pedoman" }, { src: "/projects/csirt-landing-berita.png", mobileSrc: "/projects/csirt-landing-mobile-berita.png", thumb: "/projects/thumbs/csirt-landing-berita.webp", label: "Berita" }, { src: "/projects/csirt-landing-laporan.png", mobileSrc: "/projects/csirt-landing-mobile-laporan.png", thumb: "/projects/thumbs/csirt-landing-laporan.webp", label: "Pelaporan" }], details: { overview: "Public CSIRT landing portal for security updates, technical guidance, and incident reporting.", modules: ["Public security updates", "Technical guidance", "Incident report entry point", "Content management and public-facing information"], architecture: "Laravel web application separating public content, incident intake, and role-based administration.", role: "Backend contributor", problem: "Security information and incident reporting needed one clear public entry point.", decisions: ["Separated public content from internal operations", "Kept incident intake explicit and accessible"], result: "Provides a clear public route to cybersecurity guidance and incident reporting.", impact: "Gives the public a clear entry point for cybersecurity information and incident reporting." } },
  { id: "N-BR-02", rank: 6, end: "2025-06", tags: ["Laravel", "MySQL", "RoP Algorithm"], status: "COMPLETED", year: "2025", github: "https://github.com/agilahmad/manajemen-obat", image: "/projects/medicine-inventory-home.png", thumb: "/projects/thumbs/medicine-inventory-home.webp", mobileImage: "/projects/medicine-inventory-mobile.png", gallery: [{ src: "/projects/medicine-inventory-home.png", mobileSrc: "/projects/medicine-inventory-mobile.png", thumb: "/projects/thumbs/medicine-inventory-home.webp", label: "Dashboard" }, { src: "/projects/medicine-inventory-data-obat.png", mobileSrc: "/projects/medicine-inventory-mobile-data-obat.png", thumb: "/projects/thumbs/medicine-inventory-data-obat.webp", label: "Data Obat" }, { src: "/projects/medicine-inventory-stock.png", mobileSrc: "/projects/medicine-inventory-mobile-stock.png", thumb: "/projects/thumbs/medicine-inventory-stock.webp", label: "Stock Obat" }, { src: "/projects/medicine-inventory-reordering.png", mobileSrc: "/projects/medicine-inventory-mobile-reordering.png", thumb: "/projects/thumbs/medicine-inventory-reordering.webp", label: "Reordering Obat" }], details: { overview: "Hospital pharmacy inventory system for medicine stock, usage, and reorder planning.", modules: ["Medicine catalogue and stock records", "Usage and transaction tracking", "Safety Stock calculation", "Reorder Point recommendations", "Stock monitoring dashboard"], architecture: "Laravel MVC with relational inventory data, validated stock transactions, and Reorder Point calculation at the application layer.", role: "Backend developer", impact: "Makes reorder decisions easier by turning stock usage into explicit Safety Stock and Reorder Point signals." } },
  { id: "N-BR-01", rank: 7, end: "2024-12", tags: ["Laravel", "Blade", "MySQL"], status: "COMPLETED", year: "2024", github: "https://github.com/Suwardi87/MSIB-Course-Online", image: "/projects/course-online-home.png", thumb: "/projects/thumbs/course-online-home.webp", mobileImage: "/projects/course-online-mobile.png", gallery: [{ src: "/projects/course-online-home.png", mobileSrc: "/projects/course-online-mobile.png", thumb: "/projects/thumbs/course-online-home.webp", label: "Home" }, { src: "/projects/course-online-event-unlocked.png", mobileSrc: "/projects/course-online-mobile-event.png", thumb: "/projects/thumbs/course-online-event-unlocked.webp", label: "Event" }, { src: "/projects/course-online-my-event.png", mobileSrc: "/projects/course-online-mobile-my-event.png", thumb: "/projects/thumbs/course-online-my-event.webp", label: "My Event" }, { src: "/projects/course-online-admin-dashboard.png", mobileSrc: "/projects/course-online-mobile-admin-dashboard.png", thumb: "/projects/thumbs/course-online-admin-dashboard.webp", label: "Dashboard" }, { src: "/projects/course-online-admin-events.png", mobileSrc: "/projects/course-online-mobile-admin-events.png", thumb: "/projects/thumbs/course-online-admin-events.webp", label: "Events" }, { src: "/projects/course-online-admin-order.png", mobileSrc: "/projects/course-online-mobile-admin-order.png", thumb: "/projects/thumbs/course-online-admin-order.webp", label: "Orders" }], details: { overview: "Online course and event platform: visitors browse the event catalogue, buy a ticket, and unlock the recorded sessions afterwards.", modules: ["Event catalogue with search and category filter", "Event detail with locked and unlocked episode list", "Checkout summary with admin fee and total", "Checkout and Midtrans payment", "My Event - participant order history", "Admin dashboard: events, episodes, categories, tags, tickets, taxes, orders"], architecture: "Laravel 11 with server-rendered Blade views over a MySQL schema of twelve tables (events, episodes, tickets, orders, order_details, taxes, categories, tags). Admin tables run on Yajra DataTables, order export on Maatwebsite Excel, and payment on Midtrans Snap.", role: "Team member - payment and profile views", impact: "Gives the organisers one flow from publishing an event to receiving payment and granting access to the recordings." } },
];

/* rendered in the order set by `rank` (curated by the owner, not derived) */
export const PROJECT_META: ProjectMeta[] = [...PROJECTS].sort((a, b) => a.rank - b.rank);
