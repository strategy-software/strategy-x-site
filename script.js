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

function setBackgroundForDevice() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspectRatio = width / height;

    // Удаляем старые классы у body
    document.body.classList.remove('laptop', 'ipad-portrait', 'ipad-landscape', 'phone');

    // Проверяем минимальную ширину для ноутбуков
    if (
        (width === 768 && height === 1024) || (width === 1024 && height === 768) || // iPad 9.7
        (width === 834 && height === 1112) || (width === 1112 && height === 834) || // iPad Pro 10.5
        (width === 1024 && height === 1366) || (width === 1366 && height === 1024)  // iPad Pro 12.9
    ) {
        if (width > height) {
            document.body.classList.add('ipad-landscape'); // Ландшафт
        } else {
            document.body.classList.add('ipad-portrait'); // Портрет
        }
    }
    // Если ширина меньше 1024, считаем устройство телефоном
    else {
        document.body.classList.add('phone');
    }

    // Логируем изменения
    console.log('Применён класс для устройства:', document.body.className);
}
