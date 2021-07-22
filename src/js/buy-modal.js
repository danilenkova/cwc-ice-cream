(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[buy-modal-open]'),
    closeModalBtn: document.querySelector('[buy-modal-close]'),
    modal: document.querySelector('[buy-modal]'),
  };

  refs.openModalBtn.forEach(function (btn) {
    btn.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);


  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('is-hidden');
  }
})();