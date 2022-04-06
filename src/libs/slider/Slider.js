import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

const containerSlider = '.js-range-slider__container';
const valueSlider = '.range-slider__value';

const options = {
  start: [5000, 10000],
  behaviour: 'drag-tap',
  connect: true,
  range: {
    min: 0,
    max: 15000,
  },
  format: wNumb({
    decimals: 0,
    thousand: ' ',
    suffix: '₽',
  }),
};

class Slider {
  constructor(slider) {
    this.slider = slider;
    this.sliderContainer = slider.querySelector(`${containerSlider}`);
    this.snapValue = slider.querySelector(`${valueSlider}`);
    this.init();
  }

  init() {
    this.createSlider();
    this.bindEventListeners();
  }

  createSlider() {
    noUiSlider.create(this.sliderContainer, options);
  }

  bindEventListeners() {
    this.sliderContainer.noUiSlider.on('update', this.handleValuesUpdate.bind(this));
  }

  handleValuesUpdate(values) {
    this.snapValue.innerHTML = values.join(' - ');
  }
}

export default Slider;
