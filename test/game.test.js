import chai from "chai";
import chaiHttp from 'chai-http';
import app from "../app.js";

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
    
    

})