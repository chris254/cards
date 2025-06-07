// script.js

//----------------------------------------------------------------------

const elemIdsGrid = [
  ["section-1", "name-1", "god-1"],
  ["section-2", "name-2", "god-2"],
  ["section-3", "name-3", "god-3"],
  ["section-4", "name-4", "god-4"],
  ["section-5", "name-5", "god-5"],
  ["section-6", "name-6", "god-6"],
  ["section-7", "name-7", "god-7"],
  ["section-8", "name-8", "god-8"],
  ["section-9", "name-9", "god-9"],
  ["section-10", "name-10", "god-10"],
  ["section-11", "name-11", "god-11"],
  ["section-12", "name-12", "god-12"],
  ["section-13", "name-13", "god-13"],
  ["section-14", "name-14", "god-14"],
  ["section-15", "name-15", "god-15"],
];

const elemGrid = elemIdsGrid.map(row =>
  row.map(id => document.getElementById(id)));


async function fetchCardData() {
  try {
    const response = await fetch('cards.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching card data:", error);
    return [];
  }
}

function displayCards(cards_) {

  for (let rowNumber=0; rowNumber < window.gridRowCount; rowNumber++) {
    elemGrid[rowNumber][0].textContent = cards_[rowNumber].section;
    elemGrid[rowNumber][1].textContent = cards_[rowNumber].name;
    elemGrid[rowNumber][2].textContent = cards_[rowNumber].god;
  }

}

document.addEventListener('DOMContentLoaded', async () => {

  window.cards = await fetchCardData();
  window.gridRowCount = window.cards.length;
  displayCards(window.cards);

});

function SelectCard(rowNumber_) {

}