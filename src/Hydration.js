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
    console.log(allTimeHydration)
   return allTimeHydration
  }

  fluidConsumedForDay(date) {
    if(date) {
      let dayHydration = this.hydrationData.find(element => element.date === date);
      return dayHydration.numOunces
    } 
  } 

  fluidConsumedForAWeek() {
    
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}