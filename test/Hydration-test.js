const chai = require('chai');
const expect = chai.expect;

const testHydrationData = require('../data/hydration-test-data.js')
const Hydration = require('../src/Hydration');

describe('Hydration', function() {
  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', function () {
    let hydration = new Hydration();
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should not need an argument', () => {
    expect(() => {
      new Hydration() 
    }).to.not.throw(Error);
  });

  it('should be able to hold on to hydration data', function() {
    let hydration = new Hydration(testHydrationData)
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should be able to return hydratation data via the users ID', function() {
    let hydration = new Hydration(testHydrationData)
    expect(hydration).to.be.an.instanceof(Hydration);
    expect(hydration.getHydrationDataById(11)).to.deep.equal([testHydrationData[10]])
  }); 

  it('should be able to return the num of ounces from any given day', function() {
    let hydration = new Hydration(testHydrationData)
    expect(hydration).to.be.an.instanceof(Hydration);
    expect(hydration.fluidConsumedForDay("2019/06/18", 3)).to.equal(40)
  })

  it('should be able to get users all time hydration data', function () {
    let hydration = new Hydration(testHydrationData)
    expect(hydration.allTimeHydration(1)).to.equal(885)
  })

  it('should return the previous 7 days of num ounces drank', function() {
    let hydration = new Hydration(testHydrationData)
    expect(hydration.fluidConsumedForAWeek("2019/06/23", 1)).to.deep.equal([96, 61, 91, 50, 50, 43, 39, 61 ])
  })

});
