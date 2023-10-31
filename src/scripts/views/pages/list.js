import CONFIG from '../../global/config';
import createRestaurantCard from '../../utils/createRestaurantCard';

export default async function fetchAndDisplayRestaurants() {
  const restaurantListContainer = document.getElementById('restaurant-list');
  restaurantListContainer.innerHTML = ''; // Clear the container

  const response = await fetch(CONFIG.LIST_URL);
  const data = await response.json();
  const { restaurants } = data;

  restaurants.forEach((restaurant) => {
    const card = createRestaurantCard(restaurant);
    restaurantListContainer.appendChild(card);
  });
}
