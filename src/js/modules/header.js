const header = () => {

    const headerDesc = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 0) {
            headerDesc.classList.add('active');
        } else {
            headerDesc.classList.remove('active');
        }
    });
}
export default header