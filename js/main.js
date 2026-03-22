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