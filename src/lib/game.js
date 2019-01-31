class Game {
    constructor(name, deck, allPlayers) {
        this._name = name; // string
        this._deck = deck; // Deck
        this._allPlayers = allPlayers; // array of Players
    }

    deal(numCards) {
        for (let i = 0; i < numCards; i++) {
            this._allPlayers.forEach((player) => {
                player.addToHand(this._deck.draw());
            });
        }
    }

    removePlayer(player) {
        this._players = this._players.filter((p) => {
            return player.getName() !== p.getName();
        });
    }
}


module.exports = Game;
