const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');

describe('Hydration', function() {
  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', function () {
    let hydration = new Hydration();
    expect(hydration).to.be.an.instanceof(Hydration);
  })
});
