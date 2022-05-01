import AirDatepicker from 'air-datepicker';

const calendar = document.querySelector('.calendar');
const calendarInput = document.querySelector('.js-calendar__input');
const selector = calendar.contains(calendarInput) ? '.js-calendar__input' : '.js-calendar__wrap';

const calendars = document.querySelectorAll(selector);
const applyButton = {
  content: 'Применить',
  className: 'air-datepicker__button',
  onClick: (datepicker) => {
    datepicker.hide();
  },
};
const options = {
  inline: !calendar.contains(calendarInput),
  position: 'bottom left',
  dateFormat: 'dd MMM',
  navTitles: {
    days: 'MMMM yyyy',
  },
  prevHtml: '<i class="air-datepicker-nav__arrow material-icons">arrow_back</i>',
  nextHtml: '<i class="air-datepicker-nav__arrow material-icons">arrow_forward</i>',
  multipleDates: 2,
  multipleDatesSeparator: ' - ',
  range: true,
  dynamicRange: true,
  keyboardNav: true,
  buttons: ['clear', applyButton],
};

calendars.forEach((calendar) => new AirDatepicker(calendar, options));
