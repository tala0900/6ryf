// ========================================
// التعامل مع قائمة الهمبرجر
// ========================================

const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

// فتح وإغلاق القائمة عند الضغط على زر الهمبرجر
hamburgerBtn.addEventListener('click', function() {
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// إغلاق القائمة عند الضغط على أي رابط
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// إغلاق القائمة عند الضغط خارجها
document.addEventListener('click', function(event) {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickOnHamburger = hamburgerBtn.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ========================================
// الزر التفاعلي (CTA Button)
// ========================================

const ctaBtn = document.getElementById('ctaBtn');

ctaBtn.addEventListener('click', function() {
    // عرض رسالة ترحيب
    const message = 'مرحباً بك في مدينة طريف! نتمنى أن تستمتع باستكشاف أخبار ومشاريع مدينتنا الجميلة.';
    alert(message);
    
    // الانتقال إلى قسم الأخبار
    const newsSection = document.getElementById('news');
    newsSection.scrollIntoView({ behavior: 'smooth' });
});

// ========================================
// تأثير التمرير على الأزرار والعناصر
// ========================================

// إضافة تأثير عند تمرير الماوس على بطاقات الأخبار
const newsCards = document.querySelectorAll('.news-card');
newsCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ========================================
// تأثير التمرير على بطاقات الأقسام
// ========================================

const sectionCards = document.querySelectorAll('.section-card');
sectionCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    });
});

// ========================================
// تأثير الحركة عند التمرير (Scroll Animation)
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// مراقبة جميع الأقسام
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});

// ========================================
// تأثير التغيير عند تغيير حجم الشاشة
// ========================================

window.addEventListener('resize', function() {
    // إغلاق القائمة عند تغيير حجم الشاشة إلى شاشة أكبر
    if (window.innerWidth > 768) {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ========================================
// إضافة تأثير تفاعلي على جدول الأخبار
// ========================================

const tableRows = document.querySelectorAll('.news-table tbody tr');
tableRows.forEach((row, index) => {
    row.addEventListener('click', function() {
        // تغيير لون الصف عند الضغط عليه
        tableRows.forEach(r => r.style.backgroundColor = '');
        this.style.backgroundColor = '#e8f5e9';
        
        // عرض رسالة
        const newsTitle = this.querySelector('td:first-child').textContent;
        console.log('تم اختيار: ' + newsTitle);
    });
    
    // إضافة تأثير تفاعلي عند التمرير
    row.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
        this.style.backgroundColor = '#f5f5f5';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });
});

// ========================================
// تحسين تجربة المستخدم - عرض رسالة ترحيب
// ========================================

window.addEventListener('load', function() {
    // إضافة فئة للإشارة إلى أن الصفحة قد تم تحميلها
    document.body.classList.add('loaded');
    
    // يمكن إضافة رسالة ترحيب هنا إذا أردت
    console.log('مرحباً بك في صفحة مدينة طريف!');
});

// ========================================
// دعم لوحة المفاتيح (Accessibility)
// ========================================

document.addEventListener('keydown', function(event) {
    // الضغط على Escape لإغلاق القائمة
    if (event.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

console.log('تم تحميل جميع سكريبتات JavaScript بنجاح!');
