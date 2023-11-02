export function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

export function openModal() {
  const modal = document.getElementById('modal');
  const modalContent = document.querySelector('.modal-content');
  const closeButton = document.getElementById('close-modal');
  modal.style.display = 'block';
  closeButton.addEventListener('click', closeModal);
  window.addEventListener('click', (event) => {
    if (event.target === modal && event.target !== modalContent) {
      closeModal();
    }
  });
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}
