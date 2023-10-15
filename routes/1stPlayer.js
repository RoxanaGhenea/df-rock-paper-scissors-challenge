import express from "express";
const router = express.Router();
import app from "../app.js";


router.post('/', (req, res) => {
    const playerNames = [req.body.player1, req.body.player2];
    app.locals.Match.setup(playerNames);
    app.locals.Match.setMatchesRounds(req.body.rounds);
    res.redirect('/1stPlayer');
})

router.get('/', (req, res) => {
    const firstPlayer = app.locals.Match.firstPlayer();
    
    res.render('1stPlayer', {
        nameFirst: firstPlayer.name,
    });
})

export default router;