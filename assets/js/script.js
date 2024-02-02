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

//! Script para a versão de tablet abaixo

function scriptWidth() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const mobileNav = document.querySelector(".mobile-nav");
    const imagem = document.querySelector("header");

    if (windowWidth > windowHeight && windowHeight > 200 && windowHeight < 400) {
        mobileNav.style.height = '60px';
        imagem.style.height = '350px';
    } else {
        imagem.style.height = ''; 
    }

    if (windowWidth >= 600) {
        const div = document.querySelector("section > div:nth-child(1) > div");

        div.style.display = 'none';

        setTimeout(function () {
            div.style.display = 'block';

            const styleSheet = document.styleSheets[0];
            const keyframes = `@keyframes expansãoBarra {
                0% { width: 0; }
                100% { width: 500px; }
            }`;

            styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
            div.style.animationName = "expansãoBarra";
            div.style.animationDuration = "1.5s";
            div.style.animationTimingFunction = "ease";
        }, 2000);
    }
}

window.onload = function () {
    scriptWidth();
    window.addEventListener('resize', scriptWidth);
};
