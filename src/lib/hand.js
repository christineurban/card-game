class Hand {
    constructor(cards=[]) {
        this._cards = cards; // array of Cards
    }

    getHand() {
        return this._cards;
    }

	addCard(card) {
		this._cards.push(card);
	}
}


module.exports = Hand;
