function Deck(cards){
  this.cards = cards;
}

function Deck.prototype.shuffle(){
  var [i,j,temp] = [this.cards.length - 1,0,null];

  for (i; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this.cards[i];
    this.cards[i] = this.cards[j];
    this.cards[j] = temp;
  }
  return this.cards;
}

Deck.prototype.drawTopCard = function(){
  return this.cards.pop();
}