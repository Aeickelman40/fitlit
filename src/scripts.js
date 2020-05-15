var infoCard = document.querySelector('.info-card');
var welcomeMessage = document.querySelector('.welcome-message');
var compareStepDisplay = document.querySelector('.compare-steps');
var friendsDisplay = document.querySelector('.friends');
var hydrationAverageDisplay = document.querySelector('.hydration-average');
var hydrationDailyDisplay = document.querySelector('.hydration-daily');
var hydrationWeeklyDisplay = document.querySelector('.hydration-weekly');

let user = new User()
let userRepo = new UserRepository(userData);
let hydration = new Hydration(hydrationData);
const date = "2019/09/22";

window.onload = displayData()

function displayData() {
  makeUser();
  displayUserInfo();
  welcomeMessageOnLoad();
  populateFriends();
  compareStepGoals();
  displayDailyHydration();
  displayWeeklyHydration();
}

function makeUser() {
  let randomUser = Math.floor(Math.random() * userData.length);
  user = new User(userData[randomUser])
}

function displayUserInfo() {
  infoCard.innerHTML = 
    `<p>${user.name}</p>
    <p>${user.address}</p>
    <p>${user.email}</p>
    <p>Your stride is: ${user.strideLength} feet.</p>
    <p>Your step goal for today is: ${user.dailyStepGoal}.</p>`
}

function welcomeMessageOnLoad() {
  welcomeMessage.innerText = `Welcome to Fitlit ${user.returnFirstName()}!`
}

function populateFriends() {
  let friendsObjects = []
  user.friends.forEach(friend => {
    friendsObjects.push(userRepo.getDataById(friend)); 
  })
  let friendsNames = friendsObjects.map(friend => {
    return friendsDisplay.innerHTML = `<p>${friend.name}</p>`
  })
  return friendsDisplay.insertAdjacentHTML('beforeend', 
    `${friendsNames.join('')}`)  
}

function compareStepGoals() {
  let averageStepGoal = userRepo.averageUserStepGoal();
  let stepDifference = averageStepGoal - user.dailyStepGoal;
  let positiveDifference = Math.abs(stepDifference);
  if (averageStepGoal > user.dailyStepGoal) {
    compareStepDisplay.innerHTML = `<p>Catch up, you are ${positiveDifference} steps behind everyone for your goal!</p>`
  } else {
    compareStepDisplay.innerHTML = `<p>Nice work, you are ${positiveDifference} steps ahead of the game!</p>`
  }
}

function displayAverageHydation() {

}

function displayDailyHydration() {
  let dailyHydration = hydration.fluidConsumedForDay(date, user.id);
  hydrationDailyDisplay.insertAdjacentHTML('beforeend', 
  `Today you have had ${dailyHydration} ounces of water!`);
}

function displayWeeklyHydration() {
  let weeklyHydration = hydration.fluidConsumedForAWeek(date, user.id) 
  hydrationWeeklyDisplay.insertAdjacentHTML('beforeend', 
    `Yesterday you had ${weeklyHydration[5]} ounces of water,
    2 days ago you had ${weeklyHydration[4]} ounces of water,
    3 days ago you had ${weeklyHydration[3]} ounces of water,
    4 days ago you had ${weeklyHydration[2]} ounces of water,
    5 days ago you had ${weeklyHydration[1]} ounces of water,
    6 days ago you had ${weeklyHydration[0]} ounces of water`) 
}