function validation() {
  const inputEmail = document.querySelector('#email');
  const inputPassword = document.querySelector('#password');

  if (
    inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function enableButton() {
  const btnSubmit = document.querySelector('#submit-btn');
  const checkBox = document.querySelector('#agreement');

  if (checkBox.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}

function maxCaracteres() {
  const caracteres = document.querySelector('#counter');
  const textArea = document.querySelector('#textarea');
  const caracteresParse = 500;
  caracteres.innerText = caracteresParse - textArea.value.length;
}

function subjectArray() {
  const subject = document.querySelectorAll('.subject');
  const arraySubjects = [];
  for (let i = 0; i < subject.length; i += 1) {
    if (subject[i].checked) {
      arraySubjects.push(subject[i].value);
    }
  }
  localStorage.setItem('subject', JSON.stringify(arraySubjects));
}

function familySelected() {
  const family = document.getElementsByName('family');
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked) {
      localStorage.setItem('family', family[i].value);
    }
  }
}

function rateSelected() {
  const rate = document.getElementsByName('rate');
  for (let i = 0; i < rate.length; i += 1) {
    if (rate[i].checked) {
      localStorage.setItem('rate', rate[i].value);
    }
  }
}

function saveData() {
  const name = document.querySelector('#input-name');
  const lastname = document.querySelector('#input-lastname');
  localStorage.setItem('name', `${name.value} ${lastname.value}`);
  const email = document.querySelector('#input-email');
  localStorage.setItem('email', email.value);
  const house = document.querySelector('#house');
  localStorage.setItem('house', house.value);
  familySelected();
  subjectArray();
  rateSelected();
  const textarea = document.querySelector('#textarea');
  localStorage.setItem('textarea', textarea.value);
}

function getElement() {
  const arrayElements = [];
  arrayElements.push(`Nome: ${localStorage.getItem('name')} `);
  arrayElements.push(`Email: ${localStorage.getItem('email')} `);
  arrayElements.push(`Casa: ${localStorage.getItem('house')} `);
  arrayElements.push(`Família: ${localStorage.getItem('family')} `);
  arrayElements.push(`Matérias: ${JSON.parse(localStorage.getItem('subject')).join(', ')} `);
  arrayElements.push(`Avaliação: ${localStorage.getItem('rate')} `);
  arrayElements.push(`Observações: ${localStorage.getItem('textarea')} `);
  return arrayElements;
}

function createFormData() {
  const form = document.querySelector('main');
  const formDataDiv = document.createElement('div');
  formDataDiv.id = 'form-data';
  form.appendChild(formDataDiv);
  const arrayElements = getElement();
  for (let i = 0; i < arrayElements.length; i += 1) {
    const p = document.createElement('p');
    p.innerText = arrayElements[i];
    formDataDiv.appendChild(p);
  }
}

function formData(event) {
  event.preventDefault();
  saveData();
  const evaluationForm = document.querySelector('#evaluation-form');
  evaluationForm.style.visibility = 'hidden';
  createFormData();
}

window.onload = function loadedPage() {
  const btnLogin = document.querySelector('#login');
  btnLogin.addEventListener('click', validation);

  const checkBox = document.querySelector('#agreement');
  checkBox.addEventListener('click', enableButton);

  const textArea = document.querySelector('#textarea');
  textArea.addEventListener('keyup', maxCaracteres);

  const btnSubmit = document.querySelector('#submit-btn');
  btnSubmit.addEventListener('click', formData);
};
