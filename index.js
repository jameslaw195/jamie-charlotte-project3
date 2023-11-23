import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
const searchQuery = "";

async function fetchCharacters() {
  // try {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  if (response.ok) {
    const data = await response.json();
    maxPage = data.info.pages;
    data.results.forEach((character) => {
      const carCard = createCharacterCard(character);
      cardContainer.append(carCard);
    });
  } else {
    console.log("Bad Response");
  }
  updateNavigation();
  // } catch (error) {
  //   console.log("An Error occured", error);
  // }
}



fetchCharacters();
  
function updateNavigation() {
  pagination.textContent = `${page} / ${maxPage}`;
  prevButton.disabled = page == 1;
  nextButton.disabled = page == maxPage;
}

fetchCharacters().then(updateNavigation);

nextButton.addEventListener("click", () => {
  cardContainer.innerHTML = "";
  page++;
  if (page > maxPage) {
    page = maxPage;
  }
  fetchCharacters();
});

prevButton.addEventListener("click", () => {
  cardContainer.innerHTML = "";
  page--;
  if (page < 1) {
    page = 1;
  }
  fetchCharacters();
});

searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  const formElements = e.target.elements;
  searchQuery = formElements.query.value;
