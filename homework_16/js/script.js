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