const CARDS__AMMOUNT = 9;
const SHOWN__CARDS__AMMOUNT = 6;
const MORE__CARDS = 3;

const filter = document.querySelector(`.filter`);
const hideListButtons = filter.querySelectorAll(`.js-filter-hide-button`);

const flatsBlock = document.querySelector(`.flats`);
const cardList = flatsBlock.querySelector(`.flats__list`);
const showCardsButton = flatsBlock.querySelector(`.js-show-more-button`);

const moreOptionsButtton = filter.querySelector(`.js-options-show-more`);
const optionsWrap = filter.querySelector(`.filter__options-wrap`);
const optionsList = filter.querySelector(`.options`);

const distanceFilter = filter.querySelector(`.distance`);

const lessThanTenDistanceInput = distanceFilter.querySelector(`#distance-less-10`);
const tenTwentyDistanceInput = distanceFilter.querySelector(`#distance-10-20`);
const twentyFourtyDistanceInput = distanceFilter.querySelector(`#distance-20-40`);
const overFortyDistanceInput = distanceFilter.querySelector(`#distance-over-40`);
const anyDistanceInput = distanceFilter.querySelector(`#distance-any`);

const showMoreButton = flatsBlock.querySelector(`.js-show-more-button`);

const changeHeight = (button) => {
  button.addEventListener(`click`, () => {
    button.classList.toggle(`filter__menu-button--active`);
    const panels = button.nextElementSibling;
    if (panels.style.maxHeight.slice(0, -2) > 0) {
      panels.style.maxHeight = `0px`;
    } else {
      panels.style.maxHeight = panels.scrollHeight + `px`;
    }
  });
};

hideListButtons.forEach((button) => {
  const list = button.nextElementSibling;
  list.style.maxHeight = list.scrollHeight + `px`;
  changeHeight(button);
});

for (let i = 0; i < CARDS__AMMOUNT; i++) {
  const card = flatsBlock.querySelector(`.flats__item`);
  let node = card.cloneNode(true);
  cardList.appendChild(node);
}

const cards = document.querySelectorAll(`.flats__item`);

if (cards.length > SHOWN__CARDS__AMMOUNT) {
  for (let i = SHOWN__CARDS__AMMOUNT; i < cards.length; i++) {
    cards[i].classList.add(`flats__item--hidden`);
  }
} else {
  showCardsButton.classList.add(`flats__show-more-items--hidden`);
}

moreOptionsButtton.addEventListener(`click`, () => {
  const hiddenOptions = filter.querySelectorAll(`.options__item--hidden`);

  hiddenOptions.forEach((option) => {
    option.classList.remove(`options__item--hidden`);
    optionsWrap.style.maxHeight = optionsList.scrollHeight + `px`;
    moreOptionsButtton.classList.add(`options__show-more--hidden`);
  });
});

anyDistanceInput.addEventListener(`change`, () => {
  if (anyDistanceInput.checked) {
    lessThanTenDistanceInput.checked = false;
    tenTwentyDistanceInput.checked = false;
    twentyFourtyDistanceInput.checked = false;
    overFortyDistanceInput.checked = false;
  }
});

showMoreButton.addEventListener(`click`, () => {
  const hiddenCards = flatsBlock.querySelectorAll(`.flats__item--hidden`);

  if (hiddenCards.length > MORE__CARDS) {
    for (let i = 0; i < MORE__CARDS; i++) {
      hiddenCards[i].classList.remove(`flats__item--hidden`);
    }
  } else {
    hiddenCards.forEach((card) => {
      card.classList.remove(`flats__item--hidden`);
      showMoreButton.classList.add(`flats__show-more-items--hidden`);
    });
  }
});
