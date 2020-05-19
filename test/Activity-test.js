const chai = require('chai');
const expect = chai.expect;
const testActivityData = require('../data/activity-test-data.js')
const testUserData = require('../data/user-test-data.js')
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
    let activity = new Activity(testActivityData)
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('should be able to return activity data via the users ID', function() {
  
    let activity = new Activity(testActivityData)
    expect(activity).to.be.an.instanceof(Activity);
    expect(activity.getActivityDataById(11)).to.deep.equal([testActivityData[10]])
  });
  
  it('should be able to return minutes active on a given day', function () {

    let activity = new Activity(testActivityData)
    expect(activity).to.be.an.instanceof(Activity);
    expect(activity.activityOnDay(2, "2019/06/15", 'minutesActive')).to.deep.equal(138)
  });    

  it('should give a users minutesActive average for a week', function() {

    let activity = new Activity(testActivityData)
    expect(activity).to.be.an.instanceof(Activity);
    expect(activity.averageUserActivityForWeek(1, "2019/06/21", 'minutesActive')).to.deep.equal(152)
  }) 

  it('should return miles walked in a given day', function() {

    let userRepo = new UserRepository(testUserData)
    let activity = new Activity(testActivityData)
    expect(activity).to.be.an.instanceof(Activity);
    expect(activity.milesWalked(2, "2019/06/15", userRepo)).to.deep.equal(1.8)
  }); 

  it('should return if they obtained their step goal on a given day', function() {

    let userRepo = new UserRepository(testUserData)
    let activity = new Activity(testActivityData)
    expect(activity).to.be.an.instanceof(Activity);
    expect(activity.obtainedStepGoal(3, "2019/06/15", userRepo)).to.deep.equal(true)
    expect(activity.obtainedStepGoal(1, "2019/06/15", userRepo)).to.deep.equal(false)
  }); 
    
  it('should return if they obtained their step goal on a given day', function() {

    let userRepo = new UserRepository(testUserData)
    let activity = new Activity(testActivityData)
    expect(activity).to.be.an.instanceof(Activity);
    expect(activity.daysStepGoalWasExceeded(1, userRepo)).to.deep.equal(['2019/06/17', '2019/06/19'])
  });


  it('should return if they obtained their step goal on a given day', function() {
      
    let activity = new Activity(testActivityData)
    expect(activity).to.be.an.instanceof(Activity);
    expect(activity.allTimeStairClimbingRecord(1)).to.deep.equal(39)
  })

  it('should return the average stairs climbed on a given day for all users', function() {

    let activity = new Activity(testActivityData)
    expect(activity).to.be.an.instanceof(Activity);
    expect(activity.averageAllUserActivity("2019/06/15", 'flightsOfStairs')).to.deep.equal(23)
  })
  
  it('should return average of all users number of steps taken on a given day', function() {
    let activity = new Activity(testActivityData)
    expect(activity).to.be.an.instanceof(Activity);
    expect(activity.averageAllUserActivity("2019/06/15", 'numSteps')).to.deep.equal(7633)
  })

  it('should return average of all users minutes active on a given day', function() {
    let activity = new Activity(testActivityData)
    expect(activity).to.be.an.instanceof(Activity);
    expect(activity.averageAllUserActivity("2019/06/15", 'minutesActive')).to.deep.equal(127)
  })

  it('should return the top climber on a given day, with how many vertical feet they climbed', function() {
    let userRepo = new UserRepository(testUserData)
    let activity = new Activity(testActivityData)
    expect(activity).to.be.an.instanceof(Activity);
    expect(activity.topClimberOfTheDay("2019/06/18", userRepo)).to.deep.equal(["Laney Abshire", 468])
  })

});