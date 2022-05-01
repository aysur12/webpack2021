const modifierActive = 'like-button_active';
const countActive = 'like-button__count_active';
const iconContent = 'favorite_border';
const iconActiveContent = 'favorite';

class LikeButton {
  constructor(button) {
    this.button = button;
    this.init();
  }

  init() {
    this.bindEventListeners();
  }

  bindEventListeners() {
    const { button } = this;

    button.addEventListener('click', this.handleLikeButtonClick.bind(this));
  }

  handleLikeButtonClick() {
    const { button } = this;
    const [icon, count] = button.children;

    button.classList.toggle(`${modifierActive}`);
    count.classList.toggle(`${countActive}`);

    const number = count.textContent;

    if (button.classList.contains(`${modifierActive}`)) {
      icon.textContent = `${iconActiveContent}`;
      count.textContent = parseInt(number, 10) + 1;
    } else {
      icon.textContent = `${iconContent}`;
      count.textContent = parseInt(number, 10) - 1;
    }
  }
}

export default LikeButton;
