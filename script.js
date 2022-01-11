// Requisito 3
const btnLogin = document.querySelector('#btn-login');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');

btnLogin.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const agreement = document.querySelector('#agreement');
const btnSubmit = document.getElementById('submit-btn');

function check() {
  if (agreement.checked !== true){
    btnSubmit.disabled = true;
    btnSubmit.classList.remove('enabled');
    btnSubmit.classList.add('disabled');
  } else {
    btnSubmit.disabled = false;
    btnSubmit.classList.remove('disabled');
    btnLogin.classList.add('enabled');
  }
}

agreement.addEventListener('change', check)