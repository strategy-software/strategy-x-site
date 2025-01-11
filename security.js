// Отключение контекстного меню (правая кнопка мыши)
document.addEventListener('contextmenu', event => event.preventDefault());

// Отключение горячих клавиш (F12, Ctrl+U, Ctrl+Shift+I)
document.addEventListener('keydown', event => {
    const forbiddenKeys = ["F12", "u", "U", "i", "I"];
    const isForbidden = forbiddenKeys.includes(event.key) && 
                        (event.key === "F12" || event.ctrlKey || (event.ctrlKey && event.shiftKey));

    if (isForbidden) {
        event.preventDefault();
        alert("fimoZZZ!");
    }
});

// Добавление Content Security Policy (CSP) для защиты от инъекций скриптов
document.addEventListener('DOMContentLoaded', () => {
    const cspMeta = document.createElement('meta');
    cspMeta.httpEquiv = 'Content-Security-Policy';
    cspMeta.content = "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; object-src 'none';";
    document.head.appendChild(cspMeta);
});
