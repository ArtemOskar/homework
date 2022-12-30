const viewportWidth = window.screen.width;

// Перемещение блоков заголовков при адаптиве
const quizBlock = document.querySelector('.quiz');
const quizTitle = document.querySelector('.quiz__title');
const quizInput = document.querySelector('.quiz__block-input');
const consultationTitle = document.querySelector('.consultation-help__title');
const helpConsultationBlock = document.querySelector('.help-consultation__body');
const consultationContainer = document.querySelector('.help-consultation__container');

//Подрезка текста
const textCounseling = document.querySelector('.credit-counseling__text');
const textLink = document.querySelector('.credit-counseling__text-link');


window.addEventListener('resize', () => {
   const viewpor = window.screen.width;

   // Условия
   if (viewpor < 1024) {
      // Перемещение блоков заголовков при адаптиве
      quizInput.insertAdjacentElement('afterbegin', quizTitle);
      //Подрезка текста
      textLink.style.display = 'block';
      $clamp(textCounseling, {
         // clamp: `${num}`,
         clamp: 18,
      });
   } else {
      // Перемещение блоков заголовков при адаптиве
      quizBlock.insertAdjacentElement('afterbegin', quizTitle);

      //Подрезка текста

      $clamp(textCounseling, {
         // clamp: `${num}`,
         clamp: 1000,
      });
   }

   if (viewpor < 1130) {
      // Перемещение блоков заголовков при адаптиве
      consultationContainer.insertAdjacentElement('afterbegin', consultationTitle);
   } else {
      // Перемещение блоков заголовков при адаптиве
      helpConsultationBlock.insertAdjacentElement('afterbegin', consultationTitle);
   }


   if (viewpor < 768) {
      //Подрезка текста

      $clamp(textCounseling, {
         clamp: 7,
      });
   }


   textLink.addEventListener('click', () => {
      $clamp(textCounseling, {
         clamp: 1000,
         animate: true,
      });
      // textCounseling.style.height = `100%`;
      textLink.style.display = 'none';
      // textLink.style.opacity = 0.5;
      // display: none;
   });

});

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
// const test = document.querySelector('.credit-counseling__text');
// const text = test.textContent;
// const textLength = text.length;
// const maxLength = 1000;
// text.length = 1000;


// const text = test.innerHTML;
// console.log(test.innerHTML.length);


// function changeText(selector, maxlength) {
//    for (let el of document.querySelectorAll(selector)) {
//       let txt = el.textContent;
//       if (txt.length > maxlength)
//          el.textContent = txt.slice(0, maxlength - 3) + '...';
//    }
// }

// changeText('.credit-counseling__text', 450);
// changeText('.credit-counseling__text', 450);






// const puf = test.height;
// console.log(he);
// let res = test.innerHTML = puf.slice(0, 450);
// console.log(puf);

// function changeText(maxlength) {
//    for (let el of document.querySelectorAll('.credit-counseling__text')) {
//       let txt = el.innerHTML;
//       if (txt.length > maxlength) {
//          el.innerHTML = txt.slice(0, maxlength - 3) + '.....';

//       } else {
//          el.innerHTML = puf;
//       }
//    }
// }

// ===============================================================================
// function changeText(maxlength) {
//    let el = document.querySelector('.credit-counseling__text');
//    let txt = el.innerHTML;
//    if (txt.length > maxlength) {
//       el.innerHTML = txt.slice(0, maxlength - 3) + '.....';
//    } else {
//       el.innerHTML = puf;
//    }
// }
// let text = document.querySelector('.credit-counseling__text');

// if (viewportWidth < 1024) {
//    let num = 7;
//    $clamp(text, {
//       clamp: `${num}`,
//    });
// }


// const textLink = document.querySelector('.credit-counseling__text-link');
// textLink.addEventListener('click', () => {
//    $clamp(textCounseling, {
//       clamp: 1000,
//       animate: true,
//    });
//    textLink.style.display = 'none';
//    // display: none;
// });



