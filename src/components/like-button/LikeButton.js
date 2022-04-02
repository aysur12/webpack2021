class LikeButton {
  constructor(button) {
    this.button = button;
    this.init();
  }

  init() {
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.button.addEventListener('click', this.handleLikeButtonClick.bind(this));
  }

  handleLikeButtonClick() {
    this.button.classList.toggle('like-button_active');
    this.button.children[1].classList.toggle('like-button__count_active');

    const number = this.button.children[1].textContent;

    if (this.button.classList.contains('like-button_active')) {
      this.button.children[0].textContent = 'favorite';
      this.button.children[1].textContent = parseInt(number, 10) + 1;
    } else {
      this.button.children[0].textContent = 'favorite_border';
      this.button.children[1].textContent = parseInt(number, 10) - 1;
    }
  }
}

export default LikeButton;
