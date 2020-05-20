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
    if (date) {
      let userHydrationData = this.getHydrationDataById(userId);
      let dayHydration = userHydrationData.find(hydrate => hydrate.date === date);
      return dayHydration.numOunces
    }
  } 

  fluidConsumedForAWeek(date, userId) {
    if (date) {
      let userHydrationData = this.getHydrationDataById(userId);
      let hydrationIndex;
      userHydrationData.forEach((hydrate, i) => {
        if (hydrate.date === date) {
          hydrationIndex = i;
        }
      })
      let weekData = userHydrationData.splice((hydrationIndex - 6), hydrationIndex)
      return weekData.map(hydrate => hydrate.numOunces)
    }
  }
}
if (typeof module !== 'undefined') {
  module.exports = Hydration;
}