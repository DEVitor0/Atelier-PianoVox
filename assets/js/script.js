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

document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-list li');

    menuItems.forEach((item, index) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            scrollToElement(index);
        });
    });

    function scrollToElement(index) {
        const contentElements = document.querySelectorAll('section > div');
        const targetElement = contentElements[index];

        if (targetElement) {
            const navHeight = document.querySelector('header').offsetHeight;

            let extraOffset = 0;

            if (index === 2) { 
                extraOffset = -400; 
            } else if (index === 3) { 
                extraOffset = window.innerHeight = -600;
            }

            window.scrollTo({
                top: targetElement.offsetTop - navHeight - extraOffset,
                behavior: 'smooth'
            });
        }
    }
});