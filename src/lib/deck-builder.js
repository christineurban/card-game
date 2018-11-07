const Card = require('./card');
const Suit = require('./suit');

module.exports = function build() {
    const suits = [
        new Suit(Suit.CLUB.NAME, Suit.CLUB.COLOR),
        new Suit(Suit.DIAMOND.NAME, Suit.DIAMOND.COLOR),
        new Suit(Suit.HEART.NAME, Suit.HEART.COLOR),
        new Suit(Suit.SPADE.NAME, Suit.SPADE.COLOR)
    ]
    const values = [
        'ace',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'jack',
        'queen',
        'king'
    ];

    return [].concat.apply([], suits.map((suit) => {
        return values.map((value, i) => {
            return new Card(suit, i+1, `${value} of ${suit.getName()}s`);
        });
    }));
}
