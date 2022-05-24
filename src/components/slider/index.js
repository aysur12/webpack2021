import Slider from './Slider';
import 'material-icons/iconfont/material-icons.scss';
import './slider.scss';

const cardSliders = document.querySelectorAll('.js-slider_for-card');
const sliderCardOpts = {
  loop: true,
  indicators: true,
  autoplay: false,
  swipe: true,
};

cardSliders.forEach((slider) => new Slider(slider, sliderCardOpts));
const sliderPreviewOpts = {
  loop: true,
  indicators: false,
  autoplay: true,
  interval: 5000,
  swipe: false,
}

const previewSliders = document.querySelectorAll('.js-slider_for-preview');
previewSliders.forEach((slider) => new Slider(slider, sliderPreviewOpts));