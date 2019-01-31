import Card from './card';
import Suit from './suit';

export default function build() {
    const suits = [
        new Suit(Suit.CLUB.NAME, Suit.CLUB.COLOR),
        new Suit(Suit.DIAMOND.NAME, Suit.DIAMOND.COLOR),
        new Suit(Suit.HEART.NAME, Suit.HEART.COLOR),
        new Suit(Suit.SPADE.NAME, Suit.SPADE.COLOR)
    ]
    const names = [
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
        return names.map((name, i) => {
            return new Card(suit, i+1, `${name} of ${suit.getName()}s`);
        });
    }));
}
