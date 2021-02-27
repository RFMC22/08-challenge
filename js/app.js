const names = document.querySelector('#name');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const img = document.querySelectorAll('.img-error');
const errorp = document.querySelectorAll('.error p');
const formulario = document.querySelector('form');

formulario.addEventListener('submit',(e)=>{
  e.preventDefault();
  if (names.value === '') {
    names.classList.add('errori');
    img[0].style.display = 'block';
    errorp[0].style.display = 'block';
  }else{
    names.classList.remove('errori');
    img[0].style.display = 'none';
    errorp[0].style.display = 'none';
  }
  if (lname.value === '') {
    lname.classList.add('errori');
    img[1].style.display = 'block';
    errorp[1].style.display = 'block';
  }else{
    lname.classList.remove('errori');
    img[1].style.display = 'none';
    errorp[1].style.display = 'none';
  }
  if (email.value === '') {
    email.classList.add('errori');
    img[2].style.display = 'block';
    errorp[2].style.display = 'block';
  }else{
    email.classList.remove('errori');
    img[2].style.display = 'none';
    errorp[2].style.display = 'none';
  }
  if (password.value === '') {
    password.classList.add('errori');
    img[3].style.display = 'block';
    errorp[4].style.display = 'block';
  }else{
    password.classList.remove('errori');
    img[3].style.display = 'none';
    errorp[4].style.display = 'none';
  }
});