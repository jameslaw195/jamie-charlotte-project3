import { createCharacterCard } from "./components/card/card.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";
import { createNavButton } from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createErrorMessage } from "./components/error404/error.js";

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
searchBarContainer.append(
  createSearchBar((event) => {
    event.preventDefault();
    searchQuery = event.target.elements.query.value;

    fetchCharacters(page, searchQuery);
    return searchQuery;
  })
);

const searchBar = document.querySelector('[data-js="search-bar"]');

const navigation = document.querySelector('[data-js="navigation"]');
navigation.append(
  createNavButton("prev", () => {
    cardContainer.innerHTML = "";
    page--;
    if (page < 1) {
      page = 1;
    }
    fetchCharacters(page, searchQuery);
  }),
  createPagination(),
  createNavButton("next", () => {
    cardContainer.innerHTML = "";
    page++;
    if (page > maxPage) {
      page = maxPage;
    }
    fetchCharacters(page, searchQuery);
  })
);
const cardContainer = document.querySelector('[data-js="card-container"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');
const body = document.querySelector('[data-js="body"]');

async function fetchCharacters(page, searchQuery = "") {
  cardContainer.innerHTML = "";
  let fetchUrl = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;
  const response = await fetch(fetchUrl);
  if (response.ok) {
    const data = await response.json();
    maxPage = data.info.pages;
    data.results.forEach((character) => {
      const carCard = createCharacterCard(character);
      cardContainer.append(carCard);
    });
    updateNavigation();
  } else {
    console.log("Bad Response");
    maxPage = 1;
    page = 1;
    pagination.textContent = `${page} / ${maxPage}`;
    const errorCard = createErrorMessage();
    body.append(errorCard);
    body.classList.add("error");
    navigation.classList.add("hidden");
  }
}

fetchCharacters();

function updateNavigation() {
  pagination.textContent = `${page} / ${maxPage}`;
  prevButton.disabled = page == 1;
  nextButton.disabled = page == maxPage;
}
