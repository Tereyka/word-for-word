let heart = document.querySelector('.heart');
let likes_number = document.querySelector('.likes_number');

heart.addEventListener('click', (e) => {
    if (heart.classList.contains('heart_added')) {
        likes_number.textContent = Number(likes_number.textContent) - 1;
    } else {
        likes_number.textContent = Number(likes_number.textContent) + 1;
    }
    e.preventDefault();   // блокируем переход
    e.stopPropagation();  // останавливаем клик по карточке
    heart.classList.toggle('heart_added');
});
