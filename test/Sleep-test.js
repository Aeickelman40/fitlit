const chai = require('chai');
const expect = chai.expect;

const testSleepData = require('../data/test-data.js')
const Sleep = require('../src/Sleep');

describe('Sleep', function() {
  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', function () {
    let sleep = new Sleep();
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should not need an argument', () => {
    expect(() => {
      new Sleep() 
    }).to.not.throw(Error);
  });

  it('should be able to hold on to sleep data', function() {
    let sleep = new Sleep(testSleepData)
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should be able to return sleep data via the users ID', function() {
    let sleep = new Sleep(testSleepData)
    expect(sleep).to.be.an.instanceof(Sleep);
    expect(sleep.getSleepDataById(3)).to.equal([testSleepData[2]]);
  }); 

  it('should be able to return all time average hours slept a day', function() {
    let sleep = new Sleep(testSleepData)
    expect(sleep).to.be.an.instanceof(Sleep);
    expect(sleep.avgSleptPerDay(1)).to.deep.equal(7.6)
  }); 

  it('should be able to return all time average hours slept a day', function() {
    let sleep = new Sleep(testSleepData)
    expect(sleep).to.be.an.instanceof(Sleep);
    expect(sleep.avgSleepQualityAllTime(1)).to.deep.equal(2.7)
  });

  it('should be able to return sleep data via the users ID', function() {
    let sleep = new Sleep(testSleepData)
    expect(sleep).to.be.an.instanceof(Sleep);
    expect(sleep.hoursSleptOnDay("2019/06/15", 3)).to.deep.equal(10.8)
  }); 


  it('should be able to return sleep data via the users ID', function() {
    let sleep = new Sleep(testSleepData)
    expect(sleep).to.be.an.instanceof(Sleep);
    expect(sleep.sleepQualityOnDay("2019/06/15", 3)).to.deep.equal(4.7)
  });
  
  it('should be able to return a weeks worth of hours slept', function() {
    let sleep = new Sleep(testSleepData)
    expect(sleep).to.be.an.instanceof(Sleep);
    expect(sleep.hoursSleptEachDayInAWeek("2019/06/22", 1)).to.deep.equal([4.1, 8, 10.4, 10.7, 9.3, 7.8, 7])
  }); 
  it('should be able to return a weeks worth of quality sleep data', function() {
    let sleep = new Sleep(testSleepData)
    expect(sleep).to.be.an.instanceof(Sleep);
    expect(sleep.sleepQualityEachDayForWeek("2019/06/22", 1)).to.deep.equal([ 3.8, 2.6, 3.1, 1.2, 1.2, 4.2, 3])
  }); 

  it('should be able to return average sleep quality for all users', function() {
    let sleep = new Sleep(testSleepData)
    expect(sleep).to.be.an.instanceof(Sleep);
    expect(sleep.avgSleepQualityForAllUsers()).to.deep.equal(2.9)
  }); 

  it('should do return the top sleepers', function() {
    let sleep = new Sleep(testSleepData)
    expect(sleep).to.be.an.instanceof(Sleep);
    expect(sleep.usersWhoSleptMostOnGivenDay("2019/06/27")).to.deep.equal([
      {
        userID: 11,
        date: '2019/06/27',
        hoursSlept: 10.7,
        sleepQuality: 2.2
      }
    ])
  })

  it('should return the top sleepers of the week', function() {
    let sleep = new Sleep(testSleepData)
    expect(sleep).to.be.an.instanceof(Sleep);
    expect(sleep.sleepQualityForUsersAbove3("2019/06/24")).to.deep.equal([
      44, 45, 47, 48, 49, 50,  1,  3,  5,  6, 10,
      11, 12, 15, 16, 17, 20, 21, 22, 23, 31, 32,
      34, 36, 37,  4,  8, 14, 18, 25, 26, 28, 29,
      35, 42, 46, 13, 19, 24, 27, 40, 41,  2, 39,
      43,  9, 33, 38
    ])
  })
});

it('should return the top sleepers, one or more', function() {
  let sleep = new Sleep(testSleepData)
  expect(sleep).to.be.an.instanceof(Sleep);
  expect(sleep.usersWhoSleptMostOnGivenDay("2019/06/28")).to.deep.equal([
    {
      userID: 38,
      date: '2019/06/28',
      hoursSlept: 10.5,
      sleepQuality: 1.6
    },
    {
      userID: 39,
      date: '2019/06/28',
      hoursSlept: 10.5,
      sleepQuality: 3.2
    }
  ])
})

it('should return the top sleepers of the week', function() {
  let sleep = new Sleep(testSleepData);
  expect(sleep).to.be.an.instanceof(Sleep);
  expect(sleep.findUsersWhoNeedNap("2019/06/15")).to.deep.equal(
    { 
      userID: 5, 
      date: '2019/06/15', 
      hoursSlept: 4.1, 
      sleepQuality: 3.6 
    }
  )
})

