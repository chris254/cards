// script.js

//----------------------------------------------------------------------

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

function Elem(column_, row_) {
  if (!Number.isInteger(row_)) {
    throw new Error("Error: function Elem");
  }
  else {
    return document.getElementById(`${column_}-${row_}`);
  }
}

function displayCards(cards_) {

  for (let rowNumber=0; rowNumber < window.gridRowCount; rowNumber++) {
    Elem("section",rowNumber).textContent = cards_[rowNumber].section;
    Elem("name",rowNumber).textContent = cards_[rowNumber].name;
    Elem("god",rowNumber).textContent = cards_[rowNumber].god;
  }

}

document.addEventListener('DOMContentLoaded', async () => {

  window.cards = await fetchCardData();
  window.gridRowCount = window.cards.length;
  displayCards(window.cards);

});

function SelectCard(rowNumber_) {
  console.log(rowNumber_);

}