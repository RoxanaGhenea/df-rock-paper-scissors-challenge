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
    
})