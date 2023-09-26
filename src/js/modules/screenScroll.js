
const screenScroll = () => {
    const sections = document.querySelectorAll('section');
    const totalSections = sections.length;
    let currentSectionIndex = 0;
    let animationInProgress = false;

    function scrollToSection(index) {
        if (animationInProgress || index < 0 || index >= totalSections) {
            return;
        }

        animationInProgress = true;
        currentSectionIndex = index;

        gsap.to(window, {
            scrollTo: {
                y: sections[index],
                autoKill: false,
            },
            duration: 1,
            onComplete: () => {
                animationInProgress = false;
            },
        });
    }

    function startNextAnimation(animationsArray) {
        if (animationInProgress) {
            return;
        }

        if (currentSectionIndex < totalSections - 1) {
            const currentSection = sections[currentSectionIndex];
            const rect = currentSection.getBoundingClientRect();

            if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                currentSectionIndex++;
                scrollToSection(currentSectionIndex);
                return;
            }
        }

        if (currentSectionIndex < animationsArray.length) {
            const animationFunc = animationsArray[currentSectionIndex];
            animationFunc();
        }
    }

    // Добавляем обработчик события для скролла колесика мыши
    const wheelHandler = (e) => {
        if (!animationInProgress) {
            startNextAnimation(animationsFirst);
        }
    };

    // Инициализируем ScrollTrigger для фиксации секций
    gsap.utils.toArray('section').forEach((section, index) => {
        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                pin: true,
                start: 'top top',
                end: '+=100%',
                scrub: true,
                onEnter: () => {
                    if (currentSectionIndex !== index) {
                        currentSectionIndex = index;
                        animationInProgress = false;
                    }
                },
            },
        });
    });

    // Добавляем обработчик события для скролла колесика мыши
    window.addEventListener('wheel', wheelHandler);

    // Начинаем первую анимацию
    startNextAnimation(animationsFirst);
}

export default screenScroll;