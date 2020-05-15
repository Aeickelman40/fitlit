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
  });

  it('should not need an argument', () => {
    expect(() => {
      new Hydration() 
    }).to.not.throw(Error);
  });

  it('should be able to hold on to hydration data', function() {
    let hydrationData = [{
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "numOunces": 75
    },
    {
      "userID": 3,
      "date": "2019/06/15",
      "numOunces": 47
    }];
    let hydration = new Hydration(hydrationData)
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should be able to return hydratation data via the users ID', function() {
    let hydrationData = [{
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "numOunces": 75
    },
    {
      "userID": 3,
      "date": "2019/06/15",
      "numOunces": 47
    }];

    let hydration = new Hydration(hydrationData)
    expect(hydration).to.be.an.instanceof(Hydration);
    expect(hydration.getHydrationDataById(3)).to.deep.equal([hydrationData[2]])
  }); 

  it('should be able to return hydratation data via the users ID', function() {
    let hydrationData = [{
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "numOunces": 75
    },
    {
      "userID": 3,
      "date": "2019/06/15",
      "numOunces": 47
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "numOunces": 96
    },
    {
      "userID": 2,
      "date": "2019/06/17",
      "numOunces": 96
    },
    {
      "userID": 3,
      "date": "2019/06/17",
      "numOunces": 28
    }];

    let hydration = new Hydration(hydrationData)
    expect(hydration).to.be.an.instanceof(Hydration);
    expect(hydration.getHydrationDataById(3)).to.deep.equal([hydrationData[2], hydrationData[5]])

  });

  it('should be able to return the num of ounces from any given day', function() {
    let hydrationData = [{
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    },
    {
      "userID": 2,
      "date": "2019/06/17",
      "numOunces": 96
    },
    {
      "userID": 44,
      "date": "2019/06/18",
      "numOunces": 30
    }];


    let hydration = new Hydration(hydrationData)
    expect(hydration).to.be.an.instanceof(Hydration);
    expect(hydration.fluidConsumedForDay("2019/06/18")).to.equal(30)
  })

  // it('should be able to return undefined if the date doesn\'t exist', function() {
  //   let hydrationData = [{
  //     "userID": 1,
  //     "date": "2019/06/15",
  //     "numOunces": 37
  //   },
  //   {
  //     "userID": 2,
  //     "date": "2019/06/17",
  //     "numOunces": 96
  //   },
  //   {
  //     "userID": 44,
  //     "date": "2019/06/18",
  //     "numOunces": 30
  //   }];


  //   let hydration = new Hydration(hydrationData)
  //   expect(hydration).to.be.an.instanceof(Hydration);
  //   expect(hydration.fluidConsumedForDay("2019/06/19")).to.equal(undefined)
  // })

  it('should be able to get users all time hydration data', function () {
    let hydrationData = [ 
      {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 37
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numOunces": 75
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "numOunces": 47
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numOunces": 96
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "numOunces": 96
      },
      {
        "userID": 3,
        "date": "2019/06/17",
        "numOunces": 28
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numOunces": 61
      }];

      let hydration = new Hydration(hydrationData)
      expect(hydration.allTimeHydration(1)).to.equal(194)
  })

  it('should return the previous 7 days of num ounces drank', function() {
   
   let hydrationData = [
    {
      "userID": 1,
      "date": "2019/06/14",
      "numOunces": 82
    },
    {
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "numOunces": 96
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "numOunces": 61
    },
    {
      "userID": 1,
      "date": "2019/06/19",
      "numOunces": 91
    },
    {
      "userID": 1,
      "date": "2019/06/20",
      "numOunces": 50
    },
    {
      "userID": 1,
      "date": "2019/06/21",
      "numOunces": 50
    },
    {
      "userID": 1,
      "date": "2019/06/22",
      "numOunces": 43
    },
    {
      "userID": 1,
      "date": "2019/06/23",
      "numOunces": 39
    },
  ];

    let hydration = new Hydration(hydrationData)
    expect(hydration.fluidConsumedForAWeek("2019/06/23", 1)).to.deep.equal([96, 61, 91, 50, 50, 43, 39 ])
  })

});
