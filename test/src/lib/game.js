'use strict';

import build from '../../../src/lib/deck-builder';
import Deck from '../../../src/lib/deck';
import Game from '../../../src/lib/game';
import Hand from '../../../src/lib/hand';
import Player from '../../../src/lib/player';

const expect = require('chai').expect;


describe('Game', function() {
    let game;

    beforeEach(function() {
        game = new Game(
            'Blackjack',
            new Deck(build()),
            [
                new Player('Player 1', new Hand()),
                new Player('Player 2', new Hand()),
                new Player('Player 3', new Hand()),
                new Player('Player 4', new Hand())
            ]
        );
    });

    context('deal 2', function() {
        it('should give each player two Cards and put it in their Hand', function() {
            game.deal(2);

            game._players.forEach((player) => {
                expect(player._hand).to.be.instanceOf(Hand);
                expect(player._hand.getHand()).to.have.lengthOf(2);
            });
        });
    });
});
