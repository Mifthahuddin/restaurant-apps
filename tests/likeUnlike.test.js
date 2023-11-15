/* eslint-disable no-undef */
/* eslint-disable global-require */
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurant from '../src/scripts/data/favorite-restaurant';

jest.mock('../src/scripts/data/favorite-restaurant', () => {
  let mockDatabase = [];
  return {
    getRestaurant: jest.fn((id) => mockDatabase.find((restaurant) => restaurant.id === id)),
    putRestaurant: jest.fn((restaurant) => {
      mockDatabase.push(restaurant);
    }),
    deleteRestaurant: jest.fn((id) => {
      mockDatabase = mockDatabase.filter((restaurant) => restaurant.id !== id);
    }),
  };
});

if (typeof structuredClone === 'undefined') {
  const vm = require('vm');
  global.structuredClone = vm.structuredClone;
}

describe('Like Button Initiator', () => {
  let likeButtonContainer;

  beforeEach(() => {
    likeButtonContainer = document.createElement('div');
    document.body.appendChild(likeButtonContainer);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should render the like button when the restaurant has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer,
      restaurant: { id: 1 },
    });

    expect(likeButtonContainer.querySelector('#likeButton')).toBeTruthy();
  });

  it('should be able to like the restaurant', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer,
      restaurant: { id: 1 },
    });

    likeButtonContainer.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurant.getRestaurant(1)).toEqual({ id: 1 });
  });

  it('should be able to unlike the restaurant', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer,
      restaurant: { id: 1 },
    });

    likeButtonContainer.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurant.getRestaurant(1)).toBeUndefined();
  });
});
