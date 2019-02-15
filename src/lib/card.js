class Card {
    constructor(suit, value, name) {
        this._suit = suit; // Suit
        this._value = value; // int
        this._name = name; // string
    }

    getValue() {
        return this._value;
    }
}


export default Card;
