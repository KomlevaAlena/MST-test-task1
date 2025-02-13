function fixedHeader() {
    // Находим элемент шапки
    let header = document.querySelector('.mine-header');
    // Получаем высоту шапки
    let headerHeight = header.offsetHeight;

    // Обработчик события прокрутки
    window.addEventListener('scroll', function() {
        // Проверяем, насколько страница прокручена
        if (window.scrollY > 1) {
            // Добавляем класс для фиксации шапки
            header.classList.add('header_fixed');
            // Добавляем отступ для body, чтобы контент не "прыгал"
            document.body.style.paddingTop = headerHeight + 'px';
        } else {
            // Убираем класс для фиксации шапки
            header.classList.remove('header_fixed');
            // Убираем отступ у body
            document.body.style.paddingTop = '0';
        }
    });
}

export {fixedHeader};
