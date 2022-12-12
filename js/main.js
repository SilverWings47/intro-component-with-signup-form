const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');

let isValid;

form.addEventListener('submit', validateForm);

function validateForm(e) {
  e.preventDefault();
  isValid = true;

  inputs.forEach(input => {
      if(input.validity.valueMissing || input.validity.typeMismatch){
        isValid = false;
        input.classList.add('submitted');
      }
  });
  
  if(isValid) {
    console.log('Submitted');
    form.submit();
    isValid = true;

    inputs.forEach((input) => {
      input.classList.remove('submitted');
      input.value = '';
    });
  } 
}