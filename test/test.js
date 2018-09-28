'use strict';

const assert = require('assert');
const expect = require('chai').expect;

const Card = require('../src/lib/card');
const Deck = require('../src/lib/deck');
const Suit = require('../src/lib/suit');

const build = require('../src/lib/deck-builder');


describe('Deck Builder', function() {
    context('build()', function() {
        it('should return an array of Cards', function() {
            const deck = new Deck(build());

            expect(deck._cards).to.be.an('array');
            expect(deck._length).to.deep.equal(52);
            expect(deck._cards[0]).to.be.an('object');
        });
    });
});

describe('Deck', function() {
    let deck;

    beforeEach(function() {
        deck = new Deck(build());
    });

    context('draw()', function() {
        it('should return a specified quantity of Cards in an array', function() {
            expect(deck.draw()).to.be.an('array').that.has.lengthOf(1);
            expect(deck.draw(10)).to.be.an('array').that.has.lengthOf(10);
            expect(deck.draw()[0]).to.be.an('object');
        });
    });

    context('shuffle()', function() {
        it('should rearrange the Cards in the Deck', function() {
            deck._cards.forEach((card) => {
                console.log(card._value);
            });
            const cardsBeforeShuffle = deck._cards;
            deck.shuffle();

            console.log('\n\n');
            cardsBeforeShuffle.forEach((card) => {
                console.log(card._value);
            });

            expect(deck._cards).to.not.deep.equal(cardsBeforeShuffle);
            expect(deck._length).to.equal(cardsBeforeShuffle.length);
        });
    });

    context('cut()', function() {
        it('should swap the Deck at the specified pivot point', function() {
            const cardsBeforeCut = deck._cards;
            deck.cut();

            expect(deck._cards).to.not.deep.equal(cardsBeforeCut);
            expect(deck._length).to.equal(cardsBeforeCut.length);
        });
    });
});
