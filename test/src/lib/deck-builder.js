'use strict';

const expect = require('chai').expect;

const build = require('../../../src/lib/deck-builder');
const Card = require('../../../src/lib/card');
const Deck = require('../../../src/lib/deck');


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
