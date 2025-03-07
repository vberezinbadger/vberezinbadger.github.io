document.addEventListener('DOMContentLoaded', () => {
    // Загрузка аватара с GitHub
    const GITHUB_USERNAME = 'vberezinbadger'; // Замените на ваш username
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('github-avatar').src = data.avatar_url;
        })
        .catch(error => {
            console.error('Error fetching GitHub data:', error);
        });

    // Анимация появления карточек
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Анимация появления элементов
    const bentoItems = document.querySelectorAll('.bento-item');
    bentoItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    let mouseX = 0;
    let mouseY = 0;
    let rafId = null;

    const lerp = (start, end, factor) => {
        return start + (end - start) * factor;
    };

    const animateCards = () => {
        const items = document.querySelectorAll('.bento-item');
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distanceX = mouseX - centerX;
            const distanceY = mouseY - centerY;

            const rotateX = distanceY * -0.01;
            const rotateY = distanceX * 0.01;

            item.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateZ(10px)
            `;
        });
        rafId = requestAnimationFrame(animateCards);
    };

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!rafId) {
            rafId = requestAnimationFrame(animateCards);
        }
    });

    document.addEventListener('mouseleave', () => {
        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }

        const items = document.querySelectorAll('.bento-item');
        items.forEach(item => {
            item.style.transform = `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                translateZ(0)
            `;
        });
    });

    // Плавный скролл при клике на ссылки
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Плавный переход между страницами
    document.querySelector('#about').addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        // Анимация исчезновения текущей страницы
        const container = document.querySelector('.glass-container');
        container.style.transition = 'all 0.3s ease-out';
        container.style.opacity = '0';
        container.style.transform = 'scale(0.95)';
        
        // Добавляем transition для body, чтобы фон тоже плавно исчезал
        document.body.style.transition = 'opacity 0.3s ease-out';
        document.body.style.opacity = '0';
        
        setTimeout(() => {
            // Сохраняем флаг в sessionStorage для анимации на следующей странице
            sessionStorage.setItem('pageTransition', 'true');
            window.location.href = href;
        }, 300);
    });

    // Обработка модального окна контактов
    const contactsTrigger = document.querySelector('#contact');
    const modal = document.querySelector('#contactModal');
    const modalContent = modal.querySelector('.modal');

    // Открытие модального окна
    contactsTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.style.overflow = 'hidden';
        modal.style.display = 'flex';
        
        requestAnimationFrame(() => {
            modal.style.opacity = '1';
            modalContent.classList.add('active');
        });
    });

    // Функция закрытия модального окна
    function closeModal() {
        modal.style.opacity = '0';
        modalContent.classList.remove('active');
        document.body.style.overflow = '';
        
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }

    // Закрытие по кнопке
    const closeButton = modal.querySelector('.modal-close');
    closeButton?.addEventListener('click', closeModal);

    // Закрытие по клику вне модального окна
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Улучшенная обработка свайпа
    let touchStartY = 0;
    let touchEndY = 0;
    let initialTranslateY = 0;
    let isDragging = false;

    function handleSwipeGesture(e) {
        if (!isDragging) return;

        const touch = e.touches[0];
        const diff = touch.clientY - touchStartY;
        
        if (diff > 0) {
            e.preventDefault();
            const damping = 1 - (diff / window.innerHeight);
            const translateY = diff * Math.pow(damping, 2);
            modalContent.style.transform = `translateY(${translateY}px)`;
            modal.style.opacity = 1 - (translateY / window.innerHeight);
        }
    }

    modalContent.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
        isDragging = true;
        modalContent.style.transition = 'none';
    }, { passive: true });

    modalContent.addEventListener('touchmove', handleSwipeGesture, { passive: false });

    modalContent.addEventListener('touchend', () => {
        if (!isDragging) return;
        
        isDragging = false;
        modalContent.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
        
        const diff = touchEndY - touchStartY;
        const velocity = Math.abs(diff) / 200;
        
        if (diff > 50 || velocity > 0.5) {
            closeModal();
        } else {
            modalContent.style.transform = '';
            modal.style.opacity = '1';
        }
    });

    // Обработка свайпа на мобильных устройствах
    modalContent.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
        isDragging = true;
        modalContent.style.transition = 'none';
    });

    modalContent.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        touchEndY = e.touches[0].clientY;
        const diff = touchEndY - touchStartY;
        
        if (diff > 0) { // Только свайп вниз
            e.preventDefault();
            modalContent.style.transform = `translateY(${diff}px)`;
        }
    }, { passive: false });

    modalContent.addEventListener('touchend', () => {
        if (!isDragging) return;
        
        isDragging = false;
        modalContent.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        const diff = touchEndY - touchStartY;
        
        if (diff > 70) {
            closeModal();
        } else {
            modalContent.style.transform = '';
        }
    });

    // Предотвращение прокрутки страницы при открытом модальном окне
    modal.addEventListener('touchmove', (e) => {
        if (e.target === modal) {
            e.preventDefault();
        }
    }, { passive: false });
});
