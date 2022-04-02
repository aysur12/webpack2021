import Rate from './Rate';
import './rate.scss';

const rateItems = document.querySelectorAll('ul.rate__list .js-rate');

rateItems.forEach((rateItem, clickedIdx, rateItems) => new Rate(rateItem, clickedIdx, rateItems));

// rateStars.forEach((rateStar, clickedIdx) => {
//   rateStar.addEventListener('click', () => {
//     rateStars.forEach((otherRateStar, otherIdx) => {
//       if (otherIdx <= clickedIdx) {
//         otherRateStar.classList.add('rate__item_active');
//       } else {
//        otherRateStar.classList.remove('rate__item_active');
//       }
//     });
//   });
// });
