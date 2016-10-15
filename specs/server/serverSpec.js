'use strict';

var expect = require('chai').expect;

var request = require('supertest');
var app = require('../../server/server');

describe('Accessing protected endpoints', function() {
  it('should return forbidden when accessing links with no token', function(done) {
    request(app)
      .get('/api/links')
      .expect(401, done);
  });
  it('should return forbidden when posting links with no token', function(done) {
    request(app)
      .post('/api/links')
      .send({url: 'http://www.google.com'})
      .expect(401, done);
  });
});