const fileId = "1e__VZt9jK1YS8crrHw6Iqjb0lDMdR4el";
const apiKey = "AIzaSyCkD6plhtRaF74KgSR9LCUSpsutKd5hm4k";

let userData = [];

// Функция для загрузки данных с Google Drive
function loadUserData() {
    const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`;
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Не удалось загрузить данные пользователя");
            }
            return response.json();
        })
        .then(data => {
            userData = data; // Сохраняем загруженные данные
            console.log("Данные пользователя успешно загружены:", userData);
        })
        .catch(error => console.error("Ошибка загрузки данных:", error));
}

// Функция проверки доступа
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

document.addEventListener("DOMContentLoaded", () => {
    loadUserData();
});

// Делаем функцию доступной глобально
window.checkAccess = checkAccess;
