function menuClickedHandler(e) {
  const nav = document.getElementById('nav');
  nav.classList.toggle("popup");
}

document.getElementById("menu").addEventListener('click', 'menuClickedHandler');
document.getElementById("nav").addEventListener('click', 'menuClickedHandler');