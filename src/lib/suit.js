class Suit {
    static get CLUB() {
        return {
            NAME: 'club',
            COLOR: 'black'
        };
    }

    static get DIAMOND() {
        return {
            NAME: 'diamond',
            COLOR: 'red'
        };
    }

    static get HEART() {
        return {
            NAME: 'heart',
            COLOR: 'red'
        };
    }

    static get SPADE() {
        return {
            NAME: 'spade',
            COLOR: 'black'
        };
    }

    constructor(name, color) {
        this._name = name; // string
        this._color = color; // string
    }

    getName() {
        return this._name;
    }
}


module.exports = Suit;
