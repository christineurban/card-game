'use strict';

import build from '../../../src/lib/deck-builder';
import Card from '../../../src/lib/card';
import Deck from '../../../src/lib/deck';

const expect = require('chai').expect;


describe('Deck Builder', function() {
    context('build()', function() {
        it('should return an array of Cards', function() {
            const deck = new Deck(build());

            expect(deck._cards).to.be.an('array');
            expect(deck._cards.length).to.deep.equal(52);
            expect(deck._cards[0]).to.be.instanceOf(Card);
        });
    });
});
