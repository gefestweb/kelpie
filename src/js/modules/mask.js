import IMask from 'imask';
const iMask = () => {

    function NamePhone() {
        let phoneInput = document.querySelectorAll('.form-phone-js');
        phoneInput.forEach(function (item) {
             const maskOptions = {
                mask: '+7(000)000-00-00'
            };
            const mask = IMask(item, maskOptions);
        })
    }

    setTimeout(NamePhone, 1000);

}
export default iMask;

