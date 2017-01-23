function Pile(){
  this.cards = [];
}

function Pile.topCard(){
  return this.cards.pop();
}

function Pile.prototype.addCard(card){
  this.cards.push(card);
  return true;
}