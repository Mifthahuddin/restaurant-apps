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

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', toggleMenu);

window.addEventListener('load', () => {
  swRegister();
  fetchAndDisplayRestaurants();
  toggleMenu();
});
