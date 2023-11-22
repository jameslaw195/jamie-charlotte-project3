export function createCharacterCard() {
  const characterCard = document.createElement("li");
  characterCard.classList.add("card");
  characterCard.innerHTML = `
    <div class="card__image-container">
      <img
        class="card__image"
        src="${CharacterPictureSrc}"
        alt="${CharacterName}"
      />
      <div class="card__image-gradient"></div>
    </div>
    <div class="card__content">
      <h2 class="card__title">${CharacterName}</h2>
      <dl class="card__info">
        <dt class="card__info-title">Status</dt>
        <dd class="card__info-description">${CharacterStatus}</dd>
        <dt class="card__info-title">Type</dt>
        <dd class="card__info-description">${CharacterType}</dd>
        <dt class="card__info-title">Occurrences</dt>
        <dd class="card__info-description">${CharacterAge}</dd>
      </dl>
    </div>`;
  return characterCard;
}
