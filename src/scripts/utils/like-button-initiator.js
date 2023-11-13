import FavoriteRestaurant from '../data/favorite-restaurant';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    return !!await FavoriteRestaurant.getRestaurant(id);
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = `
      <button id="likeButton" class="like-button">
        <i class='fa-regular fa-heart'></i><span>Add to Favorite</span>
      </button>
    `;
    const likeButton = this._likeButtonContainer.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurant.putRestaurant(this._restaurant);
      this._renderLiked();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = `
      <button id="likeButton" class="like-button">
        <i class='fa-solid fa-heart'></i><span>Remove from Favorite</span>
      </button>
    `;
    const likeButton = this._likeButtonContainer.querySelector('#likeButton');

    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._renderLike();
    });
  },
};

export default LikeButtonInitiator;
