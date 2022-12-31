const viewportWidth = window.screen.width;

// Перемещение блоков заголовков при адаптиве
const quizBlock = document.querySelector('.quiz');
const quizTitle = document.querySelector('.quiz__title');
const quizInput = document.querySelector('.quiz__block-input');
const consultationTitle = document.querySelector('.consultation-help__title');
const helpConsultationBlock = document.querySelector('.help-consultation__body');
const consultationContainer = document.querySelector('.help-consultation__container');

//Подрезка текста
// const textCounseling = document.querySelector('.credit-counseling__text');
const textCounselingContent = document.querySelector('.credit-counseling__text').innerHTML;
// console.log(textCounselingContent);

const textCounseling = document.querySelector('.credit-counseling__text');
const textLink = document.querySelector('.credit-counseling__text-link');
$clamp(textCounseling, {
   clamp: 1000,
   // clamp: '1000px',
   useNativeClamp: false,
   animate: true,
   truncationChar: '.....'
});

window.addEventListener('resize', () => {
   const viewpor = window.screen.width;

   // Условия
   if (viewpor < 1024) {
      // Перемещение блоков заголовков при адаптиве
      quizInput.insertAdjacentElement('afterbegin', quizTitle);
      //Подрезка текста
      textLink.style.display = 'block';
      $clamp(textCounseling, {
         clamp: 18,
         // clamp: '300px',
         useNativeClamp: false,
         animate: true,
         truncationChar: '.....'
      });
   } else {
      // Перемещение блоков заголовков при адаптиве
      quizBlock.insertAdjacentElement('afterbegin', quizTitle);

      //Подрезка текста
      textLink.style.display = 'none';
      textCounseling.innerHTML = textCounselingContent;
      // $clamp(textCounseling, {
      //    clamp: 1000,
      //    // clamp: '1000px',
      //    useNativeClamp: false,
      //    animate: true
      // });
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
         // clamp: '150px',
         useNativeClamp: false,
         animate: true,
         truncationChar: '.....'
      });
   }


   textLink.addEventListener('click', () => {
      // $clamp(textCounseling, {
      //    // clamp: 1000,
      //    clamp: 20,
      //    useNativeClamp: false,
      //    animate: true
      // });
      textCounseling.innerHTML = textCounselingContent;

      // textCounseling.style.height = `100%`;
      textLink.style.display = 'none';
      // textLink.style.opacity = 0.5;
      // display: none;
   });

});

textLink.addEventListener('click', () => {
   // $clamp(textCounseling, {
   //    // clamp: 1000,
   //    clamp: 20,
   //    useNativeClamp: false,
   //    animate: true
   // });
   textCounseling.innerHTML = textCounselingContent;

   // textCounseling.style.height = `100%`;
   textLink.style.display = 'none';
   // textLink.style.opacity = 0.5;
   // display: none;
});


if (viewportWidth < 1024) {
   // Перемещение блоков заголовков при адаптиве
   quizInput.insertAdjacentElement('afterbegin', quizTitle);
   //Подрезка текста
   textLink.style.display = 'block';
   $clamp(textCounseling, {
      clamp: 18,
      // clamp: '300px',
      useNativeClamp: false,
      animate: true,
      truncationChar: '.....'
   });
} else {
   // Перемещение блоков заголовков при адаптиве
   quizBlock.insertAdjacentElement('afterbegin', quizTitle);

   //Подрезка текста
   textCounseling.innerHTML = textCounselingContent;
   // $clamp(textCounseling, {
   //    clamp: 1000,
   //    // clamp: '1000px',
   //    useNativeClamp: false,
   //    animate: true
   // });
}

if (viewportWidth < 1130) {
   // Перемещение блоков заголовков при адаптиве
   consultationContainer.insertAdjacentElement('afterbegin', consultationTitle);
} else {
   // Перемещение блоков заголовков при адаптиве
   helpConsultationBlock.insertAdjacentElement('afterbegin', consultationTitle);
}


if (viewportWidth < 768) {
   //Подрезка текста

   $clamp(textCounseling, {
      clamp: 7,
      // clamp: '150px',
      useNativeClamp: false,
      animate: true,
      truncationChar: '.....'
   });
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


