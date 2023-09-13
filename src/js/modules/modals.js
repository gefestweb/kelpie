const modals = () => {
    
    function setupModal(buttonSelector, modalSelector) {
        const modal = document.querySelector(modalSelector);
        const btn = document.querySelector(buttonSelector);
        const span = document.getElementsByClassName("close")[0];

        btn.onclick = function () {
            modal.style.display = "flex"
        }

        span.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    setupModal('.third-screen__button.for-desc-flex', '#modalMainVideo');
    setupModal('.third-screen__button.for-mob-flex', '#modalMainVideo');
}

export default modals;