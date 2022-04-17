let progressBars = Array.from(document.getElementsByClassName('progress'));
const currentPers = [0, 0, 0];
const perDuration = 1000;

progressBars.forEach((bar, index) => {
    const persent = bar.firstElementChild;
    const target = parseInt(bar.dataset.target);
    bar.style.width = target + '%';
    persent.style.filter = 'opacity(1)'
    const perInterval = setInterval(() => {
        currentPers[index]++;
        if (currentPers[index] > target) {
            persent.innerText = target + '%';
            clearInterval(perInterval);
            return;
        }
        persent.innerText = currentPers[index] + '%';
    }, perDuration / target);
});