const ramaObserve = () => {
    const rama = document.querySelector('.four-screen__rama-img');
    const ramaBlur = document.querySelector('.four-screen__rama-blur');

    getSetWidth();

    window.addEventListener('resize', function() {
        getSetWidth();
    })

    function getSetWidth() {
        let ramaWidth = rama.offsetWidth;
        ramaBlur.style.width = ramaWidth + 'px';
    }
    
}

export default ramaObserve;