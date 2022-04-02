import Slider from '../../libs/slider/slider';
import '../../libs/slider/slider.scss';
import '../title-component';
import './range-slider.scss';

const rangeSliders = document.querySelectorAll('.js-range-slider');

rangeSliders.forEach((slider) => new Slider(slider));

// noUiSlider.create(rangeSliders, {
//   start: [5000, 10000],
//   behaviour: 'drag-tap',
//   connect: true,
//   range: {
//     'min': 0,
//     'max': 15000,
//   },
//   format: wNumb({
//     decimals: 0,
//     thousand: ' ',
//     suffix: '₽',
//   })
// });

// rangeSliders.noUiSlider.on('update', function (values) {
//     snapValues.innerHTML = values.join(' - ');
// });