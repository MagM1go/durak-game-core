import { globalDeck, PlayerDeck } from "./src/cards";

const myDeck = new PlayerDeck();
const botDeck = new PlayerDeck();

console.log(myDeck);
console.log(botDeck);

console.log(globalDeck.cards);
