import './like-button.scss';

const likeButton = document.querySelectorAll('.like-button');
const likeIcon = document.querySelector('.like-button__icon');
const likeCount = document.querySelector('.like-button__count');

likeButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    likeIcon.innerHTML === (likeIcon.innerHTML === 'favorite_border') ? likeIcon.innerHTML = 'favorite' : likeIcon.innerHTML = 'favorite_border';
    likeCount.classList.toggle('like-button__count_active');
    button.classList.toggle('like-button_active');

    let number = button.children[1].textContent;
    if (button.classList.contains('like-button_active')) {
        button.children[1].textContent = parseInt(number) + 1;
    } else {
        button.children[1].textContent = parseInt(number) - 1;
    }
  });
});
