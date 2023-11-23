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
searchBarContainer.append(createSearchBar(onSearch));

const searchBar = document.querySelector('[data-js="search-bar"]');
const searchBarInput = document.querySelector('[data-js="search-bar-input"]');
searchBarInput.addEventListener("keyup", onSearch);

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
const errorCard = createErrorMessage();
body.append(errorCard);

async function fetchCharacters(page, searchQuery = "") {
  cardContainer.innerHTML = "";
  body.classList.remove("error");
  navigation.classList.remove("hidden");
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

function onSearch(event) {
  event.preventDefault();
  searchQuery = searchBarInput.value;

  fetchCharacters(page, searchQuery);
  return searchQuery;
}
