class Rate {
  constructor(rateItem, clickedIdx, rateItems) {
    this.rateItem = rateItem;
    this.clickedIdx = clickedIdx;
    this.rateItems = rateItems;
    this.init();
  }

  init() {
    this.bindEventListeners()
  }
  
  bindEventListeners() {
    this.rateItem.addEventListener('click', this.handleRateClick.bind(this));
  }
  
  handleRateClick() {
    this.rateItems.forEach((otherRateItem, otherIdx) => {
      if (otherIdx <= this.clickedIdx) {
        otherRateItem.classList.add('rate__item_active');
      } else {
        otherRateItem.classList.remove('rate__item_active');
      }
    })
  } 
}

export default Rate;