import build from './deck-builder';
import Deck from './deck';

class Blackjack {
    constructor(players, dealer) {
        this._players = players;
        this._dealer = dealer;
        this._deck = new Deck(build());
    }

    play() {
        console.log('\n\n----------------- B L A C K J A C K -----------------');
        let round = 1;

        this._deck.shuffle();

        for (let i = 0; i < 2; i++) {
            this._players.forEach((player) => {
                player.addToHand(this._deck.draw()[0]);
            });
            this._dealer.addToHand(this._deck.draw()[0]);
        }

        let dealerCardFaceUp = this._getNumericValue(this._dealer.getHand()[0].getValue());

        if (dealerCardFaceUp === 1) {
            dealerCardFaceUp = 11;
        };

        console.log(`\nDealer's face up card is ${dealerCardFaceUp}.`)

        let standingPlayers = [];

        while (this._players.length) {
            console.log(`\n-------\nRound ${round}\n-------\n`)

            this._players.forEach((player) => {
                player.changeScore(this.calculateScore(player.getHand()));
                const score = player.getScore();

                if (score < 16 || score === 16 && dealerCardFaceUp > 6) {
                    console.log(`${player.getName()} has ${score}: hit me.`);
                    player.addToHand(this._deck.draw()[0]);
                }
                else {
                    if (score > 21) {
                        console.log(`BUST at ${score}, ${player.getName()} is out.`);
                        standingPlayers.filter((p) => {
                            return player.getName() !== p.getName();
                        });
                    }
                    else {
                        console.log(`${player.getName()} stands at ${score}.`);
                        standingPlayers.push(player);
                    }

                    this.removePlayer(player);
                }
            });

            round++;
        }

        if (!standingPlayers.length) {
            console.log('\nUt oh... everyone busts! Dealer wins.');
        }
        else {
            console.log(
                '\n--------------------------------------------\n' +
                'Dealer round: dealer shows face down card...' +
                '\n--------------------------------------------\n'
            )

            this._dealer.changeScore(this.calculateScore(this._dealer.getHand()));

            const dealerScore = this._dealer.getScore();

            if (dealerScore > 21) {
                console.log(`Dealer busts at ${dealerScore}! Everyone wins :)`);
            }
            else {
                console.log(`Dealer's score is ${dealerScore}. Can it be beat?\n`);
            }

            standingPlayers.forEach((player) => {
                const score = player.getScore();

                if (player.getScore() > dealerScore) {
                    console.log(`${player.getName()} beats the dealer with ${score}!`);
                }
                else if (player.getScore() === dealerScore) {
                    console.log(`Push, ${player.getName()}'s score of ${score} equals the dealer's.`);
                }
                else {
                    console.log(`LOSE. ${player.getName()}'s score of ${score} is below the dealer's.`);
                }
            });
        }

        console.log('\n\n------------------- T H E ~ E N D -------------------\n\n')
    }

    calculateScore(hand) {
        const cards = []
        let total = 0;
        let aceCount = 0;

        hand.forEach((card) => {
            const value = this._getNumericValue(card.getValue());
            cards.push(value);

            if (value === 1) {
                aceCount++;
            }
            else {
                total += value;
            }
        });
        console.log(cards)

        if (!aceCount) {
            return total;
        }
        else {
            let possibleHands = [];

            for (let i = 0; i <= aceCount; i++) {
                possibleHands.push(total + aceCount + i * 10)
            }

            let prevHand;

            possibleHands.forEach((hand) => {
                if (hand > 21) {
                    return prevHand || hand;
                }
                else {
                    prevHand = hand;
                }
            });

            return prevHand;
        }
    }

    _getNumericValue(value) {
        return value > 10 ? 10 : value;
    }

    removePlayer(player) {
        this._players = this._players.filter((p) => {
            return player.getName() !== p.getName();
        });
    }
}


export default Blackjack;
