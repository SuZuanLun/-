/* =============================
   MENU TOGGLE (Mobile)
============================= */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("open");
});

/* =============================
   DARK / LIGHT MODE
============================= */
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    // simpan ke localStorage
    const currentTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
});

// Load theme sebelumnya
(function () {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    }
})();

/* =============================
   MULTI LANGUAGE SYSTEM
============================= */

// Semua teks halaman berada di sini
const LANG = {
    id: {
        "nav-home": "Beranda",
        "nav-about": "Tentang",
        "nav-projects": "Proyek",
        "nav-contact": "Kontak",
        "nav-blog": "Blog",

        "hero-desc": "Inovasi Server AI Yang Independen Tanpa Internet",
        "hero-btn-projects": "Lihat Proyek",
        "hero-btn-contact": "Hubungi Kami",
        "scroll-text": "Scroll",

        "about-title": "01. Tentang Kami",
        "about-desc": "Saya Swanlun, dari Shu De University, bekerja sama dengan Chen Wunan Processor, membangun server AI independen.",
        "about-desc-2": "Saya, sebagai Group B, siap membangun server AI yang lebih kuat.",

        "stat-independent": "Independen",
        "stat-offline": "Siap Offline",
        "stat-powered": "Berbasis AI",

        "projects-title": "02. Proyek Kami",
        "project1-title": "Membangun Server AI Independent & Offline",
        "project1-desc": "Infrastruktur AI tanpa internet yang aman dan powerful.",
        "project2-title": "Mengembangkan RAG untuk Pencarian Informasi",
        "project2-desc": "RAG meningkatkan akurasi pencarian dengan database terstruktur.",
        "project3-title": "Implementasi LLM",
        "project3-desc": "Platform pembelajaran berbasis LLM yang adaptif.",
        "project4-title": "AI untuk Pengembangan Server Canggih",
        "project4-desc": "Optimasi server menggunakan automasi berbasis AI.",

        "contact-title": "03. Hubungi Kami",
        "contact-subtitle": "Kami siap membantu Anda",
        "form-name": "Nama",
        "form-email": "Email / Line ID",
        "form-phone": "No. Telepon (Opsional)",
        "form-message": "Pesan",
        "form-submit": "Kirim Pesan",

        "contact-info-title": "Kontak Pribadi",
        "contact-campus": "Kampus",

        "blog-title": "04. Blog",
        "blog-coming-soon": "Segera hadir - Artikel dan update terbaru tentang AI",

        "footer-tagline": "Inovasi Server AI Independent",
        "footer-navigation": "Navigasi",
        "footer-connect": "Terhubung",
        "footer-social": "Sosial Media",
        "footer-rights": "Semua hak dilindungi",
        "footer-made": "Dibuat dengan",
        "footer-from": "dari Taiwan",
    },

    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "nav-blog": "Blog",

        "hero-desc": "Innovation in Independent Offline AI Servers",
        "hero-btn-projects": "View Projects",
        "hero-btn-contact": "Contact Us",
        "scroll-text": "Scroll",

        "about-title": "01. About Us",
        "about-desc": "I am Swanlun from Shu De University collaborating with Chen Wunan Processor to build an independent AI server.",
        "about-desc-2": "As Group B, I am ready to build a stronger AI server.",

        "stat-independent": "Independent",
        "stat-offline": "Offline Ready",
        "stat-powered": "AI Powered",

        "projects-title": "02. Our Projects",
        "project1-title": "Building an Independent Offline AI Server",
        "project1-desc": "AI infrastructure operating without internet for full privacy.",
        "project2-title": "Developing RAG for Information Retrieval",
        "project2-desc": "RAG improves information accuracy with structured knowledge bases.",
        "project3-title": "LLM Implementation",
        "project3-desc": "Adaptive learning platform powered by LLM.",
        "project4-title": "AI for Advanced Server Development",
        "project4-desc": "Optimizing server performance using AI automation.",

        "contact-title": "03. Contact Us",
        "contact-subtitle": "We are ready to assist you",
        "form-name": "Name",
        "form-email": "Email / Line ID",
        "form-phone": "Phone Number (Optional)",
        "form-message": "Message",
        "form-submit": "Send Message",

        "contact-info-title": "Personal Contact",
        "contact-campus": "Campus",

        "blog-title": "04. Blog",
        "blog-coming-soon": "Coming soon - Latest articles about AI",

        "footer-tagline": "Independent AI Server Innovation",
        "footer-navigation": "Navigation",
        "footer-connect": "Connect",
        "footer-social": "Social Media",
        "footer-rights": "All rights reserved",
        "footer-made": "Made with",
        "footer-from": "from Taiwan",
    },

    zh: {
        "nav-home": "主页",
        "nav-about": "关于",
        "nav-projects": "项目",
        "nav-contact": "联系",
        "nav-blog": "博客",

        "hero-desc": "独立离线 AI 服务器创新",
        "hero-btn-projects": "查看项目",
        "hero-btn-contact": "联系我们",
        "scroll-text": "滚动",

        "about-title": "01. 关于我们",
        "about-desc": "我是 Swanlun，与陈武南处理器合作，共同建立独立 AI 服务器。",
        "about-desc-2": "作为 B 组，我将继续构建更强大的 AI 服务器。",

        "stat-independent": "独立",
        "stat-offline": "离线运行",
        "stat-powered": "AI 驱动",

        "projects-title": "02. 我们的项目",
        "project1-title": "打造独立离线 AI 服务器",
        "project1-desc": "无需互联网即可运行的本地 AI 系统，确保隐私。",
        "project2-title": "基于 RAG 的信息检索",
        "project2-desc": "RAG 将数据库知识与 LLM 结合，提高准确度。",
        "project3-title": "LLM 教育平台",
        "project3-desc": "基于 LLM 的自适应学习系统。",
        "project4-title": "高级 AI 服务器开发",
        "project4-desc": "利用 AI 优化服务器性能并自动管理资源。",

        "contact-title": "03. 联系我们",
        "contact-subtitle": "我们随时为您服务",
        "form-name": "姓名",
        "form-email": "邮箱 / Line ID",
        "form-phone": "电话号码（可选）",
        "form-message": "留言",
        "form-submit": "发送",

        "contact-info-title": "私人联系方式",
        "contact-campus": "学校",

        "blog-title": "04. 博客",
        "blog-coming-soon": "即将上线 - 最新 AI 文章",

        "footer-tagline": "独立 AI 服务器创新",
        "footer-navigation": "导航",
        "footer-connect": "联系",
        "footer-social": "社交媒体",
        "footer-rights": "版权所有",
        "footer-made": "制作于",
        "footer-from": "台湾",
    }
};


/* =============================
   LANGUAGE SWITCHING
============================= */

const langBtns = document.querySelectorAll(".lang-btn");

langBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        langBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const lang = btn.dataset.lang;
        switchLanguage(lang);
    });
});

function switchLanguage(lang) {
    document.querySelectorAll("[data-id]").forEach(el => {
        const key = el.getAttribute("data-id");
        if (LANG[lang][key]) {
            el.textContent = LANG[lang][key];
        }
    });

    localStorage.setItem("lang", lang);
}

// Load bahasa sebelumnya
(function () {
    const saved = localStorage.getItem("lang") || "id";
    switchLanguage(saved);
    document.querySelector(`[data-lang="${saved}"]`)?.classList.add("active");
})();


/* =============================
   FORM "LOADING" EFFECT
============================= */
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const btn = form.querySelector("button");
    btn.classList.add("loading");

    setTimeout(() => {
        btn.classList.remove("loading");
        formStatus.textContent = "✔ Pesan berhasil dikirim (simulasi)";
        form.reset();
    }, 1200);
});
