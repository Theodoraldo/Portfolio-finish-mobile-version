const humburgerMenu = document.getElementById('menu');
const addClass = document.querySelector('.m-menu');
const closeBtn = document.getElementById('close');

humburgerMenu.addEventListener('click', () => {
  humburgerMenu.style.display = 'none';
  addClass.classList.add('show-menu');
});

closeBtn.addEventListener('click', () => {
  humburgerMenu.style.display = 'block';
  addClass.classList.remove('show-menu');
});

const navItems = document.querySelectorAll('.m-menu li a');
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    humburgerMenu.style.display = 'block';
    addClass.classList.remove('show-menu');
  });
});