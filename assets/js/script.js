const hamburgerBtn = document.getElementById('hamburger-btn');
const menuList = document.querySelector('.menu-list');

hamburgerBtn.addEventListener('click', function () {
  this.classList.toggle('active');
  menuList.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    function showNextSlide() {
        const firstSlide = carousel.firstElementChild;
        const newSlide = firstSlide.cloneNode(true);
        carousel.appendChild(newSlide);
        carousel.removeChild(firstSlide);
    }

    function showPrevSlide() {
        const lastSlide = carousel.lastElementChild;
        const newSlide = lastSlide.cloneNode(true);
        carousel.insertBefore(newSlide, carousel.firstElementChild);
        carousel.removeChild(lastSlide);
    }

    prevButton.addEventListener("click", function () {
        showPrevSlide();
    });

    nextButton.addEventListener("click", function () {
        showNextSlide();
    });
});
