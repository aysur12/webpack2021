import AirDatepicker from 'air-datepicker';

const startInput = document.querySelector('.js-date-dropdown__input_start');
const startInputs = document.querySelectorAll('.js-date-dropdown__input_start');
const endInput = document.querySelector('.js-date-dropdown__input_end');
const endInputs = document.querySelectorAll('.js-date-dropdown__input_end');

const applyButton = {
  content: 'Применить',
  className: 'air-datepicker__button',
  onClick: (datepicker) => {
    datepicker.hide();
  },
};

const startInputOpts = {
  position: 'bottom left',
  dateFormat: 'dd.MM.yyyy',
  multipleDates: 2,
  range: true,
  showEvent: 'click',
  navTitles: {
    days: 'MMMM yyyy',
  },
  prevHtml: '<i class="air-datepicker-nav__arrow material-icons">arrow_back</i>',
  nextHtml: '<i class="air-datepicker-nav__arrow material-icons">arrow_forward</i>',
  keyboardNav: true,
  buttons: ['clear', applyButton],
  onSelect({ formattedDate }) {
    startInput.value = formattedDate[0];
    endInput.value = (formattedDate[1] === undefined) ? '' : formattedDate[1];
  },
};

startInputs.forEach((startInput) => new AirDatepicker(startInput, startInputOpts));
