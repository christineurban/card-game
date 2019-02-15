'use strict';

import Blackjack from '../../../src/lib/blackjack';
import Hand from '../../../src/lib/hand';
import Player from '../../../src/lib/player';

const expect = require('chai').expect;


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
