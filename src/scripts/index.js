import '../styles/main.scss';
import 'regenerator-runtime';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import toggleMenu from './navbar';
import swRegister from './utils/sw-register';

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', toggleMenu);

document.addEventListener('DOMContentLoaded', () => {
  const favoriteButton = document.querySelector('.menu a[href="#favorite"]');
  const homeButton = document.querySelector('.menu a[href="#title"]');

  if (favoriteButton) {
    favoriteButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const module = await import('./views/pages/favorite');
      module.default();
    });
  } else {
    console.error('Favorite button not found');
  }

  if (homeButton) {
    homeButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const module = await import('./views/pages/list');
      module.default();
    });
  } else {
    console.error('Home button not found');
  }
});

window.addEventListener('load', () => {
  swRegister();
  toggleMenu();
  import('./views/pages/list').then((module) => module.default());
  import('./views/pages/favorite').then((module) => module.default());
});
