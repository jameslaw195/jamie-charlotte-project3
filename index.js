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
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      data.results.forEach((character) => {
        // const characterCard = document.createElement("li");
        // characterCard.classList.add("card");
        const characterCard = createCharacterCard(character);
        cardContainer.append(characterCard);
        console.log(characterCard);
      });
    } else {
      console.log("Bad Response");
    }
  } catch (error) {
    console.log("An Error occured", error);
  }
}

fetchCharacters();
