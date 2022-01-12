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

// Requisito 18
const agreement = document.querySelector('#agreement');
const btnSubmit = document.getElementById('submit-btn');

function check() {
  if (agreement.checked !== true) {
    btnSubmit.disabled = true;
    btnSubmit.style.cursor = 'not-allowed';
    btnSubmit.style.backgroundColor = 'rgb(60, 64, 74)';
  } else {
    btnSubmit.disabled = false;
    btnSubmit.style.cursor = 'pointer';
    btnSubmit.style.backgroundColor = 'rgb(78, 44, 131)';
  }
}

agreement.addEventListener('change', check);

// Requisito 20
const text = document.getElementById('textarea');
const counter = document.querySelector('#counter');

function caracteres(event) {
  if (text.value.length > 0 && event.key !== 'backspace') {
    counter.innerHTML = 500 - text.value.length;
  } else {
    counter.innerHTML = 500;
  }
}

text.addEventListener('keyup', caracteres);
