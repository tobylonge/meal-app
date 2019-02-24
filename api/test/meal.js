process.env.NODE_ENV = 'test';

let app = '../index';
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
const expect = require("chai").expect;

chai.use(chaiHttp);

//Our parent block
describe('Meals', () => {

    /*
    * Test the /GET route
    */
    describe('/GET meals', () => {
        it('it should GET all meals', (done) => {
        chai.request(app)
            .get('/api/v1/meals')
            .end((err, res) => {
                console.log('res ', res);
                    expect(res.status).to.be(200);
                    expect(res.body).to.be.an('array');
                    // res.body.length.should.be.eql(0);
                done();
            });
        });
    });

});