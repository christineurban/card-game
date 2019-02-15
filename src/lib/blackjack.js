import build from './deck-builder';
import Deck from './deck';
import Game from './game';


class Blackjack extends Game {
    constructor(players, dealer) {
        super(
            'Blackjack',
            new Deck(build()),
            players,
            dealer
        );
    }

    play() {
        const dealerCardFaceUp = this._setup();
        const standingPlayers = this._playRounds(dealerCardFaceUp);
        this._dealerRound(standingPlayers);
    }

    _setup() {
        console.log('\n\n----------------- B L A C K J A C K -----------------');

        this._deck.shuffle();
        this.deal(2, true);

        let dealerCardFaceUp = this._getNumericValue(this._dealer.getHand()[0].getValue());

        if (dealerCardFaceUp === 1) {
            dealerCardFaceUp = 11;
        };

        console.log(`\nDealer's face up card is ${dealerCardFaceUp}.`);

        return dealerCardFaceUp;
    }

    _playRounds(dealerCardFaceUp) {
        const standingPlayers = [];
        let round = 1;

        while (this._players.length) {
            console.log(`\n-------\nRound ${round}\n-------\n`)

            this._players.forEach((player) => {
                player.changeScore(this._calculateScore(player.getHand()));
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

                    this._removePlayer(player);
                }
            });

            round++;
        }

        return standingPlayers;
    }

    _dealerRound(standingPlayers) {
        if (!standingPlayers.length) {
            console.log('\nUt oh... everyone busts! Dealer wins.');
        }
        else {
            console.log(
                '\n--------------------------------------------\n' +
                'Dealer round: dealer shows face down card...' +
                '\n--------------------------------------------\n'
            )

            this._dealer.changeScore(this._calculateScore(this._dealer.getHand()));

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

    _calculateScore(hand) {
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

            let prevHand = possibleHands[0];

            possibleHands.some((hand) => {
                if (hand > 21) {
                    return true;
                }

                prevHand = hand;
            });

            return prevHand;
        }
    }

    _getNumericValue(value) {
        return value > 10 ? 10 : value;
    }
}


export default Blackjack;
