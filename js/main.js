const alertBox = document.querySelector('.alert-box');
const closeBtn = document.querySelector('.alert__close-btn');
const form = document.querySelector('form');
let inputs = document.querySelectorAll('input');

const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const textRegex = /^[A-Za-z]{4,}(?!\d)$/;

const validateInput = (input) => {
  if (input.value.length === 0) {
    setInvalid(input, `${input.placeholder} cannot be empty`);
    return false;
  }else if(input.type === 'email' && !emailRegex.test(input.value)) {
    setInvalid(input, 'Doesn\'t look like an email');
    return false;
  }else if(input.type === 'text' && !textRegex.test(input.value)) {
    setInvalid(input, 'Only letters allowed');
    return false;
  }else if(input.type === 'password' && input.value.length < 8) {
    setInvalid(input, `${input.placeholder} should be at least 8 characters long`);
    return false;
  }else {
    input.classList.remove('submitted');
    return true;
  }
};

const setInvalid = (input, errorMsg) => {
  input.nextElementSibling.textContent = errorMsg;
  input.classList.add('submitted');
};

const validateForm = (event) => {
  event.preventDefault();

  inputs = Array.from(inputs);
  
  const isValidated = inputs.map((input) => {
    return validateInput(input);
  });

  if(isValidated.includes(false)) return;

  alertBox.classList.add('active');

  inputs.forEach((input) => {
    input.value = '';
  });
};

form.addEventListener('submit', validateForm);

closeBtn.addEventListener('click', () => {
  alertBox.classList.remove('active');
});