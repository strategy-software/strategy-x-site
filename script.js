function checkAccess() {
    const userId = document.getElementById('userId').value.trim();
    const userKey = document.getElementById('userKey').value.trim();
    const result = document.getElementById('result');

    const accessGranted = userData.some(user => user.id === userId && user.key === userKey);

    if (accessGranted) {
        window.location.href = "signals.html"; // Перенаправление на страницу загрузки
    } else {
        result.textContent = "Пользователь не найден, повторите попытку.";
        result.style.color = "red";
    }
}

function updateViewportHeight() {
    // Получаем высоту окна
    const vh = window.innerHeight * 0.01;
    // Обновляем значение переменной --vh
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Обновляем при загрузке страницы
updateViewportHeight();

// Обновляем при изменении размера окна (например, скрытие адресной строки)
window.addEventListener('resize', updateViewportHeight);
