// Перемещение блоков заголовков при адаптиве
const viewportWidth = window.screen.width;
const quizTitle = document.querySelector('.quiz__title');
const quizInput = document.querySelector('.quiz__block-input');
const consultationTitle = document.querySelector('.consultation-help__title');
const consultationContainer = document.querySelector('.help-consultation__container');

if (viewportWidth < 1024) {
   quizInput.insertAdjacentElement('afterbegin', quizTitle);
   // consultationContainer.insertAdjacentElement('afterbegin', consultationTitle);
}

if (viewportWidth < 1130) {
   // quizInput.insertAdjacentElement('afterbegin', quizTitle);
   consultationContainer.insertAdjacentElement('afterbegin', consultationTitle);
}

// =======================================================================================================================================
// Стилизация шкалы цены
const inputPrice = document.querySelector('.quiz__input-progress');
const inputLabel = document.querySelector('.quiz__input-labebel-progress');
const inputLabelPrice = document.querySelector('.quiz__input-labebel-progress > p');
const rangeValue = inputPrice.value;

if (rangeValue > 0) {
   showProgress();
}

function showProgress() {
   // Переводим заданые пользователем значения value в проценты 
   let min = +inputPrice.min,
      max = +inputPrice.max - min,
      value = +inputPrice.value - min,
      c = 0;
   inputLabelPrice.textContent = `$` + (inputPrice.value / 1000) + `,000`;
   const result = (value / max * 100);
   if (result < 0) {
      c = 0;
   } else {
      c = `${result}`;
   }
   // Задаем стили изменения input
   const styleTransform = -40 - (c * 0.2);
   inputLabel.style.transform = `translateX(${styleTransform}%)`;
   inputPrice.style.background = `linear-gradient(to right, #67B0E3 0%, #67B0E3 ${c}%, ${c}%, #E8E8E8 100%)`;
   inputLabel.style.left = `${c}%`;
}

// =======================================================================================================================================
// Стилизация шкалы рейтинга Trustpilot
const inputStarsRating = document.querySelector('.rating-stars__progress');
const starsRatingValue = inputStarsRating.value;

if (starsRatingValue > 0) {
   showStarsRating();
}

function showStarsRating() {
   // Переводим заданые пользователем значения value в проценты 
   let min = +inputStarsRating.min,
      max = +inputStarsRating.max - min,
      value = +inputStarsRating.value - min,
      c = 0;
   const result = (value / max * 100);
   if (result < 0) {
      c = 0;
   } else {
      c = `${result}`;
   }
   // Задаем стили изменения input
   inputStarsRating.style.background = `linear-gradient(to right, #00B67A 0%, #00B67A ${c}%, ${c}%, #E8E8E8 100%)`;
}

// =======================================================================================================================================
// // slider-swiper
if (viewportWidth < 768) {
   new Swiper('.our-services__slider-body', {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 20,
      initialSlide: 0,
   });

   new Swiper('.book-consultation__slider-container', {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 25,
      initialSlide: 0,
   });
}

new Swiper('.slider-trustpilot__body', {
   navigation: {
      nextEl: '.slider-trustpilot__button-next',
      prevEl: '.slider-trustpilot__button-prev'
   },
   slidesPerView: 'auto',
   slidesPerGroup: 1,
   spaceBetween: 20,
   initialSlide: 0,
});
// =======================================================================================================================================
// Стилизация шкалы рейтинга TrustpilotCardSlide
document.querySelectorAll('.card-slider-trustpilot__progress-stars').forEach((child) => {
   let min = +child.min,
      max = +child.max - min,
      value = +child.value - min,
      c = 0;
   const result = (value / max * 100);
   if (result < 0) {
      c = 0;
   } else {
      c = `${result}`;
   }
   child.style.background = `linear-gradient(to right, #00B67A 0%, #00B67A ${c}%, ${c}%, #E8E8E8 100%)`;
});

