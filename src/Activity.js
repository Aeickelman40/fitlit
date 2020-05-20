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
    if (date) {
      let userActivityInfo = this.getActivityDataById(userId);
      let userData = userRepo.getDataById(userId)
      let stride = userData.strideLength
      let dayInfo = userActivityInfo.find(activity => activity.date === date);
      let stepsToStrides = (dayInfo.numSteps / 2)
      let stridesToFeet = stepsToStrides * stride
      let feetToMiles = stridesToFeet / 5280
      return Math.round(feetToMiles * 10) / 10
    }
  }
  
  activityOnDay(userId, date, activityType) {
    if (date) {
      let userActivityData = this.getActivityDataById(userId)
      let dayActivity = userActivityData.find(userInfo => userInfo.date === date)
      return dayActivity[activityType]
    }
  }

  averageUserActivityForWeek(userId, date, activityType) {
    if (date) {
      let activityInfo = this.getActivityDataById(userId)
      let activityIndex;
      activityInfo.forEach((activity, i) => {
        if (activity.date === date) {
          activityIndex = i;
        }
      });
      let weekActivityData = activityInfo.splice((activityIndex - 6), activityIndex)
      let activityCount = weekActivityData.reduce((acc, activity) => {
        acc += activity[activityType];
        return acc
      }, 0)
      return Math.round(activityCount / 7)
    }
  }

  stepCountForWholeWeek(userId, date) {
    if (date) {
      let activityInfo = this.getActivityDataById(userId)
      let activityIndex;
      activityInfo.forEach((activity, i) => {
        if (activity.date === date) {
          activityIndex = i;
        }
      });
      let weekActivityData = activityInfo.splice((activityIndex - 6), activityIndex)
      let activityCount = weekActivityData.reduce((acc, activity) => {
        acc += activity.numSteps;
        return acc
      }, 0)
      return activityCount
    }
  }

  obtainedStepGoal(userId, date, userRepo) {
    if (date) {
      let activityInfo = this.getActivityDataById(userId);
      let dayData = activityInfo.find(activity => activity.date === date);
      let userData = userRepo.getDataById(userId);
      if (dayData.numSteps >= userData.dailyStepGoal) {
        return true;
      } else {
        return false
      }
    }
  }

  daysStepGoalWasExceeded(userId, userRepo) {
    let activityInfo = this.getActivityDataById(userId);
    let userData = userRepo.getDataById(userId);
    let daysExceededGoal = activityInfo.filter(activity => activity.numSteps > userData.dailyStepGoal)
    let datesExceeded = daysExceededGoal.map(activity => activity.date)
    return datesExceeded
  }

  allTimeStairClimbingRecord(userId) {
    let activityInfo = this.getActivityDataById(userId);
    let sortedInfo = activityInfo.sort((a, b) => b.flightsOfStairs - a.flightsOfStairs)
    return sortedInfo[0].flightsOfStairs
  }

  averageAllUserActivity(date, activityType) {
    if (date) {
      let dayActivity = this.activityData.filter(userInfo => userInfo.date === date);
      let allUserActivityCount = dayActivity.reduce((acc, activity) => {
        acc += activity[activityType]
        return acc
      }, 0)
      return Math.round(allUserActivityCount / dayActivity.length)
    }
  }

  topClimberOfTheDay(date, userRepo) {
    if (date) {
      let dayActivity = this.activityData.filter(userInfo => userInfo.date === date);
      let sortedInfo = dayActivity.sort((a, b) => b.flightsOfStairs - a.flightsOfStairs)
      let feetClimbed = sortedInfo[0].flightsOfStairs * 12
      let userData = userRepo.getDataById(sortedInfo[0].userID);
      let topClimber = [userData.name, feetClimbed]
      return topClimber;
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}