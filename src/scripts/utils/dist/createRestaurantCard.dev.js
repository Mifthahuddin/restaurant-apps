"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createRestaurantCard;

var _config = _interopRequireDefault(require("../global/config"));

var _detail = _interopRequireDefault(require("../views/pages/detail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createRestaurantCard(restaurant) {
  var restaurantListContainer = document.getElementById('restaurant-list');

  if (restaurantListContainer) {
    var card = document.createElement('div');
    card.classList.add('restaurant-card');
    card.setAttribute('role', 'article');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', "Restaurant: ".concat(restaurant.name));
    var imageContainer = document.createElement('div');
    imageContainer.classList.add('restaurant-image');
    var restaurantImage = document.createElement('img');
    restaurantImage.dataset.src = _config["default"].IMAGE.replace('<pictureId>', restaurant.pictureId);
    restaurantImage.alt = restaurant.name;
    restaurantImage.classList.add('lazyload');
    imageContainer.appendChild(restaurantImage);
    var infoContainer = document.createElement('div');
    infoContainer.classList.add('restaurant-info');
    var restaurantName = document.createElement('h2');
    restaurantName.textContent = restaurant.name;
    infoContainer.appendChild(restaurantName);
    var restaurantDescription = document.createElement('p');
    restaurantDescription.classList.add('description');
    var maxLength = 80;
    restaurantDescription.textContent = restaurant.description.length > maxLength ? "".concat(restaurant.description.substring(0, maxLength), "...") : restaurant.description;
    infoContainer.appendChild(restaurantDescription);
    var restaurantCity = document.createElement('p');
    restaurantCity.classList.add('restaurantCity');
    restaurantCity.textContent = "City: ".concat(restaurant.city);
    restaurantImage.setAttribute('crossorigin', 'anonymous');
    infoContainer.appendChild(restaurantCity);
    var restaurantRating = document.createElement('p');
    restaurantRating.classList.add('restaurantRating');
    restaurantRating.textContent = "Rating: ".concat(restaurant.rating);
    infoContainer.appendChild(restaurantRating);
    var viewDetailsButton = document.createElement('button');
    viewDetailsButton.classList.add('viewDetails');
    viewDetailsButton.textContent = 'View Details';
    viewDetailsButton.addEventListener('click', function _callee() {
      var mainContainer, detailContainer;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              mainContainer = document.querySelector('main');

              if (!mainContainer) {
                _context.next = 8;
                break;
              }

              mainContainer.innerHTML = '';
              detailContainer = document.createElement('div');
              detailContainer.id = 'detail-container';
              mainContainer.appendChild(detailContainer);
              _context.next = 8;
              return regeneratorRuntime.awrap((0, _detail["default"])(restaurant.id, detailContainer));

            case 8:
            case "end":
              return _context.stop();
          }
        }
      });
    });
    card.appendChild(imageContainer);
    card.appendChild(infoContainer);
    card.appendChild(viewDetailsButton);
    restaurantListContainer.appendChild(card);
    return card;
  }

  console.error('restaurant-list element not found');
  return null;
}