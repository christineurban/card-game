class Deck {
    constructor(cards) {
        this._cards = cards; // array of Cards
    }

    draw(quantity=1) {
        const drawn = this._cards.slice(0, quantity);
        this._cards = this._cards.slice(quantity, this._cards.length);
        return drawn;
    }

    shuffle(times=1) {
        let currIndex = this._cards.length * times;
	    let temp, randIndex;

	    while (currIndex !== 0) {

		    randIndex = Math.floor(Math.random() * currIndex);
		    currIndex -= 1;

		    temp = this._cards[currIndex];
		    this._cards[currIndex] = this._cards[randIndex];
		    this._cards[randIndex] = temp;
	    }
	}

    cut(percentage=50) {
        const index = this._cards.length * percentage / 100;
        this._cards = this._cards.slice(index, this._cards.length).concat(this._cards.slice(0, index));
    }
}


module.exports = Deck;
