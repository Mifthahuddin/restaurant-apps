/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
import '../styles/main.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import toggleMenu from './navbar';
import fetchAndDisplayRestaurants from './views/pages/list';
import loadRestaurantDetail, { closeDetailPage } from './views/pages/detail';
import swRegister from './utils/sw-register';
import fetchAndDisplayFavorites from './views/pages/favorite';

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', toggleMenu);

document.addEventListener('DOMContentLoaded', () => {
  const favoriteButton = document.querySelector('.menu a[href="#favorite"]');
  const homeButton = document.querySelector('.menu a[href="#title"]');

  if (favoriteButton) {
    favoriteButton.addEventListener('click', (event) => {
      event.preventDefault();
      closeDetailPage();
      fetchAndDisplayFavorites();
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
  fetchAndDisplayRestaurants();
  toggleMenu();
});
