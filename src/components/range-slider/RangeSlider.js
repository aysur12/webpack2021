import Slider from '../../libs/slider/slider';

const sliderRange = '.js-range-slider__container';
const valueRange = '.js-range-slider__value';

class RangeSlider {
  sliderContainer = null;

  snapValue = null;

  rangeSlider = null;

  constructor(slider) {
    this.slider = slider;
    this.init();
  }

  init() {
    this.find();
    this.createSlider();
    this.bindEventListeners();
  }

  find() {
    this.sliderContainer = this.slider.querySelector(`${sliderRange}`);
    this.snapValue = this.slider.querySelector(`${valueRange}`);
  }

  createSlider() {
    this.rangeSlider = new Slider(this.sliderContainer, this.snapValue);
  }

  bindEventListeners() {
    this.rangeSlider.noUiSlider.on('update', this.handleValuesUpdate);
  }

  handleValuesUpdate(values) {
    this.snapValue.innerHTML = values.join(' - ');
  }
}

export default RangeSlider;
