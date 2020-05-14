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

  fluidConsumedForDay(date) {
    if(date) {
      let dayHydration = this.hydrationData.find(element => element.date === date);
      return dayHydration.numOunces
    } 
  } 

  fluidConsumedForAWeek(date, userId) {
    let userHydrationData = this.getHydrationDataById(userId);
    let hydrationIndex = userHydrationData.map(element => {
      return element.date
    }).indexOf(date)
    console.log(hydrationIndex)
    let weeksDailyOunces = [];
    for (var i = hydrationIndex; i < (hydrationIndex - 6); i--) {
      // console.log(weeksDailyOunces)
      console.log(userHydrationData[i].numOunces)
      weeksDailyOunces.push(userHydrationData[i].numOunces)
      // console.log(userHydrationData[i].numOunces)
    }
    return weeksDailyOunces
    // console.log(weeksDailyOunces)
      // return weeksDailyOunces
  //  let weekHydration = userHydrationData.reduce((acc, element, i, arr) => {
  //    if(i === 6) arr.splice(0)
  //     acc.unshift(element.numOunces)
  //     console.log(acc)
  //     return acc
  //   }, [])
  //   return weekHydration
  }
    
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}