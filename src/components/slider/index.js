import Slider from './Slider';
import './slider.scss';
// import ItcSimpleSlider from './ItcSimpleSlider';
// import './simple-adaptive-slider.css';

document.addEventListener('DOMContentLoaded', () => {
  // инициализация 1 слайдера с нужными настройками
  new Slider('.slider', {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: true,
  });
})