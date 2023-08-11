import chai from "chai";
import chaiHttp from 'chai-http';
import app from "../app.js";
import RPSGameSet from "../src/gameSet.js";

chai.use(chaiHttp);
const expect = chai.expect;

describe('Rock Paper Scissors Game Tests', () => {
    it('Should render the index page', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.include('Welcome to Rock, Paper, Scissors Game');
                done();
            });
    });

    it('Should set up players and rounds', (done) => {
        chai.request(app)
            .post('/1stPlayer')
            .send({ player1: 'Player1', player2: 'Player2', rounds: 3 })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res).to.be.html;
                expect(res.redirects).to.have.lengthOf(1);
                expect(res.redirects[0]).to.match(/\/1stPlayer$/);
                done();
            });
    });

    it('Should make choices for players', (done) => {
        chai.request(app)
            .post('/2ndPlayer')
            .send({ player1Choice: 0 })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.request.url).to.match(/\/2ndPlayer$/);
                done();
            });
    });

    it('Should clear game data after cleanup', (done) => {
        chai.request(app)
            .post('/cleanup')
            .end((err, res) => {
                expect(res).to.redirectTo(/\/$/);
                done();
            });
    });

    it('Should display "Next turn" link after playerChoices', (done) => {
        chai.request(app)
            .post('/playerChoices')
            .send({ player2Choice: '0' })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.include('Next turn');
                done();
            });
    });

    it('Should display game result', (done) => {
        chai.request(app)
            .post('/playerChoices')
            .send({ player2Choice: '2' })
            .end((err, res) => {
                expect(res).to.have.status(200);
                const expectedText = "<h1>\n         chose  and  chose \n        's score is 0 and 's score is 0\n    </h1>";
                expect(res.text).to.include(expectedText);
                done();
            });
    });

    it('Should correctly determine if the game stops', () => {
        const gameSet = new RPSGameSet();
        gameSet.setMatchesRounds(3);
        gameSet.playerChoices.push(0, 1, 0, 1, 2, 0);
        expect(gameSet.gameStops()).to.be.true;
    });

    it('Should store player choices', () => {
        const gameSet = new RPSGameSet();
        gameSet.playerChoices.push(0);
        expect(gameSet.playerChoices).to.deep.equal([0]);
    });

    it('Should correctly get choice label', () => {
        const gameSet = new RPSGameSet();
        const choiceLabel = gameSet.getChoiceLabel(1);
        expect(choiceLabel).to.equal('scissors');
    });

    it('Should correctly calculate first player score', () => {
        const gameSet = new RPSGameSet();
        gameSet.firstPlayerScore(true);
        expect(gameSet.firstPlayerScore()).to.equal(1);
    });

    it('Should correctly calculate second player score', () => {
        const gameSet = new RPSGameSet();
        gameSet.secondPlayerScore(false);
        expect(gameSet.secondPlayerScore()).to.equal(0);
    });
    
})