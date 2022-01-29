window.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".info");
  const slider1 = document.querySelector(".reasons-slider");
  const slider2 = document.querySelector(".reviews-slider");

  let mySwiper;
  let mySwiper2;
  let mySwiper3;

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

  function mobileSlider1() {
    if (window.innerWidth <= 600 && slider1.dataset.mobile == "false") {
      mySwiper2 = new Swiper(slider1, {
        slidesPerview: 1,
        spaceBetween: 10,
        loop: true,
        slideClass: "reasons__item",
      });

      slider1.dataset.mobile = "true";
    }

    if (window.innerWidth > 600) {
      slider1.dataset.mobile = "false";

      if (slider1.classList.contains("swiper-initialized")) {
        mySwiper2.destroy();
      }
    }
  }

  mobileSlider1();

  window.addEventListener("resize", () => {
    mobileSlider1();
  });

  function mobileSlider2() {
    if (window.innerWidth <= 600 && slider2.dataset.mobile == "false") {
      mySwiper3 = new Swiper(slider2, {
        slidesPerview: 1,
        spaceBetween: 10,
        loop: true,
        slideClass: "reviews__item",
      });

      slider2.dataset.mobile = "true";
    }

    if (window.innerWidth > 600) {
      slider2.dataset.mobile = "false";

      if (slider2.classList.contains("swiper-initialized")) {
        mySwiper3.destroy();
      }
    }
  }

  mobileSlider2();

  window.addEventListener("resize", () => {
    mobileSlider2();
  });
});
