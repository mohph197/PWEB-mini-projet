let slideBars = Array.from(document.getElementsByClassName('slide-bar'));
const currentPers = [0, 0, 0];
const perDuration = 700;

slideBars.forEach((slide, index) => {
    const progressBar = slide.firstElementChild;
    const target = parseInt(progressBar.dataset.target);
    progressBar.style.width = target + '%';
    const perInterval = setInterval(() => {
        currentPers[index]++;
        if (currentPers[index] > target) {
            slide.nextElementSibling.innerText = target + '%';
            clearInterval(perInterval);
            return;
        }
        slide.nextElementSibling.innerText = currentPers[index] + '%';
    }, perDuration / target);
});