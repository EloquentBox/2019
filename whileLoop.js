const cards = ['diamond', 'spade', 'heart', 'club'];


let currentCard; // Variable Outside
while (currentCard !== 'spade') // While with Condition
{
   currentCard = cards[Math.floor(Math.random() * 4)]; // command
  console.log(currentCard); //effect
}

