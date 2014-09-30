var compareStrings = require('../lib/compareStrings.js');
var chai         = require('chai');
var expect       = chai.expect;
/* jshint camelcase: false */
describe('compareStrings', function () {
  describe('compare', function () {
    it('should correct compare for the same strings', function (done) {
       expect(compareStrings('NAME', 'NAME')).to.eql(true);
       done();
    });
    it('should correct compare for the modified strings', function (done) {
       expect(compareStrings('NAEM', 'NAME')).to.eql(true);
       done();
    });
    it('should correct compare for the different strings', function (done) {
       expect(compareStrings('NAME1', 'NAME')).to.eql(false);
       done();
    });
    it('should correct compare for the different strings', function (done) {
       expect(compareStrings.bind(null, 'NAME')).to.throw(Error);
       done();
    });
    it('should correct compare for the different strings', function (done) {
       expect(compareStrings.bind('NAME1', null)).to.throw(Error);
       done();
    });
    it('should correct compare for the different strings', function (done) {
       expect(compareStrings.bind(undefined, 'NAME2')).to.throw(Error);
       done();
    });
    it('should correct compare for the different strings', function (done) {
       expect(compareStrings.bind('NAME1', undefined)).to.throw(Error);
       done();
    });
  });
});

//ok(compareStrings('NAME', 'NAME'));
//ok(compareStrings('NAEM', 'NAME'));
//false(compareStrings('NAME1', 'NAME'));
