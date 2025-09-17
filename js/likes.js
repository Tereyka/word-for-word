let heart = document.querySelector('.heart');
let likes = document.querySelector('.likes');

heart.addEventListener('click', (e) => {
    if (heart.classList.contains('heart_added')) {
        likes.textContent = Number(likes.textContent) - 1;
    } else {
        likes.textContent = Number(likes.textContent) + 1;
    }
    e.preventDefault();   // блокируем переход
    e.stopPropagation();  // останавливаем клик по карточке
    heart.classList.toggle('heart_added');
});

likes.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
});