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
    let sleepInfo = this.getSleepDataById(userId);
    if(date) {
      let daysSleep = sleepInfo.find(element => element.date === date);
      return daysSleep.hoursSlept
    } 
  }

  sleepQualityOnDay(date, userId) {
    let sleepInfo = this.getSleepDataById(userId);
    if(date) {
      let daysSleep = sleepInfo.find(element => element.date === date);
      return daysSleep.sleepQuality
    } 
  }

  hoursSleptEachDayInAWeek(date, userId) {
    let sleepInfo= this.getSleepDataById(userId);
    let sleepIndex;
    sleepInfo.forEach((element, i) => {
      if(element.date === date) {
        sleepIndex = i;
      }
    })
    let weekData = sleepInfo.splice((sleepIndex - 6), sleepIndex)
    return weekData.map(element => element.hoursSlept)
    }
  

  sleepQualityEachDayForWeek() {

  }

  avgSleepQualityForAllUsers() {

  }

  sleepQualityForUsersAbove3() {

  }

  usersWhoSleptMostOnGivenDay() {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}