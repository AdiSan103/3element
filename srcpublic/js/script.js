var swiper = new Swiper(".banner", {
    effect: "fade",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".content3__slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
});

  var swiper = new Swiper(".gallery__main", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
});


var swiper = new Swiper(".testimoni__main", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
});

  // hamburger-menu
function hamburgerMenu() {
  if (document.querySelector('.nav__main').classList.contains('d-none')) {
      document.querySelector('.nav__main').classList.remove('d-none');
  } else {
      document.querySelector('.nav__main').classList.add('d-none');
  }
}

 // hamburger-menu
window.addEventListener("scroll", () => {
  let thisScroll = this.scrollY;
  if(thisScroll > document.getElementsByClassName('nav__start')[0].offsetTop) {
      document.getElementsByClassName('nav__main')[0].classList.add("nav__up");
  }
});

// aos js
AOS.init();
