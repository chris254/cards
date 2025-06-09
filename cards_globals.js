let cards = [];
window.gridRowCount = 0;
window.lastCardsRowIndex = 0;

window.moveFromRow = 0;
window.moveTo = 0;

window.moveState = 0;

const CardsModeType = Object.freeze({
  MOVE: "MOVE",
  ASSIGN: "ASSIGN",
});

window.cardsMode = CardsModeType.MOVE;