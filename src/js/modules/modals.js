import { controlVideo } from "./video.js";

const modals = () => {

    function setupModal(buttonSelector, modalSelector) {
        const modal = document.querySelector(modalSelector);
        const btn = document.querySelector(buttonSelector);
        const span = document.getElementsByClassName("close")[0];
        const video = modal.querySelector('video');

        btn.onclick = function () {
            modal.style.display = "flex"
        }

        span.onclick = function () {
            modal.style.display = "none";
            controlVideo(video, 'stop');
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
                controlVideo(video, 'stop');
            }
        }
    }

    setupModal('.third-screen__button.for-desc-flex', '#modalMainVideo');
    setupModal('.third-screen__button.for-mob-flex', '#modalMainVideo');
}

export default modals;