import build from './deck-builder';
import Deck from './deck';
import Game from './game';

class Blackjack extends Game {
    constructor(players) {
        super().constructor(
            'Blackjack',
            new Deck(build()).shuffle(),
            players
        )
    }

    play() {
        this.deal(2);

        const dealer = this._players.filter((player) => {
            return player.getType === 'dealer';
        });

        let dealerCardFaceUp = this._getNumericValue(dealer.getHand()[0].getValue());

        if (dealerCardFaceUp === 'ace') {
            dealerCardFaceUp = 11;
        };

        const standingPlayers = [];

        while (this._players) {
            this._players.forEach((player) => {
                this.setScore(player);
                const score = player.getScore();

                if (score < 16 || score === 16 && dealerCardFaceUp > 6) {
                    console.log(`${player.getName()} has ${score}: hit me.`);
                    player.addToHand(this._deck.draw());
                }
                else {
                    if (score === 21) {
                        console.log(`Blackjack! ${player.getName()} wins.`);
                    }
                    else if (score > 21) {
                        console.log(`BUST at ${score} :( ${player.getName()} is out.`);
                    }
                    else {
                        console.log(`${player.getName()} stands at ${score}.`);
                        standingPlayers.push(player);
                    }

                    this.removePlayer(player);
                }
            });
        }

        const dealerScore = dealer.getScore();

        if (dealerScore > 21) {
            console.log(`Dealer busts at ${dealerScore}! Everyone wins :)`)
        }
        else {
            console.log(`Dealer's score is ${dealerScore}. Can it be beat?`)
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
                console.log(`LOSE. ${player.getName()}'s score of ${score} is below the dealer's.`)
            }

            this.removePlayer(player);
        });
    }

    setScore(player) {
        let total = 0;
        let aceCount = 0;

        player.getHand().forEach((card) => {
            const value = this._getNumericValue(card.getValue);

            if (value === 'ace') {
                aceCount++;
            }
            else {
                total += value;
            }
        });

        if (!aceCount) {
            player.updateScore(total);
        }
        else {
            let possibleHands = [];

            for (let i = 0; i <= aceCount; i++) {
                possibleHands.push(total + aceCount + i * 10)
            }

            let prevHand;

            possibleHands.forEach((hand) => {
                if (hand >= 21) {
                    return prevHand ? player.updateScore(prevHand) : player.updateScore(hand);
                }
                else {
                    prevHand = hand;
                }
            });

            player.updateScore(prevHand);
        }
    }

    _getNumericValue(value) {
        switch (value) {
        case 'ace':
            return 'ace';
        case 'two':
            return 2;
        case 'three':
            return 3;
        case 'four':
            return 4;
        case 'five':
            return 5;
        case 'six':
            return 6;
        case 'seven':
            return 7;
        case 'eight':
            return 8;
        case 'nine':
            return 9;
        case 'ten':
        case 'jack':
        case 'queen':
        case 'king':
            return 10;
        }
    }
}


export default Blackjack;
