import Rate from './Rate';
import './rate.scss';

const rateLists = document.querySelectorAll('.js-rate__list');

rateLists.forEach((rateList) => new Rate(rateList));

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
