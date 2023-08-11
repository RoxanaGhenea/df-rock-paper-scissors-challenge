import express from "express";
const router = express.Router();
import Result from "../src/rps.js";
import app from "../app.js";

const choices = ['rock', 'scissors', 'paper'];

router.post("/", (req, res) => {
    const player2Selection = (req.body.player2Choice);
    app.locals.Match.playerChoices.push(player2Selection);

    const firstPlayer = app.locals.Match.firstPlayer();
    const player1Choice = app.locals.Match.firstPlayerChoice();
    const secondPlayer = app.locals.Match.secondPlayer();
    const player2Choice = app.locals.Match.secondPlayerChoice();
    
    const CurrentMatch = new Result(player1Choice, player2Choice);
    const currentMatchResultPlayer1 = CurrentMatch.player1Wins();
    const currentMatchResultPlayer2 = CurrentMatch.player2Wins();
    const firstPlayerScore = app.locals.Match.firstPlayerScore(currentMatchResultPlayer1);
    const secondPlayerScore = app.locals.Match.secondPlayerScore(currentMatchResultPlayer2);
    const announceWinner = app.locals.Match.announceWinner();

    if (app.locals.Match.gameStops()) {
        res.render("gameResult", {
            firstPlayer: firstPlayer.name,
            secondPlayer: secondPlayer.name,
            firstPlayerScore: firstPlayerScore,
            secondPlayerScore: secondPlayerScore,
            announceWinner: announceWinner
        });
    } else {
        res.render("playerChoices", {
            firstPlayer: firstPlayer.name,
            secondPlayer: secondPlayer.name,
            firstPlayerChoice: app.locals.Match.getChoiceLabel(player1Choice),
            secondPlayerChoice: app.locals.Match.getChoiceLabel(player2Choice),
            firstPlayerScore: firstPlayerScore,
            secondPlayerScore: secondPlayerScore,
        });
    }
});

export default router;
