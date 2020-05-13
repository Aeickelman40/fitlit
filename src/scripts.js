var infoCard = document.querySelector('.info-card');
var welcomeMessage = document.querySelector('.welcome-message');
var compareStepDisplay = document.querySelector('.compare-steps')
var friendsDisplay = document.querySelector('.friends')

let user = new User()
let userRepo = new UserRepository(userData);

window.onload = displayData()

function displayData() {
  makeUser();
  displayUserInfo();
  welcomeMessageOnLoad();
  populateFriends();
  compareStepGoals();
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