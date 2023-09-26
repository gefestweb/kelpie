export const controlVideo = (video, action) => {
    if (video && action === 'stop') {
        video.pause();
        video.currentTime = 0;
    }
}