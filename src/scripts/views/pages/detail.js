// detail.js
import CONFIG from '../../global/config';
import { closeModal } from './modal';
import fetchAndDisplayReviews from './review';

export function closeDetailPage() {
  const detailPage = document.querySelector('.restaurant-detail');
  if (detailPage) {
    detailPage.remove();
  }
}

export default async function loadRestaurantDetail(restaurantId, container) {
  try {
    const detailUrl = CONFIG.DETAIL.replace(':id', restaurantId);
    const response = await fetch(detailUrl);

    if (!response.ok) {
      throw new Error(`Error fetching restaurant details. Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.restaurant) {
      const detailPage = document.createElement('div');
      detailPage.classList.add('restaurant-detail');

      // Restaurant Description
      const restaurantDescription = document.createElement('p');
      restaurantDescription.textContent = data.restaurant.description;
      restaurantDescription.classList.add('restaurant-description');
      detailPage.appendChild(restaurantDescription);

      // Restaurant Address
      const restaurantAddress = document.createElement('p');
      restaurantAddress.textContent = `Address: ${data.restaurant.address}, ${data.restaurant.city}`;
      restaurantAddress.classList.add('restaurant-address');
      detailPage.appendChild(restaurantAddress);

      // Restaurant Categories
      const restaurantCategories = document.createElement('p');
      const categories = data.restaurant.categories.map((category) => category.name).join(', ');
      restaurantCategories.textContent = `Categories: ${categories}`;
      restaurantCategories.classList.add('restaurant-categories');
      detailPage.appendChild(restaurantCategories);

      // Restaurant Rating
      const restaurantRating = document.createElement('p');
      restaurantRating.textContent = `Rating: ${data.restaurant.rating}`;
      restaurantRating.classList.add('restaurant-rating');
      detailPage.appendChild(restaurantRating);

      // Food Menu
      const foodMenu = document.createElement('div');
      foodMenu.classList.add('restaurant-foodMenu');
      foodMenu.innerHTML = `<h3>Food Menu</h3>
        <ul>
          ${data.restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
        </ul>`;
      detailPage.appendChild(foodMenu);

      // Drink Menu
      const drinkMenu = document.createElement('div');
      drinkMenu.classList.add('restaurant-drinkMenu');
      drinkMenu.innerHTML = `<h3>Drink Menu</h3>
        <ul>
          ${data.restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
        </ul>`;
      detailPage.appendChild(drinkMenu);

      // Customer Reviews
      const customerReviews = document.createElement('div');
      customerReviews.innerHTML = `<h3>Customer Reviews</h3>
        <ul id="reviews-list"></ul>`;
      detailPage.appendChild(customerReviews);

      // Append the detail page to the container
      container.appendChild(detailPage);

      // Fetch and display reviews for the restaurant
      fetchAndDisplayReviews(data.restaurant.customerReviews, document.getElementById('reviews-list'));

      /* Add */
      const addButton = document.createElement('button');
      addButton.textContent = 'add';
      addButton.classList.add('add-review-button');
      addButton.innerHTML = '<i class=\'fa-solid fa-heart\'></i><span>Add to Favorite</span>';

      /* Close */
      const closeButton = document.createElement('button');
      closeButton.textContent = 'Close';
      closeButton.classList.add('close-button');
      closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i><span>Close</span>';
      closeButton.addEventListener('click', () => {
        closeDetailPage();
        closeModal();
      });

      detailPage.appendChild(addButton);
      detailPage.appendChild(closeButton);
    } else {
      console.error('Restaurant data not found.');
    }
  } catch (error) {
    console.error('Error loading restaurant detail:', error);
  }
}
