const oko = () => {
    

    const okoBinder = (form) => {
        let customForm = document.querySelector(form),
            okoForm = document.querySelector('.custom-fields-form-wrapper');

        let formInputs = customForm.querySelectorAll('input'),
            formName = customForm.querySelector('input[name="name"]'),
            formPhone = customForm.querySelector('input[name="phone"]'),
            formEmail = customForm.querySelector('input[name="email"]'),
            formButton = customForm.querySelector('button[type="submit"]');


        let okoName = okoForm.querySelector('input[type="text"]'),
            okoPhone = okoForm.querySelector('input[type="number"]'),
            okoEmail = okoForm.querySelector('input[type="email"]'),
            okoButton = okoForm.querySelector('button');

        let valueName,
            valuePhone,
            valueEmail;

        getValue();
        setValue();
        sendForm();

        // console.log(customForm);
        // console.log(okoForm);
        // console.log(formName);
        // console.log(formPhone);
        // console.log(formEmail);
        // console.log(okoName);
        // console.log(okoPhone);
        // console.log(okoEmail);

        function getValue() {
            formInputs.forEach(input => {
                input.addEventListener('change', event => {
                    console.log(event.target);
                    switch (event.target) {
                        case formName :
                            valueName = formName.value;
                            console.log(valueName);
                            break;
                        case formPhone :
                            valuePhone = formPhone.value;
                            console.log(valuePhone);
                            break;
                        case formEmail :
                            valueEmail = formEmail.value;
                            break;
                    }
                })
            });
        }

        function setValue() {
            okoName.value = valueName;
            okoPhone = valuePhone;
            okoEmail = valueEmail;
        }

        function sendForm() {
            formButton.addEventListener('click', () => {
                okoButton.click();
            });
        }
    }

    const checkInterval = setInterval(() => {
        const anyOkoElement = document.querySelector('.custom-fields-form-wrapper');
    
        if (anyOkoElement) {
            clearInterval(checkInterval);
    
            okoBinder('#rent-content-form')
        }
    }, 100);
}

export default oko;



