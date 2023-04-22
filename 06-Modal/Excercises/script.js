'use strict';

/* opening and closing a modal (multiple buttons available for this) */

// declare HTML elements to manipulate
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Opens the modal on click
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Hides the modal and the overlay on closing the modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// * NOTE! in the eventlistner you call the close/open functions WITHOUT (). Otherwise the function would be called immediately on activating the page instead of only at the clickevent.

// loops through available buttons and enables them to open the modal
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// closes items on click
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// close on hitting ESC
// * NOTE! The eventlistener will generate an object each time a key is pressed. By adding 'e'in the function, JS will call the function with the event as an object. In the object we can see the value of the key pressed (like 'escape' or 'enter')
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
