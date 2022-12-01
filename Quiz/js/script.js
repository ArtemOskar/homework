// observer
const options = {
   threshold: [1]
}
const callback = function (entries, observer) {
   entries.forEach(entry => {
      const { target, isIntersecting, intersectionRatio } = entry;
      if (isIntersecting) {
         targetScale.classList.add('animation-scale');
         targetValue.classList.add('animation-value');
         targetPage.classList.add('animation-results');
      } else {
         targetScale.classList.remove('animation-scale');
         targetValue.classList.remove('animation-value');
      }
   });
}
const observer = new IntersectionObserver(callback, options);
const targetScale = document.querySelector('#animation-scale');
const targetValue = document.querySelector('#animation-value');
const targetPage = document.querySelector('#results-page');
observer.observe(targetScale, targetValue, targetPage);

// spoiler
document.querySelectorAll('.spoiler-mobile__link').forEach((item) =>
   item.addEventListener('click', () => {
      const parent = item.parentElement;
      if (parent.classList.contains('active')) {
         parent.classList.remove('active');
      } else {
         document.querySelectorAll('.spoiler-mobile__box').forEach((child) => child.classList.remove('active'));
         parent.classList.add('active');
      }
   })
)

// Самостоятельно написаный вариант, срабатывает сразу открытие всех споллеров на страныце  =)
// const spoilerBox = document.querySelector('.form-quiz');
// const spoilerText = document.querySelectorAll('.spoiler-mobile__text');
// const spoilerButton = document.querySelectorAll('.spoiler-mobile__box');

// spoilerBox.addEventListener("click", function (event) {
//    if (event.target.closest('.spoiler-mobile__box')) {
//       activeSpoiler();
//    }
// });

// function activeSpoiler() {
//    spoilerText.forEach(element => {
//       element.classList.toggle('active');
//    });
// }