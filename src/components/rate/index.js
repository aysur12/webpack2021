import Rate from './Rate';
import './rate.scss';

const rateLists = document.querySelectorAll('.js-rate__list');

rateLists.forEach((rateList) => new Rate(rateList));
