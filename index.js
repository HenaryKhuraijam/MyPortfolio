function menuClickedHandler() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('popup');

  if (nav.classList.contains('popup')) {
    nav.addEventListener('click', menuClickedHandler);
  } else {
    nav.removeEventListener('click', menuClickedHandler);
  }
}

document.getElementById('menu').addEventListener('click', menuClickedHandler);

document.getElementById('contact-form').addEventListener('submit', (e) => {
  const errorMsg = document.getElementById('error-message');
  const arrEmail = document.getElementById('email').value;
  errorMsg.innerText = '';
  if (arrEmail !== arrEmail.toLowerCase() || arrEmail.match(/@[0-9a-z][\D\w]*?\./g) === null) {
    e.preventDefault();
    errorMsg.innerText = 'Invalid Email : Please Email should be in lowercase and contain a @ and . in it';
    errorMsg.style.color = 'red';
  }
});