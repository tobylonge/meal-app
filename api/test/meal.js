process.env.NODE_ENV = 'test';

let meal = require('../models/meal.models');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Meals', () => {
    beforeEach((done) => { //Before each test we empty the database
        meal.remove({}, (err) => { 
           done();           
        });        
    });

    /*
    * Test the /GET route
    */
    describe('/GET meals', () => {
        it('it should GET all meals', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    // res.body.length.should.be.eql(0);
                done();
            });
        });
    });

});