const slides = document.querySelectorAll(".slide");
const wrapper = document.querySelector(".slider-wrapper");
const slider = document.querySelector(".slider");

if (window.innerWidth < 1024){
    slider.classList.add("swiper");
    wrapper.classList.add("swiper-wrapper");
    slides .forEach(function(slide) {
        slide.classList.add("swiper-slide");
    });

    const swiper = new Swiper('.swiper', {
        // Настройки Swiper
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Делает пагинацию кликабельной
        }
    });
}
else{

}