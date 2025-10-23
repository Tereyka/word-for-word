const hearts = document.querySelectorAll('.heart');
const likesNumbers = document.querySelectorAll('.likes_number');

hearts.forEach((heart, index) => {
  heart.addEventListener('click', (e) => {
    // текущий счётчик для этой карточки
    const likes_number = likesNumbers[index];

    if (heart.classList.contains('heart_added')) {
      likes_number.textContent = Number(likes_number.textContent) - 1;
    } else {
      likes_number.textContent = Number(likes_number.textContent) + 1;
    }

    e.preventDefault();
    e.stopPropagation();
    heart.classList.toggle('heart_added');
  });
});


