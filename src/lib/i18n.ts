// aislop-ignore-file code-quality/duplicate-block -- Localization dictionary en/id sharing structural schema
export type Lang = "en" | "id";

const en = {
  meta: {
    title: "Agil Ahmad Maulana | Backend Developer",
    description: "Portfolio of Agil Ahmad Maulana, a backend developer working with Laravel, PostgreSQL, and internal web applications.",
  },
  nav: {
    resume: "RESUME",
    primaryLabel: "Primary navigation",
    backToTop: "Back to top",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchToIndonesian: "Switch language to Indonesian",
    switchToEnglish: "Switch language to English",
    switchToLight: "Switch to light theme",
    switchToDark: "Switch to dark theme",
    links: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
  },
  hero: {
    helloLabel: "HELLO, I'M",
    role: "Software Engineer",
    tagline: "I engineer reliable backend systems and fullstack web applications - focusing on data integrity, clean architecture, and practical business impact.",
    stats: [
      { label: "INTERNSHIP", val: "6 MONTHS", green: true },
      { label: "FOCUS", val: "BACKEND", green: false },
      { label: "PROJECTS", val: "7", green: false },
    ],
    cta: { projects: "VIEW PROJECTS", contact: "CONTACT" },
  },
  about: {
    title: "ABOUT ME",
    summaryLabel: "SUMMARY",
    bio: [
      "Graduated in Informatics Engineering from Universitas Putra Indonesia YPTK Padang in 2025. During a six-month internship at the IT Center of Indonesia's Constitutional Court, I worked on Laravel and PostgreSQL applications for Landing CSIRT, Cybersecurity Report Ticketing, MRTG, and IT Asset Management.",
      "My work included the Controller-Service-Request pattern, role-based access, input validation, and server-side DataTables. I contributed to a scraping pipeline for internal systems and am looking for a backend or full-stack developer role.",
    ],
    info: [
      { label: "NAME", val: "Agil Ahmad Maulana" },
      { label: "FROM", val: "Padang, West Sumatera" },
      { label: "DOMICILE", val: "East Jakarta, DKI Jakarta" },
      { label: "EMAIL", val: "agilahmadmaulana3@gmail.com" },
      { label: "GITHUB", val: "github.com/agilahmad" },
      { label: "LINKEDIN", val: "linkedin.com/in/agilahmad" },
    ],
  },
  skills: {
    title: "SKILLS",
    categories: {
      backend: "Backend",
      database: "Databases",
      frontend: "Frontend",
      platform: "Platform",
      architecture: "Architecture",
      tools: "Tools",
    },
  },
  experience: {
    title: "EXPERIENCE",
    livales: {
      period: "OCT 2026 - PRESENT",
      badge: "CURRENT",
      role: "Software Engineer",
      org: "Livales - Remote",
      items: [
        "Build and maintain web products across frontend, backend, and deployment workflows.",
        "Developed Kado by Livales and contributed to Jumpaloka with TypeScript, Astro, Firebase, Colyseus, and Cloudflare.",
      ],
    },
    internship: {
      period: "NOV 2025 - MAY 2026",
      badge: "COMPLETED",
      role: "Programmer Intern",
      org: "Pusat TIK - Mahkamah Konstitusi RI, Jakarta",
      items: [
        "Built and maintained 4 web applications with Laravel, PostgreSQL, Next.js, and NestJS - from the public CSIRT portal to internal monitoring and asset management.",
        "Applied the Controller-Service-Request pattern across every module, keeping business logic separated and easy to hand off.",
        "Implemented role-based access control with 2 functional levels (Admin, Programmer) on the incident system, with role structures tailored per application.",
        "Contributed to a scraping pipeline that pulls network traffic data into the MRTG dashboard, replacing manual checks on an external site.",
        "Worked in a 2-person dev team with Git/GitLab branching and code review before merging.",
      ],
    },
    training: {
      period: "SEP – DEC 2024",
      badge: "COMPLETED",
      role: "Web Development - MSIB Kampus Merdeka",
      org: "Someah Indonesia - Remote",
      items: [
        "Completed a 4-month project-based Laravel program with a small team.",
        "Built an online learning platform and owned the payment/transaction module: authentication, courses, content delivery, and checkout.",
        "Practiced the Git/GitLab workflow for collaborative version control.",
      ],
    },
    educationLabel: "EDUCATION",
    education: {
      period: "AUG 2021 – OCT 2025",
      gpa: "GPA 3.34",
      degree: "Bachelor of Informatics Engineering",
      university: "Universitas Putra Indonesia YPTK Padang",
      thesis: `Thesis: "Application of IT Management to Assist Medicine Inventory Management at West Sumatera Lung Hospital Using the Reorder Point (RoP) Method"`,
    },
    certificationLabel: "CERTIFICATION",
    certifications: [
      { name: "Web Development with PHP Laravel", issuer: "Someah Indonesia", date: "DEC 2024" },
      { name: "Assistant Web Developer", issuer: "Badan Nasional Sertifikasi Profesi", date: "JUL 2026 – JUL 2029" },
    ],
  },
  projects: {
    title: "PROJECTS",
    status: {
      deployed: "PRODUCTION",
      completed: "COMPLETED",
      inDevelopment: "IN DEVELOPMENT",
    },
    details: "VIEW PROJECT DETAILS",
    dialog: {
      role: "Role",
      status: "Status",
      year: "Year",
      desktop: "Desktop",
      mobile: "Mobile",
      previewLabel: "Project preview",
      shotsLabel: "{name} screenshots",
      problem: "Problem",
      built: "What I built",
      decision: "Technical decision",
      result: "Result",
      viewCode: "View code",
      viewLive: "View live",
      production: "Production",
      completed: "Completed",
      zoom: "{name} — open full size",
      close: "Close project details",
      sectionRole: "ROLE",
      sectionImpact: "IMPACT",
    },
    links: {
      code: "CODE",
      live: "LIVE SITE",
      codeAria: "View source code for {name} (opens in a new tab)",
      liveAria: "Open the live site for {name} (opens in a new tab)",
    },
    items: {
      "N-BR-05": {
        name: "CSIRT Landing Page",
        role: "Backend Developer",
        context: "Public-facing cybersecurity landing site for the Indonesian Constitutional Court, presenting security information, technical guidance, and an incident-reporting entry point.",
        contributions: [
          "Published cybersecurity news and technical guidance for the public.",
          "Connected public incident reports to the internal management system.",
          "Built an admin panel with role-based access for content management and user administration.",
        ],
        details: {
          problem: "Security information and incident reporting needed one clear public entry point.",
          decisions: [
            "Separated public content from internal operations.",
            "Kept incident intake explicit and accessible.",
          ],
          result: "Gives the public one clear route to cybersecurity guidance and incident reporting.",
        },
      },
      "N-BR-06": {
        name: "Cybersecurity Report Ticketing",
        role: "Backend Developer",
        context: "Internal tools for the Constitutional Court's CSIRT team to handle incident tickets and track penetration-test findings.",
        contributions: [
          "Implemented role-based access for analysts, administrators, and management.",
          "Added server-side tables and audit logs to the ticketing workflow.",
          "Built a penetration-test tracking module with structured findings and remediation steps.",
          "Added two-factor authentication and real-time notifications for security operations.",
        ],
        details: {
          problem: "CSIRT operations needed one system for incident reports, pentest findings, vulnerabilities, and remediation tracking.",
          decisions: [
            "Used server-side tables for large operational datasets.",
            "Applied RBAC and audit logs to protect sensitive workflows.",
            "Added two-factor authentication for stronger access control.",
          ],
          result: "Centralizes security reports, testing findings, and remediation tracking for the CSIRT team.",
        },
      },
      "N-BR-02": {
        name: "Medicine Inventory System",
        role: "Fullstack developer",
        context: "Hospital pharmacy app for tracking medicine use and stock, with reorder recommendations based on the Reorder Point method.",
        contributions: [
          "Added Safety Stock and Reorder Point calculations to recommend when to reorder.",
          "Built a real-time stock dashboard to help staff monitor medicine levels and avoid shortages.",
          "Automated reorder recommendations to reduce manual stock calculations.",
        ],
        details: {
          problem: "Pharmacy staff calculated reorder quantities by hand, so stock-outs and overstock were hard to predict.",
          decisions: [
            "Computed Safety Stock and Reorder Point in the application layer.",
            "Kept every stock mutation inside validated transactions.",
            "Surfaced the recommendations on a monitoring dashboard.",
          ],
          result: "Reorder decisions follow explicit Safety Stock and Reorder Point signals instead of manual estimates.",
        },
      },
      "N-BR-03": {
        name: "IT Asset Management",
        role: "Backend Developer",
        context: "Internal portal for tracking assets across departments, integrated with a NestJS microservice.",
        contributions: [
          "Restricted asset records by department and user role.",
          "Integrated a NestJS microservice to synchronize asset records between systems.",
          "Added server-side processing and pagination for the asset catalogue.",
        ],
        details: {
          problem: "Asset records were spread across departments, and each team tracked hardware in its own spreadsheet.",
          decisions: [
            "Scoped asset queries by department and user role.",
            "Moved catalogue filtering and pagination to the server.",
            "Synced records with a NestJS service instead of duplicating data.",
          ],
          result: "One asset catalogue per department, limited to the records a user is allowed to see.",
        },
      },
      "N-BR-08": {
        name: "Jumpaloka",
        role: "Software Engineer",
        context: "Multiplayer browser game with quest progression, server-authoritative gameplay, stamps, and a travel book.",
        contributions: [
          "Built multiplayer room and quest flows with TypeScript and Colyseus.",
          "Added server-authoritative stamp rewards and the Travel Book UI.",
          "Kept the game responsive across desktop and touch devices.",
        ],
        details: {
          problem: "The game needed a reliable multiplayer quest loop with visible progression rewards.",
          decisions: [
            "Kept quest completion and stamp creation on the server.",
            "Stored stamps per active room session until persistent accounts are available.",
          ],
          result: "Players can complete quests, collect stamps, and review them in the Travel Book.",
        },
      },
      "N-BR-07": {
        name: "Kado by Livales",
        role: "Software Engineer",
        context: "Gift-finder site for Indonesian shoppers: a four-step quiz, gift cards sent by link, public wishlists, and group gifting boards, with affiliate checkout to Shopee, Tokopedia, Lazada, Blibli, and TikTok Shop.",
        contributions: [
          "Built the four-step gift quiz and SEO product pages that map answers to curated marketplace items.",
          "Shipped gift cards, @handle wishlists, and group gifting boards on Firestore with Google sign-in.",
          "Routed every outbound product link through a Cloudflare Worker that reads the destination from Firestore instead of the URL.",
        ],
        details: {
          problem: "Gift shopping stalls at ideas that do not fit the recipient, and marketplace links are hard to share with a group.",
          decisions: [
            "Kept the catalogue as JSON in the repo and user data in Firestore.",
            "Resolved affiliate destinations server-side in a Worker so links cannot be tampered with.",
            "Split each gifting flow into its own route with no login required to start.",
          ],
          result: "Live at kado.livales.com with five gifting flows and affiliate checkout.",
        },
      },
      "N-BR-01": {
        name: "MSIB Course Online",
        role: "Team member · payment and profile views",
        context: "Online course and event platform built by a four-person team during the MSIB programme: event catalogue, episodes, tickets, orders, and Midtrans payment.",
        contributions: [
          "Built the payment page: purchase summary (investment, admin fee, total), payment-method picker, and the continue button that starts checkout.",
          "Built the participant profile pages on top of the existing Blade layout.",
          "Kept the new views consistent with the shared Tailwind styling and the order data the controller already prepares.",
        ],
        details: {
          problem: "Checkout had to spell out what a participant was paying for — the event investment, the admin fee, the total — and give them a place to review their own account.",
          decisions: [
            "Kept the payment view server-rendered in Blade so it reads the order data the existing controller prepares.",
            "Split orders and order details in the data model so one checkout can carry several tickets.",
            "Showed the admin fee as its own line instead of folding it into the total.",
          ],
          result: "Payment and profile pages that slot into the Laravel 11 platform and complete the participant flow from catalogue to checkout.",
        },
      },
      "N-BR-04": {
        name: "MRTG",
        role: "Backend Developer",
        context: "Monitors bandwidth and connectivity across internal network services at Mahkamah Konstitusi RI using service coordinates entered manually.",
        contributions: [
          "Collects bandwidth and connectivity data for monitored services.",
          "Uses manually entered coordinates to identify each service.",
        ],
        details: {
          problem: "Network operators had no single view of bandwidth and connectivity across the services they monitor.",
          decisions: [
            "Stored each service coordinate manually so the map matches the real topology.",
            "Kept polling output separate from the presentation layer.",
          ],
          result: "Bandwidth and connectivity per service in one monitoring view.",
        },
      },
    },
  },
  contact: {
    title: "GET IN TOUCH",
    subtitle: "I'm open to Backend Developer or Fullstack Developer roles and collaborations.",
    cta: "SEND AN EMAIL",
    orLabel: "OTHER CHANNELS",
  },
  footer: {
    role: "BACKEND DEVELOPER & FULLSTACK DEVELOPER",
  },
};

