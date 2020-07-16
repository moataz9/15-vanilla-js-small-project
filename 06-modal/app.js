// Select modal-btn, modal-overlay, close-btn
// listen for clicks events on modal-btn and close-btn
// when User Clicks modal-btn add 'open-modal' to modal-overlay
// when user clicks close-btn remove 'open-modal' from modal-overlay
const modalBtn = document.querySelector('.modal-btn'),
  modal = document.querySelector('.modal-overlay'),
  closeBtn = document.querySelector('.close-btn')

modalBtn.addEventListener('click', () => {
  modal.classList.add('open-modal')
})
closeBtn.addEventListener('click', () => {
  modal.classList.remove('open-modal')
})
