
class Activity {
  constructor(activityData) {
    if (activityData) {
      this.activityData = activityData
    }
  }
  getActivityDataById(userId) {
    return this.activityData.filter(activityInfo => activityInfo.userID === userId);
  }

  milesWalked(userId, date, userRepo) {
    let userActivityInfo = this.getActivityDataById(userId);
    let userData = userRepo.getDataById(userId)
    let stride = userData.strideLength
    let dayInfo = userActivityInfo.find(element => element.date === date);
    let stepsToStrides = (dayInfo.numSteps / 2)
    let stridesToFeet = stepsToStrides * stride
    let feetToMiles = stridesToFeet / 5280
    return Math.round(feetToMiles * 10) / 10
  }
  
  minutesActiveOnDay(userId, date) {
    let userActivityData = this.getActivityDataById(userId)
    if (date) {
      let dayActivity = userActivityData.find(userInfo => userInfo.date === date)
      return dayActivity.minutesActive
    }
  }

  minutesActiveWeeklyAverage(userId, date) {
    if (date) {
      let activityInfo = this.getActivityDataById(userId)
      let activityIndex;
      activityInfo.forEach((element, i) => {
        if (element.date === date) {
          activityIndex = i;
        }
      });
      let weekActivityData = activityInfo.splice((activityIndex - 6), activityIndex)
      let allTimeMinutesActive = weekActivityData.reduce((acc, element) => {
        acc += element.minutesActive;
        return acc
      }, 0)
      return Math.round(allTimeMinutesActive / 7)
    }
  }

  obtainedStepGoal(userId, date, userRepo) {
    let activityInfo = this.getActivityDataById(userId);
    let dayData = activityInfo.find(element => element.date === date);
    let userData = userRepo.getDataById(userId);
    if (dayData.numSteps >= userData.dailyStepGoal) {
      return true;
    } else {
      return false
    }
  }

  daysStepGoalWasExceeded(userId, userRepo) {
    let activityInfo = this.getActivityDataById(userId);
    let userData = userRepo.getDataById(userId);
    let daysExceededGoal = activityInfo.filter(element => element.numSteps > userData.dailyStepGoal)
    let datesExceeded = daysExceededGoal.map(element => element.date)
    return datesExceeded
  }

  allTimeStairClimbingRecord(userId) {
    let activityInfo = this.getActivityDataById(userId);
    let sortedInfo = activityInfo.sort((a, b) => b.flightsOfStairs - a.flightsOfStairs)
    return sortedInfo[0].flightsOfStairs
  }

  stairsClimbedOnADay(date) {
    if (date) {
      let dayActivity = this.activityData.filter(element => element.date === date);
      let allStairCount = dayActivity.reduce((acc, element) => {
        acc += element.flightsOfStairs
        return acc
      }, 0)
      // console.log(allStairCount / dayActivity.length)
      return Math.round((allStairCount / dayActivity.length) * 10) / 10;
    }
  }

  averageActivity() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}