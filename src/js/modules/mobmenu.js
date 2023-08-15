const mobMenu = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.mob-menu');
    const cross = document.querySelector('.mob-menu__cross');
    const box = document.querySelector('.container-page-margin');

    function openMenu() {
        menu.classList.add('mob-menu--active');
        document.body.classList.add('overflow-hidden');
        box.classList.remove('shadow');
    }

    function closeMenu() {
        menu.classList.remove('mob-menu--active');
        document.body.classList.remove('overflow-hidden');
        box.classList.add('shadow');
    }

    burger.addEventListener('click', () => {
        openMenu();
    });
    
    cross.addEventListener('click', () => {
        closeMenu();
    });
}

export default mobMenu;