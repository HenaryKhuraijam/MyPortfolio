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
  const cardone = document.getElementById('cardwork1');
  cardone.classList.toggle('popup-windows');
}

document.getElementById('btn1').addEventListener('click', btn);
