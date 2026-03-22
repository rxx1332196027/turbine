document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // 汉堡菜单切换
    burger?.addEventListener('click', function() {
        nav?.classList.toggle('nav-active');

        // 动画效果
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        burger.classList.toggle('toggle');
    });


    // 🔥 优化后的平滑滚动 - 终极版事件委托
    document.addEventListener('click', function (e) {
        // 1. 向上查找最近的a标签（兼容任意嵌套结构）
        const anchor = e.target.closest('a');
        // 2. 只处理锚点链接（href以#开头且不是空#）
        if (anchor && anchor.getAttribute('href')?.startsWith('#') && anchor.getAttribute('href') !== '#') {
            e.preventDefault();

            // 关闭移动导航菜单
            nav?.classList.remove('nav-active');
            burger?.classList.remove('toggle');
            navLinks.forEach(link => link.style.animation = '');

            // 平滑滚动到目标位置
            const targetId = anchor.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    // 图片画廊功能（无修改）
    const galleries = document.querySelectorAll('.business-gallery');
    galleries.forEach(gallery => {
        const container = gallery.querySelector('.gallery-container');
        const prevBtn = gallery.querySelector('.gallery-prev');
        const nextBtn = gallery.querySelector('.gallery-next');
        const images = gallery.querySelectorAll('img');
        let currentIndex = 0;

        function updateGallery() {
            container.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        prevBtn?.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateGallery();
        });
        nextBtn?.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateGallery();
        });
    });

    // 表单提交（无修改）
    const contactForm = document.getElementById('contact-form');
    contactForm?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('感谢您的留言，我们会尽快回复您！');
        contactForm.reset();
    });

    // 滚动时导航栏样式变化（无修改）
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header && window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(5px)';
        } else if (header) {
            header.style.backgroundColor = 'var(--white)';
            header.style.backdropFilter = 'none';
        }
    });

    // 🔥 方案1：优化语言切换 - 只修改文本节点，不破坏DOM结构
    function switchLanguage(lang) {
        // 遍历所有多语言元素
        document.querySelectorAll('[data-zh]').forEach(element => {
            const langText = element.getAttribute(`data-${lang}`);
            if (langText) {
                // 关键修改：只替换第一个文本节点，保留子元素结构
                if (element.firstChild && element.firstChild.nodeType === 3) {
                    element.firstChild.textContent = langText;
                } else {
                    // 无文本节点时才设置textContent（兼容空元素）
                    element.textContent = langText;
                }
            }
        });
        localStorage.setItem('preferredLanguage', lang);
    }


    // 语言切换事件绑定
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function(e) {
            switchLanguage(e.target.value);
            bindMenuEvents();
        });

        // 恢复用户偏好语言
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang) {
            languageSelect.value = savedLang;
            switchLanguage(savedLang);
        }
    }
});