class Sleep {
  constructor(sleepData) {
    if (sleepData) {
      this.sleepData = sleepData;
    }      
  }

  getSleepDataById(userId) {
    return this.sleepData.filter(sleepInfo => sleepInfo.userID === userId);
  }

  avgSleptPerDay(userId) {
    let sleepInfo = this.getSleepDataById(userId);
    let allTimeSleep = sleepInfo.reduce((acc, sleeper) => {
      acc += sleeper.hoursSlept;
      return acc
    }, 0);
    return Math.round((allTimeSleep / sleepInfo.length) * 10) / 10
  }

  avgSleepQualityAllTime(userId) {
    let sleepInfo = this.getSleepDataById(userId);
    let allTimeSleepQuality = sleepInfo.reduce((acc, sleeper) => {
      acc += sleeper.sleepQuality;
      return acc
    }, 0);
    return Math.round((allTimeSleepQuality / sleepInfo.length) * 10) / 10
  }

  hoursSleptOnDay(date, userId) {
    if (date) {
      let sleepInfo = this.getSleepDataById(userId);
      let daysSleep = sleepInfo.find(sleeper => sleeper.date === date)
      return daysSleep.hoursSlept
    }
  }

  sleepQualityOnDay(date, userId) {
    if (date) {
      let sleepInfo = this.getSleepDataById(userId);
      let daysSleep = sleepInfo.find(sleeper => sleeper.date === date);
      return daysSleep.sleepQuality
    }
  }

  hoursSleptEachDayInAWeek(date, userId) {
    if (date) {
      let sleepInfo = this.getSleepDataById(userId);
      let sleepIndex;
      sleepInfo.forEach((sleeper, i) => {
        if (sleeper.date === date) {
          sleepIndex = i;
        }
      })
      let weekData = sleepInfo.splice((sleepIndex - 6), sleepIndex)
      return weekData.map(sleeper => sleeper.hoursSlept)
    }
  } 

  sleepQualityEachDayForWeek(date, userId) {
    if (date) {
      let userSleepInfo = this.getSleepDataById(userId);
      let sleepIndex;
      userSleepInfo.forEach((sleeper, i) => {
        if (sleeper.date === date) {
          sleepIndex = i;
        }
      })
      let weekData = userSleepInfo.splice((sleepIndex - 6), sleepIndex)
      return weekData.map(sleeper => sleeper.sleepQuality)
    }
  }

  avgSleepQualityForAllUsers() {
    let allTimeSleepQuality = this.sleepData.reduce((acc, sleepData) => {
      acc += sleepData.sleepQuality
      return acc
    }, 0);
    return Math.round((allTimeSleepQuality / this.sleepData.length) * 10) / 10
  }

  sleepQualityForUsersAbove3(date) {
    if (date) {
      let data = this.sleepData.map(sleeper => sleeper)
      let sleepIndex;
      data.forEach((sleepInfo, i) => {
        if (sleepInfo.date === date) {
          sleepIndex = i
        }
      })
      let weekData = data.splice((sleepIndex - 6), sleepIndex)
      let goodSleepers = weekData.filter(sleepInfo => sleepInfo.sleepQuality >= 3)
      let duplicateIDs = goodSleepers.map(sleepInfo => sleepInfo.userID)
      let bestSleepersIDs = duplicateIDs.filter((ids, i) => duplicateIDs.indexOf(ids) === i)
      return bestSleepersIDs
    }
  }

  usersWhoSleptMostOnGivenDay(date) {
    if (date) {
      let daysSleep = this.sleepData.filter(sleepInfo => sleepInfo.date === date)
      let sortedSleepers = daysSleep.sort((a, b) => b.hoursSlept - a.hoursSlept)
      let bestSleeper = sortedSleepers[0]
      let topSleepers = sortedSleepers.filter(sleeper => sleeper.hoursSlept === bestSleeper.hoursSlept)
      return topSleepers
    }
  }

  findUsersWhoNeedNap(date) {
    if (date) {
      let daysSleep = this.sleepData.filter(sleepInfo => sleepInfo.date === date)
      let sortedSleepers = daysSleep.sort((a, b) => a.hoursSlept - b.hoursSlept)
      let worstSleeper = sortedSleepers[0]
      return worstSleeper;
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}