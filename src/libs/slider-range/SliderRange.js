import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

const containerSliderRange = '.js-range-slider__container';
const valueSliderRange = '.range-slider__value';

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

class SliderRange {
  constructor(sliderRange) {
    this.sliderRange = sliderRange;
    this.sliderRangeContainer = sliderRange.querySelector(`${containerSliderRange}`);
    this.snapValue = sliderRange.querySelector(`${valueSliderRange}`);
    this.init();
  }

  init() {
    this.createsliderRange();
    this.bindEventListeners();
  }

  createsliderRange() {
    noUiSlider.create(this.sliderRangeContainer, options);
  }

  bindEventListeners() {
    this.sliderRangeContainer.noUiSlider.on('update', this.handleValuesUpdate.bind(this));
  }

  handleValuesUpdate(values) {
    this.snapValue.innerHTML = values.join(' - ');
  }
}

export default SliderRange;
