export function createNextButton() {
  const nextButton = document.createElement("button");
  nextButton.classList.add("button", "button--next");
  nextButton.setAttribute("data-js", "button-next");
  nextButton.textContent = "next";
  nextButton.addEventListener("click", () => {
    cardContainer.innerHTML = "";
    page++;
    if (page > maxPage) {
      page = maxPage;
    }
    fetchCharacters();
  });
  return nextButton;
}

export function createPrevButton() {
  const prevButton = document.createElement("button");
  prevButton.classList.add("button", "button--prev");
  prevButton.setAttribute("data-js", "button-prev");
  prevButton.textContent = "previous";
  prevButton.addEventListener("click", () => {
    cardContainer.innerHTML = "";
    page--;
    if (page < 1) {
      page = 1;
    }
    fetchCharacters();
  });
  return prevButton;
}
