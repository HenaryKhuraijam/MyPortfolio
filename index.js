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

function btn() {
  const cardone = document.getElementById('page1');
  cardone.classList.toggle('window-popup');
  alert('hello');
}

document.getElementById('btn1').addEventListener('click', btn);
