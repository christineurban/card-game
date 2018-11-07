class Hand {
    constructor(cards=[]) {
        this._cards = cards; // array of Cards
    }

	addCard(card) {
		this._cards.push(card);
	}
}


module.exports = Hand;
