// intro animation

const animContainer = document.querySelector('.anim-container');

setTimeout(() => {
    animContainer.remove();
    carousels[0].classList.add('active');
    setIntervalForSlider();
}, 3500);

//toggle button
const toggleBtn = document.querySelector('.toggle-btn');
const linkContainer = document.querySelector('.links-container');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    linkContainer.classList.toggle('show');
})

// links

const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(ele => ele.classList.remove('active'));
        link.classList.add('active');
    })
})
