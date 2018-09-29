class Player {
    constructor(name, hand, score) {
        this._name = name; // string
        this._hand = hand; // Hand
        this._score = score; // int
    }

    changeScore(score) {
        this._score = score;
    }
}


module.exports = Player;
