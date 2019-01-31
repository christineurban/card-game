'use strict';

const expect = require('chai').expect;

const Blackjack = require('../../../src/lib/blackjack');
const Hand = require('../../../src/lib/hand');
const Player = require('../../../src/lib/player');


describe('Blackjack', function() {
    let blackjack;

    beforeEach(function() {
        blackjack = new Blackjack(
            [
                new Player('Player 1', new Hand()),
                new Player('Player 2', new Hand()),
                new Player('Player 3', new Hand()),
                new Player('Player 4', new Hand())
            ],
            new Player('Dealer', new Hand(), 'dealer')
        );
    });

    context('play', function() {
        it('should play a full game of Blackjack', function() {
            blackjack.play();

            expect(blackjack._players).to.be.an('array').that.has.lengthOf(0);
        });
    });
});
