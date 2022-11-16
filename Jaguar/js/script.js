// slider-swiper
new Swiper('.slider__images', {
   navigation: {
      nextEl: '.slider__button-next',
      prevEl: '.slider__button-prev'
   },
   mousewheel: {
      eventsTarget: ".slider__image"
   },
   autoplay: {
      delay: 5000,
      disableOnInteraction: false
   },
   spaceBetween: 30,
   loop: true,
   speed: 1500,
   direction: 'vertical',
   autoHeight: true
});


// intl-tel-input
var input = document.querySelector("#phone");
window.intlTelInput(input, {
   // any initialisation options go here
   initialCountry: "UA",
   preferredCountries: ['UA', 'SK']
});


// menu-burger
const iconMenu = document.querySelector('.header__burger');
const menuBurger = document.querySelector('.burger-menu');
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBurger.classList.toggle('_active');
   });
}

const menuLinks = document.querySelectorAll('.burger-menu__link');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkCkick);
   });
}

function onMenuLinkCkick(e) {
   const menuLink = e.target;
   if (iconMenu.classList.contains('_active')) {
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBurger.classList.remove('_active');
   }
}