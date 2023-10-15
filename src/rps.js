class RPSResult {
    constructor(player1Choice, player2Choice) {
        this.player1Choice = player1Choice;
        this.player2Choice = player2Choice;
    }
    
    player1Wins() {
        return (this.player1Choice + 1) % 3 == this.player2Choice;
    }

    player2Wins() {
        return (this.player2Choice + 1) % 3 == this.player1Choice;
    }
}

export default RPSResult;
