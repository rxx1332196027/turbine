// 导航栏切换
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', function() {
        nav.classList.toggle('nav-active');

        // 动画效果
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // 汉堡菜单动画
        burger.classList.toggle('toggle');
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // 关闭移动导航菜单
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navLinks.forEach(link => {
                link.style.animation = '';
            });

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 图片画廊功能
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

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateGallery();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateGallery();
        });
    });

    // 表单提交
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // 这里可以添加表单验证和提交逻辑
            alert('感谢您的留言，我们会尽快回复您！');
            contactForm.reset();
        });
    }

    // 滚动时导航栏样式变化
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(5px)';
        } else {
            header.style.backgroundColor = 'var(--white)';
            header.style.backdropFilter = 'none';
        }
    });
});

// 语言切换功能
document.getElementById('languageSelect').addEventListener('change', function(e) {
  const selectedLang = e.target.value;

  // 遍历所有带有多语言数据属性的元素
  document.querySelectorAll('[data-zh]').forEach(element => {
    element.textContent = element.getAttribute(`data-${selectedLang}`);
  });

  // 可以在这里添加保存用户语言偏好的逻辑
  localStorage.setItem('preferredLanguage', selectedLang);
});

// 页面加载时检查用户偏好语言
window.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang) {
    document.getElementById('languageSelect').value = savedLang;
    // 触发一次change事件以应用保存的语言
    document.getElementById('languageSelect').dispatchEvent(new Event('change'));
  }
});
