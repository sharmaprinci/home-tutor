// mobile nav
const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {
    Nav.classList.toggle("mobile-nav-hide");
});

// testimonial

var swiper = new Swiper(".mySwiper", {

    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
    delay: 2000,
    autoplayHoverPause: true,
    },
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },
    grabCursor: true,
    breakpoints: {
        640: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        768: {
        slidesPerView: 3,
        spaceBetween: 40,
        },
        1024: {
        slidesPerView: 3,
        spaceBetween: 20,
        },
    },
});

// pagination

