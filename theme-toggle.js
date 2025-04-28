document.addEventListener('DOMContentLoaded', () => {
    // Создание переключателя темы
    const toggleContainer = document.createElement('div');
    toggleContainer.id = 'theme-toggle';
    toggleContainer.innerHTML = `
        <label class="switch">
            <input type="checkbox" id="theme-switch">
            <span class="slider round"></span>
        </label>
    `;

    const siteContainer = document.getElementById('site-container');
    siteContainer.appendChild(toggleContainer);

    const style = document.createElement('style');
    style.innerHTML = `
    #theme-toggle {
        position: absolute;
        top: 15px;
        right: 15px;
        z-index: 100;
    }
    .switch {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 24px;
    }
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: 0.4s;
        border-radius: 34px;
    }
    .slider:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;
    }
    input:checked + .slider {
        background-color: #2196F3;
    }
    input:checked + .slider:before {
        transform: translateX(26px);
    }
    `;
    document.head.appendChild(style);

    const themeSwitch = document.getElementById('theme-switch');

    themeSwitch.addEventListener('change', function () {
        if (this.checked) {
            applyLightTheme();
        } else {
            applyDarkTheme();
        }
    });

    function applyLightTheme() {
        document.body.style.backgroundColor = '#ffffff';

        document.getElementById('generate-signal').style.background = 'linear-gradient(to right, #eae7f0, #b3b3b3)';
        document.getElementById('generate-signal').style.color = '#000';

        document.getElementById('currency-pair').style.background = '#f0f0f0';
        document.getElementById('currency-pair').style.color = '#000';

        document.getElementById('expiration-time').style.background = '#f0f0f0';
        document.getElementById('expiration-time').style.color = '#000';

        document.getElementById('button-wrapper').style.background = 'linear-gradient(to right, #1a4dff, #0026a5)';
        document.getElementById('circle-wrapper').style.background = 'linear-gradient(to right, #1a4dff, #0026a5)';

        // Больше ничего не трогаем
    }

    function applyDarkTheme() {
        document.body.style.backgroundColor = '#090f1e';

        document.getElementById('generate-signal').style.background = 'linear-gradient(to right, #8657e9, #0dadfd)';
        document.getElementById('generate-signal').style.color = '#fff';

        document.getElementById('currency-pair').style.background = 'rgba(255, 255, 255, 1)';
        document.getElementById('currency-pair').style.color = '#000';

        document.getElementById('expiration-time').style.background = 'rgba(255, 255, 255, 1)';
        document.getElementById('expiration-time').style.color = '#000';

        document.getElementById('button-wrapper').style.background = 'linear-gradient(to right, #1c253c, #101729)';
        document.getElementById('circle-wrapper').style.background = 'linear-gradient(to right, #1c253c, #101729)';

    }
});
