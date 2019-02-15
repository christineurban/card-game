class Game {
    constructor(name, deck, players, dealer) {
        this._name = name; // string
        this._deck = deck; // Deck
        this._players = players; // array of Players
        this._dealer = dealer // Player
    }

    deal(numCards, includeDealer=false) {
        // use slice to make a copy and not a reference
        let allPlayers = this._players.slice();

        if (includeDealer) {
            allPlayers.push(this._dealer);
        }

        for (let i = 0; i < numCards; i++) {
            allPlayers.forEach((player) => {
                player.addToHand(this._deck.draw()[0]);
            });
        }
    }

    _removePlayer(player) {
        this._players = this._players.filter((p) => {
            return player.getName() !== p.getName();
        });
    }
}


export default Game;
