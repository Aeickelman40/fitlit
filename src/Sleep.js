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

  hoursSleptEachDayInAWeek() {

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