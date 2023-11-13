import FavoriteRestaurant from '../../data/favorite-restaurant';
import createRestaurantCard from '../../utils/createRestaurantCard';

export default async function fetchAndDisplayRestaurants() {
  const restaurantListContainer = document.getElementById('restaurant-list');
  restaurantListContainer.innerHTML = '';

  const title = document.getElementById('title');
  title.textContent = 'Restaurant Favorite';

  const restaurants = await FavoriteRestaurant.getAllRestaurant();
  restaurants.forEach((restaurant) => {
    const card = createRestaurantCard(restaurant);
    restaurantListContainer.appendChild(card);
  });
}
