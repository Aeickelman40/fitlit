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
    let allTimeSleep = sleepInfo.reduce((acc, element) => {
      acc += element.hoursSlept;
      return acc
    }, 0);
    return Math.round((allTimeSleep / sleepInfo.length) * 10) / 10
  }

  avgSleepQualityAllTime(userId) {
    let sleepInfo = this.getSleepDataById(userId);
    let allTimeSleepQuality = sleepInfo.reduce((acc, element) => {
      acc += element.sleepQuality;
      return acc
    }, 0);
    return Math.round((allTimeSleepQuality / sleepInfo.length) * 10) / 10
  }

  hoursSleptOnDay(date, userId) {
  if (date) {
    let sleepInfo = this.getSleepDataById(userId);
    let daysSleep = sleepInfo.find(element => element.date === date)
    return daysSleep.hoursSlept
    }
  }

  sleepQualityOnDay(date, userId) {
    if (date) {
      let sleepInfo = this.getSleepDataById(userId);
      let daysSleep = sleepInfo.find(element => element.date === date);
      return daysSleep.sleepQuality
    }
  }

  hoursSleptEachDayInAWeek(date, userId) {
    if (date) {
      let sleepInfo = this.getSleepDataById(userId);
      let sleepIndex;
      sleepInfo.forEach((element, i) => {
        if (element.date === date) {
          sleepIndex = i;
       }
      })
      let weekData = sleepInfo.splice((sleepIndex - 6), sleepIndex)
      return weekData.map(element => element.hoursSlept)
    }
  } 

  sleepQualityEachDayForWeek(date, userId) {
    if (date) {
      let userSleepInfo = this.getSleepDataById(userId);
      let sleepIndex;
      userSleepInfo.forEach((element, i) => {
        if (element.date === date) {
          sleepIndex = i;
        }
      })
      let weekData = userSleepInfo.splice((sleepIndex - 6), sleepIndex)
      return weekData.map(element => element.sleepQuality)
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
      let data = this.sleepData.map(element => element)
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
      let topSleepers = sortedSleepers.filter(element => element.hoursSlept === bestSleeper.hoursSlept)
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