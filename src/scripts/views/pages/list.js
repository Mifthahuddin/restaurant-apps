import CONFIG from '../../global/config';
import createRestaurantCard from '../../utils/createRestaurantCard';

export default async function fetchAndDisplayRestaurants() {
  const restaurantListContainer = document.getElementById('restaurant-list');
  if (restaurantListContainer) {
    restaurantListContainer.innerHTML = '';

    const response = await fetch(CONFIG.LIST_URL);
    const data = await response.json();
    const { restaurants } = data;

    restaurants.forEach((restaurant) => {
      const title = document.getElementById('title');
      title.textContent = 'Explore Restaurants';
      const card = createRestaurantCard(restaurant);
      restaurantListContainer.appendChild(card);
    });
  } else {
    console.error('restaurant-list element not found');
  }
}
