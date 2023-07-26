const oko = () => {

    const bindForms = (form) => {

        let customForm = document.querySelector(form),
            okoForm = document.querySelector('.custom-fields-form-wrapper');

        okoForm.style.display = 'none';

        let formInputs = customForm.querySelectorAll('input'),
            formName = customForm.querySelector('input[type="text"]'),
            formPhone = customForm.querySelector('input[type="number"]'),
            formEmail = customForm.querySelector('input[type="email"]'),
            formButton = customForm.querySelector('button[type="submit"]');

        let okoName = okoForm.querySelector('input[type="text"]'),
            okoPhone = okoForm.querySelector('input[type="number"]'),
            okoEmail = okoForm.querySelector('input[type="email"]'),
            okoButton = okoForm.querySelector('button');

        // связываем поля ввода
        formInputs.forEach((input) => {
            input.addEventListener('input', (event) => {
                okoButton = okoForm.querySelector('button');

                switch (event.target) {
                    case formName:
                        okoName = okoForm.querySelector('input[type="text"]');
                        okoName.value = event.target.value;
                        break;
                    case formPhone:
                        okoPhone = okoForm.querySelector('input[type="number"]');
                        okoPhone.value = event.target.value;
                        break;
                    case formEmail:
                        okoEmail = okoForm.querySelector('input[type="email"]');
                        okoEmail.value = event.target.value;
                        break;
                }
            });
        });

        // связываем кнопки отправки формы
        formButton.addEventListener('click', (event) => {
            event.preventDefault();
            okoButton.click();
            // очищаем поля ввода
            formInputs.forEach((input) => {
                input.value = '';
            });
        });
    };

    // ждем появления oko-формы на странице
    const checkInterval = setInterval(() => {
        const anyOkoElement = document.querySelector('.custom-fields-form-wrapper');
        if (anyOkoElement) {
            clearInterval(checkInterval);
            //тут вызывать функцию. Аргумент - id сверстанной формы!
            bindForms('#rent-content-form');
            bindForms('#contact-form');
        }
    }, 100);
}

export default oko;



