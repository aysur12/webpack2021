const itemRate = '.js-rate__item';
const itemActive = 'rate__item_active';
class Rate {
  constructor(rateList) {
    this.rateList = rateList;
    this.rateItems = rateList.querySelectorAll(`${itemRate}`);
    this.init();
  }

  init() {
    this.bindEventListeners();
  }

  bindEventListeners() {
    const { rateItems } = this;

    rateItems.forEach((rateItem, clickedIdx) => {
      rateItem.addEventListener('click', () => {
        rateItems.forEach((otherRateItem, otherIdx) => {
          if (otherIdx <= clickedIdx) {
            otherRateItem.classList.add(`${itemActive}`);
          } else {
            otherRateItem.classList.remove(`${itemActive}`);
          }
        });
      });
    });
  }
}

export default Rate;
