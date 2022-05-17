const inputUsername = document.querySelector('#username');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const inputPasswordCheck = document.querySelector('#password-check');
const button = document.querySelector('button');

const errorUsername = document.querySelector('.error-username');

inputUsername.onkeyup = () => {
  if(inputUsername.value.length > 3) {
    inputUsername.classList.remove('error');
    inputUsername.classList.add('success');
    errorUsername.classList.add('hide')
    button.disabled = false;
  } else {
    inputUsername.classList.add('error');
    inputUsername.classList.remove('success');
    errorUsername.classList.remove('hide')
    button.disabled = true;
  }
}