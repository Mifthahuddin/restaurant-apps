import CONFIG from '../global/config';
import loadRestaurantDetail from '../views/pages/detail';

export default function createRestaurantCard(restaurant) {
  const restaurantListContainer = document.getElementById('restaurant-list');

  if (restaurantListContainer) {
    const card = document.createElement('div');
    card.classList.add('restaurant-card');
    card.setAttribute('role', 'article');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Restaurant: ${restaurant.name}`);

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('restaurant-image');

    const restaurantImage = document.createElement('img');
    restaurantImage.dataset.src = CONFIG.IMAGE.replace('<pictureId>', restaurant.pictureId);
    restaurantImage.alt = restaurant.name;
    restaurantImage.classList.add('lazyload');
    imageContainer.appendChild(restaurantImage);

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('restaurant-info');

    const restaurantName = document.createElement('h2');
    restaurantName.textContent = restaurant.name;
    infoContainer.appendChild(restaurantName);

    const restaurantDescription = document.createElement('p');
    restaurantDescription.classList.add('description');
    const maxLength = 80;
    restaurantDescription.textContent = restaurant.description.length > maxLength
      ? `${restaurant.description.substring(0, maxLength)}...`
      : restaurant.description;
    infoContainer.appendChild(restaurantDescription);

    const restaurantCity = document.createElement('p');
    restaurantCity.classList.add('restaurantCity');
    restaurantCity.textContent = `City: ${restaurant.city}`;
    restaurantImage.setAttribute('crossorigin', 'anonymous');
    infoContainer.appendChild(restaurantCity);

    const restaurantRating = document.createElement('p');
    restaurantRating.classList.add('restaurantRating');
    restaurantRating.textContent = `Rating: ${restaurant.rating}`;
    infoContainer.appendChild(restaurantRating);

    const viewDetailsButton = document.createElement('button');
    viewDetailsButton.classList.add('viewDetails');
    viewDetailsButton.textContent = 'View Details';
    viewDetailsButton.addEventListener('click', async () => {
      const mainContainer = document.querySelector('main');
      if (mainContainer) {
        mainContainer.innerHTML = '';
        const detailContainer = document.createElement('div');
        detailContainer.id = 'detail-container';
        mainContainer.appendChild(detailContainer);
        await loadRestaurantDetail(restaurant.id, detailContainer);
      }
    });

    card.appendChild(imageContainer);
    card.appendChild(infoContainer);
    card.appendChild(viewDetailsButton);

    // Append the card to the restaurant-list container
    restaurantListContainer.appendChild(card);

    return card;
  }
  console.error('restaurant-list element not found');
  return null;
}
