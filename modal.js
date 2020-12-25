(() => {
  //MENU
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });

  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
//// Добавил закрітие с помощью Escape
    if (refs.modal.classList.contains('is-hidden')) {
      window.removeEventListener('keydown', escapeCloseHandler)
    } else{window.addEventListener('keydown', escapeCloseHandler) }
  }
  function escapeCloseHandler(event) {
        if (event.code==='Escape') {
           refs.modal.classList.toggle('is-hidden');
        } 
    
  }
//закрытие модалки по клику на бекдропе
const backdropRef = document.querySelector('.backdrop');

backdropRef.addEventListener('click',event=> {
  if (event.target===event.currentTarget) {
    toggleModal();
  }
});


})();
