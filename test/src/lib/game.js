'use strict';

const assert = require('assert');
const expect = require('chai').expect;

const build = require('../../../src/lib/deck-builder');
const Card = require('../../../src/lib/card');
const Deck = require('../../../src/lib/deck');
const Game = require('../../../src/lib/game');
const Hand = require('../../../src/lib/hand');
const Player = require('../../../src/lib/player');


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

    context('deal(2)', function() {
        it('should give each player two Cards and put it in their Hand', function() {
            game.deal(2);

            game._players.forEach((player) => {
                expect(player._hand).to.be.instanceOf(Hand);
                expect(player._hand.getHand()).to.have.lengthOf(2);
            });
        });
    });
});
