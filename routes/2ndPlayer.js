import express from 'express';
const router = express.Router();
import app from "../app.js";

router.post('/', (req, res) => {
    const player1Selection = parseInt(req.body.player1Choice);
    app.locals.Match.playerChoices.push(player1Selection);

    res.redirect('/2ndPlayer');
})

router.get('/', (req, res) => {
    const secondPlayer = app.locals.Match.secondPlayer();

    res.render('2ndPlayer', {
        nameSecond: secondPlayer.name,
    })
}) 

export default router;