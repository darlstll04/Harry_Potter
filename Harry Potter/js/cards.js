import { createModal } from "./modal.js";

export const createCards = (data, div) => {
  div.innerHTML = data.map(({id, image, name, house, gender, yearOfBirth}) =>{
    const cardImg = gender === "male" ? "https://cdn2.vectorstock.com/i/1000x1000/90/16/man-male-avatar-silhouette-person-icon-vector-10249016.jpg" : "female" ? "https://igamingidol.com/wp-content/uploads/2016/07/silhouette-female.gif" : ""
    const cardColorOne = house === "Slytherin" ? "#314d31" :  "Gryffindor" ? "#572727" : "gray";
    const cardColorTwo = house === "Hufflepuff" ? "#5f5f1e" : "Ravenclaw" ? "#2f2f60" : "gray";
    const cardHouse = house === "null" ? "No info" : "No info";
    const cardBirth = yearOfBirth === "null" ? "No info" : "No info";
      return `<article id="${id}" class="cards" >
      <div class="card" style="background-color: ${cardColorOne || cardColorTwo};">
      <div class="card__inner">
          <img class="character__img" src="${image || cardImg}" alt="">
          <h3 class="character__name"><span>Name: </span> ${name}</h3>
          <h3 class="character__house"><span> House:</span> ${house || cardHouse}</h3>
          <h3 class="character__gender"><span> Gender:</span> ${gender}</h3>
          <h3 class="character__birth"><span> Year of birth:</span> ${yearOfBirth || cardBirth}</h3>
      </div>
  </div>
	</article>`
}).join("") 

    const searchInputValue = document.querySelector(".searchBar input");
    searchInputValue.addEventListener("input", () => {
    const text = searchInputValue.value;
    const searchedData = data.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()) || item.house.toLowerCase().includes(text.toLowerCase()));
    createCards(searchedData, div);
})
    
    const characters = document.querySelectorAll(".cards")
    createModal(characters, div)
  };


