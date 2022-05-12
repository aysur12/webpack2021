import $ from 'jquery';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

const commonValuesDropdowns = document.querySelectorAll('.js-dropdown_with-common-value');
commonValuesDropdowns.forEach((dropdown) => $(dropdown).iqDropdown({
  maxItems: 10,
  setSelectionText: function(itemCount, totalItems) {

  const clearButton = dropdown.querySelector('.js-iqdropdown-button_clean');

  if (totalItems > 0) {
    if (clearButton) clearButton.classList.remove('dropdown__button_hide');
  } else {
    if (clearButton) {
    clearButton.classList.add('dropdown__button_hide');
    }
  }

  const controlsBlocks = dropdown.querySelectorAll('.iqdropdown-item-controls');

  controlsBlocks.forEach((controlsBlock) => {
    const decrementButton = controlsBlock.querySelector('.button-decrement');
    const counterItem = controlsBlock.querySelector('.counter');
      if (counterItem.innerText > 0) {
        decrementButton.style.opacity = 1;
      } else {
        decrementButton.style.opacity = 0.4;
      }
  });

  let returnString = '';
  const guestsCount = itemCount['item-1'] + itemCount['item-2'];
  const babies = itemCount['item-3'];

  if (totalItems === 0) return 'Сколько гостей';
  if (guestsCount === 0 || guestsCount >= 5) returnString +=`${guestsCount} гостей`;
  if (guestsCount === 1) returnString += `${guestsCount} гость`;
  if (guestsCount >= 2 && guestsCount < 5) returnString += `${guestsCount} гостя`;

  if (babies === 1) returnString += `, ${babies} младенец`;
  if (babies > 1 && babies < 5) returnString += `, ${babies} младенца`;
  if (babies >= 5) returnString += `, ${babies} младенцев`;

  return returnString;
  },
})
)

const clearBtns = document.querySelectorAll('.js-iqdropdown-button_clean');
clearBtns.forEach((clearBtn) => {
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      const iqDropdownMenu = clearBtn.closest('.iqdropdown-menu');
      for (const elem of iqDropdownMenu.children) {
        const counter = elem.querySelector('.counter');
        if (counter && counter.innerText > 0) {
          const btnMinus = elem.querySelector('.button-decrement');
          while (counter.innerText > 0) {
            btnMinus.click();
          }
        }
      }
    });
  }
});

const applyBtns = document.querySelectorAll('.js-iqdropdown-button_apply');
applyBtns.forEach(btn => {
  btn.addEventListener('click', event => {
    const target = event.target;
    const iqDropdown = target.closest('.js-dropdown_with-common-value');
    $(iqDropdown).removeAttr('open');
  });
});

const valuesDropdowns = document.querySelectorAll('.js-dropdown_with-separate-value');
valuesDropdowns.forEach((dropdown) => $(dropdown).iqDropdown({
  maxItems: 20,
  setSelectionText: function(itemCount, totalItems) {
    let returnString = '';
    
    const bedrooms = itemCount['item-1'];
    const beds = itemCount['item-2'];
    const bathrooms = itemCount['item-3'];

    if (totalItems === 0) return 'Выберите количество';

    if (bedrooms === 0 || bedrooms >= 5) returnString +=`${bedrooms} спален`;
    if (bedrooms === 1) returnString += `${bedrooms} спальня`;
    if (bedrooms > 1 && bedrooms < 5) returnString +=`${bedrooms} спальни`;

    if (beds === 0 || beds >= 5) returnString +=`, ${beds} кроватей`;
    if (beds === 1) returnString += `, ${beds} кровать`;
    if (beds > 1 && beds < 5) returnString +=`, ${beds} кровати`;

    if (bathrooms === 0 || bathrooms >= 5) returnString +=`, ${bathrooms} ванных комнат`;
    if (bathrooms === 1) returnString += `, ${bathrooms} ванная комната`;
    if (bathrooms > 1 && bathrooms < 5) returnString +=`, ${bathrooms} ванные комнаты`;

    return returnString;
  },
})
)