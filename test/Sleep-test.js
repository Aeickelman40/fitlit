const chai = require('chai');
const expect = chai.expect;

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
    let sleepData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "hoursSlept": 10.8,
        "sleepQuality": 4.7
      }]

    let sleep = new Sleep(sleepData)
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should be able to return sleep data via the users ID', function() {
    let sleepData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "hoursSlept": 10.8,
        "sleepQuality": 4.7
      }]

    let sleep = new Sleep(sleepData)
    expect(sleep).to.be.an.instanceof(Sleep);
    expect(sleep.getSleepDataById(3)).to.deep.equal([sleepData[2]])
  }); 

  it('should be able to return sleep data via the users ID', function() {
    let sleepData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "hoursSlept": 10.8,
        "sleepQuality": 4.7
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "hoursSlept": 4.1,
        "sleepQuality": 3.8
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "hoursSlept": 7.5,
        "sleepQuality": 3.8
      },
      {
        "userID": 3,
        "date": "2019/06/16",
        "hoursSlept": 10.7,
        "sleepQuality": 3.4
      },
    ]

    let sleep = new Sleep(sleepData)
    expect(sleep).to.be.an.instanceof(Sleep);
    expect(sleep.getSleepDataById(3)).to.deep.equal([sleepData[2], sleepData[5]])
  }); 

  it('should be able to return all time average hours slept a day', function() {
    let sleepData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "hoursSlept": 10.8,
        "sleepQuality": 4.7
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "hoursSlept": 4.1,
        "sleepQuality": 3.8
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "hoursSlept": 7.5,
        "sleepQuality": 3.8
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "hoursSlept": 10.7,
        "sleepQuality": 3.4
      },
    ]

    let sleep = new Sleep(sleepData)
    expect(sleep).to.be.an.instanceof(Sleep);
    expect(sleep.avgSleptPerDay(1)).to.deep.equal(7.7)
  }); 

  it('should be able to return all time average hours slept a day', function() {
    let sleepData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "hoursSlept": 10.8,
        "sleepQuality": 4.7
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "hoursSlept": 4.1,
        "sleepQuality": 3.8
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "hoursSlept": 7.5,
        "sleepQuality": 3.8
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "hoursSlept": 10.7,
        "sleepQuality": 3.4
      },
    ]

    let sleep = new Sleep(sleepData)
    expect(sleep).to.be.an.instanceof(Sleep);
    expect(sleep.avgSleepQualityAllTime(1)).to.deep.equal(3.8)
  });

  it('should be able to return sleep data via the users ID', function() {
    let sleepData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "hoursSlept": 10.8,
        "sleepQuality": 4.7
      }]

    let sleep = new Sleep(sleepData)
    expect(sleep).to.be.an.instanceof(Sleep);
    expect(sleep.hoursSleptOnDay("2019/06/15", 3)).to.deep.equal(10.8)
  }); 


  it('should be able to return sleep data via the users ID', function() {
    let sleepData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "hoursSlept": 10.8,
        "sleepQuality": 4.7
      }]

    let sleep = new Sleep(sleepData)
    expect(sleep).to.be.an.instanceof(Sleep);
    expect(sleep.sleepQualityOnDay("2019/06/15", 3)).to.deep.equal(4.7)
  }); 
});