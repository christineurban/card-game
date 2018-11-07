class Game {
    constructor(name, deck, players) {
        this._name = name; // string
        this._deck = deck; // Deck
        this._players = players; // array of Players
    }

	deal(numCards) {
		for (let i = 0; i < numCards.length; i++) {
			this._players.forEach((player) => {
				const card = this._deck.draw();
				console.log(card);
				player.addToHand(card);
			});
		}
	}
}


module.exports = Game;
