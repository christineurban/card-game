class Game {
    constructor(name, deck, players) {
        this._name = name; // string
        this._deck = deck; // Deck
        this._players = players; // array of Players
    }

	deal(numCards) {
		for (let i = 0; i < numCards; i++) {
			this._players.forEach((player) => {
				player.addToHand(this._deck.draw());
			});
		}
	}
}


module.exports = Game;
