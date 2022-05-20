import Slider from './Slider';
import 'material-icons/iconfont/material-icons.scss';
import './slider.scss';

document.addEventListener('DOMContentLoaded', () => {
  // инициализация 1 слайдера с нужными настройками
  new Slider('.slider', {
    loop: true,
    indicators: true,
    autoplay: false,
    interval: 5000,
    swipe: true,
  });
})