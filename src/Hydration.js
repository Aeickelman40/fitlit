class Hydration {
  constructor(data) {
    if (data) {
    this.hydrationData = data
    }
  }

  getHydrationDataById(userId) {
    return this.hydrationData.filter(hydrationInfo => hydrationInfo.userID === userId);
  }
  
  allTimeHydration(userId) {
    let userHydrationData = this.getHydrationDataById(userId);
    let allTimeHydration = userHydrationData.reduce((acc, hydrationInfo) => {
      acc += hydrationInfo.numOunces
      return acc
    }, 0);
   return allTimeHydration
  }

  fluidConsumedForDay(date, userId) {
    let userHydrationData = this.getHydrationDataById(userId);
    if(date) {
      let dayHydration = userHydrationData.find(element => element.date === date)
      return dayHydration.numOunces
    } 
  } 

  fluidConsumedForAWeek(date, userId) {
    let userHydrationData = this.getHydrationDataById(userId);
    let hydrationIndex;
    userHydrationData.forEach((element, i) => {
      if(element.date === date) {
        hydrationIndex = i;
      }
    })
    let weekData = userHydrationData.splice((hydrationIndex - 6), hydrationIndex)
    return weekData.map(element => element.numOunces)
    }
  }

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}