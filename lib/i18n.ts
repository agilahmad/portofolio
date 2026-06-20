export type Lang = "en" | "id";

const en = {
  nav: { resume: "RESUME" },
  hero: {
    unitLabel: "// UNIT DESIGNATION",
    roles: ["Backend Developer", "Fullstack Developer"],
    taglineParts: [
      "Specializing in ",
      "Laravel & PostgreSQL",
      " — building ",
      "secure, maintainable web applications",
      " and ",
      "internal management systems",
      " end-to-end.",
    ],
    stats: [
      { label: "SYNC SYSTEM", val: "ACTIVE",   green: true  },
      { label: "EXPERIENCE",  val: "6+ MONTH", green: false },
      { label: "PROJECTS",    val: "6 BUILT",  green: false },
    ],
    cta: { projects: "> VIEW PROJECTS", contact: "CONTACT ME" },
    photoLabel: "// BACKEND ENGINEER",
    statusLabel: "STATUS: ONLINE",
    classLabel: "CLASS: SPECIALIST",
  },
  about: {
    eyebrow: "// ABOUT ME.",
    title: "DATA",
    summaryLabel: "[ SUMMARY ]",
    bio: [
      "Fresh graduate in Informatics Engineering with hands-on experience building secure, maintainable web applications. Specialised in Laravel and PostgreSQL, delivering management systems and internal platforms end-to-end — from database design to deployment.",
      "Experienced in structured backend architecture (Controller-Service-Request pattern), role-based access control, and server-side data processing in production environments. Comfortable using Git and GitLab for version control.",
    ],
    info: [
      { label: "NAME",     val: "Agil Ahmad Maulana" },
      { label: "ORIGIN",   val: "Padang, West Sumatera" },
      { label: "BASE",     val: "Jakarta, Indonesia" },
      { label: "EMAIL",    val: "agilahmadmaulana3@gmail.com" },
      { label: "GITHUB",   val: "github.com/agilahmad" },
      { label: "LINKEDIN", val: "linkedin.com/in/agilahmad" },
    ],
    clearanceLabel: "CLEARANCE",
    clearanceVal: "BACKEND DEVELOPER",
    activeLabel: "ACTIVE",
    photoLabel: "// PILOT DATA",
  },
  skills: {
    eyebrow: "// CAPABILITIES",
    title: "SKILL",
    learningLabel: "// Currently Learning",
  },
  experience: {
    eyebrow: "// HISTORY",
    title: "EXPERIENCE",
    internship: {
      period: "NOV 2025 – MAY 2026",
      badge: "ACTIVE",
      role: "Programmer Intern",
      org: "Pusat TIK — Mahkamah Konstitusi RI, Jakarta",
      items: [
        "Built CSIRT Ticketing Platform, SecureTrack, asset management & admin portal",
        "Implemented Controller-Service-Request (CSR) architecture across all modules",
        "Built RBAC, input validation, and server-side DataTables for multi-role workflows",
        "Contributed to a data scraping pipeline for cross-system automation",
        "Used Git/GitLab for version control in a government security environment",
      ],
    },
    training: {
      period: "AUG – DEC 2024",
      badge: "COMPLETED",
      role: "Web Dev Training",
      org: "Someah Indonesia — Remote",
      items: [
        "Intensive project-based Laravel web development program",
        "Built online learning platform — auth, courses, content delivery, transactions",
        "Practiced Git/GitLab collaborative workflow throughout",
      ],
    },
    educationLabel: "[ EDUCATION ]",
    education: {
      period: "AUG 2021 – OCT 2025",
      gpa: "GPA 3.34",
      degree: "Bachelor of Informatics Engineering",
      university: "Universitas Putra Indonesia YPTK Padang",
      thesis: `Thesis: "IT Management for Medicine Inventory at West Sumatera Lung Hospital Using the Reorder Point Method"`,
    },
    certificationLabel: "[ CERTIFICATION ]",
    certification: {
      name: "Web Dev with PHP Laravel",
      issuer: "Someah Indonesia",
      date: "DEC 2024",
    },
    stats: [
      { label: "Projects Built", val: "6+"   },
      { label: "Technologies",   val: "10+"  },
      { label: "GPA Score",      val: "3.34" },
      { label: "Experience",     val: "6mo+" },
    ],
  },
  projects: {
    eyebrow: "// OPERATIONS",
    title: "PROJECTS",
    items: {
      "N-BR-01": {
        name: "CSIRT Landing Portal",
        context: "Public-facing cybersecurity portal for Mahkamah Konstitusi RI — providing threat awareness, news, technical guidelines, and incident submission for the public.",
        contributions: [
          "Built news and technical guideline (Pedoman Teknis) publication system for public cybersecurity awareness",
          "Implemented public incident reporting API integrated with the internal management system",
          "Built admin panel with RBAC for content management and user administration",
        ],
      },
      "N-BR-02": {
        name: "Security Incident Management System",
        context: "Internal multi-module security platform for the MK CSIRT team — incident ticketing, penetration testing, evidence collection, and vulnerability management in one system.",
        contributions: [
          "Architected multi-role RBAC (analyst, admin, management) controlling access across all modules",
          "Built incident ticketing with server-side DataTables, full audit trail via ActivityLog",
          "Developed pentest tracking module with structured findings and remediation workflow",
          "Integrated 2FA authentication and real-time notification system for security operations",
        ],
      },
      "N-BR-03": {
        name: "Medicine Inventory System",
        context: "Hospital pharmacy stock management — eliminating manual reorder calculations that caused frequent shortages.",
        contributions: [
          "Implemented Safety Stock & Reorder Point algorithms for automated procurement alerts",
          "Built real-time stock dashboard preventing medicine shortages before they occur",
          "Reduced pharmacist manual calculation workload through automated recommendations",
        ],
      },
      "N-BR-04": {
        name: "Asset Management Portal",
        context: "Internal asset tracking portal for a multi-department organisation with NestJS microservice integration.",
        contributions: [
          "Enforced department-level data isolation through multi-role access control",
          "Integrated NestJS microservice for cross-system asset synchronisation",
          "Handled large asset catalogues via server-side processing and pagination",
        ],
      },
      "N-BR-05": {
        name: "Learning Platform",
        context: "Full-featured online learning platform built end-to-end during an intensive training programme.",
        contributions: [
          "Built authentication, course management, and content delivery from scratch",
          "Integrated transaction and enrolment flow with role-based content access",
          "Delivered complete working system within a time-constrained bootcamp environment",
        ],
      },
      "N-BR-06": {
        name: "Data Scraping Pipeline",
        context: "Automated data-sync pipeline between isolated internal government systems at Mahkamah Konstitusi RI.",
        contributions: [
          "Eliminated cross-system manual data entry with a scheduled automation pipeline",
          "Synchronised data reliably between databases with no shared access layer",
          "Running in production, saving significant staff time on daily data operations",
        ],
      },
    },
  },
  contact: {
    eyebrow: "// UPLINK",
    title: "ESTABLISH CONNECTION",
    subtitle: "Available for new opportunities and collaborations.",
    cta: "> SEND MESSAGE",
    orLabel: "OR FIND ME ON",
  },
  footer: {
    role: "// BACKEND ENGINEER",
    copy: "© 2026 // ALL SYSTEMS ONLINE",
  },
};

