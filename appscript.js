const { body } = document.body;
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('.menu-list');
const overlay = document.querySelector('.layer');

/* Hides Menu */
const closeMenu = () => {
  menu.style.display = 'none';
  body.style.overflow = 'scroll';
  menuBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
  overlay.classList.add('hide');
};

/* Display Menu */
menuBtn.addEventListener('click', () => {
  closeBtn.style.display = 'inline-block';
  overlay.classList.remove('hide');
  body.style.overflow = 'hidden';
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  closeMenu();
});

/* Closes menu after item clicked */
const navItems = document.querySelectorAll('.menu-list li a');
if (window.innerWidth < 1000) {
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      closeMenu();
    });
  });
}