const mobMenu = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.mob-menu');
    const cross = document.querySelector('.mob-menu__cross');
    const box = document.querySelector('.container-page-margin');

    function openMenu() {
        menu.classList.add('mob-menu--active');
        menu.style.pointerEvents = 'all';
        document.body.classList.add('overflow-hidden');
        box.classList.remove('shadow');
    }

    function closeMenu() {
        menu.classList.remove('mob-menu--active');
        menu.style.pointerEvents = 'none';
        document.body.classList.remove('overflow-hidden');
        box.classList.add('shadow');
    }

    burger.addEventListener('click', () => {
        openMenu();
    });

    cross.addEventListener('click', () => {
        closeMenu();
    });

    menu.addEventListener('click', (event) => {
        if (event.target.tagName == 'LI' || event.target.tagName == 'BUTTON' || event.target.tagName == 'IMG') {
            closeMenu();
        }
    });
}

export default mobMenu;