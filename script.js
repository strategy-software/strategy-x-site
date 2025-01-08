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
    if (width >= 1024) {
        document.body.classList.add('laptop');
    } 
    // Проверяем устройство iPad
    else if (navigator.userAgent.includes('iPad')) {
        if (aspectRatio > 1) {
            document.body.classList.add('ipad-landscape');
        } else {
            document.body.classList.add('ipad-portrait');
        }
    } 
    // Если ширина меньше 1024, считаем устройство телефоном
    else {
        document.body.classList.add('phone');
    }

    // Логируем изменения
    console.log('Применён класс для устройства:', document.body.className);
}
