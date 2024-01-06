const btnOpenModal = document.querySelector(".btn-open-modal");
const btnCloseModal = document.querySelector(".btn-close-modal");
const modal = document.querySelector("dialog");

const openModal = () => {
  modal.showModal();
};

const closeModal = () => {
  modal.close();
};

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
