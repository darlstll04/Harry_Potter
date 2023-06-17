const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const showModal = () => {
  modal.classList.add("show");
  overlay.classList.add("show");
};

const closeModal = () => {
  modal.classList.remove("show");
  overlay.classList.remove("show");
};


export const createModal = (characters = null, data = null) => {
  characters.forEach((character) => {
    character.addEventListener("click", () => { 
      const characterId = character.id;
      modal.innerHTML = ({image, name, gender, house, dateOfBirth, actor, alternate_names, alternate_actors} = data.find((el) => el.id === characterId))=>
        `<div class="modal__header">
        <img class="modal-img" src="${image}" alt=""/>
		  <button class="close-modal">&times;</button>
      </div>

      <div class="modal__body">
        <h4 class="modal__body-title"><span>Name:</span> ${name}</h4>
        <p class="modal__body-subtitle"><span>Gender:</span> ${gender}</p>
        <p class="modal__body-category"><span>House:</span> ${house}</p>
        <p class="modal__body-date"><span>Date of birth:</span> ${dateOfBirth}</p>
        <p class="modal__body-actor"><span>Actor:</span> ${actor}</p>
        <p class="modal__body-altername"><span>Alternate names:</span> ${alternate_names}</p>
        <p class="modal__body-alteractor"><span>Alternate actors:</span> ${alternate_actors}</p>
      </div>
      `;
      showModal();

      const closeModalBtn = document.querySelector(".close-modal");
      closeModalBtn.addEventListener("click", closeModal);
    });
  });
};

overlay.addEventListener("click", closeModal);


