let navButton = document.getElementById('nav-icon');
let linksRow = document.getElementById('links-row');

if (window.innerWidth > 864){
    shouldApear = true;
} else shouldApear = false;

const updateManue = () => {
    if (shouldApear) linksRow.style.display = 'flex';
    else linksRow.style.display = 'none';
}   

navButton.addEventListener('click', () => {
    shouldApear = !shouldApear;
    updateManue();
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 864){
        shouldApear = true;
        updateManue();
    }
})

updateManue();