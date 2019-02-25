"use strict";

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env.NODE_ENV = 'test'; // const app = require('../index');

var chai = require('chai');

var chaiHttp = require('chai-http');

var expect = chai.expect;
chai.use(chaiHttp); //Our parent block

describe('Meals', function () {
  // beforeEach((done) => { //Before each test we empty the database
  //     meal.remove({}, (err) => { 
  //        done();           
  //     });        
  // });

  /*
  * Test the /GET route
  */
  describe('GET /api/v1/meals', function () {
    it('it should GET all meals', function (done) {
      chai.request(_index.default).get('/api/v1/meals').end(function (err, res) {
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
  describe('/GET /api/v1/meals/:id', function () {
    it('it should GET a single meal', function (done) {
      var id = 1;
      chai.request(_index.default).get("/api/v1/meals/".concat(id)).end(function (err, res) {
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
    it('it should not get a single meal record for invalid id', function (done) {
      var id = 500; //No id 500

      chai.request(_index.default).get("/api/v1/meals/".concat(id)).end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal('success');
        done();
      });
    });
  }); // Test to post a meal

  describe('POST /api/v1/meals', function () {
    it('it should add a single meal on post', function (done) {
      chai.request(_index.default).post('/api/v1/meals').send({
        name: 'Bread',
        category: 'Main Dishes',
        price: '200'
      }).end(function (err, res) {
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
  describe('PUT /api/v1/meals', function () {
    it('should edit a single meal on put', function (done) {
      chai.request(_index.default).put("/api/v1/meals/").send({
        id: 1,
        "name": "Yam",
        "category": "Main Dishes",
        "price": "100"
      }).end(function (err, res) {
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
  describe('DELETE /api/v1/meals/:id', function () {
    it('should delete an meal on delete', function (done) {
      var id = 1;
      chai.request(_index.default).delete("/api/v1/meals/".concat(id)).end(function (err, res) {
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
  }); // Get all selected meals

  describe('GET /api/v1/meals/selected', function () {
    it('it should GET all selected meals', function (done) {
      chai.request(_index.default).get('/api/v1/meals/selected').end(function (err, res) {
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
  }); // Test to post selected meals

  describe('POST /api/v1/meals/selected', function () {
    it('it should add selected meals', function (done) {
      chai.request(_index.default).post('/api/v1/meals/selected').send([1, 2]).end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
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
  }); // Test to post selected orders

  describe('POST /api/v1/meals/order', function () {
    it('it should add orders from user', function (done) {
      chai.request(_index.default).post('/api/v1/meals/order').send([1, 2]).end(function (err, res) {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
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
  }); // Get all selected orders

  describe('GET /api/v1/meals/order', function () {
    it('it should GET all orders from the day', function (done) {
      chai.request(_index.default).get('/api/v1/meals/order').end(function (err, res) {
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
});
//# sourceMappingURL=meal.js.map