const FORM = document.querySelector('.form-rega');
const inputPwd = document.getElementById('input-pwd');
const inputConfirmPwd = document.getElementById('input-confirm-pwd');
const result = document.querySelector('.result');

const checkPwdValue = () => {
    if(inputPwd.value !== inputConfirmPwd.value) {
        console.log('Не совпадает');
        return false;
    }
    return true;
}


FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    const isValid = checkPwdValue();
    
    if(isValid) {
        result.innerHTML = 'ok';
    }
});

inputPwd.addEventListener('change', (e) => {
    const INPUT_PWD_VALUE = inputPwd.value;
    const hasUpperCase = /[A-Z]/.test(INPUT_PWD_VALUE);
    const hasLowerCase = /[a-z]/.test(INPUT_PWD_VALUE);
    const hasDigital = /\d/.test(INPUT_PWD_VALUE);

    if(INPUT_PWD_VALUE.length < 5 || !hasUpperCase || !hasLowerCase || !hasDigital) {
        e.target.classList.add('invalid');
    } else {
        e.target.classList.remove('invalid');
    }
});