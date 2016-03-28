var cs = require('../lib/compareStrings.js');
var chai         = require('chai');
var expect       = chai.expect;
/* jshint camelcase: false */
describe('compareStrings', function () {
  describe('test compareStrings sort', function () {
    it('should correct compare for the same strings', function () {
       expect(cs.compareStringsSort('NAME', 'NAME')).to.eql(true);
    });
    it('should correct compare for the modified strings', function () {
       expect(cs.compareStringsSort('NAEM', 'NAME')).to.eql(true);
    });
    it('should correct compare for the different strings', function () {
       expect(cs.compareStringsSort('NAME1', 'NAME')).to.eql(false);
    });
    it('should correct compare for the different strings', function () {
       expect(cs.compareStringsSort('NAME', 'NAME1')).to.eql(false);
    });
    it('should correct compare for the different strings', function () {
       expect(cs.compareStringsSort('NNAME', 'NAME1')).to.eql(false);
    });
    it('should throws exception if first parameter is null', function () {
       expect(cs.compareStringsSort.bind(null, 'NAME')).to.throw(Error);
    });
    it('should throws exception if second parameter is null', function () {
       expect(cs.compareStringsSort.bind('NAME1', null)).to.throw(Error);
    });
    it('should throws exception if first parameter is undefined',
    function () {
       expect(cs.compareStringsSort.bind(undefined, 'NAME2')).to.throw(Error);
    });
    it('should throws exception if second parameter is undefined',
    function () {
       expect(cs.compareStringsSort.bind('NAME1', undefined)).to.throw(Error);
    });
  });
  describe('test compareStrings dictionary', function () {
    it('should correct compare for the same strings', function () {
       expect(cs.compareStringsDict('NAME', 'NAME')).to.eql(true);
    });
    it('should correct compare for the modified strings', function () {
       expect(cs.compareStringsDict('NAEM', 'NAME')).to.eql(true);
    });
    it('should correct compare for the different strings', function () {
       expect(cs.compareStringsDict('NAME1', 'NAME')).to.eql(false);
    });
    it('should correct compare for the different strings', function () {
       expect(cs.compareStringsDict('NAME', 'NAME1')).to.eql(false);
    });
    it('should correct compare for the different strings', function () {
       expect(cs.compareStringsDict('NNAME', 'NAME1')).to.eql(false);
    });
    it('should throws exception if first parameter is null', function () {
       expect(cs.compareStringsDict.bind(null, 'NAME')).to.throw(Error);
    });
    it('should throws exception if second parameter is null', function () {
       expect(cs.compareStringsDict.bind('NAME1', null)).to.throw(Error);
    });
    it('should throws exception if first parameter is undefined',
    function () {
       expect(cs.compareStringsDict.bind(undefined, 'NAME2')).to.throw(Error);
    });
    it('should throws exception if second parameter is undefined',
    function () {
       expect(cs.compareStringsDict.bind('NAME1', undefined)).to.throw(Error);
    });
  });
  describe('test compareStrings slice', function () {
    it('should correct compare for the same strings', function () {
       expect(cs.compareStringsSlice('NAME', 'NAME')).to.eql(true);
    });
    it('should correct compare for the modified strings', function () {
       expect(cs.compareStringsSlice('NAEM', 'NAME')).to.eql(true);
    });
    it('should correct compare for the different strings', function () {
       expect(cs.compareStringsSlice('NAME1', 'NAME')).to.eql(false);
    });
    it('should correct compare for the different strings', function () {
       expect(cs.compareStringsSlice('NAME', 'NAME1')).to.eql(false);
    });
    it('should correct compare for the different strings', function () {
       expect(cs.compareStringsSlice('NNAME', 'NAME1')).to.eql(false);
    });
    it('should throws exception if first parameter is null', function () {
       expect(cs.compareStringsSlice.bind(null, 'NAME')).to.throw(Error);
    });
    it('should throws exception if second parameter is null', function () {
       expect(cs.compareStringsSlice.bind('NAME1', null)).to.throw(Error);
    });
    it('should throws exception if first parameter is undefined',
    function () {
       expect(cs.compareStringsSlice.bind(undefined, 'NAME2')).to.throw(Error);
    });
    it('should throws exception if second parameter is undefined',
    function () {
       expect(cs.compareStringsSlice.bind('NAME1', undefined)).to.throw(Error);
    });
  });
});
