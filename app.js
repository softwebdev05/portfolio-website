// intro animation

const animContainer = document.querySelector('.anim-container');

setTimeout(() => {
    animContainer.remove();
    carousels[0].classList.add('active');
    setIntervalForSlider();
}, 3500);