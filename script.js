// ===========================
// THEME TOGGLE (DARK / LIGHT)
// ===========================
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
    localStorage.setItem("theme", body.classList.contains("dark-theme") ? "dark" : "light");
});

// Load saved theme
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
    }
});


// ===========================
// MOBILE NAVIGATION TOGGLE
// ===========================
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuToggle.classList.toggle("open");
});


// ===========================
// LANGUAGE SWITCHER
// ===========================

const translations = {
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

        "about-title": "Tentang Kami",
        "about-desc": "Saya Swanlun, dari Shu De University, bekerja sama dengan Chen Wunan Processor telah lama membangun server AI yang independen.",
        "about-desc-2": "Saya, sebagai Grup B, siap bekerja sama untuk membangun server AI yang lebih kuat.",
        "stat-independent": "Independen",
        "stat-offline": "Siap Offline",
        "stat-powered": "Berbasis AI",

        "projects-title": "Proyek Kami",

        "contact-title": "Hubungi Kami",
        "contact-subtitle": "Kami siap membantu Anda",
        "form-name": "Nama",
        "form-email": "Email / Line ID",
        "form-phone": "No. Telepon (Opsional)",
        "form-message": "Pesan",
        "form-submit": "Kirim Pesan",
        "contact-info-title": "Kontak Pribadi",
        "contact-campus": "Kampus",

        "blog-title": "Blog",
        "blog-coming-soon": "Segera hadir - Artikel dan update terbaru tentang AI dan teknologi",

        "footer-tagline": "Inovasi Server AI Independent",
        "footer-navigation": "Navigasi",
        "footer-connect": "Terhubung",
        "footer-social": "Sosial Media",
        "footer-rights": "Semua hak dilindungi.",
        "footer-made": "Dibuat dengan",
        "footer-from": "dari Taiwan"
    },

    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "nav-blog": "Blog",

        "hero-desc": "Innovative Independent Offline AI Server",
        "hero-btn-projects": "View Projects",
        "hero-btn-contact": "Contact Us",
        "scroll-text": "Scroll",

        "about-title": "About Us",
        "about-desc": "I am Swanlun from Shu De University, collaborating with Chen Wunan Processor, building an independent AI server.",
        "about-desc-2": "As Group B, I am ready to strengthen and grow the AI server.",
        "stat-independent": "Independent",
        "stat-offline": "Offline Ready",
        "stat-powered": "AI Powered",

        "projects-title": "Our Projects",

        "contact-title": "Contact Us",
        "contact-subtitle": "We are ready to assist you",
        "form-name": "Name",
        "form-email": "Email / Line ID",
        "form-phone": "Phone Number (Optional)",
        "form-message": "Message",
        "form-submit": "Send Message",
        "contact-info-title": "Personal Contact",
        "contact-campus": "Campus",

        "blog-title": "Blog",
        "blog-coming-soon": "Coming soon – Articles and updates about AI & tech",

        "footer-tagline": "Independent AI Server Innovation",
        "footer-navigation": "Navigation",
        "footer-connect": "Connect",
        "footer-social": "Social Media",
        "footer-rights": "All rights reserved.",
        "footer-made": "Made with",
        "footer-from": "from Taiwan"
    },

    zh: {
        "nav-home": "首頁",
        "nav-about": "關於",
        "nav-projects": "項目",
        "nav-contact": "聯絡",
        "nav-blog": "部落格",

        "hero-desc": "獨立離線 AI 伺服器創新",
        "hero-btn-projects": "查看項目",
        "hero-btn-contact": "聯絡我們",
        "scroll-text": "滑動",

        "about-title": "關於我們",
        "about-desc": "我是來自樹德科技大學的 Swanlun，與陳武男教授合作建立獨立 AI 伺服器。",
        "about-desc-2": "我是 B 組成員，準備打造更強大的 AI 系統。",
        "stat-independent": "獨立",
        "stat-offline": "離線支援",
        "stat-powered": "AI 驅動",

        "projects-title": "我們的項目",

        "contact-title": "聯絡我們",
        "contact-subtitle": "我們隨時為您提供協助",
        "form-name": "姓名",
        "form-email": "Email / Line ID",
        "form-phone": "電話（可選）",
        "form-message": "訊息",
        "form-submit": "送出",
        "contact-info-title": "個人聯絡",
        "contact-campus": "校園",

        "blog-title": "部落格",
        "blog-coming-soon": "即將推出 – AI 與科技的最新文章",

        "footer-tagline": "獨立 AI 伺服器創新",
        "footer-navigation": "導覽",
        "footer-connect": "聯繫",
        "footer-social": "社群媒體",
        "footer-rights": "版權所有。",
        "footer-made": "製作自",
        "footer-from": "台灣"
    }
};

const langButtons = document.querySelectorAll(".lang-btn");

langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;

        // Activate button
        langButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // Save language choice
        localStorage.setItem("lang", lang);

        // Apply translation
        applyLanguage(lang);
    });
});

function applyLanguage(lang) {
    const elements = document.querySelectorAll("[data-id]");

    elements.forEach(el => {
        const key = el.dataset.id;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// Load saved language
window.addEventListener("load", () => {
    const savedLang = localStorage.getItem("lang") || "id";
    applyLanguage(savedLang);

    document.querySelector(`[data-lang="${savedLang}"]`).classList.add("active");
});
