process.env.NODE_ENV = 'test';

// const app = require('../index');
import app from '../index';

let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;

chai.use(chaiHttp);

//Our parent block
describe('Meals', () => {
    // beforeEach((done) => { //Before each test we empty the database
    //     meal.remove({}, (err) => { 
    //        done();           
    //     });        
    // });

    /*
    * Test the /GET route
    */
    describe('GET /api/v1/meals', () => {
        it('it should GET all meals', (done) => {
        chai.request(app)
            .get('/api/v1/meals')
            .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('object');
                    expect(res.body.length).not.to.be.eql(0);
                    expect(res.body).to.have.property('status');
                    expect(res.body).to.have.property('data');
                    expect(res.body.status).to.be.a('string');
                    expect(res.body.status).to.equal('success');
                    expect(res.body.data).to.be.a('array');
                    expect(res.body.data[0]).to.be.a('object');
                    expect(res.body.data[0]).have.property('id');
                    expect(res.body.data[0]).have.property('name');
                    expect(res.body.data[0]).have.property('category');
                    expect(res.body.data[0]).have.property('price');
                    expect(res.body.data[0].id).to.be.a('number');
                    expect(res.body.data[0].name).to.be.a('string');
                    expect(res.body.data[0].category).to.be.a('string');
                    expect(res.body.data[0].price).to.be.a('string');
                done();
            });
        }); 
    });

    describe('/GET /api/v1/meals/:id', () => {
        it('it should GET a single meal', (done) => {
        const id = 1;
        chai.request(app)
            .get(`/api/v1/meals/${id}`)
            .end((err, res) => {
                console.log('res ', res.body);
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('object');
                    expect(res.body.length).not.to.be.eql(0);
                    expect(res.body).to.have.property('status');
                    expect(res.body).to.have.property('data');
                    expect(res.body.status).to.be.a('string');
                    expect(res.body.status).to.equal('success');
                    expect(res.body.data).to.be.a('object');
                    expect(res.body.data).have.property('id');
                    expect(res.body.data).have.property('name');
                    expect(res.body.data).have.property('category');
                    expect(res.body.data).have.property('price');
                    expect(res.body.data.id).to.be.a('number');
                    expect(res.body.data.name).to.be.a('string');
                    expect(res.body.data.category).to.be.a('string');
                    expect(res.body.data.price).to.be.a('string');
                    expect(res.body.data.id).to.equal(id);
                done();
            });
        });
        it('it should not get a single meal record for invalid id', (done) => {
            const id = 500; //No id 500
            chai.request(app)
              .get(`/api/v1/meals/${id}`)
              .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.a('object');
                expect(res.body).to.have.property('status');
                expect(res.body.status).to.equal('success'); 
                done();
              }); 
          }); 
    });

    // Test to post a meal
    describe('POST /api/v1/meals', () => {
        it('it should add a single meal on post', (done) => {
        chai.request(app)
            .post('/api/v1/meals')
            .send({ name: 'Bread', category: 'Main Dishes', price: '200' })
            .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.a('object');
            expect(res.body).to.have.property('status');
            expect(res.body).to.have.property('data');
            expect(res.body.status).to.be.a('string');
            expect(res.body.status).to.equal('success');
            expect(res.body.data).to.be.a('object');
            expect(res.body.data).have.property('id');
            expect(res.body.data).have.property('name');
            expect(res.body.data).have.property('category');
            expect(res.body.data).have.property('price');
            expect(res.body.data.id).to.be.a('number');
            expect(res.body.data.name).to.be.a('string');
            expect(res.body.data.category).to.be.a('string');
            expect(res.body.data.price).to.be.a('string');
            done();
            });
        });
    });

    describe('PUT /api/v1/meals', () => {
        it('should edit a single meal on put', (done) => {
          chai.request(app)
            .put(`/api/v1/meals/`)
            .send({
                id: 1,
                "name": "Yam",
                "category": "Main Dishes",
                "price": "100"
            })
            .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.a('object');
            expect(res.body).to.have.property('status');
            expect(res.body).to.have.property('data');
            expect(res.body.status).to.be.a('string');
            expect(res.body.status).to.equal('success');
            expect(res.body.data).to.be.a('object');
            expect(res.body.data).have.property('id');
            expect(res.body.data).have.property('name');
            expect(res.body.data).have.property('category');
            expect(res.body.data).have.property('price');
            expect(res.body.data.id).to.be.a('number');
            expect(res.body.data.name).to.be.a('string');
            expect(res.body.data.category).to.be.a('string');
            expect(res.body.data.price).to.be.a('string');
            expect(res.body.data.name).to.equal('Yam');
            done();
            });
        });
    });

    describe('DELETE /api/v1/meals/:id', () => {
        it('should delete an meal on delete', (done) => {
          const id = 1;
          chai.request(app)
            .delete(`/api/v1/meals/${id}`)
            .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.a('object');
            expect(res.body).to.have.property('status');
            expect(res.body).to.have.property('data');
            expect(res.body.status).to.be.a('string');
            expect(res.body.status).to.equal('success');
            expect(res.body.data).to.be.a('string');
            done();
            });
        });
    });
});