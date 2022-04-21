var swiper = new Swiper(".banner", {
    effect: "fade",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".content3__slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
});

  // hamburger-menu
function hamburgerMenu() {
  if (document.querySelector('.nav__main').classList.contains('d-hidden')) {
      document.querySelector('.nav__main').classList.remove('d-hidden');
  } else {
      document.querySelector('.nav__main').classList.add('d-hidden');
  }
}

 // hamburger-menu
window.addEventListener("scroll", () => {
  let thisScroll = this.scrollY;
  if(thisScroll > document.getElementsByClassName('nav__start')[0].offsetTop) {
      document.getElementsByClassName('nav__main')[0].classList.add("nav__up");
  } else {
    document.getElementsByClassName('nav__main')[0].classList.remove("nav__up");
  }
});

// aos js
AOS.init();

// popup img
function popUp(data) {
  document.querySelector('.popUp').classList.remove('popup--hidden');
  document.querySelector('.popUp img').src = data.getAttribute("data-img");
}
function exitPopup(data) {
  document.querySelector('.popUp').classList.add('popup--hidden');
}