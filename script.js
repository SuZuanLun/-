// =========================
// THEME TOGGLE (Gelap/Terang)
// =========================
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");

    // Simpan preferensi ke localStorage
    if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Load tema dari localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
}


// =========================
// MENU TOGGLE (Mobile Menu)
// =========================
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("open");
});


// =========================
// MULTILANGUAGE SYSTEM
// =========================
const langButtons = document.querySelectorAll(".lang-btn");

// Semua teks dapat diubah berdasarkan data-id pada HTML
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

        "about-title": "01. Tentang Kami",
        "about-desc": "Saya Swanlun, dari Shu De University, bekerja sama dengan Chen Wunan Processor, telah lama membangun server AI independen.",
        "about-desc-2": "Saya sebagai Group B siap bekerja sama membangun server AI yang lebih kuat.",
        "stat-independent": "Independen",
        "stat-offline": "Siap Offline",
        "stat-powered": "Bertenaga",

        "projects-title": "02. Proyek Kami",

        "contact-title": "03. Hubungi Kami",
        "contact-subtitle": "Kami siap membantu Anda",
        "form-name": "Nama",
        "form-email": "Email / Line ID",
        "form-phone": "No. Telepon (Opsional)",
        "form-message": "Pesan",

        "blog-title": "04. Blog",
        "blog-coming-soon": "Segera hadir - update dan artikel"

    },

    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "nav-blog": "Blog",

        "hero-desc": "Innovation of Independent Server AI (Offline Ready)",
        "hero-btn-projects": "View Projects",
        "hero-btn-contact": "Contact Us",

        "scroll-text": "Scroll",

        "about-title": "01. About Us",
        "about-desc": "I am Swanlun from Shu De University, collaborating with Chen Wunan Processor to build an independent AI server.",
        "about-desc-2": "As Group B, I am ready to cooperate to build an even more powerful AI server.",
        "stat-independent": "Independent",
        "stat-offline": "Offline Ready",
        "stat-powered": "Powered",

        "projects-title": "02. Our Projects",

        "contact-title": "03. Contact Us",
        "contact-subtitle": "We are ready to help you",
        "form-name": "Name",
        "form-email": "Email / Line ID",
        "form-phone": "Phone (Optional)",
        "form-message": "Message",

        "blog-title": "04. Blog",
        "blog-coming-soon": "Coming soon — updates & articles"

    },

    zh: {
        "nav-home": "首页",
        "nav-about": "关于",
        "nav-projects": "项目",
        "nav-contact": "联系",
        "nav-blog": "博客",

        "hero-desc": "独立离线AI服务器创新",
        "hero-btn-projects": "查看项目",
        "hero-btn-contact": "联系我们",

        "scroll-text": "滑动",

        "about-title": "01. 关于我们",
        "about-desc": "我是Swanlun，来自树德科技大学，与陈武南处理器合作建立独立AI服务器。",
        "about-desc-2": "作为B组，我准备好一起构建更强大的AI服务器。",
        "stat-independent": "独立",
        "stat-offline": "离线",
        "stat-powered": "驱动",

        "projects-title": "02. 我们的项目",

        "contact-title": "03. 联系我们",
        "contact-subtitle": "我们随时为您提供帮助",
        "form-name": "姓名",
        "form-email": "电子邮件 / Line账号",
        "form-phone": "电话（可选）",
        "form-message": "留言",

        "blog-title": "04. 博客",
        "blog-coming-soon": "即将上线 — 最新文章与动态"
    }
};


// 🔄 Fungsi untuk apply bahasa
function applyLanguage(lang) {
    const allTranslatable = document.querySelectorAll("[data-id]");

    allTranslatable.forEach(el => {
        const id = el.getAttribute("data-id");
        if (translations[lang][id]) {
            el.textContent = translations[lang][id];
        }
    });

    localStorage.setItem("language", lang);
}

// Event tombol bahasa
langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        langButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const selectedLang = btn.getAttribute("data-lang");
        applyLanguage(selectedLang);
    });
});

// Load bahasa dari localStorage
const savedLang = localStorage.getItem("language");
if (savedLang) {
    document.querySelector(`.lang-btn[data-lang="${savedLang}"]`)?.click();
}
