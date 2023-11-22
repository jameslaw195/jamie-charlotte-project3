export function createSearchBar() {
  const searchBar = document.createElement("form");
  searchBar.classList.add("search-bar");
  searchBar.setAttribute("data-js", "search-bar");
  searchBar.innerHTML = `<input
   name="query"
   class="search-bar__input"
   type="text"
   placeholder="search characters"
   aria-label="character name"
    />
    <button class="search-bar__button" aria-label="search for character">
    <img
     class="search-bar__icon"
     src="assets/magnifying-glass.png"
     alt=""
    />
    </button>`;

  searchBar.addEventListener("submit", (event) => {
    event.preventDefault();
    searchQuery = event.target.elements.query.value;
    fetchCharacters().then(updateNavigation);
  });

  return searchBar;
}

import { createSearchBar } from "./components/search-bar/search-bar.js";

import { createNextButton } from "./components/nav-button/nav-button.js";
import { createPrevButton } from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";

searchBarContainer.append(searchBar);
navigation.append(prevButton);
navigation.append(pagination);
navigation.append(nextButton);
