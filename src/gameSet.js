import Player from "./player.js";

class RPSGameSet {
    setup (playerNames, playerClass = Player) {
        this.players = playerNames.map (name => new playerClass(name));
    }
    optionLabels = ['rock', 'scissors', 'paper']
    playerChoices = [];
    _initialFirstPlayerScore = 0;
    _initialSecondPlayerScore = 0;

    clear() {
        this.playerChoices = [];
        this._initialFirstPlayerScore = 0;
        this._initialSecondPlayerScore = 0;
        this._matchesNo = 0;
    }

    setMatchesRounds(rounds) {
        this._matchesNo = rounds;
    }

    getChoiceLabel(choice) {
        return this.optionLabels[choice];
    }

    gameStops() {
        return this._matchesNo == this.playerChoices.length / 2;
    }

    firstPlayer() {
        return this.players[0];
    }

    firstPlayerChoice() {
        return this.playerChoices[this.playerChoices.length - 2]; 
    }

    firstPlayerScore(player1Wins) {
        if (player1Wins) {
            this._initialFirstPlayerScore += 1;
        }
        return this._initialFirstPlayerScore;  
    }

    secondPlayer() {
        return this.players[1];
    }

    secondPlayerChoice() {
        return this.playerChoices[this.playerChoices.length - 1];
    }

    secondPlayerScore(player2Wins) {
        if (player2Wins) {
            this._initialSecondPlayerScore += 1;
        }
        return this._initialSecondPlayerScore;  
    }

    announceWinner() {
        if (this._initialFirstPlayerScore > this._initialSecondPlayerScore) {
            return `${this.firstPlayer().name} has won!`;
        }
        if (this._initialFirstPlayerScore < this._initialSecondPlayerScore) {
            return `${this.secondPlayer().name} has won!`;
        }
        return "It's a tie.";
    }
}
 
export default RPSGameSet;