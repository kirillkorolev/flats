"use strict";

var CARDS__AMMOUNT = 9;
var SHOWN__CARDS__AMMOUNT = 6;
var MORE__CARDS = 3;
var filter = document.querySelector(".filter");
var hideListButtons = filter.querySelectorAll(".js-filter-hide-button");
var flatsBlock = document.querySelector(".flats");
var cardList = flatsBlock.querySelector(".flats__list");
var showCardsButton = flatsBlock.querySelector(".js-show-more-button");
var moreOptionsButtton = filter.querySelector(".js-options-show-more");
var optionsWrap = filter.querySelector(".filter__options-wrap");
var optionsList = filter.querySelector(".options");
var distanceFilter = filter.querySelector(".distance");
var lessThanTenDistanceInput = distanceFilter.querySelector("#distance-less-10");
var tenTwentyDistanceInput = distanceFilter.querySelector("#distance-10-20");
var twentyFourtyDistanceInput = distanceFilter.querySelector("#distance-20-40");
var overFortyDistanceInput = distanceFilter.querySelector("#distance-over-40");
var anyDistanceInput = distanceFilter.querySelector("#distance-any");
var showMoreButton = flatsBlock.querySelector(".js-show-more-button");

var changeHeight = function changeHeight(button) {
  button.addEventListener("click", function () {
    button.classList.toggle("filter__menu-button--active");
    var panels = button.nextElementSibling;

    if (panels.style.maxHeight.slice(0, -2) > 0) {
      panels.style.maxHeight = "0px";
    } else {
      panels.style.maxHeight = panels.scrollHeight + "px";
    }
  });
};

hideListButtons.forEach(function (button) {
  var list = button.nextElementSibling;
  list.style.maxHeight = list.scrollHeight + "px";
  changeHeight(button);
});

for (var i = 0; i < CARDS__AMMOUNT; i++) {
  var card = flatsBlock.querySelector(".flats__item");
  var node = card.cloneNode(true);
  cardList.appendChild(node);
}

var cards = document.querySelectorAll(".flats__item");

if (cards.length > SHOWN__CARDS__AMMOUNT) {
  for (var _i = SHOWN__CARDS__AMMOUNT; _i < cards.length; _i++) {
    cards[_i].classList.add("flats__item--hidden");
  }
} else {
  showCardsButton.classList.add("flats__show-more-items--hidden");
}

moreOptionsButtton.addEventListener("click", function () {
  var hiddenOptions = filter.querySelectorAll(".options__item--hidden");
  hiddenOptions.forEach(function (option) {
    option.classList.remove("options__item--hidden");
    optionsWrap.style.maxHeight = optionsList.scrollHeight + "px";
    moreOptionsButtton.classList.add("options__show-more--hidden");
  });
});
anyDistanceInput.addEventListener("change", function () {
  if (anyDistanceInput.checked) {
    lessThanTenDistanceInput.checked = false;
    tenTwentyDistanceInput.checked = false;
    twentyFourtyDistanceInput.checked = false;
    overFortyDistanceInput.checked = false;
  }
});
showMoreButton.addEventListener("click", function () {
  var hiddenCards = flatsBlock.querySelectorAll(".flats__item--hidden");

  if (hiddenCards.length > MORE__CARDS) {
    for (var _i2 = 0; _i2 < MORE__CARDS; _i2++) {
      hiddenCards[_i2].classList.remove("flats__item--hidden");
    }
  } else {
    hiddenCards.forEach(function (card) {
      card.classList.remove("flats__item--hidden");
      showMoreButton.classList.add("flats__show-more-items--hidden");
    });
  }
});