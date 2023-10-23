export function openModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'block';

  let index = 0;
  const items = document.querySelectorAll('.carousel-item');

  function showNextItem() {
    items[index].classList.remove('active');
    index = (index + 1) % items.length;
    items[index].classList.add('active');
  }

  setInterval(showNextItem, 3000);
}

export function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}
