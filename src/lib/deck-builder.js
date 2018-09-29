const Card = require('./card');
const Suit = require('./suit');

module.exports = function build(num_decks=1, mixed_decks=1, include=null, exclude=null) {
    const suits = [
        new Suit('spade', 'black'),
        new Suit('diamond', 'red'),
        new Suit('club', 'black'),
        new Suit('heart', 'black')
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
            return new Card(suit, i+1, `${value} of ${suit._name}s`);
        });
    }));
}
