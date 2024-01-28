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
        carousel.appendChild(firstSlide);
    }


    function showPrevSlide() {
        const lastSlide = carousel.lastElementChild;
        carousel.insertBefore(lastSlide, carousel.firstElementChild);
    }


    prevButton.addEventListener("click", function () {
        showPrevSlide();
    });


    nextButton.addEventListener("click", function () {
        showNextSlide();
    });
});

