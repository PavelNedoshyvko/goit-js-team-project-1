document.addEventListener('DOMContentLoaded', () => {
    const ratingInputs = document.querySelectorAll('input[name="rating"]');
    const ratingStars = document.querySelectorAll('.rating-stars label svg');
    const ratingCounter = document.getElementById('rating-counter');

    ratingInputs.forEach((input, index) => {
        input.addEventListener('change', () => {
            const selectedRating = parseFloat(input.value);

            // Обновляем счетчик баллов
            ratingCounter.textContent = selectedRating.toFixed(1);

            // Обновляем стили звезд в зависимости от выбранного рейтинга
            ratingStars.forEach((star, i) => {
                if (i < selectedRating) {
                    star.style.fill = '#eea10c'; // Цвет активных звезд
                } else {
                    star.style.fill = '#d9d9d9'; // Цвет неактивных звезд
                }
            });
        });
    });

    // Добавляем обработчик для кнопки закрытия модального окна
    const closeIcon = document.querySelector('.rating-window-close');
    const ratingModal = document.getElementById('ratingModal');

    closeIcon.addEventListener('click', () => {
        ratingModal.style.display = 'none';
    });
});
