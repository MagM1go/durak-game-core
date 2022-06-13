import { randomNumber } from "./utils";

export class Card {
    public readonly suit: string;
    public readonly name: string;

    constructor(suit: string, name: string) {
        this.suit = suit;
        this.name = name;
    }
}

export class GlobalDeck {
    // Later must be replaced with `private`.
    public cards: { [suit: string]: string[] } = {
        "Heart": [
            "6", "7", "8",  "9", "10",
            "Jack", "Lady", "King", "Ace"
        ],
        "Diamond": [
            "6", "7", "8",  "9", "10",
            "Jack", "Lady", "King", "Ace"
        ],
        "Club": [
            "6", "7", "8",  "9", "10",
            "Jack", "Lady", "King", "Ace"
        ],
        "Spade": [
            "6", "7", "8",  "9", "10",
            "Jack", "Lady", "King", "Ace"
        ]
    };
    public readonly suits: string[] = Object.keys(this.cards);
    public cardsNames: string[];

    constructor() {
        let cardsNames: string[] = [];
        let cardSuitsGroups = Object.values(this.cards);

        cardSuitsGroups.forEach(suit => {
            suit.forEach(cardName => {
                cardsNames.push(cardName);
            });
        });

        this.cardsNames = cardsNames;
    }

    private deleteCardsAfterGetting(suit: string, cardName: string): any {
        // Deleting from `this.cards`:
        let newSuitCards = this.cards[suit];
        const suitCardIndex = newSuitCards.indexOf(cardName);

        newSuitCards.splice(suitCardIndex, 1);
        this.cards[suit] = newSuitCards;

        // Deleteing from `this.cardsNames`:
        const cardIndex = this.cardsNames.indexOf(cardName);
        this.cardsNames.splice(cardIndex, 1);
    }
        
    public getRandomCard(): Card {
        let randomIndex = randomNumber(0, this.suits.length - 1);
        const suit = this.suits[randomIndex];
        
        randomIndex = randomNumber(0, this.cardsNames.length - 1);
        const cardName: string = this.cardsNames[randomIndex];

        // IMPORTANT! Deleting card from deck. Not important 
        this.deleteCardsAfterGetting(suit, cardName);

        return new Card(suit, cardName);
    }
}

export const globalDeck = new GlobalDeck();

export class PlayerDeck {
    private readonly cards: Card[] = [];

    constructor() {
        for (let i = 0; i < 6; i++) {
            const card = globalDeck.getRandomCard();
            this.cards.push(card);
        }
    }
}
