const menuBtn = document.querySelector('#menu');
const closeBtn = document.querySelector('#close');
const menu = document.querySelector('.menu-list');
const overlay = document.querySelector('.layer');

/* Display Menu */
menuBtn.addEventListener('click', () => {
  menuBtn.style.display = 'none';
  document.body.style.overflow = 'hidden';
  closeBtn.style.display = 'inline-block';
  menu.style.display = 'block';
  overlay.classList.remove('hide');

});

/* Hides Menu */
const menuClose = () => {
  menu.style.display = 'none';
  document.body.style.overflow = 'scroll';
  menuBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
  overlay.classList.add('hide');
};

closeBtn.addEventListener('click', () => {
  menuClose();
});

/* Closes menu after item clicked */
const navItems = document.querySelectorAll('.menu-list li a');
if (window.innerWidth < 500) {
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      menuClose();
    });
  });
}