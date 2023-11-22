export function createNextButton(onClick) {
  const nextButton = document.createElement("button");
  nextButton.classList.add("button", "button--next");
  nextButton.setAttribute("data-js", "button-next");
  nextButton.textContent = "next";
  nextButton.addEventListener("click", onClick);
  return nextButton;
}

export function createPrevButton(onClick) {
  const prevButton = document.createElement("button");
  prevButton.classList.add("button", "button--prev");
  prevButton.setAttribute("data-js", "button-prev");
  prevButton.textContent = "previous";
  prevButton.addEventListener("click", onClick);
  return prevButton;
}
