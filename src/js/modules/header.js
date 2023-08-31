const header = () => {

    const headerDesc = document.querySelector('.header');
    const headerContent = document.querySelector('.header__desc');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            headerDesc.classList.add('active');
            if((window.matchMedia("(max-width: 1000px)").matches)) {
                headerContent.style.backgroundColor = 'white';
            }
        } else {
            headerDesc.classList.remove('active');
            if((window.matchMedia("(max-width: 1000px)").matches)) {
                headerContent.style.backgroundColor = 'unset';
            }
        }
    });
}
export default header