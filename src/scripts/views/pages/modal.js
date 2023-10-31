export function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

export function openModal() {
  const modal = document.getElementById('modal');
  const modalContent = document.querySelector('.modal-content');
  const closeButton = document.getElementById('close-modal');
  modal.style.display = 'block';

  // Close the modal when the close button is clicked
  closeButton.addEventListener('click', closeModal);

  // Close the modal when clicked outside of the modal content
  window.addEventListener('click', (event) => {
    if (event.target === modal && event.target !== modalContent) {
      closeModal();
    }
  });

  // Close the modal when 'Esc' key is pressed
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}
