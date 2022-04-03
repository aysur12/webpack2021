class Rate {
  constructor(rateList) {
    this.rateList = rateList;
    this.rateItems = rateList.querySelectorAll('.js-rate__item');
    this.init();
  }

  init() {
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.rateItems.forEach((rateItem, clickedIdx) => {
      rateItem.addEventListener('click', () => {
        this.rateItems.forEach((otherRateItem, otherIdx) => {
          if (otherIdx <= clickedIdx) {
            otherRateItem.classList.add('rate__item_active');
          } else {
            otherRateItem.classList.remove('rate__item_active');
          }
        });
      });
    });
  }
}

export default Rate;
