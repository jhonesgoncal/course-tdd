var expect = require('chai').expect;
var calc = require('../src/main.js');

describe('Calc', function () {

  // smoke tests
  describe('smoke tests', function() {

    it('should exist the calc lib', function() {
      expect(calc).to.exist;
    });

    it('should exist the method `sum`', function() {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

    it('should exist the method `sub`', function() {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });

    it('should exist the method `mult`', function() {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });

    it('should exist the method `div`', function() {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });
  });

  describe('Sum', function() {
    it('sould return 4 when `sum(2,2)', function() {
      expect(calc.sum(2,2)).to.be.equal(4);
    });
  });

  describe('Sub', function() {
    it('sould return 4 when `sub(6,2)`', function() {
      expect(calc.sub(6,2)).to.be.equal(4);
    });

    it('sould return -4 when `sub(6,10)`', function() {
      expect(calc.sub(6,10)).to.be.equal(-4);
    });
  });

  describe('Div', function() {
    it('sould return 2 when `div(4,2)`', function() {
      expect(calc.div(4,2)).to.be.equal(2);
    });

     it('sould return `Nao e possivel divisao por zero!` when divibe by 0', function() {
      expect(calc.div(4,0)).to.be.equal('Nao e possivel divisao por zero!');
    });
  });

  describe('Mult', function() {
    it('sould return 4 when `mult(2,2)', function() {
      expect(calc.mult(2,2)).to.be.equal(4);
    });
  });
});
