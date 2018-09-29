class Deck {
    constructor(cards) {
        this._cards = cards; // array of Cards
        this._length = this._cards.length // does this get updated when draw changes the # of cards?)
    }

    draw(quantity=1) {
        const drawn = this._cards.slice(0, quantity);
        this._cards = this._cards.slice(quantity, this._length);
        return drawn;
    }

    shuffle(times=1) {
        // swap two random cards as many times as there are cards * times
        for (let i = 0; i < this._length * times; i++) {
            const index1 = Math.floor((Math.random() * this._length));
            const index2 = Math.floor((Math.random() * this._length));
            const temp = this._cards[index1];

            this._cards[index1] = this._cards[index2];
            this._cards[index2] = temp;
        }
    }

    cut(percentage=50) {
        const index = this._length * percentage / 100;
        this._cards = this._cards.slice(index, this._length).concat(this._cards.slice(0, index));
    }
}


module.exports = Deck;
