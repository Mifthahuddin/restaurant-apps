/* eslint-disable no-param-reassign */
export default async function fetchAndDisplayReviews(reviews, reviewsContainer) {
  try {
    reviewsContainer.innerHTML = '';

    const carousel = document.createElement('div');
    carousel.classList.add('carousel');

    reviews.forEach((review, index) => {
      const item = document.createElement('div');
      item.classList.add('carousel-item');
      if (index === 0) {
        item.classList.add('active');
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
