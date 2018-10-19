class Player {
    constructor(name, hand, score=0) {
        this._name = name; // string
        this._hand = hand; // Hand
        this._score = score; // int
    }

    changeScore(score) {
        this._score = score;
    }

	addToHand(card) {
		this._hand.addCard(card);
	}
}


module.exports = Player;
