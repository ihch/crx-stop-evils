console.log('Stop watching YouTube or other the devil');

const bodyElement = document.querySelector('body');

const isTimeWatchableVideo = (hours) => {
    return hours >= 19;
};

const coverContents = (hours) => {
    if (isTimeWatchableVideo(hours)) {
        return;
    }
    bodyElement.textContent = 'lol';
};

if (bodyElement) {
    const currentTime = new Date();
    coverContents(currentTime.getHours());
}