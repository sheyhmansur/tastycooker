const slider = document.querySelector(".swiper");

let mySwiper;

// Инициализация слайдера на планшетных, мобильных устройствах
function mobileSlider() {
  if (window.innerWidth <= 600 && slider.dataset.mobile == "false") {
    mySwiper = new Swiper(slider, {
      slidesPerview: 1,
      spaceBetween: 10,
      loop: true,
      slideClass: "info__item",
    });

    slider.dataset.mobile = "true";
  }

  if (window.innerWidth > 600) {
    slider.dataset.mobile = "false";

    if (slider.classList.contains("swiper-initialized")) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
});
