var compareStrings = require('../lib/compareStrings.js');
var chai         = require('chai');
var expect       = chai.expect;
/* jshint camelcase: false */
describe('compareStrings', function () {
  describe('compare', function () {
    it('should have correct compare for the same strings', function (done) {
       expect(compareStrings('NAME', 'NAME')).to.eql(true);
       done();
    });
    it('should have correct compare for the modified strings', function (done) {
       expect(compareStrings('NAEM', 'NAME')).to.eql(true);
       done();
    });
    it('should have correct compare for the different strings', function (done) {
       expect(compareStrings('NAME1', 'NAME')).to.eql(false);
       done();
    });
  });
});

//ok(compareStrings('NAME', 'NAME'));
//ok(compareStrings('NAEM', 'NAME'));
//false(compareStrings('NAME1', 'NAME'));
