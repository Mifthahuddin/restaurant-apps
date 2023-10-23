/* eslint-disable no-param-reassign */
export default async function fetchAndDisplayReviews(reviews, reviewsContainer) {
  try {
    // Clear any existing reviews
    reviewsContainer.innerHTML = '';

    // Create a carousel div
    const carousel = document.createElement('div');
    carousel.classList.add('carousel');

    // Create a carousel item for each review
    reviews.forEach((review, index) => {
      const item = document.createElement('div');
      item.classList.add('carousel-item');
      if (index === 0) {
        item.classList.add('active'); // Make the first item active
      }

      const name = document.createElement('h5');
      name.textContent = review.name;

      const date = document.createElement('p');
      date.textContent = new Date(review.date).toLocaleDateString();

      const comment = document.createElement('p');
      comment.textContent = review.review;

      item.appendChild(name);
      item.appendChild(date);
      item.appendChild(comment);

      carousel.appendChild(item);
    });

    reviewsContainer.appendChild(carousel);
  } catch (error) {
    console.error('Error fetching and displaying reviews:', error);
  }
}
