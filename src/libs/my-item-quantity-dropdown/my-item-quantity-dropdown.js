import $ from 'jquery';
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

const dropdowns = document.querySelectorAll('.js-dropdown_with-common-value');
dropdowns.forEach((dropdown) => $(dropdown).iqDropdown({
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
  })

  let returnString = '';
  const guestsCount = itemCount['item-1'] + itemCount['item-2'];
  const babies = itemCount['item-3'];

  if (totalItems === 0) return 'Сколько гостей';
  if (guestsCount === 0) returnString +=`${guestsCount} гостей`;
  if (guestsCount === 1) returnString += `${guestsCount} гость`;
  if (guestsCount >= 2 && guestsCount < 5) returnString += `${guestsCount} гостя`;
  if (guestsCount >= 5) returnString += `${guestsCount} гостей`;

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


