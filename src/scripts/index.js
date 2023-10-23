/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
import '../styles/main.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import { toggleMenu } from './navbar';
// eslint-disable-next-line import/named
import { fetchAndDisplayRestaurants } from './views/pages/list';
import { closeDetailPage, loadRestaurantDetail } from './views/pages/detail';

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', toggleMenu);
