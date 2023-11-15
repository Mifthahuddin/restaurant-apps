import 'regenerator-runtime';
import '../styles/main.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import toggleMenu from './navbar';
import fetchAndDisplayRestaurants from './views/pages/list';
import swRegister from './utils/sw-register';
import fetchAndDisplayFavoriteRestaurants from './views/pages/favorite';

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', toggleMenu);

document.addEventListener('DOMContentLoaded', () => {
  const favoriteButton = document.querySelector('.menu a[href="#favorite"]');
  const homeButton = document.querySelector('.menu a[href="#title"]');

  if (favoriteButton) {
    favoriteButton.addEventListener('click', (event) => {
      event.preventDefault();
      fetchAndDisplayFavoriteRestaurants();
    });
  } else {
    console.error('Favorite button not found');
  }

  if (homeButton) {
    homeButton.addEventListener('click', (event) => {
      event.preventDefault();
      fetchAndDisplayRestaurants();
    });
  } else {
    console.error('Home button not found');
  }
});

window.addEventListener('load', () => {
  swRegister();
  toggleMenu();
  fetchAndDisplayRestaurants();
  fetchAndDisplayFavoriteRestaurants();
});
