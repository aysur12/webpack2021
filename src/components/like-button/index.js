import './like-button.scss';

const likeButton = document.querySelectorAll('.js-like-button');

likeButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    button.classList.toggle('like-button_active');
    button.children[1].classList.toggle('like-button__count_active');

    const number = button.children[1].textContent;
    if (button.classList.contains('like-button_active')) {
      button.children[0].textContent = 'favorite';
      button.children[1].textContent = parseInt(number) + 1;
    } else {
      button.children[0].textContent = 'favorite_border';
      button.children[1].textContent = parseInt(number) - 1;
    }
  });
});
