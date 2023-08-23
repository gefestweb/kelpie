document.addEventListener('DOMContentLoaded', function () {
    // Создаем экземпляр SmoothScroll для плавного скролла
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800
    });

    // Подключение ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll('.section');

    sections.forEach((section, index) => {
        const text = section.querySelector('.text');

        // Создаем анимацию для текста
        gsap.fromTo(
            text,
            { y: '100%', opacity: 0 },
            {
                y: '0%',
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: 'top center',
                    end: 'top center',
                    scrub: true
                }
            }
        );

        // Проверяем, чтобы последний текст завершился до окончания последней секции
        if (index === sections.length - 1) {
            gsap.to(
                text,
                {
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top center',
                        end: 'bottom center',
                        scrub: true
                    }
                }
            );
        }
    });


    // Ваш код здесь
});



