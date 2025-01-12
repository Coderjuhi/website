

const arrowDownContainer = document.getElementById('arrow-down-container');
const arrowUpContainer = document.getElementById('arrow-up-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        arrowUpContainer.style.display = 'block';
    } else {
        arrowUpContainer.style.display = 'none';
    }

    if (window.scrollY + window.innerHeight < document.body.scrollHeight - 100) {
        arrowDownContainer.style.display = 'block';
    } else {
        arrowDownContainer.style.display = 'none';
    }
});

arrowDownContainer.addEventListener('click', () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

arrowUpContainer.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});







