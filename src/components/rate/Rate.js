const itemRate = '.js-rate__item';
const itemActive = 'rate__item_active';
class Rate {
  constructor(rateList) {
    this.rateList = rateList;
    this.init();
  }

  init() {
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.rateItems = this.rateList.querySelectorAll(`${itemRate}`);
    const { rateItems } = this;

    rateItems.forEach((rateItem) => {
      rateItem.addEventListener('click', this.handleRateItemClick);
    });
  }

  static handleRateItemClick(clickedIdx) {
    this.rateItems = this.rateList.querySelectorAll(`${itemRate}`);
    const { rateItems } = this;
    rateItems.forEach((otherRateItem, otherIdx) => {
      if (otherIdx <= clickedIdx) {
        otherRateItem.classList.add(`${itemActive}`);
      } else {
        otherRateItem.classList.remove(`${itemActive}`);
      }
    });
  }
}

export default Rate;
