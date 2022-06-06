import SliderRange from '../../libs/slider-range/SliderRange';
import '../../libs/slider-range/slider.scss';
import '../title-component';
import './range-slider.scss';

const rangeSliders = document.querySelectorAll('.js-range-slider');

rangeSliders.forEach((sliderRange) => new SliderRange(sliderRange));