const id: typeof en = {
  meta: {
    title: "Portofolio Agil Ahmad Maulana | Backend Developer | Fullstack Developer",
    description: "Portofolio Agil Ahmad Maulana, backend developer yang bekerja dengan Laravel, PostgreSQL, dan aplikasi web internal.",
  },
  nav: {
    resume: "CV",
    primaryLabel: "Navigasi utama",
    backToTop: "Kembali ke atas",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    switchToIndonesian: "Ganti bahasa ke Indonesia",
    switchToEnglish: "Ganti bahasa ke Inggris",
    switchToLight: "Ganti ke tema terang",
    switchToDark: "Ganti ke tema gelap",
    links: {
      about: "Tentang",
      skills: "Keahlian",
      experience: "Pengalaman",
      projects: "Proyek",
      contact: "Kontak",
    },
  },
  hero: {
    helloLabel: "HALO, SAYA",
    role: "Software Engineer",
    tagline: "Mengembangkan sistem backend andal dan aplikasi web fullstack - berfokus pada integritas data, clean architecture, dan dampak nyata.",
    cta: { projects: "LIHAT PROYEK", contact: "HUBUNGI SAYA" },
    stats: [
      { label: "MAGANG", val: "6 BULAN", green: true },
      { label: "FOKUS", val: "BACKEND", green: false },
      { label: "PROYEK", val: "7", green: false },
    ],
  },
  about: {
    title: "TENTANG SAYA",
    summaryLabel: "RINGKASAN",
    bio: [
      "Lulusan Teknik Informatika, Universitas Putra Indonesia YPTK Padang, pada 2025. Selama magang enam bulan di Pusat TIK Mahkamah Konstitusi, saya mengerjakan aplikasi Laravel dan PostgreSQL untuk ticketing CSIRT, pelacakan pentest, dan manajemen aset.",
      "Pekerjaan saya mencakup pola Controller-Service-Request, kontrol akses berbasis peran, validasi input, dan DataTables di sisi server. Saya juga ikut mengembangkan pipeline scraping untuk sistem internal. Saat ini saya mencari posisi backend atau full-stack developer.",
    ],
    info: [
      { label: "NAMA", val: "Agil Ahmad Maulana" },
      { label: "ASAL", val: "Padang, Sumatera Barat" },
      { label: "DOMISILI", val: "Jakarta Timur, DKI Jakarta" },
      { label: "EMAIL", val: "agilahmadmaulana3@gmail.com" },
      { label: "GITHUB", val: "github.com/agilahmad" },
      { label: "LINKEDIN", val: "linkedin.com/in/agilahmad" },
    ],
  },
  skills: {
    title: "KEAHLIAN",
    categories: {
      backend: "Backend",
      database: "Basis Data",
      frontend: "Frontend",
      platform: "Platform",
      architecture: "Arsitektur",
      tools: "Perangkat",
    },
  },
  experience: {
    title: "PENGALAMAN",
    livales: {
      period: "OKT 2026 - SEKARANG",
      badge: "SAAT INI",
      role: "Software Engineer",
      org: "Livales - Remote",
      items: [
        "Membangun dan merawat produk web pada alur frontend, backend, dan deployment.",
        "Mengembangkan Kado by Livales dan berkontribusi pada Jumpaloka dengan TypeScript, Astro, Firebase, Colyseus, dan Cloudflare.",
      ],
    },
    internship: {
      period: "NOV 2025 – MEI 2026",
      badge: "SELESAI",
      role: "Programmer Magang",
      org: "Pusat TIK - Mahkamah Konstitusi RI, Jakarta",
      items: [
        "Membangun dan merawat 4 aplikasi web dengan Laravel, PostgreSQL, Next.js, dan NestJS - dari portal CSIRT publik sampai monitoring internal dan manajemen aset.",
        "Menerapkan pola Controller-Service-Request di setiap modul agar logika bisnis terpisah dan mudah diserahterimakan.",
        "Menerapkan kontrol akses berbasis peran dengan 2 level fungsional (Admin, Programmer) pada sistem incident, dengan struktur peran yang disesuaikan di tiap aplikasi.",
        "Ikut membangun pipeline scraping yang menarik data trafik jaringan ke dashboard MRTG, menggantikan pengecekan manual ke situs eksternal.",
        "Bekerja dalam tim developer 2 orang dengan branching Git/GitLab dan code review sebelum merge.",
      ],
    },
    training: {
      period: "SEP – DES 2024",
      badge: "SELESAI",
      role: "Web Development - MSIB Kampus Merdeka",
      org: "Someah Indonesia - Remote",
      items: [
        "Menyelesaikan program Laravel berbasis proyek selama 4 bulan bersama tim kecil.",
        "Membangun platform belajar online dan memegang modul pembayaran/transaksi: autentikasi, kursus, penyajian konten, dan checkout.",
        "Membiasakan alur kerja Git/GitLab untuk version control kolaboratif.",
      ],
    },
    educationLabel: "PENDIDIKAN",
    education: {
      period: "AGU 2021 – OKT 2025",
      gpa: "IPK 3.34",
      degree: "Sarjana Teknik Informatika",
      university: "Universitas Putra Indonesia YPTK Padang",
      thesis: `Skripsi: "Penerapan IT Manajemen untuk Membantu Manajemen Persediaan Obat pada Rumah Sakit Paru Sumatera Barat Menggunakan Metode Reorder Point (RoP)"`,
    },
    certificationLabel: "SERTIFIKASI",
    certifications: [
      { name: "Pengembangan Web dengan PHP Laravel", issuer: "Someah Indonesia", date: "DES 2024" },
      { name: "Asisten Pengembang Web", issuer: "Badan Nasional Sertifikasi Profesi", date: "JUL 2026 – JUL 2029" },
    ],
  },
  projects: {
    title: "PROYEK",
    details: "LIHAT DETAIL PROYEK",
    dialog: {
      role: "Peran",
      status: "Status",
      year: "Tahun",
      desktop: "Desktop",
      mobile: "Mobile",
      previewLabel: "Pratinjau proyek",
      shotsLabel: "Tangkapan layar {name}",
      problem: "Masalah",
      built: "Yang saya bangun",
      decision: "Keputusan teknis",
      result: "Hasil",
      viewCode: "Lihat kode",
      viewLive: "Buka situs",
      production: "Produksi",
      completed: "Selesai",
      zoom: "{name} — buka ukuran penuh",
      close: "Tutup detail proyek",
      sectionRole: "PERAN",
      sectionImpact: "DAMPAK",
    },
    status: {
      deployed: "PRODUKSI",
      completed: "SELESAI",
      inDevelopment: "DALAM PENGEMBANGAN",
    },
    links: {
      code: "KODE",
      live: "SITUS",
      codeAria: "Lihat kode sumber {name} (dibuka di tab baru)",
      liveAria: "Buka situs {name} (dibuka di tab baru)",
    },
    items: {
      "N-BR-05": {
        name: "CSIRT Landing Page",
        role: "Kontributor backend",
        context: "Situs landing keamanan siber publik Mahkamah Konstitusi RI, berisi informasi keamanan, pedoman teknis, dan pintu masuk pelaporan insiden.", 
        contributions: [
          "Menerbitkan berita keamanan siber dan pedoman teknis untuk publik.",
          "Menghubungkan laporan insiden dari publik dengan sistem manajemen internal.",
          "Membangun panel admin dengan akses berbasis peran untuk pengelolaan konten dan administrasi pengguna.",
        ],
        details: {
          problem: "Informasi keamanan dan pelaporan insiden butuh satu pintu masuk publik yang jelas.",
          decisions: [
            "Memisahkan konten publik dari operasional internal.",
            "Membuat alur pelaporan insiden tetap eksplisit dan mudah diakses.",
          ],
          result: "Memberi publik satu jalur jelas menuju panduan keamanan siber dan pelaporan insiden.",
        },
      },
      "N-BR-06": {
        name: "Ticketing Laporan Keamanan Siber",
        role: "Kontributor backend",
        context: "Aplikasi internal tim CSIRT Mahkamah Konstitusi untuk menangani tiket insiden dan melacak temuan pentest.",
        contributions: [
          "Menerapkan akses berbasis peran untuk analis, admin, dan manajemen.",
          "Menambahkan tabel server-side dan audit log pada alur tiket insiden.",
          "Membangun modul pelacakan pentest dengan temuan terstruktur dan alur tindak lanjut.",
          "Menambahkan autentikasi dua faktor dan notifikasi real-time untuk operasional keamanan.",
        ],
        details: {
          problem: "Operasional CSIRT butuh satu sistem untuk laporan insiden, temuan pentest, kerentanan, dan tindak lanjut perbaikan.",
          decisions: [
            "Memakai tabel server-side untuk data operasional yang besar.",
            "Menerapkan RBAC dan audit log untuk melindungi alur kerja sensitif.",
            "Menambahkan autentikasi dua faktor untuk kontrol akses yang lebih kuat.",
          ],
          result: "Memusatkan laporan keamanan, temuan pengujian, dan tindak lanjut perbaikan untuk tim CSIRT.",
        },
      },
      "N-BR-02": {
        name: "Sistem Inventaris Obat",
        role: "Fullstack Developer",
        context: "Aplikasi farmasi rumah sakit untuk mencatat pemakaian dan stok obat, serta memberi rekomendasi pemesanan ulang dengan metode Reorder Point.",
        contributions: [
          "Menambahkan perhitungan Safety Stock dan Reorder Point untuk merekomendasikan waktu pemesanan.",
          "Membangun dashboard stok real-time untuk membantu staf memantau persediaan obat dan mencegah kekurangan.",
          "Mengotomatiskan rekomendasi pemesanan ulang untuk mengurangi perhitungan stok manual.",
        ],
        details: {
          problem: "Petugas farmasi menghitung jumlah pemesanan ulang secara manual, sehingga kekurangan dan kelebihan stok sulit diprediksi.",
          decisions: [
            "Menghitung Safety Stock dan Reorder Point di lapisan aplikasi.",
            "Menjaga setiap perubahan stok di dalam transaksi yang tervalidasi.",
            "Menampilkan rekomendasi pada dashboard pemantauan.",
          ],
          result: "Keputusan pemesanan ulang mengikuti sinyal Safety Stock dan Reorder Point, bukan perkiraan manual.",
        },
      },
      "N-BR-03": {
        name: "IT Asset Management",
        role: "Kontributor backend",
        context: "Portal internal untuk melacak aset antar departemen, terintegrasi dengan microservice NestJS.",
        contributions: [
          "Membatasi data aset berdasarkan departemen dan peran pengguna.",
          "Mengintegrasikan microservice NestJS untuk menyinkronkan data aset antar sistem.",
          "Menambahkan pemrosesan server-side dan pagination untuk katalog aset.",
        ],
        details: {
          problem: "Data aset tersebar di tiap departemen, dan setiap tim mencatat perangkat di spreadsheet masing-masing.",
          decisions: [
            "Membatasi query aset berdasarkan departemen dan peran pengguna.",
            "Memindahkan filter dan pagination katalog ke sisi server.",
            "Menyinkronkan data lewat layanan NestJS alih-alih menduplikasi data.",
          ],
          result: "Satu katalog aset per departemen, terbatas pada data yang boleh dilihat pengguna.",
        },
      },
      "N-BR-08": {
        name: "Jumpaloka",
        role: "Software Engineer",
        context: "Game browser multiplayer dengan quest, gameplay server-authoritative, stempel, dan buku perjalanan.",
        contributions: [
          "Membangun room multiplayer dan alur quest dengan TypeScript dan Colyseus.",
          "Menambahkan hadiah stempel server-authoritative dan UI Buku Perjalanan.",
          "Menjaga game responsif untuk desktop dan perangkat touch.",
        ],
        details: {
          problem: "Game membutuhkan alur quest multiplayer yang andal dengan hadiah progres yang terlihat.",
          decisions: [
            "Menjaga penyelesaian quest dan pembuatan stempel di server.",
            "Menyimpan stempel selama sesi room aktif sampai akun persisten tersedia.",
          ],
          result: "Pemain dapat menyelesaikan quest, mengumpulkan stempel, dan melihatnya di Buku Perjalanan.",
        },
      },
      "N-BR-07": {
        name: "Kado by Livales",
        role: "Software Engineer",
        context: "Situs pencari kado untuk pembeli Indonesia: kuis empat langkah, kartu kado lewat tautan, wishlist publik, dan papan patungan, dengan checkout afiliasi ke Shopee, Tokopedia, Lazada, Blibli, dan TikTok Shop.",
        contributions: [
          "Membangun kuis kado empat langkah dan halaman produk SEO yang memetakan jawaban ke katalog marketplace.",
          "Merilis kartu kado, wishlist @handle, dan papan patungan di Firestore dengan login Google.",
          "Mengarahkan setiap tautan produk keluar lewat Cloudflare Worker yang membaca tujuan dari Firestore, bukan dari URL.",
        ],
        details: {
          problem: "Belanja kado sering mandek karena ide yang tidak cocok dengan penerima, dan tautan marketplace sulit dibagikan ke grup.",
          decisions: [
            "Menyimpan katalog sebagai JSON di repo dan data pengguna di Firestore.",
            "Menyelesaikan tujuan afiliasi di sisi server lewat Worker agar tautan tidak bisa dimanipulasi.",
            "Memisahkan setiap alur kado ke route sendiri tanpa perlu login untuk memulai.",
          ],
          result: "Aktif di kado.livales.com dengan lima alur kado dan checkout afiliasi.",
        },
      },
      "N-BR-01": {
        name: "MSIB Course Online",
        role: "Anggota tim · tampilan pembayaran dan profil",
        context: "Platform kursus dan event online yang dibangun tim empat orang selama program MSIB: katalog event, episode, tiket, order, dan pembayaran Midtrans.",
        contributions: [
          "Membangun halaman pembayaran: ringkasan pembelian (investasi, biaya admin, total), pilihan metode pembayaran, dan tombol lanjut ke pembayaran.",
          "Membangun halaman profil peserta di atas layout Blade yang sudah ada.",
          "Menjaga tampilan baru tetap konsisten dengan styling Tailwind bersama dan data order yang sudah disiapkan controller.",
        ],
        details: {
          problem: "Halaman checkout harus merinci apa yang dibayar peserta — investasi event, biaya admin, total — sekaligus memberi tempat untuk mengelola data akunnya.",
          decisions: [
            "Tampilan pembayaran tetap server-rendered di Blade agar memakai data order yang sudah disiapkan controller.",
            "Order dan detail order dipisah di model data supaya satu checkout bisa memuat beberapa tiket.",
            "Biaya admin ditampilkan sebagai baris sendiri, tidak dilebur ke total.",
          ],
          result: "Halaman pembayaran dan profil yang menyatu dengan platform Laravel 11 dan melengkapi alur peserta dari katalog sampai checkout.",
        },
      },
      "N-BR-04": {
        name: "MRTG",
        role: "Kontributor backend",
        context: "Memantau bandwidth dan konektivitas layanan jaringan internal Mahkamah Konstitusi RI berdasarkan koordinat layanan yang dimasukkan manual.",
        contributions: [
          "Mengumpulkan data bandwidth dan konektivitas layanan yang dipantau.",
          "Menggunakan koordinat yang dimasukkan manual untuk mengidentifikasi tiap layanan.",
        ],
        details: {
          problem: "Operator jaringan belum punya satu tampilan bandwidth dan konektivitas untuk layanan yang dipantau.",
          decisions: [
            "Menyimpan koordinat tiap layanan secara manual agar peta sesuai topologi nyata.",
            "Memisahkan hasil polling dari lapisan tampilan.",
          ],
          result: "Bandwidth dan konektivitas per layanan dalam satu tampilan pemantauan.",
        },
      },
    },
  },
  contact: {
    title: "HUBUNGI SAYA",
    subtitle: "Saya terbuka untuk posisi Backend Developer atau Fullstack Developer, serta kolaborasi.",
    cta: "KIRIM EMAIL",
    orLabel: "SALURAN LAIN",
  },
  footer: {
    role: "BACKEND DEVELOPER & FULLSTACK DEVELOPER",
  },
};

export const translations = { en, id };
