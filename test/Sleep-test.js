const chai = require('chai');
const expect = chai.expect;

const testSleepData = require('../data/sleep-test-data.js')
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
    expect(sleep.getSleepDataById(11)).to.deep.equal([testSleepData[10]]);
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

  it('should be able to return the hours of sleep on a given day', function() {
    let sleep = new Sleep(testSleepData)
    expect(sleep).to.be.an.instanceof(Sleep);
    expect(sleep.hoursSleptOnDay("2019/06/15", 3)).to.deep.equal(10.8)
  }); 

  it('should be able to return the quality of sleep on a given day', function() {
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
    expect(sleep.avgSleepQualityForAllUsers()).to.deep.equal(3)
  }); 

  it('should do return the top sleepers', function() {
    let sleep = new Sleep(testSleepData)
    expect(sleep).to.be.an.instanceof(Sleep);
    expect(sleep.usersWhoSleptMostOnGivenDay("2019/06/27")).to.deep.equal([
      {
        "userID": 8,
        "date": '2019/06/27',
        "hoursSlept": 10.3,
        "sleepQuality": 4.6
      }
    ])
  })

  it('should return the top sleepers of the week', function() {
    let sleep = new Sleep(testSleepData)
    expect(sleep).to.be.an.instanceof(Sleep);
    expect(sleep.sleepQualityForUsersAbove3("2019/06/24")).to.deep.equal([
      4, 8, 10, 1,  3,  5,  6, 2, 9
    ])
  })
});

it('should return the top sleepers, one or more', function() {
  let sleep = new Sleep(testSleepData)
  expect(sleep).to.be.an.instanceof(Sleep);
  expect(sleep.usersWhoSleptMostOnGivenDay("2019/06/29")).to.deep.equal([
    {
      userID: 8,
      date: '2019/06/29',
      hoursSlept: 9.7,
      sleepQuality: 3.6
    },
    {
      userID: 9,
      date: '2019/06/29',
      hoursSlept: 9.7,
      sleepQuality: 3.5
    }
  ])
})

it('should return the user with the least amount of sleep hours (needs nap)', function() {
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

