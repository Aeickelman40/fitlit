const chai = require('chai');
const expect = chai.expect;
const testActivityData = require('../data/test-data.js')

const UserRepository = require('../src/UserRepository')
const Activity = require('../src/Activity');

describe('Activity', function() {
  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', function () {
    let activity = new Activity();
    expect(activity).to.be.an.instanceof(Activity);
  })

  it('should not need an argument', () => {
    expect(() => {
      new Activity() 
    }).to.not.throw(Error);
  });

  it('should be able to hold on to activity data', function() {
    const activityData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numSteps": 4294,
        "minutesActive": 138,
        "flightsOfStairs": 10
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "numSteps": 7402,
        "minutesActive": 116,
        "flightsOfStairs": 33
      }]
    let activity = new Activity(activityData)
    expect(activity).to.be.an.instanceof(Activity);
  });

 it('should be able to return activity data via the users ID', function() {
  const activityData = [
    {
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "numSteps": 4294,
      "minutesActive": 138,
      "flightsOfStairs": 10
    },
    {
      "userID": 3,
      "date": "2019/06/15",
      "numSteps": 7402,
      "minutesActive": 116,
      "flightsOfStairs": 33
    }]
  
    let activity = new Activity(activityData)
    expect(activity).to.be.an.instanceof(Activity);
    expect(activity.getActivityDataById(3)).to.deep.equal([activityData[2]])
    });
  
  it('should be able to return minutes active on a given day', function () {
    let activityData =   [{
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "numSteps": 4294,
      "minutesActive": 138,
      "flightsOfStairs": 10
    },
    {
      "userID": 3,
      "date": "2019/06/15",
      "numSteps": 7402,
      "minutesActive": 116,
      "flightsOfStairs": 33
    }];

    let activity = new Activity(activityData)
    expect(activity).to.be.an.instanceof(Activity);
    expect(activity.minutesActiveOnDay(2, "2019/06/15")).to.deep.equal(138)
    });    

    it('should give a users minutesActive average for a week', function() {
      let activityData = [
        {
          "userID": 1,
          "date": "2019/06/15",
          "numSteps": 4294,
          "minutesActive": 138,
          "flightsOfStairs": 10
        },
        {
          "userID": 1,
          "date": "2019/06/15",
          "numSteps": 7402,
          "minutesActive": 116,
          "flightsOfStairs": 33
        },
        {
          "userID": 1,
          "date": "2019/06/16",
          "numSteps": 3486,
          "minutesActive": 114,
          "flightsOfStairs": 32
        },
        {
          "userID": 1,
          "date": "2019/06/17",
          "numSteps": 11374,
          "minutesActive": 213,
          "flightsOfStairs": 13
        },
        {
          "userID": 1,
          "date": "2019/06/18",
          "numSteps": 14810,
          "minutesActive": 287,
          "flightsOfStairs": 18
        },
        {
          "userID": 1,
          "date": "2019/06/19",
          "numSteps": 2634,
          "minutesActive": 107,
          "flightsOfStairs": 5
        },
        {
          "userID": 1,
          "date": "2019/06/20",
          "numSteps": 10333,
          "minutesActive": 114,
          "flightsOfStairs": 31
        },
        {
          "userID": 1,
          "date": "2019/06/21",
          "numSteps": 6389,
          "minutesActive": 41,
          "flightsOfStairs": 33
        },
        {
          "userID": 1,
          "date": "2019/06/22",
          "numSteps": 8015,
          "minutesActive": 106,
          "flightsOfStairs": 37
        }
      ];

    let activity = new Activity(activityData)
    expect(activity).to.be.an.instanceof(Activity);
    expect(activity.minutesActiveWeeklyAverage(1, "2019/06/21")).to.deep.equal(142)
    })

    it('should return stairs climbed on a given day', function() {
      let activityData =   [{
        "userID": 1,
        "date": "2019/06/15",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numSteps": 4294,
        "minutesActive": 138,
        "flightsOfStairs": 10
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "numSteps": 7402,
        "minutesActive": 116,
        "flightsOfStairs": 33
      }];
  
      let activity = new Activity(activityData)
      expect(activity).to.be.an.instanceof(Activity);
      expect(activity.stairsClimbedOnADay(2, "2019/06/15")).to.deep.equal(10)
    }); 

    it('should return miles walked in a given day', function() {
      let activityData =   [{
        "userID": 1,
        "date": "2019/06/15",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numSteps": 4294,
        "minutesActive": 138,
        "flightsOfStairs": 10
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "numSteps": 7402,
        "minutesActive": 116,
        "flightsOfStairs": 33
      }];

      let data =  [{
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [
          16,
          4,
          8
        ]
      },
      {
        "id": 2,
        "name": "Jarvis Considine",
        "address": "30086 Kathryn Port, Ciceroland NE 07273",
        "email": "Dimitri.Bechtelar11@gmail.com",
        "strideLength": 4.5,
        "dailyStepGoal": 5000,
        "friends": [
          9,
          18,
          24,
          19
        ]
      },
      {
        "id": 3,
        "name": "Herminia Witting",
        "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
        "email": "Elwin.Tromp@yahoo.com",
        "strideLength": 4.4,
        "dailyStepGoal": 5000,
        "friends": [
          19,
          11,
          42,
          33
        ]
      }];

      let userRepo = new UserRepository(data)
      let activity = new Activity(activityData)
      expect(activity).to.be.an.instanceof(Activity);
      expect(activity.milesWalked(2, "2019/06/15", userRepo)).to.deep.equal(1.8)
    }); 

    it('should return if they obtained their step goal on a given day', function() {
      let activityData =   [{
        "userID": 1,
        "date": "2019/06/15",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numSteps": 4294,
        "minutesActive": 138,
        "flightsOfStairs": 10
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "numSteps": 7402,
        "minutesActive": 116,
        "flightsOfStairs": 33
      }];

      let data =  [{
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [
          16,
          4,
          8
        ]
      },
      {
        "id": 2,
        "name": "Jarvis Considine",
        "address": "30086 Kathryn Port, Ciceroland NE 07273",
        "email": "Dimitri.Bechtelar11@gmail.com",
        "strideLength": 4.5,
        "dailyStepGoal": 5000,
        "friends": [
          9,
          18,
          24,
          19
        ]
      },
      {
        "id": 3,
        "name": "Herminia Witting",
        "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
        "email": "Elwin.Tromp@yahoo.com",
        "strideLength": 4.4,
        "dailyStepGoal": 5000,
        "friends": [
          19,
          11,
          42,
          33
        ]
      }];

      let userRepo = new UserRepository(data)
      let activity = new Activity(activityData)
      expect(activity).to.be.an.instanceof(Activity);
      expect(activity.obtainedStepGoal(3, "2019/06/15", userRepo)).to.deep.equal(true)
      expect(activity.obtainedStepGoal(1, "2019/06/15", userRepo)).to.deep.equal(false)
    }); 
    
    it('should return if they obtained their step goal on a given day', function() {
      let activityData =   [{
        "userID": 1,
        "date": "2019/06/15",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numSteps": 4294,
        "minutesActive": 138,
        "flightsOfStairs": 10
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "numSteps": 7402,
        "minutesActive": 116,
        "flightsOfStairs": 33
      }];


      let data =  [{
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [
          16,
          4,
          8
        ]
      }]

      
});