'use strict';

import build from '../../../src/lib/deck-builder';
import Card from '../../../src/lib/card';
import Deck from '../../../src/lib/deck';

const expect = require('chai').expect;


describe('Deck', function() {
    let deck;

    beforeEach(function() {
        deck = new Deck(build());
    });

    context('draw', function() {
        it('should return one Card in an array', function() {
            expect(deck.draw()).to.be.an('array').that.has.lengthOf(1);
        });

        it('should be an instance of a Card', function() {
            expect(deck.draw()[0]).to.be.instanceOf(Card);
        });
    });

    context('draw 10', function() {
        it('should return 10 Cards in an array', function() {
            expect(deck.draw(10)).to.be.an('array').that.has.lengthOf(10);
        });
    });

    context('shuffle', function() {
        it('should rearrange the Cards in the Deck', function() {
            const staticDeck = JSON.parse(JSON.stringify(deck));
            deck.shuffle();

            expect(deck._cards).to.not.deep.equal(staticDeck._cards);
        });
    });

    context('cut', function() {
        it('should swap the Deck at the specified pivot point', function() {
            const staticDeck = JSON.parse(JSON.stringify(deck));
            deck.cut();

            expect(deck._cards).to.not.deep.equal(staticDeck._cards);
            expect(deck._cards.length).to.equal(staticDeck._cards.length);
        });
    });
});
