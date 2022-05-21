import Slider from './Slider';
import 'material-icons/iconfont/material-icons.scss';
import './slider.scss';

const sliders = document.querySelectorAll('.slider');
const sliderOpts = {
  loop: true,
  indicators: true,
  autoplay: false,
  interval: 5000,
  swipe: true,
};

sliders.forEach((slider) => new Slider(slider, sliderOpts));
