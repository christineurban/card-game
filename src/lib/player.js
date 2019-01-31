class Player {
    constructor(name, hand, type='player', score=0) {
        this._name = name; // string
        this._hand = hand; // Hand
        this._type = type; // string
        this._score = score; // int
    }

    changeScore(score) {
        this._score = score;
    }

    updateScore(amount) {
        this._score += amount;
    }

    addToHand(card) {
        this._hand.addCard(card);
    }

    getName() {
        return this._name;
    }

    getHand() {
        return this._hand.getHand();
    }

    getScore() {
        return this._score;
    }
}


module.exports = Player;
