export function createNavButton(type, onClick) {
  const navButton = document.createElement("button");
  navButton.classList.add("button", `button--${type}`);
  navButton.setAttribute("data-js", `button-${type}`);
  navButton.textContent = type === "prev" ? "previous" : type;
  navButton.addEventListener("click", onClick);
  return navButton;
}
