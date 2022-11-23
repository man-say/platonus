const openModalButtons = document.querySelectorAll('[data-modal-target]');
const popUpMenu = document.getElementById('language__menu');
const burgerMenu = document.getElementById('menu')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
    })
  })

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.language__menu.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })

  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.menu.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })

  function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
  }
  
  function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }