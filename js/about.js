const menuButton = document.querySelector('.hamburger');
const menuItems = document.querySelector('.nav-items');
const items = document.querySelectorAll('.nav-item');
const main = document.querySelector('main');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active');
  menuItems.classList.toggle('show-menu');
});

items.forEach((item) => {
  item.addEventListener('click', () => {
    menuButton.classList.remove('active');
    menuItems.classList.remove('show-menu');
  });
});

// backspace effect
main.addEventListener('click', () => {
  menuItems.classList.remove('show-menu');
  menuButton.classList.remove('active');
});