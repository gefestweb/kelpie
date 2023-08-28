import { gsap } from "gsap";

export function scrollByPixels(callback, pixels) {
    let scrolling = false;

    window.addEventListener("wheel", (event) => {
        if (!scrolling) {
            scrolling = true;

            const scrollAmount = pixels;
            const direction = event.deltaY > 0 ? 1 : -1;

            const targetScroll = window.pageYOffset + scrollAmount * direction;

            gsap.to(window, {
                scrollTo: { y: targetScroll },
                duration: 1, // Длительность анимации скролла
                onComplete: () => {
                    scrolling = false;

                    if (callback && typeof callback === "function") {
                        callback();
                    }
                },
            });
        }
    });
}

// Пример использования:
scrollByPixels(() => {
    console.log("Scroll complete");
}, 100); // Скролл на 100 пикселей