const id: typeof en = {
  nav: { resume: "RESUME" },
  hero: {
    unitLabel: "// IDENTIFIKASI UNIT",
    roles: ["Backend Developer", "Fullstack Developer"],
    taglineParts: [
      "Spesialisasi dalam ",
      "Laravel & PostgreSQL",
      " — membangun ",
      "aplikasi web yang aman",
      " serta ",
      "sistem manajemen internal",
      " dari hulu ke hilir.",
    ],
    stats: [
      { label: "STATUS SISTEM", val: "AKTIF",    green: true  },
      { label: "PENGALAMAN",    val: "6+ BULAN", green: false },
      { label: "PROYEK",        val: "6 DIBUAT", green: false },
    ],
    cta: { projects: "> LIHAT PROYEK", contact: "HUBUNGI SAYA" },
    photoLabel: "// BACKEND ENGINEER",
    statusLabel: "STATUS: ONLINE",
    classLabel: "KELAS: SPESIALIS",
  },
  about: {
    eyebrow: "// TENTANG SAYA",
    title: "DATA",
    summaryLabel: "[ RINGKASAN ]",
    bio: [
      "Lulusan baru Teknik Informatika dengan pengalaman langsung membangun aplikasi web yang aman dan mudah dipelihara. Spesialisasi dalam Laravel dan PostgreSQL, membangun sistem manajemen dan platform internal dari hulu ke hilir — dari desain database hingga deployment.",
      "Berpengalaman dalam arsitektur backend terstruktur (pola Controller-Service-Request), kontrol akses berbasis peran, dan pemrosesan data sisi server di lingkungan production. Terbiasa menggunakan Git dan GitLab untuk kontrol versi.",
    ],
    info: [
      { label: "NAMA",      val: "Agil Ahmad Maulana" },
      { label: "ASAL",      val: "Padang, Sumatera Barat" },
      { label: "DOMISILI",  val: "Jakarta, Indonesia" },
      { label: "EMAIL",     val: "agilahmadmaulana3@gmail.com" },
      { label: "GITHUB",    val: "github.com/agilahmad" },
      { label: "LINKEDIN",  val: "linkedin.com/in/agilahmad" },
    ],
    clearanceLabel: "KLIRENS",
    clearanceVal: "BACKEND DEVELOPER",
    activeLabel: "AKTIF",
    photoLabel: "// DATA",
  },
  skills: {
    eyebrow: "// KEMAMPUAN",
    title: "KEAHLIAN",
    learningLabel: "// Sedang Dipelajari",
  },
  experience: {
    eyebrow: "// RIWAYAT",
    title: "PENGALAMAN",
    internship: {
      period: "NOV 2025 – MEI 2026",
      badge: "AKTIF",
      role: "Programmer Magang",
      org: "Pusat TIK — Mahkamah Konstitusi RI, Jakarta",
      items: [
        "Membangun Platform Tiket CSIRT, SecureTrack, portal manajemen aset & admin",
        "Mengimplementasikan arsitektur Controller-Service-Request (CSR) di seluruh modul",
        "Membangun RBAC, validasi input, dan DataTables server-side untuk alur kerja multi-peran",
        "Berkontribusi pada pipeline scraping data untuk otomasi lintas sistem",
        "Menggunakan Git/GitLab untuk kontrol versi di lingkungan keamanan pemerintah",
      ],
    },
    training: {
      period: "AGU – DES 2024",
      badge: "SELESAI",
      role: "Pelatihan Web Dev",
      org: "Someah Indonesia — Remote",
      items: [
        "Program pengembangan web Laravel berbasis proyek yang intensif",
        "Membangun platform pembelajaran online — autentikasi, kursus, pengiriman konten, transaksi",
        "Mempraktikkan alur kerja kolaboratif Git/GitLab sepanjang pelatihan",
      ],
    },
    educationLabel: "[ PENDIDIKAN ]",
    education: {
      period: "AGU 2021 – OKT 2025",
      gpa: "IPK 3.34",
      degree: "Sarjana Teknik Informatika",
      university: "Universitas Putra Indonesia YPTK Padang",
      thesis: `Skripsi: "Manajemen IT untuk Inventaris Obat di RSUP Paru Sumatera Barat Menggunakan Metode Reorder Point"`,
    },
    certificationLabel: "[ SERTIFIKASI ]",
    certification: {
      name: "Web Dev dengan PHP Laravel",
      issuer: "Someah Indonesia",
      date: "DES 2024",
    },
    stats: [
      { label: "Proyek Dibuat", val: "6+"   },
      { label: "Teknologi",     val: "10+"  },
      { label: "Nilai IPK",     val: "3.34" },
      { label: "Pengalaman",    val: "6bl+" },
    ],
  },
  projects: {
    eyebrow: "// OPERASI",
    title: "PROJECT",
    items: {
      "N-BR-01": {
        name: "Portal Landing CSIRT",
        context: "Portal keamanan siber untuk publik Mahkamah Konstitusi RI — menyediakan berita ancaman, pedoman teknis, dan pelaporan insiden dari masyarakat.",
        contributions: [
          "Membangun sistem publikasi berita dan Pedoman Teknis untuk edukasi keamanan siber publik",
          "Mengimplementasikan API pelaporan insiden publik yang terintegrasi dengan sistem manajemen internal",
          "Membangun panel admin dengan RBAC untuk manajemen konten dan administrasi pengguna",
        ],
      },
      "N-BR-02": {
        name: "Sistem Manajemen Insiden Keamanan",
        context: "Platform keamanan internal multi-modul untuk tim CSIRT MK — tiket insiden, penetration testing, manajemen bukti, dan pelacakan kerentanan dalam satu sistem.",
        contributions: [
          "Merancang RBAC multi-peran (analis, admin, manajemen) untuk mengontrol akses di semua modul",
          "Membangun sistem tiket insiden dengan DataTables server-side dan audit trail lengkap via ActivityLog",
          "Mengembangkan modul pelacakan pentest dengan alur temuan dan remediasi yang terstruktur",
          "Mengintegrasikan autentikasi 2FA dan sistem notifikasi real-time untuk operasi keamanan",
        ],
      },
      "N-BR-03": {
        name: "Sistem Inventaris Obat",
        context: "Manajemen stok apotek rumah sakit — menghilangkan perhitungan pemesanan ulang manual yang sering menyebabkan kekurangan.",
        contributions: [
          "Mengimplementasikan algoritma Safety Stock & Reorder Point untuk peringatan pengadaan otomatis",
          "Membangun dashboard stok real-time untuk mencegah kekurangan obat sebelum terjadi",
          "Mengurangi beban perhitungan manual apoteker melalui rekomendasi otomatis",
        ],
      },
      "N-BR-04": {
        name: "Portal Manajemen Aset",
        context: "Portal pelacakan aset internal untuk organisasi multi-departemen dengan integrasi microservice NestJS.",
        contributions: [
          "Menerapkan isolasi data tingkat departemen melalui kontrol akses multi-peran",
          "Mengintegrasikan microservice NestJS untuk sinkronisasi aset lintas sistem",
          "Menangani katalog aset besar melalui pemrosesan server-side dan pagination",
        ],
      },
      "N-BR-05": {
        name: "Platform Pembelajaran",
        context: "Platform pembelajaran online berfitur lengkap yang dibangun dari awal selama program pelatihan intensif.",
        contributions: [
          "Membangun autentikasi, manajemen kursus, dan pengiriman konten dari awal",
          "Mengintegrasikan alur transaksi dan pendaftaran dengan akses konten berbasis peran",
          "Menghasilkan sistem yang berfungsi penuh dalam lingkungan bootcamp yang terbatas waktu",
        ],
      },
      "N-BR-06": {
        name: "Pipeline Scraping Data",
        context: "Pipeline sinkronisasi data otomatis antar sistem internal pemerintah yang terisolasi di Mahkamah Konstitusi RI.",
        contributions: [
          "Menghilangkan entri data manual lintas sistem dengan pipeline otomasi terjadwal",
          "Menyinkronkan data secara andal antara database tanpa lapisan akses bersama",
          "Berjalan di production, menghemat waktu staf yang signifikan pada operasi data harian",
        ],
      },
    },
  },
  contact: {
    eyebrow: "// UPLINK",
    title: "BANGUN KONEKSI",
    subtitle: "Tersedia untuk peluang dan kolaborasi baru.",
    cta: "> KIRIM PESAN",
    orLabel: "ATAU TEMUKAN SAYA DI",
  },
  footer: {
    role: "// BACKEND ENGINEER",
    copy: "© 2026 // SEMUA SISTEM AKTIF",
  },
};

export const translations = { en, id };
