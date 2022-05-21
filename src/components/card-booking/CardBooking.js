import '../../libs/air-datepickers/date-dropdown-air-picker/date-dropdown-air-datepicker';

const selectedDays = '.air-datepicker-cell -day- -focus- -in-range-';
const daysValue = '.js-card-booking__days-value';

class CardBooking {
  constructor(card) {
    this.card = card;
    this.days = document.querySelectorAll(`${selectedDays}`);
    this.valueDays = card.querySelector(`${daysValue}`);
    this.init();
  }

  init() {
    this.showDays();
  }

  showDays() {
    const { days } = this;
    const totalNumberDays = days.length;
    const { valueDays } = this;

    valueDays.innerHTML = totalNumberDays;
  }
}

export default CardBooking;
