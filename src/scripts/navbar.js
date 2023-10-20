const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu a');

export function toggleMenu() {
  menu.classList.toggle('active');
  hamburger.classList.toggle('active');

  if (menu.classList.contains('active')) {
    menuItems[0].focus();
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach((item, index) => {
  item.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' && index < menuItems.length - 1) {
      event.preventDefault();
      menuItems[index + 1].focus();
    } else if (event.key === 'ArrowUp' && index > 0) {
      event.preventDefault();
      menuItems[index - 1].focus();
    } else if (event.key === 'Escape') {
      menu.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.focus();
    }
  });
});

menuItems.forEach((item) => {
  item.addEventListener('focusout', () => {
    item.style.backgroundColor = '';
    item.style.color = '';
  });
});
